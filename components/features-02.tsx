import Image from 'next/image'
import Particles from './particles'
import Highlighter, { HighlighterItem } from './highlighter'

import FeatureImg01 from '@/public/images/feature-image-01.png'
import FeatureImg02 from '@/public/images/feature-image-02.png'
import FeatureImg03 from '@/public/images/feature-image-03.png'

export default function Features02() {
  return (
    <section className="relative">

      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles className="absolute inset-0 -z-10" quantity={6} staticity={30} />    
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-32">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Swift. Intuitive. Tailored for the Beverage Experience.</h2>
            <p className="text-lg text-slate-400">Discover the simplicity of menu management with Yeasti's dedicated platform, designed for seamless integration into the vibrant world of the beverage industry. Engage with ease, update instantly, and captivate your clientele with a tailored digital encounter that makes every selection an experience to remember.</p>
          </div>

          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient id="bs2-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path fill="url(#bs2-a)" fillRule="evenodd" d="m346 898 461 369-284 58z" transform="translate(-346 -898)" />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div className="absolute right-0 top-0 blur-2xl" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="342" height="393">
                          <defs>
                            <linearGradient id="bs-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <path fill="url(#bs-a)" fillRule="evenodd" d="m104 .827 461 369-284 58z" transform="translate(0 -112.827)" opacity=".7" />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square" aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Real-Time Menu Management</h3>
                            <p className="text-slate-400">Keep your menu fresh and up-to-date with our live editing features. Instantly add or remove items, tweak descriptions, and adjust prices to respond to stock levels or special events, ensuring your customers always have the perfect choice at their fingertips.</p>
                          </div>
                        </div>
                        <div>
                          <a className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" href="#0">
                            <span className="relative inline-flex items-center">
                              Learn more <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <Image className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0" src={FeatureImg01} width="504" height="400" alt="Feature 01" />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #2 */}
              <div className="md:col-span-7" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Seamless User Experience</h3>
                          <p className="text-slate-400">Navigate your digital menu with unparalleled ease. Our intuitive design enables quick setup, simple editing, and hassle-free management. This means less time tinkering with tech and more time delighting your patrons.</p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src={FeatureImg02} width={536} height={230} alt="Feature 02" />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
              <div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square" aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">Menu Customization Tools</h3>
                          <p className="text-slate-400">Craft a menu that mirrors your brand's aesthetic with our customizable templates. Choose from a variety of layouts, fonts, and color schemes, or create your unique design to stand out. Engage customers with a visually appealing menu that tells your story.</p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0" src={FeatureImg03} width={230} height={230} alt="Feature 03" />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>

          {/* Features list */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 716.67 650" width="16" height="16">
                  <path d="M626.93,249.09c31.62-17.8,47.43-26.7,56.08-41.04,8.65-14.34,8.65-31.64,8.65-66.23v-22.99c0-44.23,0-66.34-14.64-80.08-14.65-13.74-38.22-13.74-85.36-13.74H125c-47.14,0-70.71,0-85.36,13.74-14.64,13.74-14.64,35.85-14.64,80.08v22.99c0,34.59,0,51.89,8.65,66.23,8.65,14.34,24.46,23.24,56.08,41.04l97.1,54.66c21.21,11.94,31.82,17.91,39.42,24.51,15.82,13.73,25.55,29.86,29.96,49.65,2.12,9.5,2.12,20.62,2.12,42.86v88.98c0,30.32,0,45.48,8.4,57.3,8.4,11.82,23.31,17.65,53.14,29.31,62.62,24.48,93.93,36.72,116.2,22.79,22.26-13.93,22.26-45.75,22.26-109.4v-88.98c0-22.24,0-33.36,2.12-42.86,4.41-19.79,14.15-35.92,29.96-49.65" 
                  style={{fill: "none", stroke: "white", strokeLinecap: "round", strokeMiterlimit: "133.33", strokeWidth: "50px"}} />
                </svg>
                <h4 className="font-medium text-slate-50">Tailored Promotions</h4>
              </div>
              <p className="text-sm text-slate-400">Craft special offers with personalized discounts, setting the right mood for happy hour or seasonal events. Our platform makes it easy to adjust pricing, ensuring patrons always have something new to look forward to.</p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 text-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 764.44" width="16" height="16">
                  <path fill="#fff" fillRule="evenodd" d="M109.48,153.33H0v-53.33H109.48C121.72,42.85,172.52,0,233.33,0s111.61,42.85,123.85,100h442.81v53.33H357.19c-12.25,57.15-63.05,100-123.85,100s-111.61-42.85-123.85-100Zm50.52-26.67c0-40.5,32.83-73.33,73.33-73.33s73.33,32.83,73.33,73.33-32.83,73.33-73.33,73.33-73.33-32.83-73.33-73.33ZM0,355.56H420.59c12.25-57.15,63.05-100,123.85-100s111.61,42.85,123.85,100h131.7v53.33h-131.7c-12.25,57.15-63.05,100-123.85,100s-111.61-42.85-123.85-100H0v-53.33Zm544.45-46.67c-40.5,0-73.33,32.83-73.33,73.33s32.83,73.33,73.33,73.33,73.33-32.83,73.33-73.33-32.83-73.33-73.33-73.33Zm-187.26,355.55c-12.25,57.15-63.05,100-123.85,100s-111.61-42.85-123.85-100H0v-53.33H109.48c12.25-57.15,63.05-100,123.85-100s111.61,42.85,123.85,100h442.81v53.33H357.19Zm-197.19-26.67c0-40.5,32.83-73.33,73.33-73.33s73.33,32.83,73.33,73.33-32.83,73.33-73.33,73.33-73.33-32.83-73.33-73.33Z"/>
                </svg>
                <h4 className="font-medium text-slate-50">Controlled Access</h4>
              </div>
              <p className="text-sm text-slate-400">Manage your team with confidence by assigning specific roles within the app. From bartenders to managers, ensure each staff member has the appropriate level of access to keep operations running smoothly.</p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 text-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 700" width="16" height="16">
                  <path fill="#fff" d="M400,425c0-27.62-22.38-50-50-50h-125V200h50V25h-25V0h-100V25h-25V200h50v175H50c-27.62,0-50,22.38-50,50v250H25v25H375v-25h25v-250ZM225,150h-50V75h50v75ZM50,425H350v200H50v-200Z"/>
                </svg>
                <h4 className="font-medium text-slate-50">Quick Configuration</h4>
              </div>
              <p className="text-sm text-slate-400">Get up and running in no time with a setup process that’s as straightforward as it is quick. Customize your digital menu to align with your workflow and the unique vibe of your establishment.</p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 text-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 666.67" width="16" height="16">
                  <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="66.67" d="M266.67,633.33H33.33c0-117.55,86.92-214.8,200-230.97m329.09,37.76c-2.27,.14-4.56,.21-6.86,.21-34.15,0-65.3-15.25-88.89-40.33-23.59,25.08-54.74,40.33-88.89,40.33-2.3,0-4.59-.07-6.86-.21-2.77,12.72-4.25,26.06-4.25,39.81,0,73.81,42.49,135.82,100,153.4,57.51-17.58,100-79.6,100-153.4,0-13.75-1.47-27.09-4.25-39.8ZM400,166.67c0,73.64-59.7,133.33-133.33,133.33s-133.33-59.7-133.33-133.33S193.03,33.33,266.67,33.33s133.33,59.7,133.33,133.33Z"/>
                </svg>
                <h4 className="font-medium text-slate-50">Efficient Inventory Control</h4>
              </div>
              <p className="text-sm text-slate-400">Keep a close eye on your offerings with tools that make managing your inventory a breeze. Track your stock levels, update your menu in real time, and never miss a chance to impress your customers with your latest brews.</p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Automated Menu Timers</h4>
              </div>
              <p className="text-sm text-slate-400">Schedule your menus for future updates and never worry about missing a special event or promotion. Our system allows you to pre-plan menu changes that automatically activate at your set times, keeping your offerings fresh and timely with zero hassle.</p>
            </div>
            {/* Feature */}
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="shrink-0 text-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800.2 799.94" width="16" height="16">
                  <path fill="#fff" d="M33.47,733.25C15.06,733.18,.07,748.04,0,766.45c0,.09,0,.18,0,.26,.06,18.41,15.04,33.28,33.45,33.22,0,0,.01,0,.02,0H766.73c18.41,.07,33.39-14.79,33.46-33.2,0,0,0-.01,0-.02,.07-18.41-14.79-33.39-33.2-33.47-.09,0-.18,0-.26,0H33.47Z"/>
                  <path fill="#fff" d="M146.65,499.99c-43.74,0-79.97,36.23-79.97,79.97v186.76c.07,18.41,15.04,33.28,33.45,33.22,0,0,0,0,0,0H233.51c18.32-.06,33.15-14.9,33.22-33.22v-186.76c0-43.75-36.23-79.97-79.97-79.97h-40.11Z"/>
                  <path fill="#fff" d="M380.17,386.55c-43.74,0-79.97,36.22-79.97,79.97v300.2c.06,18.32,14.9,33.15,33.22,33.22h133.37c18.32-.06,33.15-14.9,33.22-33.22V466.52c0-43.75-36.23-79.97-79.97-79.97h-39.86Z"/>
                  <path fill="#fff" d="M613.44,286.65c-43.74,0-79.97,36.23-79.97,79.97v400.1c.06,18.32,14.9,33.15,33.22,33.22h133.37c18.41,.07,33.39-14.8,33.47-33.21,0,0,0,0,0-.01V366.62c0-43.75-36.47-79.97-80.22-79.97h-39.86Z"/>
                  <path fill="#fff" d="M582.21,0c-18.33,.04-33.2,14.87-33.27,33.2-.07,18.41,14.79,33.39,33.2,33.46,.02,0,.04,0,.07,0h34.44C428.13,228.75,230.73,329.43,27.33,367.12c-18.05,3.42-29.93,20.8-26.56,38.87,3.3,18.04,20.55,30.02,38.61,26.82,219-40.58,429.73-149.4,627.47-321.03v39.26c-.07,18.41,14.79,33.39,33.2,33.46h0c18.41,.07,33.39-14.79,33.46-33.2,0-.09,0-.17,0-.26V52.86C733.52,24.09,709.16,0,680.39,0h-98.18Z"/>
                </svg>
                <h4 className="font-medium text-slate-50">Streamlined Interface</h4>
              </div>
              <p className="text-sm text-slate-400">Enjoy a platform that’s as pleasant to use as it is powerful. With an interface designed for intuitive interaction, you’ll spend less time on setup and more time delivering an exceptional experience to every patron.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}