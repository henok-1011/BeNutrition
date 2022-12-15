import React from 'react'

function Hero() {
  return (
    <div className=''>
   <header class="hero bg-white dark:bg-gray-900">

    <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
            <div class="w-full lg:w-1/2">
                <div class="lg:max-w-lg lg:-mt-20">
                              <h1 className="text-3xl font-medium text-gray-800 uppercase lg:text-5xl">Healthy Habits
                                  for better life</h1>
                    
                              <p class="mt-2 text-lg text-gray-600 ">Learn how you can imporve your body
                                  image by improving your nutrition habits</p>
                    
                    <button class="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform  rounded-md lg:w-auto  focus:outline-none focus:bg-green-400"><a href="/about">Learn More</a> </button>
                </div>
            </div>

            <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                          <img class="w-full h-full lg:max-w-2xl" src="assests/Hero_image.svg" alt="hero image"/>
            </div>
        </div>
    </div>


              <section className='bg-[#189B63] -mt-20'>
                  <div class="grid xl:grid-cols-4 xs:gap-8 mt-8 xl:mt-12 md:grid-cols-2 ">
                      <div class="p-6 border rounded-4xl border-transparent border-r-gray-700 border-l-gray-700">
                          <div class="md:flex md:items-start md:-mx-4">
                              <span class="inline-block px-2 text-blue-500 bg-transparent rounded-xl md:-mx-6 ">
                                  <img  src="assests/home-png-1.png" alt="1" />
                              </span>

                              <div class="mt-4 mx-4 md:mx-4 md:mt-0">

                                  <p class="mt-3 text-gray-500 dark:text-gray-300">
Whether it's coaching or just someone to talk to, we're here for you when life gets hard or when you need inspiration - offering a safe space for the mind, body and soul.                                  </p>
                              </div>
                          </div>
                      </div>

                      <div class="p-6 border rounded-4xl border-transparent border-r-gray-700 border-l-gray-700">
                          <div class="md:flex md:items-start md:-mx-4">
                              <span class="inline-block px-2 text-blue-500 bg-transparent rounded-xl md:-mx-6 ">
                                  <img src="assests/home-png-2.png" alt="1" />
                              </span>

                              <div class="mt-4 mx-4 md:mx-4 md:mt-0">

                                  <p class="mt-3 text-gray-500 dark:text-gray-300">
We want to help you appreciate your body and nourish it so that you may feel and be your best.                                  </p>
                              </div>
                          </div>
                      </div>

                      <div class="p-6 border rounded-4xl border-transparent border-r-gray-700 border-l-gray-700">
                          <div class="md:flex md:items-start md:-mx-2">
                              <span class="inline-block px-2 text-blue-500 pt-2 bg-transparent rounded-xl md:-mx-2 ">
                                  <img src="assests/home-png-3.png" alt="1" />
                              </span>

                              <div class="mt-4 mx-4 md:mx-4 md:mt-0">

                                  <p class="mt-3 text-gray-500 dark:text-gray-300">
We know that different people need different things, so we offer a variety of different approaches - be it through coaching sessions or following our meal plans and r                                  </p>
                              </div>
                          </div>
                      </div>

                      <div class="p-6 border rounded-4xl border-transparent border-r-gray-700 border-l-gray-700">
                          <div class="md:flex md:items-start md:-mx-4">
                              <span class="inline-block px-2 text-blue-500 bg-transparent rounded-xl md:-mx-6 ">
                                  <img src="assests/home-png-4.png" alt="1" />
                              </span>

                              <div class="mt-4 mx-4 md:mx-4 md:mt-0">

                                  <p class="mt-3 text-gray-500 dark:text-gray-300">
We offer customized meal plans that are catered to your goals, so you'll never have to worry about what to eat again!                                   </p>
                              </div>
                          </div>
                      </div>
                  </div>
    </section>
              <svg className='relative z-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 190 1440 100"><path fill="#189B63" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,202.7C672,213,768,235,864,234.7C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>

              <style>{`
        .header{
            margin-bottom:0;
            background-color:#17BB84;
        }
        .hero{
            background-color:#17BB84;
        }
        .hero button{
            background-color:#0A7764;

        }
        .header ul{
            color:black;
            font-weight: 500;
        }
      `}</style>
</header >
    </div>
  )
}

export default Hero