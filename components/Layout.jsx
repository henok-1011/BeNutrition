import React from 'react'
import {Header,Footer} from './'
import { useRouter } from "next/router";


function Layout({children}) {
  const router = useRouter()
  
  return (
    <>
      <div className="bgDecore absolute w-full"></div>

      <Header className='sticky top-0' />
    {children}
    <Footer/>
    </>
  )
}

export default Layout