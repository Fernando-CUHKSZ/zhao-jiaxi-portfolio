'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowLeft, Calendar, MapPin, Users, Award, Target, Zap, Database, FileSpreadsheet } from 'lucide-react'
import DataTable from './DataTable'
import Link from 'next/link'
import Image from 'next/image'

// IDTC3rd Slides images (24 images)
const idtc3rdSlides = Array.from({ length: 24 }, (_, i) =>
  `/IDTC3rd Slides/idtc3rd-slide-${String(i + 1).padStart(2, '0')}.jpg`
)

export default function IDTC3rdDetail() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % idtc3rdSlides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % idtc3rdSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + idtc3rdSlides.length) % idtc3rdSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100">
      {/* Header */}
      <div className="relative z-10 p-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          <span className="font-medium">Back to Portfolio</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Title Section with Glass Effect */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl"></div>
            <div className="relative px-12 py-8">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-4">
                Industrial Digital Twin Competition
              </h1>
              <p className="text-xl text-blue-700 font-medium">
                3rd Edition - Southern University of Science and Technology Group
              </p>
            </div>
          </div>
        </div>

        {/* Project Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Calendar, label: 'Duration', value: '6 months' },
            { icon: MapPin, label: 'Location', value: 'SUSTech, Shenzhen' },
            { icon: Users, label: 'Team Size', value: '5 members' },
            { icon: Award, label: 'Achievement', value: 'Outstanding Performance' }
          ].map((item, index) => (
            <div key={index} className="relative group">
              {/* Glass morphism card */}
              <div className="absolute inset-0 bg-white/25 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
              <div className="relative p-6 text-center">
                <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-blue-600 font-medium mb-1">{item.label}</p>
                <p className="text-lg font-bold text-blue-800">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Apple-style Card Carousel */}
        <div className="relative mb-12">
          {/* Glass morphism container */}
          <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
              Project Presentation Slides
            </h2>
            
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl">
              {/* Main Image Display */}
              <div className="relative aspect-[16/9] bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <Image
                  src={idtc3rdSlides[currentSlide]}
                  alt={`IDTC 3rd Competition Slide ${currentSlide + 1}`}
                  fill
                  className="object-contain transition-all duration-500 ease-in-out"
                  priority={currentSlide < 3}
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-200 group"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <ChevronLeft className="w-6 h-6 text-blue-800 group-hover:scale-110 transition-transform" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-200 group"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <ChevronRight className="w-6 h-6 text-blue-800 group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="mt-6 flex justify-center">
                <div className="flex gap-2 overflow-x-auto max-w-full px-4 scrollbar-hide">
                  {idtc3rdSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`flex-shrink-0 w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? 'bg-blue-600 scale-125'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                    />
                  ))}
                </div>
              </div>

              {/* Slide Counter */}
              <div className="text-center mt-4">
                <span className="text-blue-700 font-medium">
                  {currentSlide + 1} / {idtc3rdSlides.length}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Achievements */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-7 h-7 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-800">Technical Achievements</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Developed CastXNet defect detection model with 95%+ accuracy',
                  'Implemented comprehensive data governance framework',
                  'Built advanced feature engineering pipeline',
                  'Created annotation and quality inspection toolchain',
                  'Established MLOps deployment and monitoring system',
                  'Integrated digital twin process optimization'
                ].map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-blue-800 font-medium">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Technologies */}
          <div className="relative">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-7 h-7 text-blue-600" />
                <h3 className="text-2xl font-bold text-blue-800">Key Technologies</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Computer Vision',
                  'Machine Learning',
                  'Digital Twin',
                  'Data Science',
                  'MLOps',
                  'Quality Control',
                  'Process Optimization',
                  'Industrial IoT'
                ].map((tech, index) => (
                  <div key={index} className="bg-white/30 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                    <span className="text-blue-800 font-medium text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mt-8 relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"></div>
          <div className="relative p-8">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">Project Overview</h3>
            <div className="prose prose-blue max-w-none">
              <p className="text-blue-800 leading-relaxed mb-4">
                The Industrial Digital Twin Competition (3rd Edition) focused on developing advanced computer vision and 
                industrial data science solutions for precision manufacturing. Our team worked on creating a comprehensive 
                digital twin system that integrates real-time monitoring, predictive analytics, and process optimization.
              </p>
              <p className="text-blue-800 leading-relaxed mb-4">
                Key contributions included developing the CastXNet defect detection model, implementing robust data governance 
                frameworks, and creating sophisticated feature engineering pipelines. The project also involved building 
                comprehensive annotation and quality inspection toolchains, along with MLOps deployment and monitoring systems.
              </p>
              <p className="text-blue-800 leading-relaxed">
                The digital twin integration enabled real-time process optimization, significantly improving manufacturing 
                efficiency and quality control. This project demonstrated the practical application of AI and machine learning 
                in industrial settings, showcasing the potential for digital transformation in manufacturing processes.
              </p>
            </div>
          </div>
        </div>

        {/* Dataset Information */}
        <div className="mt-8 relative">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-xl"></div>
          <div className="relative p-8">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-7 h-7 text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-800">Project Dataset</h3>
            </div>
            
            <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/40">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100/50 backdrop-blur-sm rounded-lg p-3">
                  <FileSpreadsheet className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">压铸生产数据.xlsx</h4>
                  <p className="text-blue-700 mb-3">
                    Comprehensive die-casting production dataset containing real-world manufacturing data for digital twin modeling and defect detection.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm text-blue-600 font-medium mb-1">Data Source</p>
                      <p className="text-blue-800 font-semibold">Industrial Die-Casting Process</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm text-blue-600 font-medium mb-1">File Location</p>
                      <p className="text-blue-800 font-semibold text-sm">G:\IDTC-Sustech\2025IDTC\</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Production Parameters',
                      'Quality Metrics',
                      'Process Variables',
                      'Defect Classifications',
                      'Temporal Data',
                      'Machine Learning Features'
                    ].map((tag, index) => (
                      <span key={index} className="bg-blue-100/30 backdrop-blur-sm text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-blue-50/30 backdrop-blur-sm rounded-lg border border-blue-200/30">
              <p className="text-blue-800 text-sm leading-relaxed">
                <strong>Dataset Usage:</strong> This comprehensive dataset serves as the foundation for our CastXNet defect detection model, 
                providing real-world production data for training, validation, and testing of our digital twin system. The data includes 
                various production parameters, quality metrics, and defect classifications essential for developing robust AI-driven 
                manufacturing solutions.
              </p>
            </div>
          </div>
        </div>

        {/* 数据表格展示 */}
        <div className="mt-8">
          <DataTable 
            filePath="a:\Companies\JZhao CV\压铸生产数据.xlsx"
            title="压铸生产数据集"
            description="实时压铸生产过程中采集的工艺参数和质量数据"
          />
        </div>
      </div>
    </div>
  )
}