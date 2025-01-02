import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const ContactMe = () => {

  const [formData, setFormData] = useState({
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            subject: "",
                                            comments: "",
                                          })

  function changeHandler ( event ){
    setFormData( (prevData)=>{
        return {
          ...prevData,
          [event.target.name]: event.target.value
        }
    });
  }

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // Submit the form data
  const handleSubmit = async (event, ) => {
    event.preventDefault();

    // Validate form fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.comments) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error('Invalid email format. Please enter a valid email.');
      return;
    }

    try {
      // Send POST request to the backend API
      const response = await axios.post('https://my-api-y1yb.onrender.com/api/v1/comments', formData);

      // Handle success response
      toast.success('Comment submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        comments: '',
      });} catch (err) {
      toast.error(err.message);
    }
  };






  return (

    <div className=' w-full mt-20 mb-0 pt-14' id='ContactMeSection' >
      
      <div className='max-w-[1200px] w-screen mx-auto'>

        <h2 className='text-3xl mx-auto phone:text-5xl md:text-6xl yusei-magic-regular select-none font-bold text-[#4e45d5]'>Contact Me</h2>

      </div>

      <div className='bg-slate-100 pb-16 mb-0 rounded-lg'>

          <div className='max-w-[1200px] mx-auto w-screen flex flex-col lg:flex-row justify-between lg:items-start items-center py-8 px-4 '>

            <div className='flex flex-wrap lg:flex-col justify-start lg:justify-between items-start gap-6 py-6  text-xl phone:text-3xl md:text-4xl'>
              <p>Questions,</p>
              <p>Thoughts,</p>
              <p>Or Just Want</p>
              <p>To Say <span className='font-bold text-[#4e45d5] text-2xl phone:text-4xl md:text-5xl'>Hello?</span></p>
            </div>


            <div className='flex justify-center w-[90%] lg:w-[55%] border-[#4e45d5] border-2  rounded-2xl py-8 shadow-xl shadow-slate-600 bg-white' >
            
            <form onSubmit={handleSubmit}>

              <div className='flex flex-col gap-10 w-full px-3'>

                <div className='flex justify-between gap-10'>
                  <div className='relative group w-[48%]'>
                    <p className='absolute z-10 -top-2 left-[10%] bg-white px-2 opacity-0 group-hover:opacity-100 duration-150'>First Name</p>
                    <input name='firstName' 
                        className='border-[#4e45d5] w-full border-2 rounded-lg p-4 group-hover:placeholder-transparent' 
                        type="text"
                        value={formData.firstName}
                        placeholder='First Name' 
                        onChange={changeHandler}
                    />
                  </div>
                  
                  <div className='relative group w-[48%] '>
                    <p className='absolute z-10 -top-2 left-[10%] bg-white px-2 opacity-0 group-hover:opacity-100 duration-150'>Last Name</p>
                    <input name='lastName' 
                        className='border-[#4e45d5] w-full border-2 rounded-lg p-4 group-hover:placeholder-transparent  group-hover:shadow-2xl shadow-[#4e45d5] ' 
                        type="text" 
                        value={formData.lastName}
                        placeholder='Last Name' 
                        onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className=''>
                  <div className='relative group'>
                    <p className='absolute z-10 -top-2 left-[10%] bg-white px-2 opacity-0 group-hover:opacity-100 duration-150'>Email</p>
                    <input name='email' 
                        className='w-full border-[#4e45d5] border-2 rounded-lg p-4 group-hover:placeholder-transparent  group-hover:shadow-2xl shadow-[#4e45d5] ' 
                        type="text" 
                        value={formData.email}
                        placeholder='Enter Email' 
                        onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className=''>
                  <div className='relative group '>
                    <p className='absolute z-10 -top-2 left-[10%] bg-white px-2 opacity-0 group-hover:opacity-100 duration-150'>Subject</p>
                    <input name='subject' 
                        className='w-full border-[#4e45d5] border-2 rounded-lg p-4 group-hover:placeholder-transparent  group-hover:shadow-2xl shadow-[#4e45d5] ' 
                        type="text" 
                        value={formData.subject}
                        placeholder='Enter Subject'
                        onChange={changeHandler}
                    />
                  </div>
                </div>

                <div className=''>
                  <div className='relative group w-full'>
                    <p className='absolute z-10 -top-2 left-[10%] bg-white px-2 opacity-0 group-hover:opacity-100 duration-150'>Enter your message</p>
                    <textarea name='comments' 
                        className='w-full border-[#4e45d5] border-2 rounded-lg p-4 group-hover:placeholder-transparent  group-hover:shadow-2xl shadow-[#4e45d5] '  
                        placeholder='Let’s connect! Whether it’s a project, an opportunity, or just a quick chat, I’d love to hear from you.' 
                        onChange={changeHandler}
                        value={formData.comments}
                    />
                  </div>
                </div>

                <div className='flex justify-center'>

                <button className='flex w-52 p-2 text-slate-50 justify-center flex-wrap gap-3 px-3 rounded-md bg-[#756eda] border-2 border-slate-500 hover:border-b-2 hover:border-slate-600 hover:text-white hover:bg-[#4e45d5] shadow-md shadow-slate-400 hover:ease-in duration-200'>
                        Sumbit Response
                </button>

                </div>

              </div>

            </form>
            </div>

          </div>

      </div>


    </div>
  )
}

export default ContactMe
