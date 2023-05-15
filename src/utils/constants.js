import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'HMO Store’s mission has been to help Australians transform their houses into fabulous homes without breaking the bank. Their promise comes with affordable pricing for everyone and quality to make it worth the buy',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'A new eCommerce storefront with industry-leading functionality, offering customers the latest inventory details from each of the 70+ store locations around Australia based on the customers geo-Location',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'From humble beginnings in 2023,HMO Store’s goals included a migration from a legacy eCommerce platform to Salesforce Commerce Cloud (SFCC) B2C, and a marketing platform migration to Salesforce Marketing Cloud',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
