import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../sass/Register.scss'

const Register = () => {
  return (
    <div className='register'>
        <Navbar/>

        <form action="">
            <div className="top">
                <p>Join the next Cohort by registering below</p>

                <h1>REGISTER HERE</h1>
            </div>

            <label htmlFor="">
                Full Name
                <input type="text" name="name" id="name" />
            </label>

            <label htmlFor="">
                Email
                <input type="email" name="email" id="email" />
            </label>

            <select name="courses" id="" className='select'>
                <option value="">---</option>
                <option value="courses">Copy Writing</option>
                <option value="courses">Graphic design</option>
                <option value="courses">Web Development</option>
            </select>

            <label htmlFor="checkbox" name='check' id='check'>
                <input type="checkbox" name="checkbox" id='checkbox'/>
                <p>I agree ElaQub would use my details according to its <a href="">policy</a></p>
            </label>

            <button type="submit">Register</button>
        </form>

        <Footer/>

    </div>
  )
}

export default Register