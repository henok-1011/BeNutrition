import React, { useEffect,useState } from 'react'
import { getRecentPosts } from '../services';
import { useRouter } from 'next/router';
import moment from 'moment';

function BlogCards() {

    const router = useRouter();

    if (router.isFallback) {
        return <Loader />;
    }

    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
            getRecentPosts().then((result) => {
                // console.log("Blog " + result[0].createdAt)
                setRecentPosts(result);
            });
    }, []);
  return (

      <section>
          <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
              <div class="relative mx-auto max-w-7xl">
                  <h3 style={{ fontFamily: "Cormorant Garamond" }} className='mb-12 text-5xl text-center leading-8 font-medium tracking-tight text-gray-900 sm:leading-10'>Recent Blogs</h3>

                  <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                      {recentPosts.map((post) => (
                           <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div class="flex-shrink-0">
                                  <img class="object-cover w-full h-48" src={post.featuredImage.url} alt="" />
      </div>
      <div class="flex flex-col justify-between flex-1 p-6 bg-[#AEFFD8]">
        <div class="flex-1">
          <a href={`/post/${post.slug}`} class="block mt-2">
            <p class="text-xl font-semibold text-neutral-600">{post.title}</p>
                                          <p class="mt-3 text-base text-gray-500">{post.excerpt}</p>
          </a>
        </div>
        <div class="flex items-center mt-6">
          <div class="flex-shrink-0">
                                          <a href={`/post/${post.slug}`}>
                                              <span class="sr-only">{post.author.name}</span>
              <img class="w-10 h-10 rounded-full" src={post.author.photo.url} alt="" />
            </a>
          </div>
          <div class="ml-3">
            <p class="text-sm font-medium text-neutral-600">
                                              <a href="https://twitter.com/Mike_Andreuzza" class="hover:underline">{post.author.name}</a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
                                              <time datetime="2020-03-16">{moment(post.createdAt).format('MMM DD, YYYY')}</time>
              <span aria-hidden="true"> · </span>
             
            </div>
          </div>
        </div>
      </div>
    </div>
                      ))}
                      
                      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                          <div class="flex-shrink-0">
                              <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1510166089176-b57564a542b1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2024&amp;q=80" alt=""/>
                          </div>
                          <div class="flex flex-col justify-between flex-1 p-6 bg-[#AEFFD8]">
                              <div class="flex-1">
                                  <a href="https://twitter.com/g_perales" class="block mt-2">
                                      <p class="text-xl font-semibold text-neutral-600">How to use search engine optimization to drive sales</p>
                                      <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>
                                  </a>
                              </div>
                              <div class="flex items-center mt-6">
                                  <div class="flex-shrink-0">
                                      <a href="https://twitter.com/g_perales">
                                          <span class="sr-only">Gabriel Perales</span>
                                          <img class="w-10 h-10 rounded-full" src="https://pbs.twimg.com/profile_images/1442898475218194432/61p-BNsg_400x400.jpg" alt=""/>
                                      </a>
                                  </div>
                                  <div class="ml-3">
                                      <p class="text-sm font-medium text-neutral-600">
                                          <a href="#" class="hover:underline"> Gabriel Perales </a>
                                      </p>
                                      <div class="flex space-x-1 text-sm text-gray-500">
                                          <time datetime="2020-03-10"> Mar 10, 2020 </time>
                                          <span aria-hidden="true"> · </span>
                                          <span> 4 min read </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                          <div class="flex-shrink-0">
                              <img class="object-cover w-full h-48" src="https://images.unsplash.com/photo-1516245556508-7d60d4ff0f39?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=900&amp;q=60" alt=""/>
                          </div>
                          <div class="flex flex-col justify-between flex-1 p-6 bg-[#AEFFD8]">
                              <div class="flex-1">
                                  <a href="#" class="block mt-2">
                                      <p class="text-xl font-semibold text-neutral-600">Improve your customer experience</p>
                                      <p class="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                                  </a>
                              </div>
                              <div class="flex items-center mt-6">
                                  <div class="flex-shrink-0">
                                      <a href="https://twitter.com/wickedlabsHQ">
                                          <span class="sr-only">Wicked Labs</span>
                                          <img class="w-10 h-10 rounded-full" src="https://d33wubrfki0l68.cloudfront.net/2f76102fd18a4e095eaed7a836a3f2183a982a4d/91dd4/images/avatar.jpg" alt=""/>
                                      </a>
                                  </div>
                                  <div class="ml-3">
                                      <p class="text-sm font-medium text-neutral-600">
                                          <a href="https://twitter.com/wickedlabsHQ" class="hover:underline"> Wicked Labs </a>
                                      </p>
                                      <div class="flex space-x-1 text-sm text-gray-500">
                                          <time datetime="2020-02-12"> Feb 12, 2020 </time>
                                          <span aria-hidden="true"> · </span>
                                          <span> 11 min read </span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default BlogCards