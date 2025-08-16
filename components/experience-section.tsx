'use client'
import Link from 'next/link'
import { useLanguage } from './language-context'
import { Building2, Calendar, MapPin, ExternalLink, ChevronRight, Award, Users, Briefcase } from 'lucide-react'

// Define experience ID mappings for translations
const experienceTranslationMap = {
  "CyberOrigin (Shenzhen) Technology Co., Ltd.": "cyberorigin",
  "CNNC Shenzhen Kaili Group Co., Ltd.": "cnnc",
  "Southern University of Science and Technology School of System Design & Intelligent Manufacturing": "sustech",
  "MicroConnect (Shenzhen) Co., Ltd.": "microconnect"
}

const experiences = [
  {
    companyKey: "cyberorigin",
    website: "https://cyberorigin.ai/",
  },
  {
    companyKey: "cnnc",
    hasDetailPage: true,
  },
  {
    companyKey: "sustech",
  },
  {
    companyKey: "microconnect",
  },
]

export default function ExperienceSection() {
  const { t, language } = useLanguage()
  
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 text-center mb-16">{t('experience.title')}</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const companyName = t(`exp.${exp.companyKey}.company`)
            const role = t(`exp.${exp.companyKey}.role`)
            const description = t(`exp.${exp.companyKey}.description`)
            const period = language === 'zh' 
              ? exp.companyKey === 'cyberorigin' ? '2025.03–至今'
                : exp.companyKey === 'cnnc' ? '2023.07–2023.09'
                : exp.companyKey === 'sustech' ? '2023.09–2024.04'
                : '2023.10–2023.12'
              : exp.companyKey === 'cyberorigin' ? '2025.03–present'
                : exp.companyKey === 'cnnc' ? '2023.07–2023.09'
                : exp.companyKey === 'sustech' ? '2023.09–2024.04'
                : '2023.10–2023.12'
            const location = language === 'zh' ? '深圳' : 'Shenzhen'

            // Get achievements
            const achievements = [
              t(`exp.${exp.companyKey}.achievement1`),
              t(`exp.${exp.companyKey}.achievement2`),
              t(`exp.${exp.companyKey}.achievement3`),
              t(`exp.${exp.companyKey}.achievement4`)
            ].filter(achievement => achievement && !achievement.startsWith('exp.'))

            // Define skills based on company
            const skills = exp.companyKey === 'cyberorigin'
              ? language === 'zh' 
                ? ["增长营销", "品牌策略", "B2B销售", "内容创作", "数据分析"]
                : ["Growth Marketing", "Brand Strategy", "B2B Sales", "Content Creation", "Data Analytics"]
              : exp.companyKey === 'cnnc'
              ? language === 'zh'
                ? ["Excel", "Power BI", "SQL", "Python", "Pandas", "Matplotlib", "网络设计"]
                : ["Excel", "Power BI", "SQL", "Python", "Pandas", "Matplotlib", "Network Design"] 
              : exp.companyKey === 'sustech'
              ? language === 'zh'
                ? ["研究指导", "专利撰写", "学术可视化", "OpenPose", "MediaPipe"]
                : ["Research Guidance", "Patent Writing", "Academic Visualization", "OpenPose", "MediaPipe"]
              : language === 'zh'
                ? ["SQL", "Python", "Pandas", "Excel", "Matplotlib", "Jira", "Microsoft Teams"]
                : ["SQL", "Python", "Pandas", "Excel", "Matplotlib", "Jira", "Microsoft Teams"]

            return (
              <div key={index} className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                {/* Gradient Background Accent */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                
                <div className="p-8">
                  {/* Header Section */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl group-hover:from-blue-100 group-hover:to-indigo-200 transition-colors duration-300">
                          <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif font-bold text-2xl text-gray-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">
                            {companyName}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <Briefcase className="h-4 w-4 text-blue-500" />
                            <p className="text-blue-600 font-semibold text-lg">{role}</p>
                          </div>
                        </div>
                      </div>
                      
                      {description && (
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-6">
                          <p className="text-gray-700 leading-relaxed text-sm">{description}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="lg:ml-8 mt-4 lg:mt-0">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                          <Calendar className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-700 font-medium">{period}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                          <MapPin className="h-5 w-5 text-gray-500" />
                          <span className="text-gray-600">{location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Achievements Section */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-100 rounded-xl">
                          <Award className="h-5 w-5 text-green-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg">{t('experience.achievements')}</h4>
                      </div>
                      <ul className="space-y-4">
                        {achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mt-1.5 flex-shrink-0 shadow-sm" />
                            <span className="text-gray-700 leading-relaxed font-medium">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills Section */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-100 rounded-xl">
                          <Users className="h-5 w-5 text-purple-600" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-lg">{t('experience.skills')}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skills.map((skill, idx) => (
                          <span 
                            key={skill} 
                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                              idx % 3 === 0 ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' :
                              idx % 3 === 1 ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' :
                              'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {(exp.website || exp.hasDetailPage) && (
                    <div className="mt-8 flex flex-wrap gap-4">
                      {exp.website && (
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          <ExternalLink className="h-5 w-5" />
                          {t('experience.visitWebsite')}
                        </a>
                      )}
                      {exp.hasDetailPage && (
                        <Link
                          href="/cnnc-experience"
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        >
                          <ChevronRight className="h-5 w-5" />
                          {t('experience.viewDetails')}
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
