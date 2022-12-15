import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { send } from 'emailjs-com';


export default function Contact() {
  const form = useRef();
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: ''
  });
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_fgqci5u',
      'template_0t2kdor',
      toSend,
      'QgRkeTht_54H1nMdn'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Message sent!")
      })
      .catch((err) => {
        console.log('FAILED...', err);
        alert("Message not sent! please try again")
      });
  };
  return (
    <>
<Head>
        <title>Be nutrition coaching</title>
        <link rel="icon" href="/assests/logo.png" />
      </Head>
     <div className="contact-in">
          <div className="contact-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4345675536365!2d38.8259783!3d9.0240624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9be0dc1737e5%3A0xf5990d9c7c942ef4!2sBe%20Nutrition%20Coaching!5e0!3m2!1sen!2set!4v1663125694948!5m2!1sen!2set" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact-form">
              <h1 className='font-bold text-3xl'>Contact Us</h1>
          <form ref={form} onSubmit={onSubmit}>
            <input value={toSend.from_name} onChange={handleChange} type="text" name='from_name' placeholder="Name" className="contact-form-txt" />
            <input value={toSend.reply_to} onChange={handleChange} type="text" name='reply_to' placeholder="Email" className="contact-form-txt" />
            <textarea value={toSend.message} onChange={handleChange} placeholder="Message" name='message' className="contact-form-textarea"></textarea>
                  <input type="submit" name="Submit" className="contact-form-btn" />
              </form>
          <div class="flex flex-wrap justify-center mt-4 -mx-2">
            <a href="tel:+251961039544" class="flex flex-wrap mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 50 50"
                style={{fill:"#000000"}}><path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z"></path></svg>
              <p>+251961039544</p>
            </a>

            
            <a href="mailto: timnitbenyam7@gmail.com" class="flex felx-wrap mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
<img src="assests/mail.png" alt="" />       
              <p>timnitbenyam7@gmail.com</p>

</a>
          </div>
          </div>
      </div>

    </>
       )
}
