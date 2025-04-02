import { useState } from "react";
import { UserProfile } from "../hook";
import { Backend_URL } from "../Config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfileCard({userData}:{userData:UserProfile}) {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("");
  const navigate=useNavigate()

  const bioHandler=async()=>{
    try {
         const res=await axios.put(`${Backend_URL}/api/v1/user/bio`,{
             bio
         },{
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`
            }
         })
         console.log(res.data);
         
         if(res.data.user){
            alert(res.data.message)
            window.location.reload()
             navigate(`/profile`)
         }
    } catch (error) {
        alert("some error")
    }
}

  return (
    <div className="flex flex-col items-center h-screen w-full justify-center">
      <div className="max-w-md w-full">
        <div className="bg-white shadow-xl rounded-lg py-3 px-4">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://api.dicebear.com/9.x/adventurer/svg?seed=Brian"
              alt="Profile Avatar"
            />
          </div>
          <div className="p-2 text-center">
            <h3 className="text-xl text-slate-600 font-extrabold">{userData.name || "Unknow"}</h3>
            <p className="text-gray-400 text-sm font-semibold">{userData.bio || "add bio"}</p>
          </div>
          <table className="text-xs my-3 w-full">
            <tbody>
              <tr>
                <td className="px-2 py-2 text-slate-500 font-extrabold">Email</td>
                <td className="px-2 py-2 text-slate-500 font-bold">{userData.email}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-center my-3">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
            >
              {isEditing ? "Cancel" : "Update Profile"}
            </button>
          </div>
        </div>

        {isEditing && (
          <div className="bg-white shadow-lg rounded-lg p-4 mt-4">
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter Bio"
            ></textarea>
            <button
              onClick={()=>{
                 bioHandler(),
                 setIsEditing(!isEditing)
              }}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;