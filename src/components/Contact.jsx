import React from 'react'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "70253025-8f9d-443b-86af-1442310012c2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message);
      setResult("");
    }
  };
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <h1 className='text-2xl md:text-4xl font-bold mb-2 text-center '>Contact <span className='underline underline-offset-4 decoration-1 under font-light's>With Us</span></h1>
        <p className='text-gray-500 text-center mb-12 max-w-full mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto pt-8 text-gray-800'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input className='border border-gray-300 rounded w-full py-3 px-4 ' type="text" name='Name' placeholder='Your Name'/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='border border-gray-300 rounded w-full py-3 px-4 ' type="email" name='Email' placeholder='Your Email'/>
                </div>
            </div>
            <div className='text-left my-6'>
                Message
                <textarea className='h-48 border border-gray-300 w-full rounded py-3 px-4 resize-none'
                name="Message" placeholder='Message' required></textarea>
            </div>
            <button className='bg-blue-600 py-3 px-12 rounded text-white font-medium mb-10'>{result ? result : "Send Message"}</button>
        </form>
    </div>
  )
}

export default Contact