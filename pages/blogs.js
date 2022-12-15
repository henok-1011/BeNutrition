import Head from 'next/head'
import {PostCard, Catagories, PostWidget} from '../components'
import {getPosts} from '../services'
import { useRouter } from 'next/router';


export default function Blogs ({posts}) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <Head>
        <title>Be nutrition coaching</title>
        <link rel="icon" href="/assests/logo.png" />
      </Head>
      
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-spn-1'>
          {posts.map((post)=>(
          <PostCard post={post.node} key={post.title}></PostCard>
        ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
            <div className='lg:sticky relative top-8   '>
              <PostWidget />
            </div>
     </div>
      </div>
     
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return{
    props: {posts}
  }
}


