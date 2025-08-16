'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Link from 'next/link'

const SonyAurionXDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState<{[key: string]: boolean}>({})

  // SONY Slides images (44 images)
  const sonySlides = Array.from({ length: 44 }, (_, i) => 
    `/SONY Slides/sony-slide-${String(i + 1).padStart(2, '0')}.jpg`
  )

  // Poster image
  const posterImage = '/SONY AurionX poster/SONY AurionX Highlight Board_01.jpg'

  // Video demos
  const videoDemos = [
    {
      title: 'Highlight Quick Cut Demo',
      description: 'Advanced audio processing and highlight extraction technology demonstration',
      src: '/SONY AurionX highlight quick cut/highlight-demo.mp4',
      id: 'highlight'
    },
    {
      title: 'Voice Playback Demo', 
      description: 'Real-time voice processing and playback functionality showcase',
      src: '/SONY AurionX voice playback/voice-demo.mp4',
      id: 'voice'
    },
    {
      title: 'Global Translation Demo',
      description: 'Multi-language translation and audio processing capabilities',
      src: '/SONY trans/translation-demo.mp4', 
      id: 'translation'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sonySlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sonySlides.length) % sonySlides.length)
  }

  const toggleVideo = (videoId: string) => {
    setIsPlaying(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Liquid Glass Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-sky-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-100/20 via-blue-100/10 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 liquid-glass-light text-slate-700 hover:text-slate-900 transition-all duration-300 hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent mb-6">
            SONY AurionX
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Advanced Audio Technology Platform featuring intelligent audio processing, 
            real-time voice analysis, and multi-language translation capabilities
          </p>
        </div>

        {/* Project Slides Carousel */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Project Presentation</h2>
          <div className="relative max-w-6xl mx-auto">
            <div className="liquid-glass-card overflow-hidden">
              <div className="relative aspect-video">
                <img
                  src={sonySlides[currentSlide]}
                  alt={`SONY AurionX Slide ${currentSlide + 1}`}
                  className="w-full h-full object-contain bg-white"
                />
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 liquid-glass-button p-3 hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-700" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 liquid-glass-button p-3 hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-slate-700" />
                </button>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 p-6">
                {sonySlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-500 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Slide Counter */}
            <div className="text-center mt-4 text-slate-600">
              {currentSlide + 1} / {sonySlides.length}
            </div>
          </div>
        </div>

        {/* Poster Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Project Highlight</h2>
          <div className="max-w-2xl mx-auto">
            <div className="liquid-glass-card p-8">
              <img
                src={posterImage}
                alt="SONY AurionX Highlight Board"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Video Demos Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">Technology Demonstrations</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {videoDemos.map((video) => (
              <div key={video.id} className="liquid-glass-card p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{video.title}</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{video.description}</p>
                
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Liquid Glass Styles */}
      <style jsx>{`
        .liquid-glass-card {
          position: relative;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow: 
            0 8px 32px rgba(31, 38, 135, 0.2),
            inset 0 4px 20px rgba(255, 255, 255, 0.3);
          transition: all 0.3s ease;
        }
        
        .liquid-glass-card:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 16px 48px rgba(31, 38, 135, 0.3),
            inset 0 4px 20px rgba(255, 255, 255, 0.4);
        }
        
        .liquid-glass-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(1px);
          box-shadow: 
            inset -10px -8px 0px -11px rgba(255, 255, 255, 1),
            inset 0px -9px 0px -8px rgba(255, 255, 255, 1);
          opacity: 0.6;
          z-index: -1;
          filter: blur(1px) drop-shadow(10px 4px 6px rgba(0,0,0,0.1)) brightness(115%);
        }
        
        .liquid-glass-light {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.6);
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(31, 38, 135, 0.15);
        }
        
        .liquid-glass-button {
          background: rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(31, 38, 135, 0.2);
        }
        
        .liquid-glass-button:hover {
          background: rgba(255, 255, 255, 0.4);
          box-shadow: 0 6px 20px rgba(31, 38, 135, 0.3);
        }
      `}</style>
    </div>
  )
}

export default SonyAurionXDetail