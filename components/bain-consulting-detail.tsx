'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const BainConsultingDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Bain & Company case competition images (21 images)
  const bainSlides = Array.from({ length: 21 }, (_, i) => 
    `/Bain & Company Management Consulting Case Competition/bain-slide-${String(i + 1).padStart(2, '0')}.jpg`
  )

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bainSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bainSlides.length) % bainSlides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 relative overflow-hidden">
      {/* Bain Red Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/30 to-red-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-700/30 to-red-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-red-500/20 via-red-600/10 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 liquid-glass-light text-white hover:text-red-100 transition-all duration-300 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-red-200 via-red-100 to-white bg-clip-text text-transparent mb-6">
            Bain & Company
          </h1>
          <h2 className="text-3xl font-semibold text-red-100 mb-4">
            Management Consulting Case Competition
          </h2>
          <p className="text-xl text-red-200 max-w-3xl mx-auto leading-relaxed">
            Strategic business analysis and consulting case study showcasing analytical thinking, 
            problem-solving methodologies, and strategic recommendations for complex business challenges
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Case Study Presentation</h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="liquid-glass-card-red overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={bainSlides[currentSlide]}
                  alt={`Bain Case Study Slide ${currentSlide + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 liquid-glass-button-red p-3 hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 liquid-glass-button-red p-3 hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 p-6">
                {bainSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-red-300 w-8' 
                        : 'bg-red-500/50 hover:bg-red-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Slide Counter */}
            <div className="text-center mt-4 text-red-200">
              {currentSlide + 1} / {bainSlides.length}
            </div>
          </div>
        </div>

        {/* Key Insights Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Consulting Insights</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="liquid-glass-card-red p-8">
              <h3 className="text-xl font-semibold text-red-100 mb-4">Strategic Analysis</h3>
              <p className="text-red-200 leading-relaxed">
                Comprehensive market analysis and competitive landscape evaluation using proven consulting frameworks and methodologies.
              </p>
            </div>
            <div className="liquid-glass-card-red p-8">
              <h3 className="text-xl font-semibold text-red-100 mb-4">Problem Solving</h3>
              <p className="text-red-200 leading-relaxed">
                Structured approach to complex business challenges with data-driven insights and actionable recommendations.
              </p>
            </div>
            <div className="liquid-glass-card-red p-8">
              <h3 className="text-xl font-semibold text-red-100 mb-4">Business Impact</h3>
              <p className="text-red-200 leading-relaxed">
                Quantifiable business value creation through strategic initiatives and operational excellence improvements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Liquid Glass Styles for Red Theme */}
      <style jsx>{`
        .liquid-glass-card-red {
          position: relative;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 4px 20px rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .liquid-glass-card-red:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 16px 48px rgba(0, 0, 0, 0.4),
            inset 0 4px 20px rgba(255, 255, 255, 0.15);
        }
        
        .liquid-glass-card-red::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          backdrop-filter: blur(1px);
          box-shadow: 
            inset -10px -8px 0px -11px rgba(255, 255, 255, 0.3),
            inset 0px -9px 0px -8px rgba(255, 255, 255, 0.3);
          opacity: 0.6;
          z-index: -1;
          filter: blur(1px) drop-shadow(10px 4px 6px rgba(0,0,0,0.2)) brightness(115%);
        }
        
        .liquid-glass-light {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        
        .liquid-glass-button-red {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        
        .liquid-glass-button-red:hover {
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  )
}

export default BainConsultingDetail