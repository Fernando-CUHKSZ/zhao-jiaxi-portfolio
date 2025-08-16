'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from "./language-context"
import { Globe } from "lucide-react"

const getNavItems = (t: (key: string) => string) => [
  { label: t('nav.about'), href: "#about" },
  { label: t('nav.projects'), href: "#projects" },
  { label: t('nav.experience'), href: "#experience" },
  { label: t('nav.research'), href: "#research" },
  { label: t('nav.education'), href: "#education" },
  { label: t('nav.skills'), href: "#skills" },
  { label: t('nav.honors'), href: "#honors" },
  { label: t('nav.contact'), href: "#contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const navItems = getNavItems(t)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-end">
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-1 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              aria-label="Switch language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? t('nav.chinese') : t('nav.english')}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
