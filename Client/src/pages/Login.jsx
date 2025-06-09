import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../redux/authSlice";
import gucciheels from "../assets/images/gucciheels.jpg";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

const { isLoggedIn, user } = useSelector((state) => state.auth)
console.log("user", user)

  useEffect(() => {
    if (isLoggedIn && user.token) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginForm.email === "" || loginForm.password === "") {
      //show some error message
    } else {
      dispatch(authLogin({ ...loginForm }));
    }
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
        <h1 className="text-center">Login To Your Account</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mt-10 mb-2 text-md font-medium text-black"
          >
            Your email
          </label>
          <input
            value={loginForm.email}
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            type="email"
            id="email"
            className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-md font-medium text-black "
          >
            Your password
          </label>
          <input
            value={loginForm.password}
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            type="password"
            id="password"
            className="bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="text-red-600 mb-10 bg-black hover:bg-red-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-zinc-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Login
        </button>
      </form>

     
    </div>
  );
};

export default Login;