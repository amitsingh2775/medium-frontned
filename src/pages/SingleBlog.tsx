import { useParams } from "react-router-dom";
import { useBlog } from "../hook";
import { SingleBlogCard } from "../components/SingleBlogCard";
import SingleBlogSkelton from "../components/SingleBlogSkelton";
import AppBar from "../components/AppBar";

export default function SingleBlog() {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return <div>
      <AppBar/>
      <div className="flex justify-center items-center flex-col">
      <SingleBlogSkelton/>
  
      </div>
    </div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <SingleBlogCard blog={blog} />
    </div>
  );
}
