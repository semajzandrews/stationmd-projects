"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export function PortfolioHome() {
  const featuredWorkRef = useRef<HTMLElement>(null)
  const featuredTitlesRef = useRef<HTMLDivElement>(null)
  const indicatorContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!featuredWorkRef.current || !featuredTitlesRef.current || !indicatorContainerRef.current) return

    const featuredTitles = featuredTitlesRef.current
    const indicatorContainer = indicatorContainerRef.current
    const numTitles = 4

    // Clear existing indicators
    indicatorContainer.innerHTML = ""

    // Dynamically create the indicator bars
    for (let section = 1; section <= numTitles; section++) {
      const sectionNumber = document.createElement("p")
      sectionNumber.className = "uppercase text-sm font-medium leading-[1.125] text-[#f5f7fa]"
      sectionNumber.textContent = `0${section}`
      indicatorContainer.appendChild(sectionNumber)

      if (section < numTitles) {
        for (let i = 0; i < 10; i++) {
          const indicator = document.createElement("div")
          indicator.className = "w-full h-[1.5px] bg-[#f5f7fa] opacity-20"
          indicatorContainer.appendChild(indicator)
        }
      }
    }

    const moveDistance = window.innerWidth * (numTitles - 1)

    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: featuredWorkRef.current,
      start: "top top",
      end: `+=${window.innerHeight * (numTitles - 1)}px`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const xPosition = -moveDistance * self.progress
        gsap.set(featuredTitles, {
          x: xPosition,
        })

        const indicators = indicatorContainer.querySelectorAll("div")
        const totalIndicators = indicators.length
        const progressPerIndicator = 1 / totalIndicators

        indicators.forEach((indicator, index) => {
          const indicatorStart = index * progressPerIndicator
          const indicatorOpacity = self.progress > indicatorStart ? 1 : 0.2

          gsap.to(indicator, {
            opacity: indicatorOpacity,
            duration: 0.3,
          })
        })

        // Handle click indicators
        const clickIndicators = document.querySelectorAll(".click-indicator")
        const currentTitleIndex = Math.round(self.progress * (numTitles - 1))
        
        clickIndicators.forEach((clickIndicator, index) => {
          if (index === currentTitleIndex) {
            clickIndicator.classList.remove('opacity-0')
            clickIndicator.classList.add('opacity-100')
          } else {
            clickIndicator.classList.remove('opacity-100')
            clickIndicator.classList.add('opacity-0')
          }
        })
      },
    })

    // Add hover effects for title links
    const titleLinks = document.querySelectorAll('.featured-title-link')
    titleLinks.forEach(link => {
      const title = link.querySelector('h1')
      if (title) {
        link.addEventListener('mouseenter', () => {
          gsap.to(title, { 
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          })
        })
        
        link.addEventListener('mouseleave', () => {
          gsap.to(title, { 
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          })
        })
      }
    })

    return () => {
      scrollTriggerInstance.kill()
      ScrollTrigger.refresh()
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#f5f7fa] text-[#141414] font-sans overflow-x-hidden">
      <section ref={featuredWorkRef} className="featured-work relative w-screen min-h-screen overflow-x-hidden overflow-y-auto">
        <div ref={featuredTitlesRef} className="featured-titles relative w-[400vw] min-h-screen flex will-change-transform">
          {/* Email Marketing */}
          <div className="flex-1 flex flex-col justify-center items-center p-8 min-h-screen">
            <div className="featured-title-wrapper">
              <Link href="/email-marketing" className="featured-title-link relative text-[#141414] no-underline group">
                <h1 className="featured-title text-center uppercase italic leading-[0.95] text-[5rem] transform-none">
                  Email Marketing
                </h1>
                <div className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-[#141414] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              </Link>
              <Link href="/email-marketing" className="click-indicator relative flex flex-col items-center gap-3 mt-8 opacity-100 transition-all duration-500 hover:transform hover:-translate-y-1 z-50 no-underline text-inherit cursor-pointer">
                <div className="finger-pointer text-[2.5rem] rotate-45 animate-pulse">👇</div>
                <div className="click-text text-[#141414] text-base font-semibold uppercase tracking-wider text-center animate-pulse">
                  Click to Enter
                </div>
              </Link>
            </div>
          </div>
          
          {/* StationConnect */}
          <div className="flex-1 flex flex-col justify-center items-center p-8 min-h-screen">
            <div className="featured-title-wrapper">
              <Link href="/station-connect" className="featured-title-link relative text-[#141414] no-underline group">
                <h1 className="featured-title text-center uppercase italic leading-[0.95] text-[5rem] transform-none">
                  StationConnect 2.0
                </h1>
                <div className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-[#141414] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              </Link>
              <Link href="/station-connect" className="click-indicator relative flex flex-col items-center gap-3 mt-8 opacity-0 transition-all duration-500 hover:transform hover:-translate-y-1 z-50 no-underline text-inherit cursor-pointer">
                <div className="finger-pointer text-[2.5rem] rotate-45 animate-pulse">👇</div>
                <div className="click-text text-[#141414] text-base font-semibold uppercase tracking-wider text-center animate-pulse">
                  Click to Enter
                </div>
              </Link>
            </div>
          </div>
          
          {/* Mobile App */}
          <div className="flex-1 flex flex-col justify-center items-center p-8 min-h-screen">
            <div className="featured-title-wrapper">
              <Link href="/mobile-app" className="featured-title-link relative text-[#141414] no-underline group">
                <h1 className="featured-title text-center uppercase italic leading-[0.95] text-[5rem] transform-none">
                  Mobile App
                </h1>
                <div className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-[#141414] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              </Link>
              <Link href="/mobile-app" className="click-indicator relative flex flex-col items-center gap-3 mt-8 opacity-0 transition-all duration-500 hover:transform hover:-translate-y-1 z-50 no-underline text-inherit cursor-pointer">
                <div className="finger-pointer text-[2.5rem] rotate-45 animate-pulse">👇</div>
                <div className="click-text text-[#141414] text-base font-semibold uppercase tracking-wider text-center animate-pulse">
                  Click to Enter
                </div>
              </Link>
            </div>
          </div>
          
          {/* Documentations */}
          <div className="flex-1 flex flex-col justify-center items-center p-8 min-h-screen">
            <div className="featured-title-wrapper">
              <Link href="/documentations" className="featured-title-link relative text-[#141414] no-underline group">
                <h1 className="featured-title text-center uppercase italic leading-[0.95] text-[5rem] transform-none">
                  Documentations
                </h1>
                <div className="absolute bottom-[-5px] left-0 w-full h-[3px] bg-[#141414] scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></div>
              </Link>
              <Link href="/documentations" className="click-indicator relative flex flex-col items-center gap-3 mt-8 opacity-0 transition-all duration-500 hover:transform hover:-translate-y-1 z-50 no-underline text-inherit cursor-pointer">
                <div className="finger-pointer text-[2.5rem] rotate-45 animate-pulse">👇</div>
                <div className="click-text text-[#141414] text-base font-semibold uppercase tracking-wider text-center animate-pulse">
                  Click to Enter
                </div>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div ref={indicatorContainerRef} className="featured-work-indicator fixed top-1/2 right-8 transform translate-x-0 -translate-y-1/2 w-8 max-h-max py-5 px-[0.65rem] bg-[#141414] text-[#f5f7fa] rounded-[40px] flex flex-col justify-center items-center gap-[0.35rem] z-[100]">
        </div>
      </section>
    </main>
  )
}