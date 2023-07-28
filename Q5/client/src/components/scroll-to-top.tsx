import React from 'react'
import { FaChevronUp } from 'react-icons/fa'

import useScrollY from '@/hooks/use-scroll-y'

const ScrollToTop: React.FC = () => {
  const scrollY = useScrollY()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 right-4">
      <button
        type="button"
        className={`bg-zinc-400 hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-lg transition duration-300 ${
          scrollY > 500 ? 'translate-y-0' : 'translate-y-20'
        }`}
        onClick={scrollToTop}
      >
        <FaChevronUp className="w-6 h-6" />
      </button>
    </div>
  )
}

export default ScrollToTop
