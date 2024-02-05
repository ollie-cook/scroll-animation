'use client'

import "./page.css"
import { useState, useEffect } from "react"
import FromSide from "./components/FromSide"
import Disperse from "./components/Disperse"

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [viewHeight, setViewHeight] = useState(0)

  useEffect(() => {
    setViewHeight(window.innerHeight)
    console.log(window.innerHeight)

    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position)
    }

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      // cleanup
      document.removeEventListener('scroll', handleScroll);
    };
  }, [])


  return (
    <main className="main-colour-scroll min-h-[200vh]">
      <div className="relative h-[200vh] w-full">
        <div className={`${scrollPosition > viewHeight ? 'absolute' : 'fixed'} bottom-[50vh] translate-y-1/2 left-[50vw] -translate-x-1/2`}>
          <h1 className="text-6xl text-white font-bold "> 
            Learning Scroll-Driven Animations
          </h1>
          <p className="p-colour-scroll text-xl font-bold text-center mt-4">
            Firstly the background colour changes as you scroll down the page.
          </p>
          <p className="p-opacity-scroll text-lg mt-2 absolute right-0">
            &#x2B11; And so did the colour of that text
          </p>
          
        </div>
      </div>
      <FromSide />
      <Disperse />
    </main>
  );
}

//${scrollPosition > viewHeight ? 'absolute' : 'fixed'}