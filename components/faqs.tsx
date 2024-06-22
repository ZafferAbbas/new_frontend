export default function Faqs() {
  return (
  <section className="relative">

    {/* Blurred shape */}
    <div className="absolute top-0 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-50 pointer-events-none -z-10" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs3-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#bs3-a)" fillRule="evenodd" d="m410 0 461 369-284 58z" transform="matrix(1 0 0 -1 -410 427)" />
      </svg>
    </div>

    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">

        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <div>
            <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">Getting started with Yeasti</div>
          </div>
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Everything you need to know</h2>
        </div>

        {/* Columns */}
        <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What is Yeasti?</h4>
              <p className="text-slate-400">Yeasti simplifies your menu management with a user-friendly digital platform, making it easy to create, edit, and showcase your offerings across the alcohol industry.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">What features does Yeasti offer?</h4>
              <p className="text-slate-400">Yeasti enables quick menu modifications, straightforward inventory tracking, and seamless creation of digital and printable menus, all in one intuitive interface.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Does Yeasti cater to different business sizes?</h4>
              <p className="text-slate-400">Absolutely. Yeasti's one-size-fits-all approach means businesses of all sizes benefit from full access to our comprehensive suite of tools without the worry of scale-based pricing.</p>
            </div>

          </div>

          {/* Column */}
          <div className="w-full md:w-1/2 space-y-8">

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Can I customize my digital menu with Yeasti?</h4>
              <p className="text-slate-400">With Yeasti's toolkit, customize your menus for both digital displays and print with ease. Design a unique aesthetic that matches your brand's vibe and keeps your offerings current with minimal effort.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">Is it easy to update my menu with Yeasti?</h4>
              <p className="text-slate-400">With just a few clicks, Yeasti makes it effortless to add new items, adjust prices, or change descriptions, keeping your menu current and your customers informed.</p>
            </div>

            {/* Item */}
            <div className="space-y-2">
              <h4 className="font-semibold">How does Yeasti help streamline operations?</h4>
              <p className="text-slate-400">Yeasti offers drag-and-drop simplicity for arranging menus, as well as options for setting timed discounts and promotions to attract and delight customers.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  </section>
  )
}