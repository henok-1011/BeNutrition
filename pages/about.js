import Head from 'next/head'
import React from 'react'


function About() {
  return (
    <div className='about'>
        <Head>
        <title>Be nutrition coaching</title>
        <link rel="icon" href="/assests/logo.png" />
      </Head>
          <div className="relative inline-block text-center items-center justify-center  w-full">
              <div className="">
                  <img
                      
                      // loader={grpahCMSImageLoader}
                      alt="header"
                    //   height="30px"
                    //   width="30px"
                      className="about-img align-middle w-full"
                      src="assests/about-header.png"
                  />
                  <p className=" cnt absolute text-white ml-2 font-medium text-xl">About Be Nutrition Coaching</p>
              </div>
              </div>
          
          <div className='mission'>
              <section>
                  <div class="max-w-6xl mx-auto px-5 py-24 ">
                      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                          <h1 class=" title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl">Our Mission</h1>
                          <p class="lg:w-1/2 w-full leading-relaxed text-base font-semibold">
                              To help you <span className='text-green-500'>Be</span>  your best
                          </p>
                      </div>
                      <div class="flex flex-wrap -m-4">
                          <div class="xl:w-1/3 md:w-1/2 p-4">
                              <div class="p-6 rounded-lg">
                                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-4">
                                      <img src="assests/mission-svg-1.svg" alt="" />
                                  </div>
                                  <div>
                                    <h2 class="text-xl  font- title-font mb-2">Nutrition that works for you</h2>
                                  <p class="leading-relaxed text-base text-green-600">BE offers tailored nutrition plans with a variety of meal plans, coaching, and personalized support.</p>

                                  </div>
                                  
                            

                              </div>
                          </div>

                          <div class="xl:w-1/3 md:w-1/2 p-4">
                              <div class=" p-6 rounded-lg">
                                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4 italic">
                                      <img src="assests/mission-svg-2.svg" alt="" />
                                  </div>
                                  <h2 class="text-xl  font- title-font mb-2">Feeling your best self, one day at a time</h2>
                                  <p class="leading-relaxed text-base text-green-600">We'll work with you to set goals that are achievable, making sure you're getting enough sleep and focusing on stress relief </p>

                                  
                              </div>
                          </div>
                          <div class="xl:w-1/3 md:w-1/2 p-4">
                              <div class=" p-6 rounded-lg">
                                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full mb-4">
                                      <img src="assests/mission-svg-3.svg" alt="" />
                                      </div>
                                  <h2 class="text-xl  font- title-font mb-2">Personalized solutions</h2>
                                  <p class="leading-relaxed text-base text-green-600">We are dedicated to providing you with solutions that work for your body. We offer a variety of programs and packages that are customized to suit your needs.</p>

                                  

                              </div>
                          </div>
                      </div>
                  </div>
              </section>

          </div>
          <section class="about-us text-white body-font border-t border-gray-200">
              <div class="h-11/12 w-11/12 px-5 py-5 mx-auto md:flex flex-wrap justify-between sm:block">
                
                  <div class="lg:w-1/2 w-1/2  mb-10 lg:mb-0 rounded-lg overflow-hidden">
                      <div className='object-center h-full w-full py-4'>
                    <h2 class="text-white text-5xl title-font font-medium mb-3 wwa">Who We Are</h2>
                          <p class="leading-relaxed text-base mb-5">Be Nutrition Coaching offers simple, practical solutions to its clients' needs. we aim for our clients to reach their goals while gaining an understanding of the many complexities of nutrition in a way that is straightforward and realistic.
                              Be Nutrition goes beyond focusing on numbers and scales, and strives for its clients to heal their relationships with their bodies, food, fitness and overall health.</p>
                          <p class="leading-relaxed text-base mb-5">We are dedicated to providing you with solutions that work for your body. We offer a variety of programs and packages that are customized to suit your needs. No matter what your goal is, BE is here for you.</p>
                          <p class="leading-relaxed text-base mb-5">Whether it's coaching or just someone to talk to, we're here for you when life gets hard or when you need inspiration - offering a safe space for the mind, body and soul.</p>

                    </div> </div>
               
                          
                          
                     <div class="lg:w-1/2 w-1/2 mb-10 lg:mb-0 rounded-lg overflow-hidden">
                      <div className='object-center h-full w-fit py-4'>
                                  <h2 class="text-white text-5xl title-font font-medium mb-3 wwa">
                                      About
                                      Founder </h2>
                          <p class="leading-relaxed text-base mb-5">Timnit Benyam is a medical doctor and a certified nutrition coach with a passion for fitness and healthy living. A Hayat Medical College and Precision Nutrition alum, she founded Be Nutrition Coaching with the aim of providing client-centered, customized, body positive coaching services.</p>

                    </div> </div>
                    
              </div>
          </section>
          <div className='container newsletter-form '>
              <section class="flex justify-center px-4 mt-10 text-gray-800 ">
                  <div class="container py-6">
                      <h3 class="text-lg font-bold text-center lg:text-xl">
                          Join our community to stay up to date on all things BE Nutrition. You'll have access to exclusive discounts, special Meal Preps, and new Services before they hit the shelves!
                      </h3>

                      <div class="flex justify-center mt-6">
                          <div class="bg-white  rounded-md focus-within:ring  focus-within:border-blue-400 focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:focus-within:border-blue-300">
                              <div class="flex flex-wrap justify-between md:flex-row">
                                  <input type="email" class="p-2 m-1 text-sm text-gray-700 bg-transparent appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email"/>
                                  <button class="w-full px-3 py-2 m-1 text-sm font-medium tracking-wider text-white uppercase transition-colors duration-300 transform rounded-md dark:hover:bg-gray-600 bg-[#23A667] lg:w-auto hover:bg-gray-700">subscribe</button>
                              </div>
                          </div>
                      </div>

                      <hr class="h-px mt-6 bg-gray-200 border-none dark:bg-gray-700"/>

                          
                  </div>
              </section>
          
             
          </div>
         <style>{`
        .bgDecore{
    background-color: #02664E;
        }
        .tab{
            color:white;
        }
        .head{
            margin-bottom:-10px;
        }
        .bb{
            border-bottom-color: black;
        }
        .cnt{
            top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
    text-align: center;
        }
        .btnSignup{
margin-left: -7.8rem;
        }
        .wwa{
            margin-top:60px;
        }
        header {
    background-color: #02664E;
}
.nav{
    color:#fff;
}
      `}</style>
    </div>
  )
}

export default About