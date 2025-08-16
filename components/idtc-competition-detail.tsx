'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const IDTCCompetitionDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // IDTC2nd Slides images (46 images)
  const idtcSlides = Array.from({ length: 46 }, (_, i) => 
    `/IDTC2nd Slides/idtc-slide-${String(i + 1).padStart(2, '0')}.jpg`
  )

  // Introduction video
  const introVideo = {
    title: 'Digital Twin Technology Introduction',
    description: 'Comprehensive overview of the digital twin-driven precision machine tool thermal error prediction and control methodology',
    src: '/IDTC2nd intro/intro-video.mp4'
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % idtcSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + idtcSlides.length) % idtcSlides.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Digital Twin Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-400/20 via-indigo-500/10 to-transparent rounded-full blur-2xl" />
        
        {/* Digital Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 liquid-glass-light text-white hover:text-blue-100 transition-all duration-300 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent mb-6">
            Second Industrial Digital Twin Competition
          </h1>
          <h2 className="text-2xl font-semibold text-blue-100 mb-4">
            Multi-factor CNC Machine Error Modeling & Compensation
          </h2>
          <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
            Advanced digital twin-driven extreme gradient boosting methodology for precision machine tool 
            thermal error adaptive prediction and control, showcasing cutting-edge industrial IoT and AI technologies
          </p>
        </div>

        {/* Technical Presentation Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Presentation</h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="liquid-glass-card-tech overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={idtcSlides[currentSlide]}
                  alt={`IDTC Competition Slide ${currentSlide + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 liquid-glass-button-tech p-3 hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 liquid-glass-button-tech p-3 hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-1 p-6 overflow-x-auto">
                {idtcSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                      index === currentSlide 
                        ? 'bg-blue-300 w-8' 
                        : 'bg-blue-500/50 hover:bg-blue-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Slide Counter */}
            <div className="text-center mt-4 text-blue-200">
              {currentSlide + 1} / {idtcSlides.length}
            </div>
          </div>
        </div>

        {/* Introduction Video Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology Introduction</h2>
          <div className="max-w-4xl mx-auto">
            <div className="liquid-glass-card-tech p-8">
              <h3 className="text-2xl font-semibold text-blue-100 mb-4 text-center">{introVideo.title}</h3>
              <p className="text-blue-200 mb-6 text-center leading-relaxed">{introVideo.description}</p>
              
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={introVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Key Technologies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="liquid-glass-card-tech p-6">
              <h3 className="text-lg font-semibold text-blue-100 mb-3">Digital Twin</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Real-time virtual representation of physical CNC machines with synchronized data flow and predictive capabilities.
              </p>
            </div>
            <div className="liquid-glass-card-tech p-6">
              <h3 className="text-lg font-semibold text-blue-100 mb-3">XGBoost Algorithm</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Extreme gradient boosting machine learning model for precise thermal error prediction and compensation.
              </p>
            </div>
            <div className="liquid-glass-card-tech p-6">
              <h3 className="text-lg font-semibold text-blue-100 mb-3">Thermal Modeling</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Multi-factor thermal error analysis considering environmental conditions and machine operational parameters.
              </p>
            </div>
            <div className="liquid-glass-card-tech p-6">
              <h3 className="text-lg font-semibold text-blue-100 mb-3">Adaptive Control</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Real-time error compensation system with adaptive learning capabilities for precision manufacturing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Liquid Glass Styles for Tech Theme */}
      <style jsx>{`
        .liquid-glass-card-tech {
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px rgba(0, 0, 0, 0.4),
            inset 0 4px 20px rgba(59, 130, 246, 0.1);
          transition: all 0.3s ease;
        }
        
        .liquid-glass-card-tech:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 16px 48px rgba(0, 0, 0, 0.5),
            inset 0 4px 20px rgba(59, 130, 246, 0.15);
          border-color: rgba(59, 130, 246, 0.5);
        }
        
        .liquid-glass-card-tech::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(59, 130, 246, 0.03);
          border-radius: 24px;
          backdrop-filter: blur(1px);
          box-shadow: 
            inset -10px -8px 0px -11px rgba(59, 130, 246, 0.4),
            inset 0px -9px 0px -8px rgba(59, 130, 246, 0.4);
          opacity: 0.6;
          z-index: -1;
          filter: blur(1px) drop-shadow(10px 4px 6px rgba(0,0,0,0.3)) brightness(115%);
        }
        
        .liquid-glass-light {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        
        .liquid-glass-button-tech {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(59, 130, 246, 0.5);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        
        .liquid-glass-button-tech:hover {
          background: rgba(255, 255, 255, 0.25);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
          border-color: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  )
}

export default IDTCCompetitionDetail