import { useEffect, useState } from "react"
import AppBar from "../components/AppBar"
import axios from "axios"
import { Backend_URL } from "../Config"
import {useNavigate} from "react-router-dom"
import { getToken } from "../context/auth"

export const Publish = () => {
   const [title,setTitle]=useState("")
   const [content,setContent]=useState("")
   const navigate=useNavigate()

   useEffect(()=>{
    if(!getToken()){
        navigate("/signup")
    }
   },[])
  
   const inputHandler=async()=>{
        try {
             const res=await axios.post(`${Backend_URL}/api/v1/blog/create`,{
                title,
                content
             },{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`
                }
             })
             console.log(res.data);
             
             if(res.data.id){
                 navigate(`/blog/${res.data.id}`)
             }
        } catch (error) {
            alert("some error")
        }
   }

    return <div>
     <AppBar/>
    <div className="flex justify-center w-full"> 
           <div className="max-w-screen-lg w-full">
        <div className="mt-15 mb-2">
          
            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="large-input" className=" focus:outline-none block w-full p-4 text-slate-700 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-green-500  dark:placeholder-gray-400 dark:text-slate-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title"/>
        </div>
        <div>
        
        <textarea value={content} onChange={(e)=>setContent(e.target.value)} id="message" rows={4} className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-slate-500 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your Articles..."></textarea>
        </div>
        <div className="mt-4">
        <button onClick={inputHandler} type="submit" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-green-900 hover:bg-green-800">
       Publish post
   </button>
   </div>
        </div>
        </div>
    </div>
}