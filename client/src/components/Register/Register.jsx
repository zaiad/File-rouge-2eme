import { useState } from "react";
import { Input } from "../../accessoires/Inputs/Input";
import { AiOutlineMail } from "react-icons/ai";
import { BsUnlock, BsPerson } from "react-icons/bs";
import iphone_re from "../../assets/images/iphone_re.jpg";
import axios from 'axios';
import { Button } from "../../accessoires/Buttons/Button";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import {register} from '../../actions/auth'
// import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios.post(
    //   "http://localhost:8080/api/auth/register",
    //   data
    // )
    // .then(e => {
    //     if(e.data.message){
    //       toast.success(e.data.message);
    //     }
    // }) .catch((error) => {
    //   toast.error(error.response.data.message || 'An error occurred');
    // })
    dispatch(register(data))

  };

  return (
    <div className="flex flex-wrap w-full">
      <div className="flex flex-col w-full lg:flex-grow md:w-1/2">
        <div className="flex flex-col justify-center px-8 pt-6 my-auto md:justify-start md:pt-18 md:px-24 lg:px-32">
          <p className="text-3xl text-center">Welcome.</p>
          <form className="flex flex-col lg:flex-grow pt-6 md:pt-18 ">
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <BsPerson />
                </span>
                <Input
                  placeholder="Full Name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
              <div className="flex relative ">
                <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <AiOutlineMail />
                </span>
                <Input
                  placeholder="Email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex flex-col pt-4">
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
            <div className="flex flex-col pt-4 mb-12">
              <div className="flex relative ">
                <span className="inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <BsUnlock />
                </span>
                <Input
                  placeholder="Confirm Password"
                  name="confirmPassword"
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
              I have already an acount
              <a href="#" className="font-semibold underline">
                Login here.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 hidden xl:block">
        <img
          className=" object-cover w-full h-64 md:h-full md:pt-14"
          src={iphone_re}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
