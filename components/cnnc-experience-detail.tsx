'use client'

import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeft, Building2, Calendar, MapPin, Award, Target, Users, Shield } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CarouselProps {
  images: string[]
  title: string
  description: string
}

const ImageCarousel: React.FC<CarouselProps> = ({ images, title, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Glass Card Container */}
      <div className="relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
        
        {/* Image Display */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={images[currentIndex]}
            alt={`${title} - Slide ${currentIndex + 1}`}
            className="w-full h-full object-contain bg-white/5"
          />
          
          {/* Slide Indicator */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-md bg-black/30 text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 p-6">
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="sm"
            className="h-10 w-10 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          {/* Dot Indicators */}
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="sm"
            className="h-10 w-10 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-200"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function CNNCExperienceDetail() {
  // Generate image paths for CNNC Kaili (SD-WAN project) - excluding first two images
  const cnnc1Images = Array.from({ length: 19 }, (_, i) => 
    `/slides/cnnc-kaili/cnnc-kaili-slide-${String(i + 1).padStart(2, '0')}.jpg`
  )

  // Generate image paths for CNNC Kaili2 (Cybersecurity Defense System)
  const cnnc2Images = Array.from({ length: 25 }, (_, i) => 
    `/slides/cnnc-kaili2/cnnc-kaili2-slide-${String(i + 1).padStart(2, '0')}.jpg`
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/40 to-slate-900"></div>
      <div className="fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          
          {/* Company Info Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  CNNC Shenzhen Kaili Group Co., Ltd.
                </h1>
                <p className="text-xl text-white/80">Research & Development Experience</p>
              </div>
            </div>
            
            {/* Experience Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <span className="text-white font-medium">Duration</span>
                </div>
                <p className="text-white/80">June 2023 - August 2023</p>
              </div>
              
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span className="text-white font-medium">Location</span>
                </div>
                <p className="text-white/80">Shenzhen, China</p>
              </div>
              
              <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-5 w-5 text-purple-400" />
                  <span className="text-white font-medium">Role</span>
                </div>
                <p className="text-white/80">Research Intern</p>
              </div>
            </div>
            
            {/* Key Achievements */}
            <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 mb-12">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-yellow-400" />
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Target className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">SD-WAN Network Architecture</h3>
                    <p className="text-white/70 text-sm">Designed and implemented intelligent centralized control model for enterprise group networking using SD-WAN technology</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Shield className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-2">Cybersecurity Defense System</h3>
                    <p className="text-white/70 text-sm">Developed comprehensive network security defense framework based on systems engineering methodology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Project Carousels */}
        <div className="container mx-auto px-6 pb-16 space-y-16">
          {/* SD-WAN Project */}
          <ImageCarousel
            images={cnnc1Images}
            title="SD-WAN Intelligent Centralized Control Model"
            description="Research and development of intelligent centralized control model for enterprise group networking based on SD-WAN technology. This project focuses on optimizing network performance, reducing operational costs, and enhancing network security through software-defined networking approaches."
          />
          
          {/* Cybersecurity Defense System */}
          <ImageCarousel
            images={cnnc2Images}
            title="Network Security Defense System Based on Systems Engineering"
            description="Comprehensive research on constructing network security defense systems using systems engineering methodology. The project encompasses threat analysis, risk assessment, defense strategy formulation, and implementation of multi-layered security frameworks for enterprise environments."
          />
        </div>
      </div>
    </div>
  )
}