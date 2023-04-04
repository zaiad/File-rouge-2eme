import { useState } from "react";
import { Input } from "../../accessoires/Inputs/Input";
import { BsUnlock, BsPerson } from "react-icons/bs";
import iphone_re from "../../assets/images/iphone_re.jpg";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { Button } from "../../accessoires/Buttons/Button";
import { ToastContainer, toast } from "react-toastify";
import {login} from '../../actions/auth'
import { Navigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch()
  // const  islogin  = useSelector(state => state.auth.Login)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios
    //   .post("http://localhost:8080/api/auth/login", data)
    //   .then((e) => {
    //     if (e.data.message) {
    //       console.log(e.data.message);
    //       toast.success(e.data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     toast.error(error.response.data.message || "An error occurred");
    //   });
    dispatch(login(data))
  };
//   if(islogin){
//     return <Navigate to='/Home' />
// }

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full lg:flex-grow md:w-1/2">
        <div className="flex flex-col justify-center px-8 md:justify-start md:pt-24 md:px-24 lg:px-32">
          <p className="text-3xl text-center">Welcome Again !</p>
          <form className="flex flex-col lg:flex-grow pt-8 md:pt-24 ">
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <BsPerson />
                </span>
                <Input
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <BsUnlock />
                </span>
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <Button
              text="Submit"
              onClick={onSubmit}
              className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-grey focus:outline-none focus:ring-2"
            />
          </form>
          <div className="pt-12 pb-12 text-center">
            <p>
              Don&#x27;t have an account?
              <a href="#" className="font-semibold underline">
                Register here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 hidden xl:block">
        <img
          className=" object-cover w-full h-62 md:h-full md:pt-14"
          src={iphone_re}
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
