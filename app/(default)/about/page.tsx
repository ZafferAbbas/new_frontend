export const metadata = {
  title: 'About - Yeasti',
  description: 'Page description',
}

import Hero from '@/components/hero-about'
import Story from '@/components/story'
import Team from '@/components/team'
import Recruitment from '@/components/recruitment'
import Testimonials from '@/components/testimonials-02'
import Cta from '@/components/cta-05'

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Team />
      <Recruitment />
      <Testimonials />
      <Cta />
    </>
  )
}
