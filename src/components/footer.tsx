"use client"

import React from "react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/yourusername", label: "GitHub" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:your.email@example.com", label: "Email" },
  ]

  // const quickLinks = [
  //   { label: "About", href: "#about" },
  //   { label: "Technologies", href: "#technologies" },
  //   { label: "Experience", href: "#experience" },
  //   { label: "Projects", href: "#projects" },
  // ]

  return (
    <footer id="contact" className="bg-muted/50 border-t">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        {/* Connect With Me Section - Centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-12"
        >
          <h3 className="text-2xl font-bold">Connect With Me</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow me on social media for updates and insights
          </p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label={social.label}
                title={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center py-8 border-t"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat about technology, 
            I&apos;d love to hear from you.
          </p>
          <Button size="lg" asChild>
            <a href="mailto:your.email@example.com">
              Let&apos;s Talk
            </a>
          </Button>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Rivky Riyant Made with{" "}
            <FaHeart className="w-4 h-4 text-red-500" /> using Next.js & ShadCN UI
          </p>
        </motion.div>
      </div>
    </footer>
  )
}