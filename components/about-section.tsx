'use client'
import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from "./language-context"

const skills = [
  { name: "Python", level: 95 },
  { name: "TensorFlow", level: 90 },
  { name: "PyTorch", level: 90 },
  { name: "NLP", level: 95 },
  { name: "LLM", level: 90 },
  { name: "Multi-Agent", level: 85 },
  { name: "RAG", level: 90 },
  { name: "Pandas", level: 95 },
]

const coreCourses = [
  "Generative AI & Business Applications",
  "Big Data Analytics",
  "System Analysis & Design",
  "Business Intelligence Programming",
  "Project Management",
  "AI in Management Decision Making",
  "Blockchain Technology & Applications",
  "Natural Language Processing & Text Learning",
  "Quantitative Decision Models",
]

export default function AboutSection() {
  const { t, language } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)
  const [showCourses, setShowCourses] = useState(false)

  const aboutContent = language === 'zh'
    ? `${t('about.paragraph1')}${t('about.paragraph2')}${t('about.paragraph3')}${t('about.paragraph4')}`
    : null

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 text-center mb-16">{t('about.title')}</h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 card-hover">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="text-gray-700 leading-relaxed space-y-4">
                {language === 'zh' ? (
                  <p>{aboutContent}</p>
                ) : (
                  <>
                    <p>{t('about.paragraph1')}</p>
                    <p>{t('about.paragraph2')}</p>
                    {isExpanded && (
                      <div className="space-y-4">
                        <p>{t('about.paragraph3')}</p>
                        <p>{t('about.paragraph4')}</p>
                        <div className="pt-4">
                          <button
                            onClick={() => setShowCourses(!showCourses)}
                            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
                          >
                            {t('about.coreCourses')}
                            {showCourses ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                          {showCourses && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {coreCourses.map((course) => (
                                <span key={course} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                  {course}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mt-4"
                    >
                      {isExpanded ? t('about.showLess') : t('about.readMore')}
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </>
                )}
              </div>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-xl text-gray-900 mb-6">{t('about.coreSkills')}</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
