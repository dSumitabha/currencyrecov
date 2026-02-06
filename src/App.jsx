import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '@/components/Header'
import Marquee from './components/Marquee'

function App() {
    return (
        <>
            <div className="min-h-screen dark:bg-cyber-black">
                <Header />
                <Marquee />
            </div>
        </>
    )
}

export default App
