import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {preview} from '../assets'
import {getRandomPrompt} from '../utils/index'
import {FormFeild,Loader} from '../components'
import axios from "axios"



const Createpost = () => {
  const navigate = useNavigate()
  const [form,setForm] = useState({
    name:'',
    prompt:'',
    image:'',
  })
  const [loading,setLoading] = useState(false)
  const [generatingImg,setGeneratingImg] =useState(false)
  
  const handleSubmit =async(e)=>{
     
     e.preventDefault()
     if(form.prompt && form.image)


      {   try {
        setLoading(true)
           
           
            await axios.post("http://localhost:3000/api/v1/posts",{
            name:form.name,
            prompt:form.prompt,
            image:form.image
            

           })
           
         
           navigate('/') 
         
          
       
       } catch (error) {
         alert('Error creating post')
  
       }finally{
         setLoading(false)
         setGeneratingImg(false)
       }

           
        
}else {
  alert('Please fill all the fields')
}

  }
  const handlesurpriseme=()=>{
    
    const randomPrompt=getRandomPrompt()
   
    setForm({...form,prompt:randomPrompt})
  }
  const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}
  const generateImage=async ()=>{
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:3000/api/v1/dalle/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, image: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Please provide proper prompt');
    }


      
      
    }

    
  
   


  return (
    <section className='max-w-7xl mx-auto '>

<div >
        <h1 className='font-extrabold text-[#222328] text'>
             Create
        </h1>
        <p className=' text-[#6b7280] text-[16px] mt-2 max-w[500px]'>
            Create imaginative and visual images through DALL_E AI and share them with the community 

        </p>

    </div>
    <form action="" className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
         <div className='flex flex-col gap-5'>
         <FormFeild 
          labelname="your name"
          type="text"
          name="name"
          onchange={handleChange}
          placeholder='John Doe'
          value={form.name}
          
          >


          </FormFeild>


          <FormFeild 
          labelname="prompt"
          type="text"
          name="prompt"
          onchange={handleChange}
          placeholder='a bowl of soup that looks like a monster, knitted out of wool'
          value={form.prompt}
          surpriseme="true"
          handlesurpriseme={handlesurpriseme}
          >

          </FormFeild>
          <div className='relative bg-gray-50 border border-gray-300 text-gray-900 text-sm 
          rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 
          p-3 h-64 flex justify-center items-center'>
          {form.image  ? (
          <img src={form.image} alt={form.prompt} className='w-full h-full object-contain'/>

          
          ):
          (<img src={preview} alt="preview" className='w-9/12 h-9/12  object-contain'/>
          )}
          {generatingImg && (
            <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)]
            rounded-lg'>
              <Loader />
              
            </div>
          )}

          </div>

         </div>
         <div className='mt-5 flex gap-5 '>
          <button type='button' onClick={generateImage} className='text-white bg-green-700 font-medium 
          rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>

            {generatingImg? 'Generating ...': 'Generate'}

          </button>
         </div>
         <div className='mt-10'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            Once you have createdthe image you want ,you can share it
             with others in the community
          </p>
          <button 
          type='submit'
          disabled={loading}
          className='mt-3 text-white bg-[#6469ff] font-medium 
          rounded-md text-sm w-full sm:w-auto px-5 py-2'
          

          > {loading ? 'Sharing...' : 'Share with the Community'} </button>
         </div>

    </form>
            
     </section>
  )
}

export default Createpost