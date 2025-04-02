function SingleBlogSkeleton() {
    return (
      <div className="flex justify-center px-4 sm:px-6 lg:px-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-screen-2xl w-full animate-pulse">
          
          {/* Author Section - Moves to Top on Small Screens, Right on Large Screens */}
          <div className="lg:col-span-4 order-1 lg:order-2 space-y-4 bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="flex items-center space-x-4 mt-2">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="w-32 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="w-40 h-4 bg-gray-300 rounded"></div>
          </div>
  
          {/* Blog Content Section */}
          <div className="lg:col-span-8 order-2 lg:order-1 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-80 mb-2"></div>
            <div className="w-32 h-3 bg-gray-300 rounded"></div>
            <div className="w-full h-40 bg-gray-300 rounded mt-5"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SingleBlogSkeleton;