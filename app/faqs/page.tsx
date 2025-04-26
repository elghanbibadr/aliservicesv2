import React from 'react'
import Faqs from '../componenets/Faqs'
import { allFaqs } from '../data/data'

const page = () => {
  return (
    <div>
     
        <Faqs faqsData={allFaqs} />
    </div>
  )
}

export default page