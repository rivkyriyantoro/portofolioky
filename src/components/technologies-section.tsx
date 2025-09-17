"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  SiFigma, 
  SiPostman, 
  SiGithub
} from "react-icons/si"
import { 
  Smartphone,
  GitBranch,
  Database, 
  Layers,
  TestTube, 
  Briefcase,
  Zap,
  Settings,
  Code
} from "lucide-react"

export function TechnologiesSection() {
  const technologies = [
    { icon: Smartphone, name: "Appium", color: "#40C4E3" },
    { icon: GitBranch, name: "Bitbucket", color: "#0052CC" },
    { icon: Database, name: "DBeaver", color: "#382923" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: Layers, name: "Framer", color: "#0055FF" },
    { icon: TestTube, name: "Playwright", color: "#2EAD33" },
    { icon: Briefcase, name: "Jira", color: "#0052CC" },
    { icon: Zap, name: "K6", color: "#7D64FF" },
    { icon: SiPostman, name: "Postman", color: "#FF6C37" },
    { icon: Settings, name: "Katalon", color: "#00D4AA" },
    { icon: SiGithub, name: "GitHub", color: "#181717" },
    { icon: Code, name: "Visual Studio Code", color: "#007ACC" },
  ]

  const duplicatedTechnologies = [...technologies, ...technologies]

  return (
    <section id="technologies" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technologies & Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {duplicatedTechnologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.1, y: -10 }}
                  className="group relative flex-shrink-0"
                >
                  <div className="flex flex-col items-center p-6 bg-background rounded-lg border shadow-sm hover:shadow-lg transition-all duration-300 min-w-[120px]">
                    <div className="mb-4 p-3 rounded-lg bg-muted group-hover:bg-muted/80 transition-colors">
                      <IconComponent 
                        className="w-10 h-10 transition-all duration-300"
                        style={{ color: tech.color }}
                      />
                    </div>
                    <h3 className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold mb-4">Always Learning</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m constantly exploring new technologies and staying up-to-date with industry trends 
            to deliver modern, efficient solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}