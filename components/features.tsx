'use client'

import { useState } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Particles from './particles'
import Illustration from '@/public/images/glow-top.svg'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Illustration */}
        <div className="absolute inset-0 -z-10 -mx-28 rounded-t-[3rem] pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10">
            <Image src={Illustration} className="max-w-none" width={1404} height={658} alt="Features Illustration" />
          </div>
        </div>

        <div className="pt-16 pb-12 md:pt-52 md:pb-20">

          <div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">

              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none max-md:text-center" data-aos="fade-down">
                {/* Content #1 */}
                <div>
                  <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Revolutionizing the Beverage Scene</div>
                </div>
                <h3 className="h3 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-3">Dynamic Digital Menus at Your Command</h3>
                <p className="text-lg text-slate-400 mb-8">Embrace the art of simplicity with our digital menu platform, where intuitive design meets lightning-fast updates. Designed with a focus on user experience, our platform empowers bars and restaurants to effortlessly manage and present their beverage selections, allowing for instant menu modifications with just a few clicks. Experience the ease of a system that works with you to keep your service ahead of the curve.</p>
                <div className="mt-8 max-w-xs max-md:mx-auto space-y-2">
                <button className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 1 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'}`} onClick={() => setTab(1)}>
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="16" height="16">
                    <g transform="translate(64, 64)">
                      <path d="M536,136v400H136V136H536z M304.4,236h-39l-74,200h35.1l14-39.1h88.5l13.7,39.1H380L304.4,236z M442.4,236h-35v200h35V236z M284.6,269.6l34.9,99.8h-69.2L284.6,269.6z M569.3,436H636v66.7h-66.7V436z M169.3,569.3H236V636h-66.7V569.3z M302.7,569.3h66.7V636h-66.7V569.3z M169.3,36H236v66.7h-66.7V36z M436,569.3h66.7V636H436V569.3z M302.7,36h66.7v66.7h-66.7V36z M436,36h66.7v66.7H436V36z M569.3,302.7H636v66.7h-66.7V302.7z M36,436h66.7v66.7H36V436z M569.3,169.3H636V236h-66.7V169.3z M36,302.7h66.7v66.7H36V302.7z M36,169.3h66.7V236H36V169.3z" className="st0" fillRule="evenodd" clipRule="evenodd"/>
                    </g>
                  </svg>
                  <span>Live Menu Syncs</span>
                </button>
                <button className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 2 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'}`} onClick={() => setTab(2)}>
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="16" height="16">
                    <path d="M516.7,550c18.4,0,33.3-14.9,33.3-33.3v-50h25c13.8,0,25-11.2,25-25s-11.2-25-25-25h-25v-33.3h25c13.8,0,25-11.2,25-25s-11.2-25-25-25h-25v-50c0-18.4-14.9-33.3-33.3-33.3h-50v-25c0-13.8-11.2-25-25-25s-25,11.2-25,25v25h-33.3v-25c0-13.8-11.2-25-25-25s-25,11.2-25,25v25h-50c-18.4,0-33.3,14.9-33.3,33.3v50h-25c-13.8,0-25,11.2-25,25s11.2,25,25,25h25v33.3h-25c-13.8,0-25,11.2-25,25s11.2,25,25,25h25v50c0,18.4,14.9,33.3,33.3,33.3h50v25c0,13.8,11.2,25,25,25s25-11.2,25-25v-25h33.3v25c0,13.8,11.2,25,25,25s25-11.2,25-25v-25H516.7z M300,300h200v200H300V300z"/>
                    <rect x="350" y="350" width="100" height="100"/>
                    <g>
                      <path d="M760,311.7l-76.7-63.3V125c-0.1-6.5-4-12.4-10-15l-165-75h-6.7l-10,3.3l-8.3,5v100c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25V120l83.3,38.3v123.3l25,20l58.3,46.7v103.3l-58.3,46.7l-25,20v123.3L533.3,680v-21.7c0-13.8-11.2-25-25-25c-13.8,0-25,11.2-25,25v100l8.3,5l10,3.3h6.7l165-75c6-2.6,9.9-8.5,10-15v-125l76.7-63.3c4.4-2.9,7-8,6.7-13.3V325C767.4,319.6,764.7,314.3,760,311.7z"/>
                      <path d="M298.3,33.3h-6.7l-165,76.7c-6,2.6-9.9,8.5-10,15v123.3L40,311.7c-4.7,2.7-7.4,7.9-6.7,13.3v150c-0.3,5.3,2.2,10.4,6.7,13.3l76.7,63.3V675c0.1,6.5,4,12.4,10,15l165,75h6.7l10-3.3l8.3-5v-100c0-13.8-11.2-25-25-25s-25,11.2-25,25v21.7L183.3,640V518.3l-25-20L100,451.7V348.3l58.3-46.7l25-20V158.3l83.3-38.3v21.7c0,13.8,11.2,25,25,25s25-11.2,25-25v-100l-8.3-5L298.3,33.3z"/>
                    </g>
                  </svg>
                  <span>Drag-and-Drop Interface</span>
                </button>
                <button className={`flex items-center text-sm font-medium text-slate-50 rounded border bg-slate-800/25 w-full px-3 py-2 transition duration-150 ease-in-out hover:opacity-100 ${tab !== 3 ? 'border-slate-700 opacity-50' : 'border-purple-700 shadow shadow-purple-500/25'}`} onClick={() => setTab(3)}>
                  <svg className="shrink-0 fill-slate-300 mr-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 700 700">
                    <path d="M625,550c-11.14,.06-22.13,2.63-32.14,7.52l-107.51-107.52h-85.35v50h64.65l92.86,92.87c-4.89,10.01-7.45,20.99-7.51,32.13,0,41.42,33.58,75,75,75s75-33.58,75-75-33.58-75-75-75Zm0,100c-13.81,0-25-11.19-25-25s11.19-25,25-25,25,11.19,25,25c-.01,13.8-11.2,24.99-25,25Z"/>
                    <path d="M625,275c-31.68,.1-59.87,20.12-70.39,50h-154.61v50h154.61c13.88,38.95,56.71,59.27,95.66,45.39,38.95-13.88,59.27-56.71,45.39-95.66-10.64-29.87-38.95-49.79-70.65-49.73Zm0,100c-13.81,0-25-11.19-25-25s11.19-25,25-25,25,11.19,25,25c-.01,13.8-11.2,24.99-25,25Z"/>
                    <path d="M625,0c-41.4,.05-74.95,33.6-75,75,.09,11.98,3.07,23.75,8.7,34.33l-93.81,90.67h-64.89v50h85.11l109.97-106.31c37.95,16.54,82.13-.81,98.68-38.77,16.54-37.95-.81-82.13-38.77-98.68C645.53,2.12,635.32,0,625,0Zm0,100c-13.81,0-25-11.19-25-25s11.19-25,25-25,25,11.19,25,25c-.01,13.8-11.2,24.99-25,25Z"/>
                    <path d="M400,100h50V50h-50c-28.83,.1-56.19,12.71-75,34.56-18.81-21.85-46.17-34.46-75-34.56h-25C100.79,50.14,.14,150.79,0,275v150c.14,124.21,100.79,224.86,225,225h25c28.83-.1,56.19-12.71,75-34.56,18.81,21.85,46.17,34.46,75,34.56h50v-50h-50c-27.6-.03-49.97-22.4-50-50V150c.03-27.6,22.4-49.97,50-50Zm-150,500h-25c-86.9-.15-160.54-64-173-150h48v-50H50v-100H125c41.4-.05,74.95-33.6,75-75v-50h-50v50c-.01,13.8-11.2,24.99-25,25H52c12.46-86,86.1-149.85,173-150h25c27.6,.03,49.97,22.4,50,50v100h-50v50h50v100h-50c-41.4,.05-74.95,33.6-75,75v50h50v-50c.01-13.8,11.2-24.99,25-25h50v100c-.03,27.6-22.4,49.97-50,50Z"/>
                  </svg>
                  <span>Customizable Themes</span>
                </button>
                </div>
              </div>

              {/* Image */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-up" data-aos-delay="100">
                <div className="relative py-24 -mt-12">

                  {/* Particles animation */}
                  <Particles className="absolute inset-0 -z-10" quantity={8} staticity={30} />

                  <div className="flex items-center justify-center">
                    <div className="relative w-48 h-48 flex justify-center items-center">
                      {/* Halo effect */}
                      <svg className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none blur-md" width="480" height="480" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="pulse-a" x1="50%" x2="50%" y1="100%" y2="0%">
                            <stop offset="0%" stopColor="#A855F7" />
                            <stop offset="76.382%" stopColor="#FAF5FF" />
                            <stop offset="100%" stopColor="#6366F1" />
                          </linearGradient>
                        </defs>
                        <g fillRule="evenodd">
                          <path className="pulse" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                          <path className="pulse pulse-1" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                          <path className="pulse pulse-2" fill="url(#pulse-a)" fillRule="evenodd" d="M240,0 C372.5484,0 480,107.4516 480,240 C480,372.5484 372.5484,480 240,480 C107.4516,480 0,372.5484 0,240 C0,107.4516 107.4516,0 240,0 Z M240,88.8 C156.4944,88.8 88.8,156.4944 88.8,240 C88.8,323.5056 156.4944,391.2 240,391.2 C323.5056,391.2 391.2,323.5056 391.2,240 C391.2,156.4944 323.5056,88.8 240,88.8 Z" />
                        </g>
                      </svg>
                      {/* Grid */}
                      <div className="absolute inset-0 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[500px] h-[500px] rounded-full overflow-hidden [mask-image:_radial-gradient(black,_transparent_60%)]">
                        <div className="h-[200%] animate-endless">
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.white)_48px,_theme(colors.white)_49px)] blur-[2px] opacity-20" />
                          <div className="absolute inset-0 [background:_repeating-linear-gradient(90deg,transparent,_transparent_48px,_theme(colors.purple.500)_48px,_theme(colors.purple.500)_49px)]" />
                        </div>
                      </div>
                      {/* Icons */}
                      <Transition
                        show={tab === 1}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg className="relative fill-slate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="48" height="48">
                            <g transform="translate(64, 64)">
                              <path d="M536,136v400H136V136H536z M304.4,236h-39l-74,200h35.1l14-39.1h88.5l13.7,39.1H380L304.4,236z M442.4,236h-35v200h35V236z M284.6,269.6l34.9,99.8h-69.2L284.6,269.6z M569.3,436H636v66.7h-66.7V436z M169.3,569.3H236V636h-66.7V569.3z M302.7,569.3h66.7V636h-66.7V569.3z M169.3,36H236v66.7h-66.7V36z M436,569.3h66.7V636H436V569.3z M302.7,36h66.7v66.7h-66.7V36z M436,36h66.7v66.7H436V36z M569.3,302.7H636v66.7h-66.7V302.7z M36,436h66.7v66.7H36V436z M569.3,169.3H636V236h-66.7V169.3z M36,302.7h66.7v66.7H36V302.7z M36,169.3h66.7V236H36V169.3z" fillRule="evenodd" clipRule="evenodd" />
                            </g>
                          </svg>
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 2}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                        <svg className="relative fill-slate-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="48" height="48">
                          <path d="M516.7,550c18.4,0,33.3-14.9,33.3-33.3v-50h25c13.8,0,25-11.2,25-25s-11.2-25-25-25h-25v-33.3h25c13.8,0,25-11.2,25-25s-11.2-25-25-25h-25v-50c0-18.4-14.9-33.3-33.3-33.3h-50v-25c0-13.8-11.2-25-25-25s-25,11.2-25,25v25h-33.3v-25c0-13.8-11.2-25-25-25s-25,11.2-25,25v25h-50c-18.4,0-33.3,14.9-33.3,33.3v50h-25c-13.8,0-25,11.2-25,25s11.2,25,25,25h25v33.3h-25c-13.8,0-25,11.2-25,25s11.2,25,25,25h25v50c0,18.4,14.9,33.3,33.3,33.3h50v25c0,13.8,11.2,25,25,25s25-11.2,25-25v-25h33.3v25c0,13.8,11.2,25,25,25s25-11.2,25-25v-25H516.7z M300,300h200v200H300V300z" fillRule="evenodd" clipRule="evenodd"/>
                          <rect x="350" y="350" width="100" height="100"/>
                          <g>
                            <path d="M760,311.7l-76.7-63.3V125c-0.1-6.5-4-12.4-10-15l-165-75h-6.7l-10,3.3l-8.3,5v100c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25V120l83.3,38.3v123.3l25,20l58.3,46.7v103.3l-58.3,46.7l-25,20v123.3L533.3,680v-21.7c0-13.8-11.2-25-25-25c-13.8,0-25,11.2-25,25v100l8.3,5l10,3.3h6.7l165-75c6-2.6,9.9-8.5,10-15v-125l76.7-63.3c4.4-2.9,7-8,6.7-13.3V325C767.4,319.6,764.7,314.3,760,311.7z"/>
                            <path d="M298.3,33.3h-6.7l-165,76.7c-6,2.6-9.9,8.5-10,15v123.3L40,311.7c-4.7,2.7-7.4,7.9-6.7,13.3v150c-0.3,5.3,2.2,10.4,6.7,13.3l76.7,63.3V675c0.1,6.5,4,12.4,10,15l165,75h6.7l10-3.3l8.3-5v-100c0-13.8-11.2-25-25-25s-25,11.2-25,25v21.7L183.3,640V518.3l-25-20L100,451.7V348.3l58.3-46.7l25-20V158.3l83.3-38.3v21.7c0,13.8,11.2,25,25,25s25-11.2,25-25v-100l-8.3-5L298.3,33.3z"/>
                          </g>
                        </svg>
                        </div>
                      </Transition>
                      <Transition
                        show={tab === 3}
                        className="absolute"
                        enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                        enterFrom="opacity-0 -rotate-[60deg]"
                        enterTo="opacity-100 rotate-0"
                        leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                        leaveFrom="opacity-100 rotate-0"
                        leaveTo="opacity-0 rotate-[60deg]"
                      >
                        <div className="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl -rotate-[14deg] [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl">
                          <svg className="relative fill-slate-200" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 700 700">
                            <path d="M625,550c-11.14,.06-22.13,2.63-32.14,7.52l-107.51-107.52h-85.35v50h64.65l92.86,92.87c-4.89,10.01-7.45,20.99-7.51,32.13,0,41.42,33.58,75,75,75s75-33.58,75-75-33.58-75-75-75Zm0,100c-13.81,0-25-11.19-25-25s11.19-25,25-25,25,11.19,25,25c-.01,13.8-11.2,24.99-25,25Z"/>
                            <path d="M625,275c-31.68,.1-59.87,20.12-70.39,50h-154.61v50h154.61c13.88,38.95,56.71,59.27,95.66,45.39,38.95-13.88,59.27-56.71,45.39-95.66-10.64-29.87-38.95-49.79-70.65-49.73Zm0,100c-13.81,0-25-11.19-25-25s11.19-25,25-25,25,11.19,25,25c-.01,13.8-11.2,24.99-25,25Z"/>
                            <path d="M625,0c-41.4,.05-74.95,33.6-75,75,.09,11.98,3.07,23.75,8.7,34.33l-93.81,90.67h-64.89v50h85.11l109.97-106.31c37.95,16.54,82.13-.81,98.68-38.77,16.54-37.95-.81-82.13-38.77-98.68C645.53,2.12,635.32,0,625,0Zm0,100c-13.81,0-25-11.19-25-25s11.19-25,25-25,25,11.19,25,25c-.01,13.8-11.2,24.99-25,25Z"/>
                            <path d="M400,100h50V50h-50c-28.83,.1-56.19,12.71-75,34.56-18.81-21.85-46.17-34.46-75-34.56h-25C100.79,50.14,.14,150.79,0,275v150c.14,124.21,100.79,224.86,225,225h25c28.83-.1,56.19-12.71,75-34.56,18.81,21.85,46.17,34.46,75,34.56h50v-50h-50c-27.6-.03-49.97-22.4-50-50V150c.03-27.6,22.4-49.97,50-50Zm-150,500h-25c-86.9-.15-160.54-64-173-150h48v-50H50v-100H125c41.4-.05,74.95-33.6,75-75v-50h-50v50c-.01,13.8-11.2,24.99-25,25H52c12.46-86,86.1-149.85,173-150h25c27.6,.03,49.97,22.4,50,50v100h-50v50h50v100h-50c-41.4,.05-74.95,33.6-75,75v50h50v-50c.01-13.8,11.2-24.99,25-25h50v100c-.03,27.6-22.4,49.97-50,50Z"/>
                          </svg>
                        </div>
                      </Transition>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}