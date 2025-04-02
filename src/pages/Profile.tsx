import AppBar from "../components/AppBar";
import ProfileCard from "../components/ProfileCard";
import { getProfile } from "../hook";
import { getToken } from "../context/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileSkelton from "../components/ProfileSkelton";

function Profile() {
  const {loading,userData}=getProfile()
  const navigate=useNavigate()
  const [bool,setBool]=useState(true)
  
  useEffect(()=>{
    if(!getToken()){
       
        setBool(false)
    }
  })
  if(!bool){
    navigate("/")
  }
  if(loading || !userData ){
     return<div>
      <AppBar/>
      <div><ProfileSkelton/></div>
     </div>
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center items-center px-4 mt-0 w-full"> 
        <ProfileCard userData={userData}/>
      </div>
    </div>
  );
}

export default Profile;
