function ProfileSkeleton() {
    return (
      <div className="flex flex-col items-center h-screen w-full justify-center">
        <div className="max-w-md w-full">
          <div className="bg-gray-100 shadow-xl rounded-lg py-6 px-6 animate-pulse">
            {/* Profile Avatar Skeleton */}
            <div className="flex justify-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
            </div>
            
            {/* Name & Bio Skeleton */}
            <div className="p-4 text-center">
              <div className="w-40 h-5 bg-gray-300 rounded mx-auto mb-2"></div>
              <div className="w-60 h-4 bg-gray-300 rounded mx-auto"></div>
            </div>
            
            {/* Email Skeleton */}
            <div className="my-4">
              <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
              <div className="w-48 h-4 bg-gray-300 rounded mx-auto"></div>
            </div>
            
            {/* Button Skeleton */}
            <div className="text-center">
              <div className="w-32 h-8 bg-gray-300 rounded mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProfileSkeleton;
  