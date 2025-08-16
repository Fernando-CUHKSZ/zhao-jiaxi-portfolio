'use client'
import { useLanguage } from './language-context'

export default function SkillsSection() {
  const { t } = useLanguage()
  
  const skillCategories = [
    {
      category: t('skills.categories.ai'),
      skills: [t('skills.ai.llm'), t('skills.ai.multiAgent'), t('skills.ai.rag')]
    },
    {
      category: t('skills.categories.compliance'),
      skills: [t('skills.compliance.gdpr'), t('skills.compliance.privacy'), t('skills.compliance.audit')]
    },
    {
      category: t('skills.categories.federatedLearning'),
      skills: [t('skills.federatedLearning.framework'), t('skills.federatedLearning.privacy'), t('skills.federatedLearning.optimization')]
    },
    {
      category: t('skills.categories.productGrowth'),
      skills: [t('skills.productGrowth.strategy'), t('skills.productGrowth.analytics'), t('skills.productGrowth.optimization')]
    },
    {
      category: t('skills.categories.network'),
      skills: [t('skills.network.protocols'), t('skills.network.security'), t('skills.network.architecture')]
    },
    {
      category: t('skills.categories.programming'),
      skills: [t('skills.programming.python'), t('skills.programming.javascript'), t('skills.programming.sql')]
    },
    {
      category: t('skills.categories.tools'),
      skills: [t('skills.tools.docker'), t('skills.tools.git'), t('skills.tools.aws')]
    }
  ]
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 text-center mb-16">{t('skills.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/20"
              style={{
                background: `linear-gradient(135deg, 
                  ${index % 7 === 0 ? 'rgba(59, 130, 246, 0.05)' : 
                    index % 7 === 1 ? 'rgba(16, 185, 129, 0.05)' : 
                    index % 7 === 2 ? 'rgba(245, 101, 101, 0.05)' : 
                    index % 7 === 3 ? 'rgba(139, 92, 246, 0.05)' : 
                    index % 7 === 4 ? 'rgba(245, 158, 11, 0.05)' : 
                    index % 7 === 5 ? 'rgba(236, 72, 153, 0.05)' : 
                    'rgba(6, 182, 212, 0.05)'} 0%, 
                  rgba(255, 255, 255, 0.9) 100%)`
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-3 h-3 rounded-full mr-3"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${index % 7 === 0 ? '#3B82F6' : 
                        index % 7 === 1 ? '#10B981' : 
                        index % 7 === 2 ? '#F56565' : 
                        index % 7 === 3 ? '#8B5CF6' : 
                        index % 7 === 4 ? '#F59E0B' : 
                        index % 7 === 5 ? '#EC4899' : 
                        '#06B6D4'}, 
                      ${index % 7 === 0 ? '#1E40AF' : 
                        index % 7 === 1 ? '#047857' : 
                        index % 7 === 2 ? '#DC2626' : 
                        index % 7 === 3 ? '#6D28D9' : 
                        index % 7 === 4 ? '#D97706' : 
                        index % 7 === 5 ? '#BE185D' : 
                        '#0891B2'})`
                  }}
                />
                <h3 className="font-serif font-semibold text-lg text-gray-900 group-hover:text-gray-700 transition-colors">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/60 backdrop-blur-sm text-gray-700 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-200 border border-gray-100/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
