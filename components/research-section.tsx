"use client"

'use client'
import { useLanguage } from './language-context'

const researchItems = [
  {
    institution: "Southern University of Science and Technology",
    role: "Research Assistant",
    period: "2023.09–2024.04",
    activities: [
      "National innovation project guidance",
      "Patent coaching",
      "Competition coaching (digital twin)",
      "ZTE projects (multi-modal RAG)",
      "Academic branding",
      "Thesis supervision (OpenPose/MediaPipe tremor monitoring)",
    ],
  },
  {
    institution: "The Chinese University of Hong Kong, Shenzhen",
    role: "Visiting Student",
    period: "2024.09–2025.05",
    project: "School of Management and Economics",
    activities: [
      "IBA6316: GenAI and Business Applications - GPT-based Multi-Agent System for Factor Mining",
      "IBA6103: Economic Analytics - Meituan Rider Efficiency Analysis: Econometric Analysis of Delivery Rider Performance Across Different Scenarios",
      "IBA6307: AI for Decision-Making in Management - Rider-Order Matching Optimization: Machine Learning-based Optimization for Rider-Order Allocation Efficiency",
    ],
  },
]

export default function ResearchSection() {
  const { t } = useLanguage()
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 text-center mb-16">
          {t('research.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchItems.map((item, index) => (
            <div key={index} className={`bg-gray-50 rounded-2xl p-8 card-hover ${
              item.institution === "The Chinese University of Hong Kong, Shenzhen" 
                ? "md:col-span-2 lg:col-span-2" 
                : ""
            }`}>
              <div className="mb-6">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{item.institution}</h3>
                <p className="text-blue-600 font-medium mb-2">{item.role}</p>
                <p className="text-gray-500 text-sm">{item.period}</p>
                {item.project && <p className="text-gray-700 font-medium mt-2">{item.project}</p>}
              </div>

              <ul className="space-y-2 mb-4">
                {item.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{activity}</span>
                  </li>
                ))}
              </ul>

              {(item as { impact?: string }).impact && (
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-green-600 font-medium text-sm">{(item as { impact?: string }).impact}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
