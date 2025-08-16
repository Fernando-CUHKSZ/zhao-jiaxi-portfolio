'use client'
import { useState, useEffect } from 'react'
import { ChevronDown, Download, Github, Linkedin, Mail, Phone, MapPin, Calendar, Award, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from "./language-context"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const { language, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    const resumeFile = language === 'zh' ? '/赵嘉熙个人简历.pdf' : '/Zhao-Jiaxi-Resume.pdf'
    const fileName = language === 'zh' ? '赵嘉熙个人简历.pdf' : 'Zhao-Jiaxi-Resume.pdf'
    link.href = resumeFile
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      <div
        className="parallax-hero max-w-6xl mx-auto px-6"
        style={{ "--scroll-y": scrollY } as React.CSSProperties}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="stagger-fade-in text-left">
            <h1 className="font-serif font-bold text-4xl md:text-6xl text-gray-900 leading-tight mb-6">{t('hero.name')}</h1>
            <p className="font-serif font-semibold text-xl md:text-2xl text-gray-700 mb-8">
              {t('hero.title')}
            </p>
            
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="https://www.gdcyl.org/upload/file/20230602/16856665267136106.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90 transition-colors cursor-pointer"
              >
                {t('hero.award1')}
              </a>
              <a 
                href="https://certificate.fisco.com.cn/?Id=12&certHash=0x9a81fb70c68447886995308fa8c63970b32b657970efcc52333db261343451fe#/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90 transition-colors cursor-pointer"
              >
                {t('hero.award2')}
              </a>
              <a 
                href="https://www.kdocs.cn/l/cfR6bR47RYOe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90 transition-colors cursor-pointer"
              >
                {t('hero.award3')}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4 mr-2" />
                {t('hero.resume')}
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl font-medium bg-transparent"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t('projects.viewDetails')}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="mailto:zhaojx2077@outlook.com"
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-600" />
                zhaojx2077@outlook.com
              </a>
              <a 
                href="tel:13623057783"
                className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl text-sm font-medium text-gray-700 shadow-sm hover:bg-white/90 transition-colors"
              >
                <Phone className="w-4 h-4 text-green-600" />
                136 2305 7783
              </a>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl text-sm font-medium text-gray-700 shadow-sm">
                <Calendar className="w-4 h-4 text-purple-600" />
                Nov 24, 2001
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-xl text-sm font-medium text-gray-700 shadow-sm">
                <MapPin className="w-4 h-4 text-orange-600" />
                {language === 'zh' ? '深圳, 中国' : 'Shenzhen, China'}
              </div>
            </div>
          </div>

          {/* Right side - Profile Image */}
          <div className="stagger-fade-in flex justify-center md:justify-end">
            <div className="relative">
              <Image
                 src="/Profile with bg.jpg"
                 alt="Zhao Jiaxi Profile"
                 width={300}
                 height={300}
                 className="rounded-3xl shadow-2xl object-cover"
                 priority
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
