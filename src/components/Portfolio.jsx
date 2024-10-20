import port from '../assets/article.jpg'
import travel from '../assets/travel.jpg'
import home from '../assets/home.jpg'

const Portfolio = () => {
    return (
        <div id="portfolio" className=''>


            <div className="text-center text-4xl font-serif">
                <p className="border-y-2 mx-[5%] md:mx-0 border-yellow-500 border-dashed py-3">My Work</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3'>
            <div>
            <div className="card bg-base-100 w-96 mx-[10%] md:mx-0 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={port}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">TruthTrail:article writing website</h2>
    <p className='text-slate-500 mb-5'>This is a article writing website developed my me which is user friendly and responsive.You can read various type of articles here. you can also add your comment on any specific article. </p>
    <p>Used Technology: HTML,CSS, React.js</p>
    <div className="card-actions">
    <a href="https://assignment-11-c9fe6.web.app/"><button className="btn btn-outline btn-success">Visit</button></a>

    {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>codes</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg"> client side github code:</h3>
    <a href="https://github.com/Porgramming-Hero-web-course/b9a11-client-side-73473">https://github.com/Porgramming-Hero-web-course/b9a11-client-side-73473</a>

    <h3 className="font-bold text-lg"> server side github code:</h3>
    <a href="https://github.com/Porgramming-Hero-web-course/b9a11-server-side-73473">https://github.com/Porgramming-Hero-web-course/b9a11-server-side-73473</a>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
            </div>
       

        {/* ------------------- */}
        <div>
           
            <div>
            <div className="card bg-base-100 w-96 mx-[10%] md:mx-0 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={travel}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">sailor:Travel website</h2>
    <p className='text-slate-500 mb-5'>This is a travel website developed my me which is user friendly and responsive.You can book any travel services from here.</p>
    <p>Used Technology: HTML,CSS, React.js</p>
    <div className="card-actions">
    <a href="https://sailor-travel.web.app/"><button className="btn btn-outline btn-success">Visit</button></a>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_6').showModal()}>codes</button>
<dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg"> client side github code:</h3>
    <a href="https://github.com/programming-hero-web-course-4/B9A10-client-side-73473">https://github.com/programming-hero-web-course-4/B9A10-client-side-73473</a>

    <h3 className="font-bold text-lg"> server side github code:</h3>
    <a href="https://github.com/programming-hero-web-course-4/b9a10-server-side-73473">https://github.com/programming-hero-web-course-4/b9a10-server-side-73473</a>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
            </div>
        </div>
        {/* ----------------- */}

          {/* ------------------- */}
          <div>
           
           <div>
           <div className="card bg-base-100 w-96 mx-[10%] md:mx-0 shadow-xl">
 <figure className="px-10 pt-10">
   <img
     src={home}
     alt="Shoes"
     className="rounded-xl" />
 </figure>
 <div className="card-body items-center text-center">
   <h2 className="card-title">OwnNest:Real Estate Agency website</h2>
   <p className='text-slate-500 mb-5'>This is a Real Estate Agency website developed my me which is user friendly and responsive.You can see details of various houses and buy from here.</p>
   <p>Used Technology: HTML,CSS, React.js</p>
   <div className="card-actions">
   <a href=" https://assignment-9-32d52.web.app/"><button className="btn btn-outline btn-success">Visit</button></a>
       {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_7').showModal()}>codes</button>
<dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg"> client side github code:</h3>
    <a href="https://github.com/programming-hero-web-course-4/b9a9-real-estate-73473">https://github.com/programming-hero-web-course-4/b9a9-real-estate-73473</a>

    
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
   </div>
 </div>
</div>
           </div>
       </div>
       {/* ----------------- */}


        </div>
        </div>
    );
};

export default Portfolio;