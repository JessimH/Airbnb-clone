import React from 'react'
import './SearchPage.css'
import { Button } from '@material-ui/core'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays - 26 august to 30 august - 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and Beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult
                img="https://a0.muscache.com/im/pictures/06c92139-5f76-475a-9f63-a6f959fb7a7b.jpg?im_w=1200"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="30€ / nuits"
                total="117 €"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/06c92139-5f76-475a-9f63-a6f959fb7a7b.jpg?im_w=1200"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="30€ / nuits"
                total="117 €"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/06c92139-5f76-475a-9f63-a6f959fb7a7b.jpg?im_w=1200"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="30€ / nuits"
                total="117 €"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/06c92139-5f76-475a-9f63-a6f959fb7a7b.jpg?im_w=1200"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="30€ / nuits"
                total="117 €"
            />
            <SearchResult
                img="https://a0.muscache.com/im/pictures/06c92139-5f76-475a-9f63-a6f959fb7a7b.jpg?im_w=1200"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest - 1 bedroom - 1 bed - 1.5 shared bathrooms - Wifi - Kitchen - Free parking - Washing Machine"
                star={4.73}
                price="30€ / nuits"
                total="117 €"
            />
        </div>
    )
}

export default SearchPage
