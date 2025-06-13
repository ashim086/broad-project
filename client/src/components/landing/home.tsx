'use client'

import React from 'react'
import Header from './header'
import HeroSection from './heroSection'
import SecondPage from './secondPage'
import SupplementOfferPage from './ThirdPage'
import FourthPage from './FourthPage'
import Fifth from './Fifth'
import Footer from '../layout/Footer'

function Home() {


    return (

        <div className="lg:h-screen lg:snap-y lg:snap-mandatory lg:overflow-y-scroll lg:scroll-smooth overflow-hidden">
            <section className="snap-start h-screen">
                <Header />
                <HeroSection />
            </section>

            <section className="snap-start h-screen">
                <SecondPage />
            </section>

            <section className="snap-start h-screen">
                <SupplementOfferPage />
            </section>

            <section className="snap-start h-screen">
                <FourthPage />
            </section>

            <section className="snap-start h-screen">
                <Fifth />
            </section>

            <section className="snap-start h-screen bg-gray-900 text-white flex justify-center content-center w-screen align-bottom">
                <Footer />
            </section>
        </div>
    )
}

export default Home