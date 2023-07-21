import React, { useState } from 'react';
import { AiOutlineEye,  AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword :""
    })

    // Taking two setPAsswords and showPAssword for handling both create password field and cnfirm password field
    const [showPassword1, setShowPassword1] = useState (false)
    const [showPassword2, setShowPassword2] = useState (false)
    const [accountType, setAccountType] = useState("Student")

    function changeHandler (event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword ){
            toast.error("Password does not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        }

        const finalData  = {
            ...accountData,
            accountType
        }

        console.log(finalData);
        console.log("Printing account data");
        navigate("/dashboard");

    }

  return (
    <div>
        {/* Student Instructor tab */}
        <div
         className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button 
            className={`${accountType === "Student" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick = {() => setAccountType("Student")} >
                Student
            </button>
            <button
            className={`${accountType === "Instructor" 
            ?
              "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
            onClick = {() => setAccountType("Instructor")} >
                Instructor
            </button>
        </div>

        <form onSubmit={submitHandler}>
            {/* First Name and LAst NAme */}
            <div className='flex gap-x-4 mt-[20px]' > 
                <label className='w-full' >
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >
                        First Name <sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type='text'
                        name='firstName'
                        onChange = {changeHandler}
                        placeholder='Enter First Name'
                        value={formData.firstName}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  shadow-richblack-200 border-b border-richblack-400 focus:border-richblack-400 '
                    />
                </label>

                <label className='w-full' >
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >
                        Last Name <sup className='text-pink-200' >*</sup></p>
                    <input
                        required
                        type='text'
                        name='lastName'
                        onChange = {changeHandler}
                        placeholder='Enter Last Name'
                        value={formData.lastName}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  shadow-richblack-200 border-b border-richblack-400 focus:border-richblack-400 '
                    />
                </label>
            </div>

            {/* Email */}
            <div className='mt-[20px]'>
                <label className='w-full mt-[20px] '>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >
                            Email Address <sup className='text-pink-200' >*</sup></p>
                        <input
                            required
                            type='email'
                            name='email'
                            onChange = {changeHandler}
                            placeholder='Enter email'
                            value={formData.email}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  shadow-richblack-200 border-b border-richblack-400 focus:border-richblack-400 '
                        />
                </label>
            </div>
            
            {/* Create Password and Confirm PAssword */}
            <div className='w-full flex gap-x-4 mt-[20px]' >
                <label className='w-full relative' >
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >
                            Password <sup className='text-pink-200' >*</sup></p>
                        <input
                            required
                            type={ showPassword1 ? ("text") : ("password")}
                            name='password'
                            onChange = {changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  shadow-richblack-200 border-b border-richblack-400 focus:border-richblack-400 '
                        />
                        <span
                        className='absolute right-3 top-[38px] cursor-pointer'
                         onClick = { () => setShowPassword1( (prev) => !prev )}>
                            { showPassword1 ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                </label>

                <label className='w-full relative' >
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >
                            Confirm Password <sup className='text-pink-200' >*</sup></p>
                        <input
                            required
                            type={ showPassword2 ? ("text") : ("password")}
                            name='confirmPassword'
                            onChange = {changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]  shadow-richblack-200 border-b border-richblack-400 focus:border-richblack-400 '
                        />
                        <span 
                        className='absolute right-3 top-[38px] cursor-pointer' 
                        onClick = { () => setShowPassword2( (prev) => !prev )}>
                        { showPassword2 ? 
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : 
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                </label>

            </div>

            <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6' >
                Create Account
            </button>
        </form>
    </div>
  )
}

export default SignUpForm