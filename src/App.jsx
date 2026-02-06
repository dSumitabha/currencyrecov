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
                <TextStatement />
            </div>
        </>
    )
}

export default App
