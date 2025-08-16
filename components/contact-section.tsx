'use client'
import { Mail, Phone, Calendar, MapPin } from "lucide-react"
import { useLanguage } from './language-context'

export default function ContactSection() {
  const { t, language } = useLanguage()
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-gray-900 text-center mb-16">{t('contact.title')}</h2>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">{language === 'zh' ? '赵嘉熙' : 'Zhao Jiaxi'}</h3>
            <p className="text-gray-600 text-lg">{t('contact.role')}</p>
            <p className="text-blue-600 font-medium mt-2">{t('contact.award')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t('contact.email')}</p>
                  <p className="text-gray-600">zhaojx2077@outlook.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t('contact.phone')}</p>
                  <p className="text-gray-600">136 2305 7783</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t('contact.born')}</p>
                  <p className="text-gray-600">November 24, 2001</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t('contact.location')}</p>
                  <p className="text-gray-600">{language === 'zh' ? '深圳, 中国' : 'Shenzhen, China'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
