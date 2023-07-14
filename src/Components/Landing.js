import { Banner } from "./Banner"
import { Categories } from "./Categories"
import { Discover } from "./Discover"
import { Footer } from "./Global/Footer"
import { Header } from "./Global/Header"
import { Pics } from "./Pics"
import { Product } from "./Products"
import { Sponsers } from "./Sponsers"
import { Story } from "./Story"
import { Testimonial } from "./Testimonial"
import { Trending } from "./Trending"
import { Video } from "./Video"
import { Whyus } from "./Whyus"

export const Landing = () => {
    return(
        <>
            <Header/>
            <Banner/>
            <Trending/>
            <Story/>
            <Sponsers/>
            <Whyus/>
            <Categories/>
            <Testimonial/>
            <Discover/>
            <Product/>
            <Video/>
            <Pics/>
            <Footer/>
        </>
    )
}