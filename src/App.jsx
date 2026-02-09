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
import WalletAuthority from './components/WalletAuthority'
import InfoGrid from './components/InfoGrid'

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
                <HighlightSplit 
                    title="Quickly and safely fund your wallet from exchanges with simple, secure transfers"
                    description="Take full control of your wallet—skip the complications and deposit directly from leading exchanges like Binance, Coinbase, and more with ease and security."
                    image="Block Chain"
                />
                <TextStatement
                    title="Protect the confidentiality and security of your digital wallet"
                    description="Stay confident with cutting-edge privacy and security 
                    features that safeguard your data and digital assets, all while keeping
                    you fully in control."
                />
                <HighlightSplit 
                    title="Complete ownership and control of your wallet assets"
                    description="Your wallet is secured with state-of-the-art protection, but only you possess the private keys and recovery phrase — they stay completely out of our reach at all times."
                    image="Ownership"
                    order="order-2"
                />
                <TextStatement
                    title="Safeguard your privacy and stay fully protected"
                    description="Maintain full control through our strong privacy and security protocols, keeping your data and digital assets safe and secure."
                />
                <WalletAuthority />
                <InfoGrid />
            </div>
        </>
    )
}

export default App
