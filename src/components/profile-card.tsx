"use client"

import React, { useEffect, useRef, useCallback, useMemo } from "react"
import "./profile-card.css"

const DEFAULT_INNER_GRADIENT = "linear-gradient(160deg, rgba(99,102,241,0.18) 0%, rgba(55,48,163,0.10) 40%, rgba(6,5,22,0) 100%)"

const ANIM = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_MS: 180,
}

const clamp   = (v: number, min = 0, max = 100) => Math.min(Math.max(v, min), max)
const round   = (v: number, p = 3) => parseFloat(v.toFixed(p))
const adjust  = (v: number, fMin: number, fMax: number, tMin: number, tMax: number) =>
  round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin))

interface ProfileCardProps {
  avatarUrl?: string
  miniAvatarUrl?: string
  iconUrl?: string
  grainUrl?: string
  innerGradient?: string
  behindGlowEnabled?: boolean
  behindGlowColor?: string
  behindGlowSize?: string
  className?: string
  enableTilt?: boolean
  name?: string
  title?: string
  handle?: string
  status?: string
  contactText?: string
  showUserInfo?: boolean
  onContactClick?: () => void
}

function ProfileCardComponent({
  avatarUrl,
  miniAvatarUrl,
  iconUrl,
  grainUrl,
  innerGradient,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = "",
  enableTilt = true,
  name = "Rivky Riyantoro",
  title = "QA Engineer · Frontend Dev · UI/UX Designer",
  handle = "rivkyriyantoro",
  status = "Open to Opportunities ✨",
  contactText = "Get in Touch",
  showUserInfo = true,
  onContactClick,
}: ProfileCardProps) {
  const wrapRef  = useRef<HTMLDivElement>(null)
  const shellRef = useRef<HTMLDivElement>(null)
  const enterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const leaveRafRef   = useRef<number | null>(null)

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null

    let rafId: number | null = null
    let running = false
    let lastTs = 0
    let currentX = 0, currentY = 0, targetX = 0, targetY = 0
    const DEFAULT_TAU = 0.14, INITIAL_TAU = 0.6
    let initialUntil = 0

    const setVarsFromXY = (x: number, y: number) => {
      const shell = shellRef.current
      const wrap  = wrapRef.current
      if (!shell || !wrap) return
      const w = shell.clientWidth || 1
      const h = shell.clientHeight || 1
      const px = clamp((100 / w) * x)
      const py = clamp((100 / h) * y)
      const cx = px - 50, cy = py - 50
      const props: Record<string, string> = {
        "--pointer-x":           `${px}%`,
        "--pointer-y":           `${py}%`,
        "--background-x":        `${adjust(px, 0, 100, 35, 65)}%`,
        "--background-y":        `${adjust(py, 0, 100, 35, 65)}%`,
        "--pointer-from-center": `${clamp(Math.hypot(py - 50, px - 50) / 50, 0, 1)}`,
        "--pointer-from-top":    `${py / 100}`,
        "--pointer-from-left":   `${px / 100}`,
        "--rotate-x":            `${round(-(cx / 5))}deg`,
        "--rotate-y":            `${round(cy / 4)}deg`,
      }
      for (const [k, v] of Object.entries(props)) wrap.style.setProperty(k, v)
    }

    const step = (ts: number) => {
      if (!running) return
      if (lastTs === 0) lastTs = ts
      const dt = (ts - lastTs) / 1000
      lastTs = ts
      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU
      const k = 1 - Math.exp(-dt / tau)
      currentX += (targetX - currentX) * k
      currentY += (targetY - currentY) * k
      setVarsFromXY(currentX, currentY)
      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05
      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step)
      } else {
        running = false; lastTs = 0
        if (rafId) { cancelAnimationFrame(rafId); rafId = null }
      }
    }

    const start = () => {
      if (running) return
      running = true; lastTs = 0
      rafId = requestAnimationFrame(step)
    }

    return {
      setImmediate(x: number, y: number) { currentX = x; currentY = y; setVarsFromXY(x, y) },
      setTarget(x: number, y: number) { targetX = x; targetY = y; start() },
      toCenter() {
        const shell = shellRef.current
        if (!shell) return
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2)
      },
      beginInitial(ms: number) { initialUntil = performance.now() + ms; start() },
      getCurrent() { return { x: currentX, y: currentY, tx: targetX, ty: targetY } },
      cancel() { if (rafId) cancelAnimationFrame(rafId); rafId = null; running = false; lastTs = 0 },
    }
  }, [enableTilt])

  const getOffsets = (e: PointerEvent, el: HTMLElement) => {
    const r = el.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }

  const handlePointerMove = useCallback((e: PointerEvent) => {
    const shell = shellRef.current
    if (!shell || !tiltEngine) return
    const { x, y } = getOffsets(e, shell)
    tiltEngine.setTarget(x, y)
  }, [tiltEngine])

  const handlePointerEnter = useCallback((e: PointerEvent) => {
    const shell = shellRef.current
    if (!shell || !tiltEngine) return
    shell.classList.add("active", "entering")
    if (enterTimerRef.current) clearTimeout(enterTimerRef.current)
    enterTimerRef.current = setTimeout(() => shell.classList.remove("entering"), ANIM.ENTER_MS)
    const { x, y } = getOffsets(e, shell)
    tiltEngine.setTarget(x, y)
  }, [tiltEngine])

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current
    if (!shell || !tiltEngine) return
    tiltEngine.toCenter()
    const check = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent()
      if (Math.hypot(tx - x, ty - y) < 0.6) { shell.classList.remove("active"); leaveRafRef.current = null }
      else leaveRafRef.current = requestAnimationFrame(check)
    }
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current)
    leaveRafRef.current = requestAnimationFrame(check)
  }, [tiltEngine])

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return
    const shell = shellRef.current
    if (!shell) return

    shell.addEventListener("pointerenter", handlePointerEnter as EventListener)
    shell.addEventListener("pointermove",  handlePointerMove as EventListener)
    shell.addEventListener("pointerleave", handlePointerLeave as EventListener)

    const w = shell.clientWidth || 0
    tiltEngine.setImmediate(w - ANIM.INITIAL_X_OFFSET, ANIM.INITIAL_Y_OFFSET)
    tiltEngine.toCenter()
    tiltEngine.beginInitial(ANIM.INITIAL_DURATION)

    return () => {
      shell.removeEventListener("pointerenter", handlePointerEnter as EventListener)
      shell.removeEventListener("pointermove",  handlePointerMove as EventListener)
      shell.removeEventListener("pointerleave", handlePointerLeave as EventListener)
      if (enterTimerRef.current) clearTimeout(enterTimerRef.current)
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current)
      tiltEngine.cancel()
      shell.classList.remove("entering")
    }
  }, [enableTilt, tiltEngine, handlePointerMove, handlePointerEnter, handlePointerLeave])

  const cardStyle = useMemo(() => ({
    "--icon":              iconUrl  ? `url(${iconUrl})`  : "none",
    "--grain":             grainUrl ? `url(${grainUrl})` : "none",
    "--inner-gradient":    innerGradient ?? DEFAULT_INNER_GRADIENT,
    "--behind-glow-color": behindGlowColor ?? "rgba(99, 102, 241, 0.7)",
    "--behind-glow-size":  behindGlowSize  ?? "55%",
  } as React.CSSProperties), [iconUrl, grainUrl, innerGradient, behindGlowColor, behindGlowSize])

  return (
    <div ref={wrapRef} className={`pc-card-wrapper ${className}`.trim()} style={cardStyle}>
      {behindGlowEnabled && <div className="pc-behind" />}
      <div ref={shellRef} className="pc-card-shell">
        <section className="pc-card">
          <div className="pc-inside">
            <div className="pc-shine" />
            <div className="pc-glare" />

            {/* Avatar */}
            <div className="pc-content pc-avatar-content">
              {avatarUrl && (
                <img
                  className="avatar"
                  src={avatarUrl}
                  alt={`${name} avatar`}
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
                />
              )}

              {/* No-avatar center section */}
              {!avatarUrl && (
                <div className="pc-no-avatar-body">
                  <div className="pc-monogram">RR</div>
                  <div className="pc-role-chips">
                    <div className="pc-chip">QA Engineer</div>
                    <div className="pc-chip">Frontend Dev</div>
                    <div className="pc-chip">UI/UX Designer</div>
                  </div>
                </div>
              )}

              {/* Bottom user info bar */}
              {showUserInfo && (
                <div className="pc-user-info">
                  <div className="pc-user-details">
                    <div className="pc-mini-avatar">
                      <img
                        src={miniAvatarUrl || avatarUrl || ""}
                        alt={`${name} mini`}
                        loading="lazy"
                        onError={(e) => { (e.target as HTMLImageElement).style.opacity = "0.4" }}
                      />
                    </div>
                    <div className="pc-user-text">
                      <div className="pc-handle">@{handle}</div>
                      <div className="pc-status">{status}</div>
                    </div>
                  </div>
                  <button
                    className="pc-contact-btn"
                    onClick={onContactClick}
                    style={{ pointerEvents: "auto" }}
                    type="button"
                  >
                    {contactText}
                  </button>
                </div>
              )}
            </div>

            {/* Name + title overlay */}
            <div className="pc-content">
              <div className="pc-details">
                <h3>{name}</h3>
                <p>{title}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export const ProfileCard = React.memo(ProfileCardComponent)
