import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../sass/Register.scss'
import firebase from '../components/Firebase'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [course, setCourse] = useState('')
    const [checkbox, setCheckbox] = useState(false)
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!fullName || !email || !course) {
          setErrorMessage('Please fill out all the required fields');
          return;       
        }

        if (!checkbox) {
            setErrorMessage("Please accept the terms and conditions to proceed.");
            return;
        }

        try {
          const data = { fullName, email, course };
          const res=await fetch("https://elaqub-default-rtdb.firebaseio.com/elaqub.json",
            {
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body:JSON.stringify({
                fullName,
                email,
                course,
              })
            })
          setSuccessMessage("Your registration was successful!");

          // Send email with your preferred email provider
          // Example: Send with Gmail
          const result = await axios.post('https://api.elaquent.app/v1/email', {
              to: email,
              subject: 'Welcome to ElaQub',
              text: `Dear ${fullName}, \n\nThank you for registering for our courses. 
                    We are glad to have you as part of our community. \n\n
                    Best regards,\nElaQub Team`
          });

      } catch (error) {
          setErrorMessage("An error occurred, please try again later.");
          console.error(error);
      }
    };

    useEffect(() => {
        if (successMessage) {
          toast.success(successMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
    
        if (errorMessage) {
          toast.error(errorMessage, {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
    }, [successMessage, errorMessage]);
     

  return (
    <div className='register'>
        <Navbar/>

        <form onSubmit={handleSubmit}>
            <div className="top">
                <p>Join the next Cohort by registering below</p>

                <h1>REGISTER HERE</h1>
            </div>

            <label htmlFor="">
                Full Name
                <input type="text" name="name" id="name" onChange={(e) => setFullName(e.target.value)} />
            </label>

            <label htmlFor="">
                Email
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
            </label>

            <select name="courses" id="" className='select' onChange={(e) => setCourse(e.target.value)}>
                <option value="">Select a Course</option>
                <option value="courses">Copy Writing</option>
                <option value="courses">Graphic design</option>
                <option value="courses">Web Development</option>
            </select>

            <label htmlFor="checkbox" name='check' id='check'>
                <input type="checkbox" name="checkbox" id='checkbox' onChange={(e) => setCheckbox(e.target.checked)}/>
                <p>I agree ElaQub would use my details according to its <a href="">policy</a></p>
            </label>

            <button type="submit">Register</button>
        </form>

        <Footer/>

        <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          unmountOnExit={true}
        />


    </div>
  )
}

export default Register