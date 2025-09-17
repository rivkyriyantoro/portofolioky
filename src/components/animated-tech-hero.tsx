"use client"

import React, { useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker,
  FaMobile,
  FaPalette,
  FaBug,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from "react-icons/fa"
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiGraphql,
  SiKubernetes,
  SiAmazon
} from "react-icons/si"

const roles = [
  { text: "Full Stack Developer", icon: FaReact, color: "from-blue-500 to-cyan-500" },
  { text: "Quality Assurance", icon: FaBug, color: "from-red-500 to-pink-500" },
  { text: "UI/UX Designer", icon: FaPalette, color: "from-purple-500 to-violet-500" },
  { text: "Frontend Developer", icon: FaMobile, color: "from-green-500 to-emerald-500" }
]

const techIcons = [
  { Icon: FaReact, name: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { Icon: FaPython, name: "Python", color: "#3776AB" },
  { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Icon: FaDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
  { Icon: SiGraphql, name: "GraphQL", color: "#E10098" },
  { Icon: SiAmazon, name: "AWS", color: "#FF9900" }
]

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
  { icon: FaEnvelope, href: "mailto:your.email@example.com", label: "Email" }
]

export function AnimatedTechHero() {
  const [currentRole, setCurrentRole] = useState(0)
  const { scrollY } = useScroll()
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const contentY = useTransform(scrollY, [0, 500], [0, -50])
  const iconsY = useTransform(scrollY, [0, 500], [0, -100])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  }

  const floatingIconVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-black dark:to-gray-900">
      {/* Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </motion.div>

      {/* Floating Tech Icons */}
      <motion.div style={{ y: iconsY }} className="absolute inset-0 -z-5">
        {techIcons.map((tech, index) => {
          const IconComponent = tech.Icon;
          return (
            <motion.div
              key={tech.name}
              variants={floatingIconVariants}
              animate="animate"
              className="absolute opacity-20 dark:opacity-30"
              style={{
                left: `${10 + (index * 7) % 80}%`,
                top: `${15 + (index * 11) % 70}%`,
                animationDelay: `${index * 0.5}s`
              }}
            >
              <IconComponent 
                className="w-8 h-8 lg:w-12 lg:h-12" 
                style={{ color: tech.color }}
              />
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div 
        style={{ y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container max-w-6xl mx-auto px-4 text-center z-10"
      >
        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Profile Image/Icon */}
          <motion.div 
            className="relative mx-auto w-32 h-32 lg:w-40 lg:h-40"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-5/6 h-5/6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent`}
                  >
                    {React.createElement(roles[currentRole].icon, { className: "w-12 h-12 lg:w-16 lg:h-16" })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div 
            variants={itemVariants}
            className="h-16 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentRole}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" as const }}
                className={`text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r ${roles[currentRole].color} bg-clip-text text-transparent`}
              >
                {roles[currentRole].text}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            I&apos;m a passionate developer with expertise in modern web technologies. 
            I love building scalable applications and turning ideas into reality through 
            clean, efficient code and intuitive design.
          </motion.p>

          {/* Social Media Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 pt-8"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  )
}