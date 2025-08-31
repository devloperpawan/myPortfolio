import React, { useState } from 'react';
import axios from 'axios'; // 👈 install this if not done
import location from '../../assets/logo/location.png';
import contact from '../../assets/logo/mail.png';
import './Contact.css';
import { useTheme } from '../../context/themeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const {theme} = useTheme();

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://myportfolio-wisf.onrender.com/api/contact', formData);
      alert('✅ Message Sent Successfully');
      setFormData({ name: '', email: '', subject: '', message: '' }); 
    } catch (err) {
      console.error('❌ Failed to send message:', err.response?.data || err.message);
      alert('❌ Failed to send message');
    }
  };

  return (
    <div className="md:w-[80%] w-[100%] m-auto bg-transparent flex flex-col items-center justify-center pt-5 mt-5">
      <h2 className={`text-4xl font-bold text-center ${theme === "light" ? "text-gray-900":"text-gray-200"}`}>Contacts</h2>
      <hr className={`w-full ${theme === "light" ? "text-gray-500": "text-gray-200"} mt-4`} />
      <div className='w-full flex md:flex-row flex-col justify-between mt-8'>
        {/* Form */}
        <div className='bg-transparent md:w-[50%]'>
          <h2 className={`text-4xl font-bold md:text-start text-center mb-8 ${theme === "light" ? "text-gray-900": "text-gray-200"}`}>Leave Us Your Info</h2>
          <form onSubmit={handleSubmit} className={`p-5 w-full ${theme === "light" ? "bg-white" : "bg-gray-800"}`}>
            <article>
              <span className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-lg font-medium`}>Your Full Name (Required)</span><br />
              <input
                type="text"
                className='bg-gray-200 border-none text-lg text-gray-500 outline-0 w-full p-1 rounded mt-1'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </article>

            <article className='mt-2'>
              <span className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-lg font-medium`}>Email (Required)</span><br />
              <input
                type="email"
                className='bg-gray-200 border-none text-lg text-gray-500 outline-0 w-full p-1 rounded mt-1'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </article>

            <article className='mt-2'>
              <span className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-lg font-medium`}>Subjects</span><br />
              <input
                type="text"
                className='bg-gray-200 border-none text-lg text-gray-500 outline-0 w-full p-1 rounded mt-1'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
              />
            </article>

            <article className='mt-2'>
              <span className={`${theme === "light" ? "text-gray-500" : "text-gray-400"} text-lg font-medium`}>Your Message</span><br />
              <textarea
                className='bg-gray-200 border-none text-lg text-gray-500 outline-0 w-full p-1 rounded mt-1 resize-none'
                rows={6}
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </article>

            <button type='submit' className='bg-yellow-400 hover:bg-yellow-500 p-2 text-white text-lg font-bold mt-2 rounded'>
              Send Message
            </button>
          </form>
        </div>

        {/* Right-side Contact Info */}
        <div className='md:w-[45%] w-[100%] bg-transparent'>
       <h2 className={`text-4xl font-bold md:text-start text-center mt-3 mb-8 ${theme === "light" ? "text-gray-900": "text-gray-200"}`}>Contact Information</h2>

       <section className={`w-full ${theme === "light" ? "bg-white" : "bg-gray-800"} p-5 flex flex-col items-center rounded`}>
       <span className='bg-yellow-500 p-3 rounded-3xl flex items-center justify-center'><img src={location} alt="Location Image" /></span>
       <article className={`flex justify-between p-1 w-full ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}><span className='text-lg font-medium'>Country</span><span className='text-lg'>India</span></article> 

       <article className={`flex justify-between p-1 w-full ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}><span className='text-lg font-medium'>City</span><span className='text-lg'>Siwan</span></article>

       <article className={`flex justify-between p-1 w-full ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}><span className='text-lg font-medium'>Street</span><span className='text-lg'>Dilshadpur, Bhagwanpur Hat</span></article>
       </section>

       {/* Contact Details */}
       <section className={`w-full ${theme === "light" ? "bg-white" : "bg-gray-800"} p-5 flex flex-col items-center mt-2 rounded`}>
       <span className='bg-yellow-500 p-3 rounded-3xl flex items-center justify-center'><img src={contact} alt="Contact Image" /></span>
       <article className={`flex justify-between p-1 w-full ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}><span className='text-lg font-medium'>Email:</span><span className='text-lg'>krsinghpawan841408@gmail.com</span></article> 

       <article className={`flex justify-between p-1 w-full ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}><span className='text-lg font-medium'>Phone no.:</span><span className='text-lg'>+91 7764842082</span></article>

       <article className={`flex justify-between p-1 w-full ${theme === "light" ? "text-gray-500" : "text-gray-400"}`}><span className='text-lg font-medium'>Linkedin:</span><span className='text-lg '>www.linkedin.com/pawan-singh</span>
       </article>
       </section>
       </div>
      </div>

       <div className='w-full h-[300px] mt-8'>
      <iframe
      className='w-full h-full'
        title="My Location"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d27231.370638225733!2d84.62576670581583!3d26.11385266076766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1752041031246!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d27231.370638225733!2d84.62576670581583!3d26.11385266076766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1752041031246!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  );
};

export default Contact;

