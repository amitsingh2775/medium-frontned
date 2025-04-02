import AppBar from "../components/AppBar"
import BlogCard from "../components/BlogCard"
import BlogSkalton from "../components/BlogSkalton";
import { useBlogs } from "../hook"

function Blog() {
  const { blogs, loading } = useBlogs();
  
  
  
  if(loading){
   return <div>
    <AppBar/>
   <div className=" flex justify-center flex-col items-center">
      <BlogSkalton/>
      <BlogSkalton/>
      <BlogSkalton/>
      <BlogSkalton/>
      <BlogSkalton/>
   </div>
   </div>
  }

  return (
    <div>
      <AppBar/>
   <div className="flex justify-center h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
     
        <div>
     {
      blogs.map((blog)=>(
        <BlogCard 
        id={blog.id}
        key={blog.id}
        autherName={blog.auther.name || "Anynomus"}
        title={blog.title}
        content={blog.content}
        publishDate={new Date(blog.createdAt).toLocaleDateString()}
       />
      ))
     }
      
      
    </div>
    </div>
   </div>
  )
}

export default Blog