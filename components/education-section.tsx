'use client'
import { useLanguage } from './language-context'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin } from 'lucide-react'

const educationItems = [
  { key: 'sustech' },
  { key: 'cuhksz' },
  { key: 'gdtc' },
]

export default function EducationSection() {
  const { t, language } = useLanguage()
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 text-center mb-16">{t('education.title')}</h2>

        <div className="grid grid-cols-1 gap-8">
          {educationItems.map((item, idx) => {
            const institution = t(`education.${item.key}.institution`)
            const role = t(`education.${item.key}.role`)
            const program = t(`education.${item.key}.program`)
            const location = t(`education.${item.key}.location`)
            const period = t(`education.${item.key}.period`)

            const instTag = item.key === 'sustech'
              ? t('education.sustech.tag')
              : item.key === 'cuhksz'
              ? t('education.cuhksz.tag')
              : ''
            const programTag = item.key === 'gdtc' ? t('education.gdtc.programTag') : ''

            return (
              <div key={idx} className="bg-white rounded-2xl shadow p-8 card-hover">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif font-bold text-xl text-gray-900">{institution}</h3>
                  {instTag && !instTag.startsWith('education.') && (
                    <Badge variant="secondary">{instTag}</Badge>
                  )}
                </div>
                {role && !role.startsWith('education.') && <p className="text-blue-600 font-medium mt-1">{role}</p>}
                {program && !program.startsWith('education.') && (
                  <div className="text-gray-700 mt-2 flex items-center justify-between">
                    <p>{program}</p>
                    {item.key === 'gdtc' && programTag && !programTag.startsWith('education.') && (
                      <Badge variant="outline">{programTag}</Badge>
                    )}
                  </div>
                )}
                <div className="text-gray-500 text-sm mt-3 flex items-center gap-6">
                  {period && (
                    <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{period}</span>
                  )}
                  {location && !location.startsWith('education.') && (
                    <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{location}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {language === 'zh' && (
          <div className="mt-10 bg-white rounded-2xl shadow p-8">
            <p className="text-gray-800 leading-relaxed">
              {t('education.coreCourses')}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
