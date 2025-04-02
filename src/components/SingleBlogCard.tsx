import AppBar from "./AppBar";
import { Blog } from "../hook";
import { Avtar } from "./BlogCard"; 

export const SingleBlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full pt-20 max-w-screen-2xl">

          {/* Author Section - Moves to Top on Small Screens, Right on Large Screens */}
          <div className="lg:col-span-4 order-1 lg:order-2 p-4 rounded-lg ">
            <p className="text-slate-500 text-sm sm:text-base">Author</p>
            <div className="flex items-center space-x-4 mt-2">
              <Avtar autherName={blog.auther?.name || "Anonymous"} />
              <p className="text-lg sm:text-2xl font-bold">{blog.auther?.name || "Unknown Author"}</p>
            </div>
            <p className="text-slate-500 text-sm sm:text-base mt-2">
            {blog.auther?.bio ?? "Bio not available"} 
            </p>
          </div>

          {/* Blog Content Section */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-4  h-[80vh] overflow-y-auto pr-4 scrollbar-hide">
            <h1 className="text-3xl sm:text-4xl font-extrabold">{blog.title}</h1>
            <p className="text-slate-400 text-sm sm:text-base">
              Posted on {new Date(blog.createdAt).toLocaleDateString()}
            </p>
            <p className="text-lg sm:text-xl text-slate-600 mt-3">{blog.content}</p>
          </div>

        </div>
      </div>
    </div>
  );
};
