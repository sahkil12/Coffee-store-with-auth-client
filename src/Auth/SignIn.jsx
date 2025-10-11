import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { useContext } from "react";

const SignIn = () => {
     const { googleUser, signInUser } = useContext(AuthContext)
        const handleGoogleSignIn =()=>{
            googleUser()
            .then(result =>{
                // console.log(result);
            })
            .catch(error =>{
                // console.log(error);
            })
        }
        const handleFormSubmit =(e)=>{
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            signInUser(email, password)
            .then(result =>{
                // console.log(result);
                const signinInfo ={
                    email,
                    lastSignInTime: result.user?.metadata?.lastSignInTime,
                }
                fetch('https://coffee-shop-server-two-kappa.vercel.app/users',{
                    method:"PATCH",
                    headers:{
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(signinInfo)
                })
                .then(res => res.json())
                .then(data =>{
                    // console.log('after patch', data);
                })
            })
            .catch(error =>{
                // console.log(error);
            })
            e.target.reset()
        }
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
           <div className="text-3xl flex items-center mx-3 gap-3 mt-6 mb-10 rancho hover:bg-[#D2B48C] rounded-md w-fit p-4 duration-200">
                <FaArrowLeftLong size={23} />
                <Link to={"/"} className="font-medium">
                  Back To Home
                </Link>
              </div>
      <div className="w-full bg-[#F4F3F0] border border-neutral-300 max-w-4xl mx-auto rounded-md shadow sm:p-10 p-4">
        <h2 className="my-5 text-5xl font-medium text-[#374151] text-center rancho">
          Login to your account
        </h2>
        <p className="text-md font-sans text-center ">
          Dont have account?
          <Link
            to={"/signup"}
            className="text-base font-semibold text-orange-400"
          >
            {" "}
            SignUp here
          </Link>
        </p>
        {/* sign in form */}
        <form onSubmit={handleFormSubmit} className="space-y-8 mt-6">
          <div className="space-y-4">
            <fieldset className="flex flex-col gap-2">
              <label className="label text-base font-medium text-black">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="input text-lg w-full py-6 border-neutral-200 focus:outline-[#D2B48C]"
                placeholder="Enter your Email"
              />
            </fieldset>
            <fieldset className="flex flex-col gap-2">
              <label className="flex justify-between label text-base font-medium text-black">
               <span> Password</span>
                  <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm hover:underline text-gray-700"
              >
                Forgot password?
              </a>
              </label>
              <input
                type="password"
                name="password"
                className="input text-lg w-full py-6 border-neutral-200 focus:outline-[#D2B48C] "
                placeholder="Your Password"
              />
            </fieldset>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full text-gray-700" />
            <p className="text-gray-800 font-sans w-full text-center">
              OR sign in with Google
            </p>
            <hr className="w-full text-gray-700" />
          </div>
           <div className="my-5 space-y-4">
          <button
            aria-label="Login with Google"
            onClick={handleGoogleSignIn}
            type="button"
            className="flex hover:bg-[#3d1f1acc] hover:text-white items-center justify-center w-full p-4 text-lg font-semibold space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Sign in with Google</p>
          </button>
        </div>
          <button
            className="rancho my-6 rounded-md bg-[#D2B48C] w-full py-2 text-2xl font-medium border-2 border-[#331A15]"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
