'use client'

import Link from 'next/link'
import { useLanguage } from './language-context'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Define the project keys that correspond to folders under /app and translation keys in language-context
const projectKeys = [
  'idtc3rd-competition',
  'jobbot-pro',
  'sony-aurionx',
  'federated-learning',
  'bain-consulting',
  'idtc-competition',
  'wis-brand-strategy',
]

export default function ProjectsSection() {
  const { t } = useLanguage()

  const projects = projectKeys.map((key) => {
    const { t } = useLanguage()
    const title = t(`projects.${key}.title`)
    const subtitle = t(`projects.${key}.subtitle`)
    const summary = t(`projects.${key}.summary`)
    const tagsStr = t(`projects.${key}.tags`)
    const functionsStr = t(`projects.${key}.functions`)
    const tags = tagsStr && !tagsStr.startsWith(`projects.`)
      ? tagsStr.split(',').map((s) => s.trim()).filter(Boolean)
      : []
    const functions = functionsStr && !functionsStr.startsWith(`projects.`)
      ? functionsStr.split(',').map((s) => s.trim()).filter(Boolean)
      : []

    return {
      key,
      title,
      subtitle,
      summary,
      tags,
      functions,
      href: `/${key}`,
    }
  })

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 text-center mb-16">{t('projects.title')}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.key} className="bg-gray-50 rounded-2xl shadow p-8 card-hover">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif font-bold text-xl text-gray-900">{p.title}</h3>
                  {p.subtitle && <p className="text-blue-600 font-medium mt-1">{p.subtitle}</p>}
                </div>
              </div>

              {p.summary && (
                <p className="text-gray-600 text-sm mt-4 leading-relaxed">{p.summary}</p>
              )}

              {(p.tags.length > 0 || p.functions.length > 0) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <Badge key={`tag-${p.key}-${tag}`} variant="secondary">{tag}</Badge>
                  ))}
                  {p.functions.map((fn) => (
                    <Badge key={`fn-${p.key}-${fn}`} variant="outline">{fn}</Badge>
                  ))}
                </div>
              )}

              <div className="mt-6 flex gap-3 items-center">
                <Button asChild>
                  <Link href={p.href} className="inline-flex items-center gap-2">
                    {t('projects.viewFullProject')}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
