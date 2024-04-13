'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'
import { Pill } from 'lucide-react'

const Hero = () => {
  const TEXTS = [
    'Accupuncture',
    'Massage',
    'Chiropractor',
    'Dental',
    'Dietician',
    'Occupational Thertapist',
  ]
  return (
    <>
      <div className="relative   bg-background pb-[60px] pt-[80px] lg:pt-[100px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-6/12">
              <div className="w-full ">
                <h1 className="text-dark  mb-12 flex flex-wrap items-center gap-3 text-4xl font-bold !leading-[1.208] dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  <span className="mr-2 ">Book your</span>
                  {/* <TransitionalText className="" TEXTS={TEXTS} /> */}
                  <span className="text-primary">Dental</span>
                  <br />
                  <span>sessions now</span>
                </h1>
                <p className="text-body-color dark:text-dark-6 mb-12 max-w-[480px] text-base">
                  Health shouldn&apos;t be a puzzle. We are offering simple,
                  affordable, and transparent healtcare.
                </p>
                {/* SSearch Bar here */}
                <div className="justify-start">
                  <SearchBar />
                </div>

                {/* CTA Buttons */}
                <ul className="mt-12 flex flex-wrap items-center">
                  <li>
                    <Link
                      href="/#"
                      className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-primary/70 hover:text-slate-900 lg:px-7"
                    >
                      I need a doctor urgently
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-primary  hover:text-slate-600 "
                    >
                      <span className="mr-2">
                        <Pill className="h-5 w-5 flex-shrink-0" />
                      </span>
                      I need a prescription refill
                    </Link>
                  </li>
                </ul>
                <div className="flex gap-4 py-4 pt-12">
                  <div className="flex flex-col">
                    <span className="font-bold">600</span>
                    <span className="text-sm text-muted-foreground">
                      Active Specialists
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="font-bold">1800</span>
                    <span className="text-sm text-muted-foreground">
                      Active Patients
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <Image
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    width="550"
                    height="550"
                    sizes="100vw"
                    alt="hero"
                    priority
                    className="h-auto w-[550px] max-w-full lg:ml-auto"
                  />
                  <span className="absolute -bottom-8 -left-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
