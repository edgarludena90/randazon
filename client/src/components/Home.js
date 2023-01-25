import React from "react";
import seafood from "../assets/seafood.jpg"
import burger from "../assets/burger.jpg"
import chinchorro from "../assets/chinchorro.jpg"
import drinks from "../assets/drinks.jpg"
import pasta from "../assets/pasta.jpg"
import {MDBCarousel,MDBCarouselItem} from 'mdb-react-ui-kit';

const Home = () => {

    return (
        <div>
            <MDBCarousel showControls showIndicators>
                <MDBCarouselItem
                    className='w-100 img-home'
                    itemId={1}
                    src={seafood}
                    alt='...'
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-90  img-home'
                    itemId={2}
                    src={chinchorro}
                    alt='...'
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-90  img-home'
                    itemId={3}
                    src={pasta}
                    alt='...'
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-90  img-home'
                    itemId={4}
                    src={burger}
                    alt='...'
                >
                </MDBCarouselItem>
                <MDBCarouselItem
                    className='w-90  img-home'
                    itemId={5}
                    src={drinks}
                    alt='...'
                >
                </MDBCarouselItem>
            </MDBCarousel>
        </div>
    )
}

export default Home;