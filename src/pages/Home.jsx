import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import TopWearsForWomen from '../components/Products/TopWearsForWomen'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'


const Home = () => {
  return (
    <div className='pt-[124px]'>
        <Hero></Hero>
        <GenderCollectionSection/>
        <NewArrivals/>
        <FeaturedCollection/>
        <FeaturesSection/>
    </div>
  )
}

export default Home