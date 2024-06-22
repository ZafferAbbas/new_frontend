export default function Features04() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* Blurred shape */}
        <div className="absolute top-0 -mt-24 left-0 -ml-16 blur-2xl opacity-70 pointer-events-none -z-10" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
            <defs>
              <linearGradient id="bs4-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path fill="url(#bs4-a)" fillRule="evenodd" d="m0 0 461 369-284 58z" transform="matrix(1 0 0 -1 0 427)" />
          </svg>
        </div>

        <div className="pt-16 pb-12 md:pt-32 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Why Trust Yeasti?</h2>
            <p className="text-lg text-slate-400">Yeasti is built on a foundation of trust, driven by industry expertise, and fortified by advanced security measures. Our commitment to providing a reliable and robust platform is why businesses in the alcohol industry choose us.</p>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800">
            {/* Row */}
            <div className="py-8 first-of-type:pt-0 last-of-type:pb-0">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">Uncompromised Security</div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 650" width="16" height="16">
                      <path d="M575,500h-75c-13.81,0-25-11.18-25-25s11.19-25,25-25h75c68.92,0,125-56.08,125-125s-56.08-125-125-125c-1.11,0-2.2-.05-3.22,.05-12.5,1.78-24.17-6.45-27.26-18.65-19.68-77.37-89.38-131.4-169.52-131.4-96.5,0-175,78.52-175,175,0,7.57-3.42,15.97-9.3,20.7-5.89,4.74-13.66,7.86-20.99,6.22-5.89-1.27-12.51-1.93-19.7-1.93-55.14,0-100,44.85-100,100s44.86,100,100,100h100c13.81,0,25,11.18,25,25s-11.19,25-25,25h-100C67.29,500,0,432.71,0,350S67.87,199.73,151.61,200C164.98,86.62,260.06,0,375,0c96.46,0,181.19,60.96,212.37,150.44,90.75,6.35,162.63,82.22,162.63,174.56s-78.5,175-175,175Z"/>
                      <path d="M375,650c-4.45,0-8.91-1.2-12.86-3.56l-50-30c-54.56-32.72-87.14-85.6-87.14-141.43v-125c0-11.92,8.41-22.17,20.09-24.51l125-25c3.25-.64,6.57-.64,9.81,0l125,25c11.68,2.34,20.09,12.6,20.09,24.51v125c0,55.84-32.58,108.72-87.14,141.43l-49.99,30c-3.96,2.37-8.41,3.57-12.87,3.57Zm-100-279.52v104.52c0,38.11,23.5,74.95,62.86,98.56l37.14,22.29,37.13-22.29c39.37-23.61,62.87-60.45,62.87-98.56v-104.52l-100-20-100,20Z"/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Data Encryption</h4>
                  </div>
                  <p className="text-sm text-slate-400">Safeguarding your sensitive information with industry-leading encryption protocols.</p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 666.67 666.67" width="16" height="16" style={{ stroke: 'rgb(156, 163, 175)' }} stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="33.33 566.67 166.67 566.67 300 366.67" style={{ fill: 'none', strokeWidth: '66.67px' }}/>
                      <path d="M100,333.33c0,18.41,14.92,33.33,33.33,33.33H466.67c18.41,0,33.33-14.92,33.33-33.33v-100H100v100Zm500-200h-66.67l-33.33,100v33.33h100c18.41,0,33.33-14.92,33.33-33.33v-66.67c0-18.41-14.92-33.33-33.33-33.33Z" style={{ fill: 'none', strokeWidth: '66.67px' }}/>
                      <path d="M33.33,633.33v-133.33M566.67,33.33H66.67c-18.41,0-33.33,14.92-33.33,33.33V200c0,18.41,14.92,33.33,33.33,33.33H500l66.67-200Z" style={{ fill: 'none', strokeWidth: '66.67px' }}/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Continuous Monitoring</h4>
                  </div>
                  <p className="text-sm text-slate-400">Proactively defending your system with 24/7 surveillance for real-time threat detection.</p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 666.67 800" width="16" height="16">
                      <path d="M666.67,800H0V66.67H166.67V0H500V66.67h166.67V800ZM66.67,733.33H600V133.33h-100v100H166.67v-100H66.67V733.33ZM233.33,166.67h200V66.67H233.33v100Zm66.67,446.67l-123.33-123.33,46.67-46.67,76.67,76.67,176.67-176.67,46.67,46.67-223.33,223.33Z"/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Compliance and Standards</h4>
                  </div>
                  <p className="text-sm text-slate-400">Meeting rigorous industry compliance to secure your operations.</p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">Deep Industry Expertise</div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 522.5 662.02" width="16" height="19">
                      <path d="M473.17,252.02h-32.33v-54.67c10.93-16.25,16.74-35.41,16.67-55,.06-2.56-.06-5.12-.33-7.67-2.84-34.28-23.65-64.47-54.67-79.33-25.14-12.06-54.2-12.91-80-2.33C291.43,1.29,224.3-15.46,172.57,15.62c-15.34,9.22-28.19,22.06-37.4,37.4-17.69-7.4-37.18-9.37-56-5.67-32.46,5.72-59.67,27.77-72,58.33-12.34,30.51-8.58,65.17,10,92.33v380.67c0,46.02,37.31,83.33,83.33,83.33H357.5c46.02,0,83.33-37.31,83.33-83.33v-33l30.33-12c31.05-12.25,51.43-42.28,51.33-75.67v-157c-.2-27.11-22.22-48.98-49.33-49Zm-65.67,326.67c0,27.61-22.39,50-50,50H100.5c-27.61,0-50-22.39-50-50V309.02c17.62,15.96,40.56,24.76,64.33,24.67,4.33,0,8.33-.33,12.33-.67v211.33c0,9.2,7.46,16.67,16.67,16.67s16.67-7.46,16.67-16.67v-219.33c.05-.79-.06-1.59-.33-2.33,30.74-16.13,50.65-47.32,52.33-82h147.33c16.72,.03,33.16-4.34,47.67-12.67v350.67Zm-.33-392.33c-12.19,13.26-29.33,20.86-47.33,21H206.17c-12.45-.2-23.38,8.24-26.33,20.33-.4,2.2-.63,4.43-.67,6.67,.44,24.79-13.09,47.72-35,59.33-31.83,15.94-70.57,3.06-86.51-28.77-4.44-8.87-6.78-18.64-6.82-28.56-.02-8.87,1.91-17.63,5.67-25.67,3.5-7.71,1.76-16.79-4.33-22.67-18.32-18.54-23.71-46.28-13.67-70.33,8.09-19.71,25.69-33.92,46.67-37.67,4.19-.65,8.43-.99,12.67-1,9.95-.05,19.76,2.23,28.67,6.67,6.02,3.28,13.11,4,19.67,2,6.48-2.13,11.89-6.66,15.13-12.67,18.82-37.37,64.38-52.41,101.75-33.58,14.5,7.31,26.28,19.08,33.58,33.58,2.99,6.02,8.28,10.58,14.67,12.67,6.53,1.98,13.57,1.38,19.67-1.67,31.35-16.2,69.9-3.91,86.1,27.44,3.84,7.44,6.19,15.55,6.9,23.89,1.7,17.99-4.42,35.84-16.8,49h0Zm82,271.67c.08,19.82-12.14,37.62-30.67,44.67l-17.33,7.33v-224.67h32c8.72-.04,15.85,6.95,16,15.67v157Z"/>
                      <path d="M313.87,561.02c-9.2,0-16.67-7.46-16.67-16.67v-219.33c0-9.2,7.46-16.67,16.67-16.67s16.67,7.46,16.67,16.67v219.33c0,9.2-7.46,16.67-16.67,16.67Z"/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Brewing Mastery</h4>
                  </div>
                  <p className="text-sm text-slate-400">Expertise that refines production processes and enhances product quality.</p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6Z" />
                    </svg>
                    <h4 className="font-medium text-slate-50">Market Acumen</h4>
                  </div>
                  <p className="text-sm text-slate-400">Insights drawn from deep market analysis to anticipate trends and consumer behavior.</p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 799.41 697.27" width="16" height="14">
                      <path d="M399.71,0C297.17,0,194.82,39.06,116.89,116.99c-155.86,155.86-155.86,409.77,0,565.62,19.53,19.53,51.17,19.53,70.7,0,19.53-19.53,19.53-51.17,0-70.7-117.58-117.58-117.58-306.64,0-424.22,117.58-117.58,306.64-117.58,424.22,0,98.63,98.63,114.45,247.66,47.66,362.3-12.89,22.27-28.71,42.97-47.66,61.91-19.53,19.53-19.53,51.17,0,70.7,19.53,19.53,51.17,19.53,70.7,0,155.86-155.86,155.86-409.77,0-565.62C604.59,39.06,502.25,0,399.71,0Zm259.77,550l-18.16-68.16-141.6-81.84c0-35.74-19.14-68.55-50-86.52-47.85-27.54-108.98-11.13-136.52,36.52-27.73,47.85-11.33,109.18,36.52,136.72,30.86,17.77,68.95,17.58,99.8-.2l141.8,81.84,68.16-18.36Z"/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Operational Excellence</h4>
                  </div>
                  <p className="text-sm text-slate-400">Experience in streamlining operations to boost efficiency and profitability.</p>
                </div>
              </div>
            </div>
            {/* Row */}
            <div className="py-8">
              <div>
                <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-6">Commitment to Customer Success</div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-2">
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 653.34 666.67" width="16" height="16">
                      <path d="M593.33,272.67C583,166.67,520.33,0,326.67,0S70.33,166.67,60,272.67C23.75,286.42-.16,321.23,0,360v46.67C0,458.21,41.79,500,93.33,500s93.33-41.79,93.33-93.33v-46.67c-.17-37.94-23.2-72.02-58.33-86.33,6.67-61.33,39.33-207,198.33-207s191.33,145.67,198,207c-35.06,14.34-57.98,48.45-58,86.33v46.67c.14,35.83,20.72,68.44,53,84-14,26.33-49.67,62-137.33,72.67-17.52-26.61-51.43-37.1-80.92-25.04-29.49,12.06-46.32,43.31-40.17,74.57s33.56,53.8,65.42,53.8c25.18-.14,48.13-14.45,59.33-37,143-16.33,188.67-90,203-133.33,38.78-12.56,64.86-48.91,64.33-89.67v-46.67c.16-38.77-23.75-73.58-60-87.33ZM120,406.67c0,14.73-11.94,26.67-26.67,26.67s-26.67-11.94-26.67-26.67v-46.67c0-9.53,5.08-18.33,13.33-23.09,8.25-4.76,18.42-4.76,26.67,0,8.25,4.76,13.33,13.57,13.33,23.09v46.67Zm413.33-46.67c0-14.73,11.94-26.67,26.67-26.67s26.67,11.94,26.67,26.67v46.67c0,14.73-11.94,26.67-26.67,26.67s-26.67-11.94-26.67-26.67v-46.67Z"/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Dedicated Support</h4>
                  </div>
                  <p className="text-sm text-slate-400">Access to a knowledgeable support team ready to assist you at any time.</p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.33 666.67" width="16" height="16">
                      <path d="M297.33,487.33c-.73-2.12-1.74-4.14-3-6-1.23-1.75-2.57-3.42-4-5-9.59-9.46-23.92-12.22-36.33-7-4.09,1.59-7.83,3.97-11,7-1.43,1.58-2.77,3.25-4,5-1.26,1.86-2.27,3.88-3,6-.96,1.89-1.64,3.91-2,6-.15,2.22-.15,4.45,0,6.67-.11,4.37,.8,8.71,2.67,12.67,1.69,4.04,4.06,7.76,7,11,6.13,6.08,14.37,9.54,23,9.67,4.37,.11,8.71-.8,12.67-2.67,8.37-3.03,14.97-9.63,18-18,1.87-3.96,2.78-8.29,2.67-12.67,.15-2.22,.15-4.45,0-6.67-.57-2.13-1.47-4.15-2.67-6Zm236-256c-.35-3.06-1.02-6.08-2-9v-3c-1.6-3.43-3.74-6.58-6.33-9.33h0L325,10h0c-2.76-2.59-5.91-4.73-9.33-6.33h-3c-3.39-1.94-7.13-3.19-11-3.67H100C44.77,0,0,44.77,0,100v466.67c0,55.23,44.77,100,100,100H433.33c55.23,0,100-44.77,100-100V231.33Zm-200-117.67l86.33,86.33h-53c-18.41,0-33.33-14.92-33.33-33.33v-53Zm133.33,453c0,18.41-14.92,33.33-33.33,33.33H100c-18.41,0-33.33-14.92-33.33-33.33V100c0-18.41,14.92-33.33,33.33-33.33h166.67v100c0,55.23,44.77,100,100,100h100v300Zm-200-266.67c-18.41,0-33.33,14.92-33.33,33.33v66.67c0,18.41,14.92,33.33,33.33,33.33s33.33-14.92,33.33-33.33v-66.67c0-18.41-14.92-33.33-33.33-33.33Z"/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Training and Resources</h4>
                  </div>
                  <p className="text-sm text-slate-400">Comprehensive training materials and resources to maximize platform utilization.</p>
                </div>
                {/* Feature */}
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <svg className="shrink-0 fill-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 792.5 783.75" width="16" height="16">
                      <path d="M396.25,256.88c-82.5,0-150,67.5-150,150s67.5,150,150,150,150-67.5,150-150-67.5-150-150-150Zm0,250c-55,0-100-45-100-100s45-100,100-100,100,45,100,100-45,100-100,100Z"/>
                      <path d="M396.25,624.38c-93.13,0-182.5,38.75-246.25,106.87l-16.88,18.13,36.25,34.38,16.88-18.13c55-58.75,129.38-91.25,210-91.25s155,32.5,210,91.25l16.87,18.13,36.25-34.38-16.87-18.13c-63.75-67.5-153.12-106.87-246.25-106.87Z"/>
                      <path d="M602.5,293.75v50c58.75,0,113.12,23.75,153.75,66.87l36.25-34.38c-48.75-52.5-118.13-82.5-190-82.5Z"/>
                      <path d="M721.87,119.38c0-65.62-53.75-119.38-119.37-119.38s-119.37,53.75-119.37,119.38,53.75,119.37,119.37,119.37,119.37-53.75,119.37-119.37Zm-188.75,0c0-38.13,31.25-69.38,69.37-69.38s69.37,31.25,69.37,69.38-31.25,69.38-69.37,69.38-69.37-31.25-69.37-69.38Z"/>
                      <path d="M190,293.75c-71.88,0-141.25,30-190,82.5l36.25,34.38c40-43.13,95-66.88,153.75-66.88v-50Z"/>
                      <path d="M309.37,119.38C309.37,53.75,255.62,0,190,0S70.62,53.75,70.62,119.38s53.75,119.37,119.38,119.37,119.37-53.75,119.37-119.37Zm-119.37,69.38c-38.13,0-69.38-31.25-69.38-69.38s31.25-69.38,69.38-69.38,69.37,31.25,69.37,69.38-31.25,69.38-69.37,69.38Z"/>
                    </svg>
                    <h4 className="font-medium text-slate-50">Community Engagement</h4>
                  </div>
                  <p className="text-sm text-slate-400">An active community for sharing best practices and fostering industry connections.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}