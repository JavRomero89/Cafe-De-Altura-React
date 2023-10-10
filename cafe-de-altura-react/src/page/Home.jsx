import React from 'react'
import Wrapper from '../components/Wrapper'
import CardInfo from '../components/cardInfo'
import Footer from '../components/Footer'
import FeatureSection from '../components/FeatureSection'
import Faqs from '../components/Faqs'
import ProductList from '../components/ProductList'
import SectionForm from '../components/SectionForm'
import DeliveryAddress from '../components/DeliveryAddress'




const Home = () => {
  return (
    <div>
        <Wrapper/>
        <CardInfo/>
        <ProductList/>
        <Faqs/>
        <FeatureSection/>
        <DeliveryAddress/>
        <SectionForm/>
        <Footer/>
        
        
    </div>
  )
}

export default Home