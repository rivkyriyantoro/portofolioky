"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { User, Code, Briefcase, FolderOpen, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial scroll position
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { href: "#about", label: "About", icon: User },
    { href: "#technologies", label: "Technologies", icon: Code },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: FolderOpen },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  return (
    <>
      {/* Top Brand Bar */}
      {/* <div className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
              Portfolio
            </Link>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Sticky Navigation Menu with Dark Mode Toggle in Middle */}
      <div 
        className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[9999] transition-all duration-500 ease-out ${
          isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        <div className="bg-transparent backdrop-blur-md border border-white/20 dark:border-gray-700/30 rounded-full shadow-lg p-3">
          <div className="flex items-center gap-4">
            {/* Navigation Menu Icons */}
            <div className="flex items-center gap-3">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 dark:hover:bg-gray-800/20 transition-all duration-300"
                    title={item.label}
                  >
                    <IconComponent className="w-4 h-4 text-gray-700 dark:text-gray-300 transition-all duration-300 group-hover:text-blue-500 group-hover:scale-125" />
                    <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 dark:bg-white/90 text-white dark:text-black px-3 py-1.5 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-10 shadow-lg">
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
            
            {/* Separator */}
            <div className="w-px h-6 bg-gray-400/30 dark:bg-gray-500/40"></div>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={toggleMenu}></div>
          <div className="fixed top-16 left-0 right-0 bg-background border-b shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-muted block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}