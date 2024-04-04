import React from 'react'
import MainCrosel from '../../components/MainCrosel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCrosel></MainCrosel>
        <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px10'>
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/> 
           <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Shoes"}/> 
           <HomeSectionCarosel data={mens_kurta} sectionName={"Mens's Shirt"}/> 
           <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Saree"}/> 
           <HomeSectionCarosel data={mens_kurta} sectionName={"Women's Dress"}/> 
           {/* <HomeSectionCarosel/> 
           <HomeSectionCarosel/> 
           <HomeSectionCarosel/>  */}
        </div>
    </div>
  )
}

export default HomePage