import Image from 'next/image'
import Team from '@/public/images/team.jpg'

export default function Story() {
  return (
    <section className="relative">

      {/* Blurred shape */}
      <div className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
          <defs>
            <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
              <stop offset="0%" stopColor="#A855F7"></stop>
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">Our story (so far)</h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg -rotate-[4deg]" src={Team} width={420} height={280} alt="Team" />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    Our journey began with a shared passion for the intricate dance of flavors and business in the alcohol industry. We, a group of enthusiasts and industry experts, were united by a common challenge — navigating the complex landscape of alcohol production, distribution, and sales. Yeasti was born from a desire not only to address our own needs but to empower every player in the market, from the artisan brewers and distillers to the bustling bars and expansive distributors.
                  </p>
                  <p>
                  Yeasti is more than a platform; it's a community hub that brings together individuals passionate about the craft and commerce of alcohol. It’s where <strong className="text-slate-50 font-medium">technology meets tradition</strong>, taking the rich heritage of brewing and distilling into a future where decisions are informed, precise, and impactful.
                  </p>
                  <p>
                  Our platform is the fabric weaving together countless threads of data, transforming them into insights that <strong className="text-slate-50 font-medium">drive growth and foster connections</strong>. We believe in creating a dialogue, a place where knowledge converges and becomes accessible, where every voice from the novice bartender to the seasoned distributor can be heard and valued.
                  </p>
                  <p>
                  The roots of Yeasti are entwined with a commitment to progress, drawing inspiration from both the time-honored methods of the past and the boundless potential of the future. We are not just following the footsteps of security and technology; we are laying down new paths in an industry ripe for innovation.
                  </p>
                  <p>
                  Every day at Yeasti is a new opportunity to learn, to experiment, and to lead. We're embracing the latest technologies to reimagine an age-old industry, excited by the endless possibilities to create, innovate, and transform. This isn't just about adapting to change; it's about being the catalyst, sparking a renaissance in an industry that's as dynamic as it is traditional.
                  </p>
                  <p>
                  Join us on this thrilling adventure as we redefine what it means to be at the forefront of the alcohol industry. Welcome to Yeasti, where every pour is informed by intelligence, and every sip is a testament to innovation.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}