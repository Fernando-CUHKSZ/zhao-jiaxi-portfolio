'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

interface SlideData {
  id: number
  title: string
  description: string
  image: string
}

const FederatedLearningDetail = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Generate slide data for all 35 slides
  const slides: SlideData[] = Array.from({ length: 35 }, (_, index) => ({
    id: index + 1,
    title: `Slide ${index + 1}`,
    description: `Project presentation slide ${index + 1}`,
    image: `/slides/federated-learning-slide-${String(index + 1).padStart(2, '0')}.jpg`
  }))

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Navigation Header */}
      <div className="relative z-10 p-6">
        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Federated Learning
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-4">
            Device Monitoring & Credit Optimization
          </h2>
          <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
            An innovative FATE-based federated learning system for industrial hydraulic press health monitoring 
            and dynamic credit adjustment, combining IoT device monitoring with financial risk assessment.
          </p>
        </div>

        {/* Glass Card Carousel */}
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Carousel Card */}
          <div className="relative">
            {/* Glass Effect Card */}
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              {/* Slide Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-white/5">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/placeholder.svg'
                  }}
                />
                
                {/* Slide Counter */}
                <div className="absolute top-4 right-4 backdrop-blur-md bg-black/30 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentSlide + 1} / {slides.length}
                </div>
              </div>

              {/* Slide Info */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-white/70">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 gap-2 flex-wrap">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Details */}
        <div className={`mt-16 grid md:grid-cols-2 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Technical Overview */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Overview</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-semibold text-white mb-2">Core Technologies</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>FATE Federated Learning Framework</li>
                  <li>FedMA (Federated Matching Averaging)</li>
                  <li>SWNSES Health Index Algorithm</li>
                  <li>Spectral Kurtosis & Negative Entropy</li>
                  <li>IoT Sensor Data Processing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Privacy-preserving collaborative modeling</li>
                  <li>Real-time equipment health monitoring</li>
                  <li>Dynamic credit risk assessment</li>
                  <li>Predictive maintenance alerts</li>
                  <li>Automated loan condition optimization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Impact */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Market Impact</h3>
            <div className="space-y-4 text-white/80">
              <div>
                <h4 className="font-semibold text-white mb-2">Industry Scale</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Chinese hydraulic press market: ¥83.6 billion</li>
                  <li>Manufacturing GDP contribution: 41.8%</li>
                  <li>Industrial long-term loans: ¥24.23 trillion</li>
                  <li>Manufacturing loans: ¥12.2 trillion (15.1% growth)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Value Proposition</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Enhanced risk assessment precision</li>
                  <li>Reduced equipment downtime costs</li>
                  <li>Optimized loan decision efficiency</li>
                  <li>Improved manufacturing financial services</li>
                  <li>Asset-backed securities (ABS) solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Competition Link */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">FinTechathon Competition</h3>
            <p className="text-white/80 mb-6">
              This project was developed for the Shenzhen International FinTech Competition, 
              focusing on innovative federated learning applications in financial technology.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <a
                href="https://fintechathon.csdn.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit Competition Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FederatedLearningDetail