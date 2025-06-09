import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/authSlice";
import gucciheels from "../assets/images/gucciheels.jpg";

const SignUp = () => {
    const [signupForm, setSignupForm] = useState({ firstName: "", lastName: "", email: "", password: "", contactNumber: "", role: "User" });
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (signupForm.email === "" || signupForm.password === "") {
          //show some error message
        } else {
          dispatch(addUser({ ...signupForm }));
        }
        navigate("/login")
      };

  return (
    <div className="h-scroll ml-14">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
      <img
        className="mx-auto h-60 w-auto mt-20 mb-10 border-black border-4 rounded-lg"
        src={gucciheels}
        alt="Your Company"
      />
      <h1 className="text-center text-3xl text-red-600">ChaChing&Bling</h1>
      <h1 className="text-center">Create Account</h1>
    </div>

    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">

      <div className="mb-5">
        <label
          htmlFor="firstName"
          className="block mt-10 mb-2 text-md font-medium text-black"
        >
          First Name
        </label>
        <input
          value={signupForm.firstName}
          onChange={(e) =>
            setSignupForm({ ...signupForm, firstName: e.target.value })
          }
          type="text"
          id="firstName"
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
          placeholder="Ashley"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="lastName"
          className="block mb-2 text-md font-medium text-black "
        >
          Last Name
        </label>
        <input
          value={signupForm.lastName}
          onChange={(e) =>
            setSignupForm({ ...signupForm, lastName: e.target.value })
          }
          type="text"
          id="lastName"
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
          placeholder="Codie"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="contactNumber"
          className="block mb-2 text-md font-medium text-black "
        >
          Contact Number
        </label>
        <input
          value={signupForm.contactNumber}
          onChange={(e) =>
            setSignupForm({ ...signupForm, contactNumber: e.target.value })
          }
          type="text"
          id="contactNumber"
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
          placeholder="234-567-8910"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mt-10 mb-2 text-md font-medium text-black"
        >
          Email
        </label>
        <input
          value={signupForm.email}
          onChange={(e) =>
            setSignupForm({ ...signupForm, email: e.target.value })
          }
          type="text"
          id="email"
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
          placeholder="aCodie@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-md font-medium text-black "
        >
          Password
        </label>
        <input
          value={signupForm.password}
          onChange={(e) =>
            setSignupForm({ ...signupForm, password: e.target.value })
          }
          type="text"
          id="password"
          className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
          placeholder="*******"
          required
        />
      </div>
      <button
        type="submit"
        className="text-red-600 mb-10 bg-black hover:bg-red-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Create Account
      </button>
    </form>

   
  </div>
  )
}

export default SignUp