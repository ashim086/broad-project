import React from 'react'
import TopStock from './topstock/TopStock'
import FeaturedStock from './featured/featured'

function HomePage() {
    return (
        <main>

            <TopStock />
            <FeaturedStock />
        </main>
    )
}

export default HomePage