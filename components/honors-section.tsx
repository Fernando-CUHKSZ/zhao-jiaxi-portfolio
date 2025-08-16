'use client'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useLanguage } from './language-context'

const projectExperiences = [
  {
    id: "self-strengthening-star",
    year: "2023",
  },
  {
    id: "fate-federated-learning",
    year: "2024",
  },
  {
    id: "sony-aurionx-ai",
    year: "2023-2024",
  },
  {
    id: "cnc-error-modeling",
    year: "2022-2023",
  },
  {
    id: "digital-twin-leadership",
    year: "2023-2024",
  },
  {
    id: "multi-agent-llm",
    year: "2024",
  },
]

export default function HonorsSection() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectExperiences.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectExperiences.length) % projectExperiences.length)
  }

  return (
    <section id="honors" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-16">{t('honors.title')}</h2>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors mr-8"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 max-w-3xl">
              <div className="bg-gray-800 rounded-2xl p-8 text-center">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t(`honors.projects.${projectExperiences[currentIndex].id}.type`)}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-2xl mb-4">{t(`honors.projects.${projectExperiences[currentIndex].id}.title`)}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{t(`honors.projects.${projectExperiences[currentIndex].id}.description`)}</p>
                <p className="text-gray-400 text-lg font-medium">{projectExperiences[currentIndex].year}</p>
              </div>
            </div>

            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors ml-8"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {projectExperiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
