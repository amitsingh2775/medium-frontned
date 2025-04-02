import { Link } from "react-router-dom";
import { Avtar } from "./BlogCard";
import { useEffect, useState } from "react";
import { getToken,removeToken } from "../context/auth";
import { getProfile } from "../hook";

function AppBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isValid, setIsValid] = useState(true); 
    const {userData}=getProfile()

  useEffect(() => {
    if (!getToken()) {
      setIsValid(false);
    }
  }, []);
    const logoutHandler=()=>{
       removeToken()
       setIsValid(false)
    }
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/"}
        className="flex flex-col justify-center text-lg lg:text-2xl md:text-xl sm:text-base font-black text-gray-900 dark:text-slate-700 underline decoration-wavy"
      >
        Medium
      </Link>

      <div>
        {isValid ? (
          <>
            {/* Publish & Profile when logged in */}
            <Link to={"/publish"}>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1.5 sm:px-6 sm:py-3 md:text-sm lg:px-5 lg:py-2 lg:text-sm me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Publish
              </button>
            </Link>
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="focus:outline-none">
              <Avtar size={10} autherName={userData?.name || "Unknown"} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-4 mt-2 w-40 bg-white rounded-lg shadow-lg border">
                <Link to={"/profile"} className="block px-4 py-2 hover:bg-gray-200 text-slate-600 font-extrabold">
                  Update Profile
                </Link>
                <button onClick={logoutHandler} className="w-full text-left px-4 py-2 hover:bg-gray-200 text-red-500 font-bold">
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            {/* Signup & Login when not logged in */}
            <Link to={"/signup"}>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1.5 sm:px-6 sm:py-3 md:text-sm lg:px-5 lg:py-2 lg:text-sm me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Signup
              </button>
            </Link>
            <Link to={"/login"}>
              <button
                type="button"
                onClick={logoutHandler}
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-1.5 sm:px-6 sm:py-3 md:text-sm lg:px-5 lg:py-2 lg:text-sm me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Login
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default AppBar;
