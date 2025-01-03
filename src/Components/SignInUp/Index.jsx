import { useState } from "react"
import { MainWrapper } from "./style"


export const Index = () => {
  const [user, setUser] = useState(true)
  const [btnStatus,setBtnStatus]=useState(false);
  const [erro,setError]=useState("")
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })

  const changeForm=()=>{
    
    setUser(!user)
  }

  const handleLogin=(e)=>{
    const u=JSON.parse(localStorage.getItem("user"))
   // console.log(u)
   // console.log(formData)
    if(!u || u?.email!=formData?.email)
    {
      setError("User Not exist")
      window.alert("user not exist")
    }
    else if(u && u.email==formData.email && u.password==formData.password)
    {
      const user=JSON.parse(localStorage.getItem("user"));
      localStorage.setItem("user",JSON.stringify({...user,login:true}))
      window.alert("login success")
    }
    else{
      window.alert("password is wrong wrong")
    }
    e.preventDefault();
    console.log(formData)
  }
  const handleRegister=(e)=>{
    localStorage.setItem("user",JSON.stringify({...formData,login:false}))
    window.alert("register successfully")
    e.preventDefault();
   // console.log(formData)
  }
  return (
    <MainWrapper >
      {user ? <div  className=" ">
        <span className=" block text-center text-3xl underline font-bold">Login to your Account</span>
        <div className="w-full max-w-lg mx-auto py-2 mt-6">
          <form data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000" onSubmit={(e)=>e.preventDefault()} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input onChange={(e)=>setFormData({...formData,email:e.target.value})} className="block appearance-none rounded w-full py-2 px-3   bg-transparent border-0 border-b-2  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={(e)=>setFormData({...formData,password:e.target.value})} className="block appearance-none rounded w-full py-2 px-3   bg-transparent border-0 border-b-2  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex justify-center">
              <button disabled={btnStatus} onClick={(e)=>handleLogin(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none " type="button">
                Sign In
              </button>
              
            </div>
           <div  className="text-blue-300 text-center cursor-pointer mx-auto"> <button onClick={(e) => changeForm()}>New user?</button></div>
          </form>
         
        </div>

      </div> : <div>
        <span className="block text-center text-3xl underline font-bold">Create new Account</span>
        <div className="w-full max-w-lg mx-auto py-2 mt-6">
          <form data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000" onSubmit={(e)=>e.preventDefault()} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block  text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              
              <input onChange={(e)=>setFormData({...formData,email:e.target.value})} className="block appearance-none rounded w-full py-2 px-3   bg-transparent border-0 border-b-2  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block  text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input onChange={(e)=>setFormData({...formData,password:e.target.value})} className="block appearance-none rounded w-full py-2 px-3   bg-transparent border-0 border-b-2  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex justify-center">
              <button onClick={(e)=>handleRegister(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign Up
              </button>
              
            </div>
            <div className="text-blue-300 text-center cursor-pointe mx-auto"><button  onClick={(e) => setUser(!user)}>Allready have account?</button></div>
          </form>
          
        </div>
      </div>}
      
    </MainWrapper>
  )

}
