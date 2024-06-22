export const metadata = {
  title: 'Customer Post - Yeasti',
  description: 'Page description',
}

import Link from 'next/link'
import Image from 'next/image'
import Illustration from '@/public/images/page-illustration.svg'
import CustomerBadge from '@/public/images/customer-badge.svg'
import Particles from '@/components/particles'
import RelatedPosts from './related-posts'

export default function CustomerSingle() {
  return (
    <section className="relative">

      {/* Radial gradient */}
      <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square" aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

      {/* Illustration */}
      <div className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10" aria-hidden="true">
        <Image src={Illustration} className="max-w-none" width={1440} height={427} alt="Page Illustration" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

          <div className="md:flex md:justify-between">

            {/* Page content */}
            <div className="md:grow pb-12 md:pb-20">
              <div className="max-w-3xl">

                <article className="pb-12 mb-12 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

                  {/* <div className="mb-4">
                    <Link className="inline-flex text-sm font-medium text-purple-500 group" href="/customers"><span className="tracking-normal group-hover:-translate-x-0.5 transition-transform duration-150 ease-in-out mr-1">&lt;-</span> Go Back</Link>
                  </div> */}

                  <header>
                    <h1 className="h2 inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Intelligent Interactions: How Our AI Assistant Transforms Customer Service</h1>
                    <div className="text-sm flex items-center space-x-4 mb-8">
                      <img className="rounded-full" src="../images/customer-avatar-03.jpg" width="32" height="32" alt="Customer Avatar 03" />
                      <div>
                        <div className="text-slate-300 font-medium">Tyler Cox</div>
                        <div className="text-slate-500">Head Adjunt Assassin</div>
                      </div>
                    </div>
                  </header>

                  {/* Post content */}
                  <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium prose-blockquote:pl-5 prose-blockquote:xl:-ml-5 prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:font-medium prose-blockquote:text-slate-300 prose-blockquote:italic">
                  <p>
                    <a href="#0">Adjunkd Brewing</a>, at the forefront of the craft beer revolution, harnesses cutting-edge AI technology to empower its team with real-time data insights. This internal AI assistant is transforming the way Adjunkd approaches brewing operations, sales strategies, and market adaptation.
                  </p>
                  <p>
                    By leveraging the AI assistant, <strong>Adjunkd Brewing can optimize production schedules</strong>, predict market demands, and ensure that their craft beers are always at peak freshness when reaching customers’ hands.
                  </p>
                  <h2>The Role of AI in Brewing Excellence</h2>
                  <p>
                    Tyler Cox, Co-Founder at Adjunkd Brewing, states:
                  </p>
                  <p>
                    Navigating the complexities of craft brewing requires a blend of art and science. Our AI assistant acts as a master brewer's sidekick, crunching numbers and predicting trends that keep our batches and business flowing smoothly.
                  </p>
                  <ul>
                    <li>
                      Predictive analytics for optimizing brewing schedules and ingredient ordering.
                    </li>
                    <li>
                      Demand forecasting to inform marketing and sales initiatives.
                    </li>
                    <li>
                      Advanced data analysis for continuous improvement of our brewing processes.
                    </li>
                  </ul>
                  <p>
                    With the AI assistant, <strong>Adjunkd Brewing ensures that strategic decisions are data-driven</strong>, allowing them to lead in an ever-evolving market with confidence and creativity.
                  </p>
                  <h2>AI-Driven Decision Making in Craft Brewing</h2>
                  <p>
                    The implementation of the AI assistant has empowered every level of Adjunkd's operations, from the taproom to the management team, leading to a significant increase in operational efficiency and customer satisfaction.
                  </p>
                  <blockquote>
                    <p>
                      “Our AI assistant is like having a master brewer who never sleeps. It’s always analyzing, always learning, ensuring that every decision we make is backed by solid data.”
                    </p>
                  </blockquote>
                  <p>
                    The AI isn't just a tool; it's a part of the Adjunkd family, ingrained in the brewery's culture and as essential to the brewing process as hops and barley.
                  </p>
                  <h2>Embracing AI Across the Brewery</h2>
                  <p>
                    Embracing the AI assistant across Adjunkd Brewing was a journey that involved demonstrating its capability to enhance operations, from improving beer quality to optimizing distribution. The adoption was a toast to the future of brewing and business intelligence.
                  </p>


                  </div>
                </article>

                {/* <RelatedPosts /> */}

              </div>
            </div>

            {/* Sidebar */}
            <aside className="md:w-64 lg:w-80 md:shrink-0 md:pt-[3.75rem] lg:pt-0 pb-12 md:pb-20">
              <div className="sticky top-6 md:pl-6 lg:pl-10">

                {/* Sidebar content */}
                <div className="space-y-6">

                  {/* Widget */}
                  <div className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800">
                    <div className="px-5 py-6">
                      <div className="mb-5">
                        <div className="flex items-center space-x-4">
                          {/* <Image src={CustomerBadge} width={64} height={64} alt="Customer badge" /> */}
                          <div className="text-lg font-semibold text-slate-100">Adjunkd Brewing</div>
                        </div>
                      </div>
                      <ul className="text-sm">
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Location</span>
                          <span className="text-slate-300 font-medium">Indianapolis</span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Website</span>
                          <a className="text-purple-500 font-medium flex items-center space-x-1" href="#0">
                            <span>adjunkdbrewing.com</span>
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="9" height="9">
                              <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Industry</span>
                          <span className="text-slate-300 font-medium">Brewery</span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Product</span>
                          <span className="text-slate-300 font-medium">Yeasti Production</span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 py-3 border-t [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Impact</span>
                          <span className="text-slate-300 font-medium">+18% </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>

              </div>
            </aside>

          </div>

        </div>
      </div>
    </section>
  )
}
