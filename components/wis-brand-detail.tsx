"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowLeft, ExternalLink, BarChart2, Palette, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface CarouselProps {
  title: string
  description: string
  images: string[]
  folderName: string
}

function ImageCarousel({ title, description, images, folderName }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="glass-card p-8 rounded-3xl">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
      
      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-gray-100">
        <Image
          src={`/slides/${folderName}/${images[currentIndex]}`}
          alt={`${title} slide ${currentIndex + 1}`}
          fill
          className="object-contain transition-all duration-500 ease-in-out"
          priority={currentIndex === 0}
        />
        
        {/* Navigation overlay */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="glass-button rounded-full bg-white/20 border-white/30 hover:bg-white/30"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="glass-button rounded-full bg-white/20 border-white/30 hover:bg-white/30"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center space-x-2 mb-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-blue-600 w-8"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
      
      {/* Navigation buttons */}
      <div className="flex justify-center space-x-4">
        <Button
          variant="outline"
          onClick={prevSlide}
          className="glass-button bg-white/50 border-gray-200 hover:bg-white/70"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={nextSlide}
          className="glass-button bg-white/50 border-gray-200 hover:bg-white/70"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
      
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} of {images.length}
      </div>
    </div>
  )
}

export default function WISBrandDetail() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const carouselData = [
    {
      title: "WIS Brand Differentiation Strategy - Phase 1",
      description: "Comprehensive market analysis and brand positioning strategy for WIS facial mask products, focusing on multi-element collaborations and packaging innovation to enhance brand differentiation in the competitive beauty market.",
      images: Array.from({ length: 32 }, (_, i) => `wis-brand-slide-${String(i + 1).padStart(2, '0')}.jpg`),
      folderName: "fandao1"
    },
    {
      title: "Yibao Brand Value-Based Collaboration Packaging Design",
      description: "Innovative packaging design solutions based on Yibao brand values, implementing strategic collaborations to enhance brand recognition and market positioning through creative packaging approaches.",
      images: [
        "yibao-design-01.jpg",
        "yibao-design-02.jpg",
        "yibao-design-03.jpg"
      ],
      folderName: "fandao2"
    },
    {
      title: "Baisui Mountain Premium Packaging Upgrade Strategy",
      description: "Brand collaboration-driven premium packaging upgrade pathway for Baisui Mountain, focusing on high-end market positioning and strategic partnerships to elevate brand perception and market competitiveness.",
      images: Array.from({ length: 10 }, (_, i) => `baisui-brand-slide-${String(i + 1).padStart(2, '0')}.jpg`),
      folderName: "fandao3"
    }
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="glass-header sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 text-gray-900 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Back to Portfolio</span>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">WIS Brand Strategy Project</h1>
              <div className="w-32"></div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Project overview */}
          <div className="glass-card p-12 rounded-3xl mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                WIS Facial Mask Brand Differentiation Enhancement Project
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Brand Strategy & Operations Planning Project Leader | 2024
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <BarChart2 className="h-6 w-6 text-blue-600" />
                  </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Analysis</h3>
                <p className="text-gray-600 text-sm">Multi-source data analysis using Euromonitor, iMedia, and web scraping techniques</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-6 w-6 text-purple-600" />
                  </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Strategy</h3>
                <p className="text-gray-600 text-sm">Cross-industry collaboration matrix and innovative packaging design</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Tracking</h3>
                <p className="text-gray-600 text-sm">Real-time dashboard monitoring and data-driven optimization</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Project Impact & Achievements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><strong>Market Insights:</strong> Identified key target demographics and market opportunities through comprehensive data analysis</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><strong>Strategic Innovation:</strong> Developed multi-element collaboration matrix for brand differentiation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><strong>Creative Excellence:</strong> Designed themed packaging solutions with A/B testing validation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><strong>Omnichannel Strategy:</strong> Implemented comprehensive online and offline marketing approach</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><strong>Data-Driven Results:</strong> Established real-time performance monitoring and optimization systems</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700"><strong>Team Leadership:</strong> Successfully coordinated cross-functional teams for efficient project execution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel sections */}
          <div className="space-y-16">
            {carouselData.map((carousel, index) => (
              <ImageCarousel
                key={index}
                title={carousel.title}
                description={carousel.description}
                images={carousel.images}
                folderName={carousel.folderName}
              />
            ))}
          </div>
        </main>
      </div>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(16px) saturate(180%);
          -webkit-backdrop-filter: blur(16px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2), inset 0 4px 20px rgba(255, 255, 255, 0.3);
        }
        
        .glass-header {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px) saturate(180%);
          -webkit-backdrop-filter: blur(12px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .glass-button {
          backdrop-filter: blur(8px) saturate(180%);
          -webkit-backdrop-filter: blur(8px) saturate(180%);
          transition: all 0.3s ease;
        }
        
        .glass-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(31, 38, 135, 0.3);
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}