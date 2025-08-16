'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

const JobBotProDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Generate image paths for all 31 slides
  const slides = Array.from({ length: 31 }, (_, i) => 
    `/jobbot-pro/JobBot_Pro_赵嘉熙_13623057783_${String(i + 1).padStart(2, '0')}.jpg`
  )

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>
          <a 
            href="https://browser-extension-ffyj7rvp0-jiaxi-zhaos-projects.vercel.app/jobbot-pro.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 px-4 py-2 rounded-lg transition-all duration-300 font-medium"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Project
          </a>
        </div>

        {/* Project Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            JobBot Pro × Wenxiaoyan AI
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI Agent Product Manager | Baidu Wenxiaoyan AI Innovation Contest 2024
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="relative aspect-[16/9] bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={slides[currentSlide]}
              alt={`JobBot Pro Slide ${currentSlide + 1}`}
              fill
              className="object-contain"
              priority={currentSlide === 0}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-yellow-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Project Overview</h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                <strong className="text-white">Agent-based End-to-End Job Application System:</strong> Built a comprehensive multi-agent ecosystem covering the entire job search process: Career Assessment Agent → Resume Generation Agent → Job Matching Agent → One-Click Application Agent → Progress Tracking Agent → Interview Coaching Agent, creating an automated application and feedback loop through conversational interfaces.
              </p>
              
              <p>
                <strong className="text-white">Multi-Model Orchestration:</strong> Unified orchestration of multiple models (Wenxin LLM, DeepSeek) and toolsets (parsing, retrieval, form filling, CAPTCHA, ATS connectors) using Task-Chain/Orchestrator, forming a closed-loop Agent system of "Content-Capability-Action".
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Core Responsibilities</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Agent Task Orchestration & Tool Calling</li>
                    <li>• Platform Engineering & Ecosystem Integration</li>
                    <li>• Anti-Scraping & Risk Control Compliance</li>
                    <li>• Matching & Recommendation Systems</li>
                    <li>• MVP Validation & Delivery</li>
                  </ul>
                </div>
                
                <div className="bg-black/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-400">Key Technologies</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>LLM & Orchestration:</strong> Wenxin LLM, DeepSeek, Multi-Agent, Function Calling</li>
                    <li>• <strong>Backend/Infra:</strong> FastAPI, RabbitMQ, PostgreSQL, Redis, Elasticsearch</li>
                    <li>• <strong>Automation/Security:</strong> Playwright/Puppeteer, OAuth2, TLS1.3, GDPR/PIPL</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 rounded-xl p-6 border border-yellow-700/30 mt-8">
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Business Impact & Metrics</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-white">Efficiency Metrics:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Average application time reduction</li>
                      <li>• End-to-end completion rate</li>
                      <li>• Automation coverage rate</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-white">Quality Metrics:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Job matching accuracy</li>
                      <li>• Resume view rate improvement</li>
                      <li>• Interview invitation rate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobBotProDetail