import { ChangeEvent, useState } from "react"
import { Link ,useNavigate} from "react-router-dom"
import { SignupInput } from 'zodiya'
import { Backend_URL } from "../Config"
import axios from "axios"


function Auth({ type }: { type: "login" | "signup" }) {

    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: " "

    })
    const navigate=useNavigate()
    async function sendRequest() {
        try {
            const res=await axios.post(`${Backend_URL}/api/v1/user/${type==="signup" ? "singup": "login"}`,postInputs)
            const jwt=res.data.jwt
            console.log(jwt);
            
            localStorage.setItem("token",jwt)
            navigate("/")
        } catch (error) {
            alert("some error")
        }
    }
    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div>
                    <div className="text-3xl font-extrabold">
                        Enter Your Credentials 
                    </div>
                    <div className="text-slate-300">
                       {type==="signup" ? "Already have an Account ?" :"Don't have an Account ?"}
                        <Link className="text-blue-300 pl-2 underline" to={type==="signup" ? "/login" : "/signup"} >{type==="signup" ? "Login" :"Signup"}</Link>
                    </div>
                </div>
                <div className="mt-6">
              {type==="signup" ?  <LebelInput leble="Name" placeholder="Jhon Dey.." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        name: e.target.value
                    })
                }} /> :null}
                <LebelInput leble="email" placeholder="JhonDey@gmail.com.." onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        email: e.target.value
                    })
                }} />
                <LebelInput leble="password" type={"password"} placeholder="123@#$$" onChange={(e) => {
                    setPostInputs({
                        ...postInputs,
                        password: e.target.value
                    })
                }} />
                </div>
                <button onClick={sendRequest} type="button" className="mt-4 w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">{type==="signup" ? "Signup":"Login"}</button>


                </div>
            </div>


        </div>
    )
}

export default Auth

interface LebelInputType {
    leble: string
    placeholder: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

function LebelInput({ leble, placeholder, onChange, type }: LebelInputType) {
    return <div>
        <label className="block text-gray-700 text-sm font-bold mb-2 mt-3">
            {leble}
        </label>
        <input onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={type || "text"} placeholder={placeholder}></input>
    </div>
}