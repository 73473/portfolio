import facebook from '../assets/facebook.jpg'
import insta from '../assets/insta.jpg'
import linkdn from '../assets/linkdn.jpg'
import cv from '../assets/nusrat taniacv.pdf'

const Contact = () => {

    const handleContact = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        
        const email= form.get('email');
        const message= form.get('message');
        console.log(name,email,message);
        alert('Your message is sent successfully')

    }
    return (
        <div id="contact" className="hero bg-slate-100 mt-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold font-serif">Contact me</h1>
            <p>-----------------------------------------</p>
            <p className="py-6"><span className="underline text-cyan-600">Email <br /></span> nusratjahantania@gmail.com</p>
            <p className=""><span className="underline text-cyan-600">Phone <br /></span> 01790037428</p>
            <div className='flex'>
                <a href="https://www.facebook.com/nusrat.jahantania.5891?mibextid=ZbWKwL"><img className='w-14' src={facebook} alt="" /></a>
               <a href="https://www.instagram.com/nusr_at7286?igsh=YWg5MnV6eWhmZmpj"> <img className='w-14' src={insta} alt="" /></a>
               <a href="https://bd.linkedin.com/in/nusrat-jahan-tania-b7b939275"> <img className='w-14' src={linkdn} alt="" /></a>
            </div>
            <div>
           <a href={cv} download className='btn'>Download CV</a>
            </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleContact} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input type="text" placeholder="message" name="message" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;