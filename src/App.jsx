import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '@/components/Header'
import Marquee from '@/components/Marquee'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import SeacrhSection from '@/components/SearchSection'
import AdvantagesGrid from '@/components/AdvantegesGrid'
import TextStatement from './components/TextSection'
import HighlightSplit from './components/HighlightSplit'

function App() {
    return (
        <>
            <div className="min-h-screen dark:bg-cyber-black">
                <Header />
                <Marquee />
                <Hero />
                <Features />
                <SeacrhSection />
                <AdvantagesGrid />
                <TextStatement
                    title="Seamless, Secure, Effortless, Fast, Reliable, and Intuitive"
                    description="Experience seamless access across mobile and desktop with robust,
                    user-friendly tools designed to enhance your complete Web3 experience—
                    track assets, view rewards, and perform secure swaps anytime, anywhere,
                    backed by dependable support and real-time updates."
                />
                <HighlightSplit />
            </div>
        </>
    )
}

export default App
