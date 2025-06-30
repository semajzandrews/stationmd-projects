import Link from "next/link"

export default function MobileApp() {
  return (
    <main className="min-h-screen bg-[#f5f7fa] flex items-center justify-center">
      {/* Back to Projects Button */}
      <Link href="/" className="fixed top-5 right-5 z-[1000] bg-gradient-to-br from-[#4A72A0] to-[#5a82b0] text-white py-3 px-5 rounded-[25px] flex items-center gap-2 font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-[#3a5f8a] hover:to-[#4a72a0] hover:-translate-y-0.5 active:translate-y-0 active:shadow-md no-underline">
        <svg className="back-icon w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Back to Projects</span>
      </Link>

      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#4A72A0]">Coming Soon</h1>
      </div>
    </main>
  )
}