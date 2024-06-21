import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Numbers from "./Numbers";

export const ContactUs = () => {
  const form = useRef();
  const [email, setEmail] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_99nh35y', 'template_wbxipij', form.current, {
        userEmail: email, // Pass the user's email here
        publicKey: 'lVR4vOFAmW6MKo0eJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="w-full py-20 text-white px-4 bg-[#0b4867]">
        <div className="max-w-[1240px] mx-auto lg:grid grid-cols-2 items-center gap-4">
          <div className="">
            <h1 className="md:text-3xl tracking-wide sm:text-3xl font-semibold text-2xl">Want tips & tricks to optimize your flow?</h1>
            <p>Sign up to our newsletter and stay up to date.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <form ref={form} onSubmit={sendEmail} className='flex'>
                <input type="email" placeholder="Enter Email" className="flex h-12 pl-4 rounded-lg w-full text-black" width={96} value={email} onChange={handleEmailChange}/>
                <button type="submit" className="text-black border-none bg-[#00df9a] font-medium px-3 py-3 w-[200px] tracking-wide rounded-lg mt-4 sm:mt-0 ml-3">Notify Me</button>
              </form>
            </div>
            <p className="pt-4">We care about protection of your data.Read pur <span className="text-[#00df9a] underline underline-offset-2">Privacy Policy</span></p>
          </div>
        </div>
        <div className="pt-40">
        <Numbers></Numbers></div>
      </div>
      
    </>
  );
};

export default ContactUs;
