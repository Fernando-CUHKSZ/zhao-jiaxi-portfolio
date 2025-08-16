import CNNCExperienceDetail from '@/components/cnnc-experience-detail'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CNNC Shenzhen Kaili Group Experience | Zhao Jiaxi Portfolio',
  description: 'Detailed view of research and development experience at CNNC Shenzhen Kaili Group Co., Ltd., including SD-WAN network architecture and cybersecurity defense systems.',
}

export default function CNNCExperiencePage() {
  return <CNNCExperienceDetail />
}