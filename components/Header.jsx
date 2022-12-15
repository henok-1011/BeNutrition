import React, {useContext} from 'react'

import Link from 'next/link'

const Catagories = [{ name: "Contact", slug: "/contact" },  { name: "Health Test", slug: "/miniQuiz" },{ name: "About", slug: "/about" },
    { name: "Home", slug: "/" }]



function Header() {
    
  return (
    <>
          <header class="header lg:px-16 mb-8 px-8  flex flex-wrap items-center py-2 ">
              <div class="flex-1 flex justify-between items-center">
                  <a href="/" class="text-xl"><img className='h-20' src="/assests/logo.png" alt="" /></a>
              </div>

              <label for="menu-toggle" class="pointer-cursor md:hidden block">
                  <svg class="fill-current text-gray-900"
                      xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                      <title>menu</title>
                      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                  </svg>
              </label>
              <input class="hidden" type="checkbox" id="menu-toggle" />

              <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                  <nav>
                      <ul class="nav md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
                          <li><a class="md:p-4 py-3 px-0 block" href="/">Home</a></li>
                          <li><a class="md:p-4 py-3 px-0 block" href="/about">About</a></li>
                          <li><a class="md:p-4 py-3 px-0 block" href="/miniQuiz">Health Test</a></li>
                          <li><a class="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="/contact">Contact Us</a></li>
                      </ul>
                  </nav>
              </div>
          </header>

    </>
  )
}

export default Header