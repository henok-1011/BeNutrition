import Head from 'next/head'
import {PostCard, Catagories, PostWidget, FAQ, Hero, BlogCards} from '../components'
import {getPosts} from '../services'


export default function Home ({posts}) {
  return (
    <>
      <Hero />
      <section class=" im -mt-12 bg-white bg-[#17BB84]">
          <div class="relative flex">
            <div class="min-h-screen lg:w-1/3"></div>
          <div class="hidden w-3/4 min-h-screen border-b  bg-[#C0FCDF] lg:block"></div>

            <div
              class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
              <h1 class="text-3xl font-semibold  capitalize lg:text-4xl xl:text-5xl ">
              Why it is important?
              </h1>

              <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img class="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="assests/why_its-important.webp" alt=""/>

                  <div class="mt-8 lg:px-10 lg:mt-0">
                    <h1 class="text-xl font-semibold text-gray-800  ">
                  One of the most common problems we see is people who struggle with their weight and body image, but don't know how they can do anything about it.
                    </h1>

                    <p class="max-w-lg mt-6 dark:text-gray-500">
                  Our programs are tailored specifically to helping you meet your goals and feel comfortable in your body. Whatever lifestyle changes you want to make, we'll be there for you with the right solutions
                    </p>

                <h1 class="text-xl font-semibold text-gray-800  ">
                  We know that different people need different things, so we offer a variety of different approaches - <span className='text-bold text-xl' style={{ color: "#008D49" }}>Be</span> it through coaching sessions or through following our meal plans and recipes
                </h1>
                  </div>
              </div>

              
            </div>
          </div>
        </section>
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Be nutrition coaching</title>
        <link rel="icon" href="/assests/logo.png" />
      </Head>
      

        
      
      <section>
        <div class="max-w-6xl mx-auto px-5 py-24 ">
          <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h3 style={{ fontFamily: "Cormorant Garamond" }} className='mb-12 text-5xl text-center leading-8 font-medium tracking-tight text-gray-900 sm:leading-10'>Services</h3>
            
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/3 md:w-1/2 p-4" >
              <div class="shadow-lg p-6 rounded-lg"style={{ backgroundColor: "#8AFBC5" }}>
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full  mb-4">
                  <img src="assests/service-svg-1.svg" alt="" />
                </div>
                <h2 class="text-xl  font-semibold title-font mb-2">Weight Gain</h2>
                <p class="leading-relaxed text-base ">Trying to bulk up? gain some weight and maintain it? Be nutrition coaching offers consultancy services on how to get your weight up in healthy, practical ways.</p>



              </div>
            </div>

            <div class="xl:w-1/3 md:w-1/2 p-4" >
              <div class="shadow-lg p-6 rounded-lg" style={{ backgroundColor: "#8AFBC5" }}>
                <div class="w-12 h-20 inline-flex items-center justify-center rounded-full mb-4 italic">
                  <img src="assests/service-svg-2.svg" alt="" />
                </div>
                <h2 class="text-xl  font-semibold title-font mb-2">Weight Loss</h2>
                <p class="leading-relaxed text-base ">Are you struggling to lose weight? does the idea of dieting immediately exhaust you? our practice can help you get to your goal weight without depriving yourself of the foods you love </p>


              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-4">
              <div class="shadow-lg p-6 rounded-lg" style={{ backgroundColor: "#8AFBC5" }}>
                <div class="w-12 h-20 inline-flex items-center justify-center rounded-full mb-4">
                  <img src="assests/service-svg-3.svg" alt="" />
                </div>
                <h2 class="text-xl  font-semibold title-font mb-2">Weight Maintenance</h2>
                <p class="leading-relaxed text-base ">If you've recently just lost/gained weight and are looking for ways to keep it that way, Be Nutrition Coaching is the place for you. we offer coaching on a healthy diet and lifestyle. </p>



              </div>
            </div>
            
          </div>
          <p style={{ fontFamily: "Cormorant Garamond" }} className='mt-12 text-xl text-center leading-8 font-medium  text-gray-900 sm:leading-10'>First consultancy is <span className='text-bold text-xl' style={{ color: "#008D49" }}>FREE</span>!
            Monthly rate- Birr 5,000 <br />
            (inclusive of weekly appointments, customized shopping lists and meal plans(if needed))</p>

        </div>
      </section>

      {/* <BlogCards/> */}
      
     <section className='faq'>
        <div className='py-12 mx-auto w-full px-4 max-w-4xl'>
          <h3 style={{ fontFamily: "Cormorant Garamond" }} className='mb-12 text-5xl text-center leading-8 font-medium tracking-tight text-gray-900 sm:leading-10'>Frequently Asked Question</h3>
          
          <FAQ question="Do you prepare meals?" answer="Be Nutrition Coaching does not prepare meals . we want the client to be self sufficient and in control of their own meals. once the client finishes their sessions with Be Nutrition, it is inevitable that they will decide what's on their individual plates, and this is a practice we want them to develop throughout their journey under our consultancy. " />
          <FAQ question="How much weight should I expect to gain/lose with Be Nutrition?" answer="a healthy amount of weight loss/gain would be within the range of 1/2-1 kg per week. the minimum amount of time the client spends under our coaching services is 1 month. therefore, the client can expect to lose/gain 2-4kilos a month, at the very least.  " />
          <FAQ question="Do you offer physical training? " answer="Be nutrition coaching does not offer physical training. we do, however, give fitness and exercise advice to go along with our nutrition-centered coaching. " />
          <FAQ question="what should I expect from Be Nutrition Coaching?" answer="Be Nutrition Coaching offers practical, straightforward, customized methods for weight gain, weight loss and weight maintenance. our methods are nutrition-centered, i.e., focused mostly on our clients' diets. each client can expect solutions that are made to their specific needs and lifestyles. " />

        </div>
        <h3 style={{ fontFamily: "Cormorant Garamond" }} className='mb-6 text-3xl text-center leading-8 font-medium tracking-tight text-gray-900 sm:leading-10'>Still Have Questions?</h3>
        <p style={{ fontFamily: "Cormorant Garamond" }} className='mb-12 text-xl text-center leading-8 font-medium  text-gray-900 sm:leading-10'>If you can’y find answers to your question in our FAQ you can always <span className='text-bold' style={{ color:"#008D49"}}><a href="/contact">Contact Us.</a> </span> <br /> We will answer to you shortly!</p>
     </section>
    </div>
    </>
  )
}




