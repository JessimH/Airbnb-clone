import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className="home">
            <Banner />
            <div className="home__section">
                <Card
                    src="https://www.challenges.fr/assets/img/2018/03/09/cover-r4x3w1000-5cf543474ae31-san-francisco-6866584-living-room.jpg"
                    title="Entire Homes"
                    description="Comfortable private places, with romm for friends or family."
                />
                <Card
                    src="https://beyondphilosophy.com/wp-content/uploads/2019/10/0.jpg"
                    title="Entire Homes"
                    description="Comfortable private places, with romm for friends or family."
                />
                <Card
                    src="https://www.fodors.com/wp-content/uploads/2019/08/airbnb-hero-.jpg"
                    title="Entire Homes"
                    description="Comfortable private places, with romm for friends or family."
                />
            </div>
        </div>
    )
}

export default Home
