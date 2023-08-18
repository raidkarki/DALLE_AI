import React from 'react'
import {useState,useEffect} from 'react'
import {Card,Loader,FormFeild} from '../components'
import axios from 'axios'

const RenderCards=({posts,title})=>{

    if(posts){
        return posts?.map((post)=><Card key={post._id } {...post}></Card>)
    }

}

const Home = () => {
    const [loading,setLoading] = useState(false)
    const [posts,setAllPosts] = useState()
    const [Searchposts,setSearchPosts] = useState()
    const [searchTerm,setSearchTerm] = useState('')
    const [searchTimeout,setSearchTimeout] = useState(null)
    const getposts =async()=>{

        setLoading(true)
        const res = await axios.get('http://localhost:3000/api/v1/posts')
        console.log(res.data.posts);
        
        setAllPosts(res.data.posts)
        setLoading(false)
        
    }
    const handleSearchChange=(e)=>{
        
        clearTimeout(searchTimeout);
        setSearchTerm(e.target.value);
    
        setSearchTimeout(
          setTimeout(() => {
            const searchResult = posts.filter((post) => 
            post.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             post.prompt.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchPosts(searchResult);
          }, 500),
        );

    }
    useEffect(()=>{
       getposts()
      
    },[])
  return (
    <section className='max-w-7xl mx-auto'> 
    <div >
        <h1 className='font-extrabold text-[#222328] text'>
             The community Showcase
        </h1>
        <p className='text-[#6b7280] text-[16px] mt-2 max-w[500px]'>
            Welcome to the community showcase! This is a place to show off your
            recent work, ideas, 

        </p>

    </div>
    <div className='mt-16'>
         <FormFeild
          labelname="Search posts"
          type="text"
          name="text"
          placeholder="Search something..."
          value={searchTerm}
          onchange={handleSearchChange}
        />
        <div className='mt-10'>
            {loading ? (
                <Loader/>
                
            ):(<>
            {searchTerm  ? (
                <h1 className='text-[#171922] text-2xl font-bold'>
                    {Searchposts?.length>0?"Search results ":"No posts "}for <span className='text-[#555b6b]'>"{searchTerm}"</span> 
                </h1>
            ):
            (
                
                <h1 className='text-[#030303] text-2xl font-bold'>
                    {posts?.length >0? "Recent posts":"No posts yet"}
                </h1>
            )}
            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {
                searchTerm ? (
                    <RenderCards posts={Searchposts} title="No Search results for "/>
                ):(<RenderCards posts={posts} title="no posts"></RenderCards>)
              }

            </div>
            
            
            </>)}
        </div>
    </div>
    </section>
  )
}

export default Home