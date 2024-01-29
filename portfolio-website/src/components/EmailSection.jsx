"use client"
import { GitHub } from '@/app/svg/github'
import { LinkedIn } from '@/app/svg/linkedin'
import Link from 'next/link'
import React, {useState} from 'react'

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(process.env.RESEND_API_KEY , "test")

      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };
      const JSONdata = JSON.stringify(data);
      const endpoint = "/api/send";
  
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: "POST",
        // Tell the server we're sending JSON.
        headers: {
          "Content-Type": "application/json",
        },
        // Body of the request is the JSON data we created above.
        body: JSONdata,
      };
  
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
      } else {
        console.error("Failed to send email" , resData);
      }
    };
  return (
    <section className='flex md:flex-row items-center justify-center flex-col my-12 md:my-12 py-12 gap-2 w-full' id='contact'>
        <div>
            <h5 className='text-xl font-bold text-white my-2'>Let`s connect</h5>
            <p className='text-base text-white font-semibold md:text-lg mb-4 max-w-md'>
                {" "}
                I am currently open to freelance work! My inbox is always open for request, weather you have a question or you would like to say hi. I will try my best to get back to you in a timely manner.</p>
        <div className='socials flex flex-row gap-2 '>
            <Link href="https://github.com/kikiou1991" target='_blank' className='transfrom transition-transform hover:scale-125'>
                <GitHub/>
            </Link>
            <Link href="https://www.linkedin.com/in/gabor-adorjani-599666290/" target='_blank' className='transfrom transition-transform hover:scale-125'>
                <LinkedIn/>
            </Link>
        </div>
        </div>
        <div className='md:w-full w-2/3' style={{minWidth: '350px'}}>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
<<<<<<< HEAD
          <form
            className='flex flex-col gap-2 w-full'
            onSubmit={async (formData) => {
              await sendEmail(formData);
            }}>
            <div className='mb-2'>
              <label htmlFor='email' typeof='email' className='text-white block  text-sm font-medium mb-2'>
                Your e-mail
              </label>
              <input
                name='email'
                type='email'
                id='email'
                required
                placeholder='example@gmail.com'
                className='bg-[#1819E] border bordr-[#33353F] rounded-lg block w-full p-2.5'
                value={formData.email}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor='subject' typeof='email' className='text-white block text-sm font-medium mb-2'>
                Subject
              </label>
              <input name='subject' type='text' id='subject' required className='bg-[#1819E] border bordr-[#33353F] rounded-lg block w-full p-2.5' value={formData.subject} />
            </div>
            <div className='mb-6'>
              <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                Message
              </label>
              <textarea name='message' id='message' placeholder='Let`s talk about...' className='bg-[#1819E] border bordr-[#33353F] rounded-lg block w-full p-2.5' value={formData.message}></textarea>
            </div>
            <button type='submit' className='bg-white text-black font-medium py-2.5 px-5 rounded-lg w-full'>
              Submit
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
=======
>>>>>>> parent of 41c5085 (added CV download)

            <form className='flex flex-col gap-2 w-full' onSubmit={handleSubmit}>
                <div className='mb-2'> 
                    <label htmlFor='email' typeof='email' className='text-white block  text-sm font-medium mb-2'>Your email</label>
                    <input name='email' type='email' id='email' required placeholder='example@gmail.com' className='bg-[#1819E] border bordr-[#33353F] rounded-lg block w-full p-2.5'/>

                </div>
                <div className='mb-2'>
                    <label htmlFor='subject' typeof='email' className='text-white block text-sm font-medium mb-2'>Subject</label>
                    <input name='subject' type='text' id='subject' required className='bg-[#1819E] border bordr-[#33353F] rounded-lg block w-full p-2.5'/>

                </div>
                <div className='mb-6'>
                    <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>
                        Message
                    </label>
                    <textarea name='message' id='message' placeholder='Let`s talk about...' className='bg-[#1819E] border bordr-[#33353F] rounded-lg block w-full p-2.5' w-full></textarea>
                </div>
                <button onClick={handleSubmit} type='submit'className='bg-white text-black font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
            </form>   
        )} 
        </div>    
            
    </section>
  )
}

export default EmailSection