"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AppointmentConfirmationEmail } from "@/components/email-templates/appointment-confirmation"
import { MissedAppointmentEmail } from "@/components/email-templates/missed-appointment"
import { MonthlyNewsletterEmail } from "@/components/email-templates/monthly-newsletter"
import { WelcomeEmail } from "@/components/email-templates/welcome-email"
import { EmployeeChecklistEmail } from "@/components/email-templates/employee-checklist"
import { TrainingCompletionEmail } from "@/components/email-templates/training-completion"

export default function EmailMarketing() {
  const featuredWorkRef = useRef<HTMLElement>(null)
  const featuredTitlesRef = useRef<HTMLDivElement>(null)
  const indicatorContainerRef = useRef<HTMLDivElement>(null)
  const prevBtnRef = useRef<HTMLButtonElement>(null)
  const nextBtnRef = useRef<HTMLButtonElement>(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const numTitles = 6

  // Effect for GSAP animation and DOM updates
  useEffect(() => {
    if (!featuredWorkRef.current || !featuredTitlesRef.current || !indicatorContainerRef.current) return

    const featuredTitles = featuredTitlesRef.current
    const indicatorContainer = indicatorContainerRef.current
    const prevBtn = prevBtnRef.current
    const nextBtn = nextBtnRef.current

    const updateCarousel = () => {
      const slideWidth = featuredTitles.querySelector('.featured-title-wrapper')?.getBoundingClientRect().width || window.innerWidth
      const xPosition = -currentIndex * slideWidth
      
      gsap.to(featuredTitles, {
        x: xPosition,
        duration: 0.8,
        ease: "power2.inOut"
      })

      if (prevBtn) prevBtn.disabled = currentIndex === 0
      if (nextBtn) nextBtn.disabled = currentIndex === numTitles - 1

      const indicators = indicatorContainer.querySelectorAll("div")
      const progress = (numTitles > 1) ? currentIndex / (numTitles - 1) : 0
      const progressPerIndicator = 1 / indicators.length

      indicators.forEach((indicator, index) => {
        const indicatorStart = index * progressPerIndicator
        const indicatorOpacity = progress >= indicatorStart ? 1 : 0.2
        gsap.to(indicator, {
          opacity: indicatorOpacity,
          duration: 0.3,
        })
      })
    }

    updateCarousel()
  }, [currentIndex])

  // Effect for initial setup
  useEffect(() => {
    if (!indicatorContainerRef.current) return

    const indicatorContainer = indicatorContainerRef.current
    
    // Add Font Awesome CSS
    if (!document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
      document.head.appendChild(link)
    }

    // Add mobile styles
    if (!document.querySelector('#email-mobile-styles')) {
      const style = document.createElement('style')
      style.id = 'email-mobile-styles'
      style.innerHTML = `
        .mobile-only { display: none; }
        .desktop-only { display: table; }
        
        @media only screen and (max-width: 480px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: block !important; }
          .kl-column { display: block !important; width: 100% !important; }
          .content-padding { padding-left: 18px !important; padding-right: 18px !important; }
        }
      `
      document.head.appendChild(style)
    }

    // Create indicators
    indicatorContainer.innerHTML = ""
    for (let section = 1; section <= numTitles; section++) {
      const sectionNumber = document.createElement("p")
      sectionNumber.className = "uppercase text-sm font-medium leading-[1.125] text-[#f5f7fa]"
      sectionNumber.textContent = `0${section}`
      sectionNumber.addEventListener('click', () => setCurrentIndex(section - 1))
      indicatorContainer.appendChild(sectionNumber)

      if (section < numTitles) {
        for (let i = 0; i < 10; i++) {
          const indicator = document.createElement("div")
          indicator.className = "w-full h-[1.5px] bg-[#f5f7fa] opacity-20"
          indicatorContainer.appendChild(indicator)
        }
      }
    }

    return () => {
      ScrollTrigger.refresh()
    }
  }, [])

  const handlePrev = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : 0))
  }

  const handleNext = () => {
    setCurrentIndex(prev => (prev < numTitles - 1 ? prev + 1 : prev))
  }

  return (
    <main className="min-h-screen bg-white text-[#141414] font-sans overflow-hidden">
      {/* Back to Projects Button */}
      <a href="/" className="fixed top-5 right-5 z-[1000] bg-gradient-to-br from-[#4A72A0] to-[#5a82b0] text-white py-3 px-5 rounded-[25px] flex items-center gap-2 font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#3a5f8a] hover:to-[#4a72a0] hover:-translate-y-0.5 active:translate-y-0 active:shadow-md no-underline">
        <svg className="back-icon w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back to Projects</span>
      </a>

      <section ref={featuredWorkRef} className="featured-work relative w-screen min-h-screen">
        {/* Navigation Buttons */}
        <div className="carousel-nav">
          <button 
            ref={prevBtnRef}
            id="prev-btn" 
            onClick={handlePrev}
            className="fixed top-1/2 left-8 transform -translate-y-1/2 z-[100] bg-gradient-to-br from-[#4A72A0] to-[#5a82b0] text-white border-none p-4 cursor-pointer text-2xl rounded-full w-16 h-16 flex justify-center items-center disabled:opacity-30 disabled:cursor-not-allowed hover:from-[#3a5f8a] hover:to-[#4a72a0] hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            ref={nextBtnRef}
            id="next-btn" 
            onClick={handleNext}
            className="fixed top-1/2 right-20 transform -translate-y-1/2 z-[100] bg-gradient-to-br from-[#4A72A0] to-[#5a82b0] text-white border-none p-4 cursor-pointer text-2xl rounded-full w-16 h-16 flex justify-center items-center disabled:opacity-30 disabled:cursor-not-allowed hover:from-[#3a5f8a] hover:to-[#4a72a0] hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div ref={featuredTitlesRef} className="featured-titles relative w-[600vw] min-h-screen flex will-change-transform">
          {/* Email Template 1: Appointment Confirmation */}
          <div className="featured-title-wrapper flex-1 flex flex-col justify-start items-center pt-20 min-h-screen">
            <AppointmentConfirmationEmail />
          </div>

          {/* Email Template 2: Missed Appointment */}
          <div className="featured-title-wrapper flex-1 flex flex-col justify-start items-center pt-20 min-h-screen">
            <MissedAppointmentEmail />
          </div>
          
          {/* Email Template 3: Monthly Newsletter */}
          <div className="featured-title-wrapper flex-1 flex flex-col justify-start items-center pt-20 min-h-screen">
            <MonthlyNewsletterEmail />
          </div>
          
          {/* Email Template 4: Welcome Email */}
          <div className="featured-title-wrapper flex-1 flex flex-col justify-start items-center pt-20 min-h-screen">
            <WelcomeEmail />
          </div>
          
          {/* Email Template 5: Employee Checklist */}
          <div className="featured-title-wrapper flex-1 flex flex-col justify-start items-center pt-20 min-h-screen">
            <EmployeeChecklistEmail />
          </div>
          
          {/* Email Template 6: Training Completion */}
          <div className="featured-title-wrapper flex-1 flex flex-col justify-start items-center pt-20 min-h-screen">
            <TrainingCompletionEmail />
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div ref={indicatorContainerRef} className="featured-work-indicator fixed top-1/2 right-8 transform translate-x-0 -translate-y-1/2 w-8 max-h-max py-5 px-[0.65rem] bg-[#141414] text-[#f5f7fa] rounded-[40px] flex flex-col justify-center items-center gap-[0.35rem] z-[100]">
        </div>
      </section>
    </main>
  )
}