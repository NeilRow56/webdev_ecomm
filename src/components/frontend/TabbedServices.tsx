import React from 'react'
import { ServicesTabs } from './ServicesTabs'

const TabbedServices = () => {
  return (
    <section className="bg-slate-50 pb-12 pt-20 dark:bg-slate-900 lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-6xl text-center lg:mb-20">
              <h2 className="text-dark mb-3 text-2xl font-bold leading-[1.2] dark:text-white sm:text-3xl md:text-[40px]">
                Top-rated online doctors & specialists available now.
              </h2>
              <p className="text-body-color dark:text-dark-6 text-base">
                Choose from thousands of providers at everyday affordable
                prices. Book online today.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <ServicesTabs />
      </div>
    </section>
  )
}

export default TabbedServices
