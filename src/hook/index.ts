import { useState,useEffect } from "react"
import { Backend_URL } from "../Config"
import axios from "axios"

export  interface Blog{
    "content": string;
    "title": string;
    "id": string;
    "createdAt": string;
    "auther": {
        "name": string | null;
        "bio"?:string | null
    }
}

export interface UserProfile{
     "name":string | null;
     "email":string;
     "bio" :string | null
}



// for get profile
export const getProfile=()=>{
  
    const [loading,setLoading]=useState(true)
    const [userData,setUserData]=useState<UserProfile| null>(null)

    useEffect(()=>{
        axios.get(`${Backend_URL}/api/v1/user/profile`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res=>{
            setLoading(false)
            setUserData(res.data.user)
        })
        
    },[])

    return{
        loading,
        userData
    }


}

// for single blog
export const useBlog=({id}:{id:string})=>{
   
    const [loading,setLoading]=useState(true)
    const [blog,setBlog]=useState<Blog>()
    
    useEffect(()=>{
        if (!id) return;
        axios.get(`${Backend_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        
        .then(response=>{
            setBlog(response.data.blog)
            setLoading(false)
        })
    },[id])
      
    return{
        loading,
        blog
    }
}

export const useBlogs=()=>{
    const [loading,setLoading]=useState(true)
    const [blogs,setBlogs]=useState<Blog[]>([])
    
    useEffect(()=>{
        axios.get(`${Backend_URL}/api/v1/blog/all`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        
        .then(response=>{
            setBlogs(response.data.blogs)
            setLoading(false)
        })
    },[])
      
    return{
        loading,
        blogs
    }
}