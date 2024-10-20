import photo from '../assets/20231209222540873-01.jpeg'

const About = () => {
    return (
        <div id="about" className='grid md:grid-cols-2 mx-[15%] md:mx-[10%] mt-20'>
            <div className=''>
               <img className='w-80 mt-7 rounded-xl border-4 border-white' src={photo} alt="" />
            </div>
            <div className='text-center'>
              <p className='text-5xl font-serif mb-3 '>About me</p>
              <p className='font-serif text-slate-600'>My journey into web development began with a curiosity for how websites are built, leading me to develop several projects that showcase my ability to create responsive, user-friendly web applications. I thrive on challenges and am eager to contribute to dynamic teams, continually learning and growing in the ever-evolving tech landscape.</p>
            
              

              <div role="tablist" className="tabs tabs-bordered mt-5 ">
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Skills" />
  <div role="tabpanel" className="tab-content p-10"><ul className='border-2 p-4'><li><span className='font-bold underline text-rose-600'>Front-end <br /></span> HTML, CSS,Javascript</li>
  <li className='mt-5'><span className='font-bold underline text-rose-600 '>Back-end <br /></span> node.js,mongoDB, express.js,firebase</li></ul></div>

  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab"
    aria-label="Education"
    defaultChecked />
  <div role="tabpanel" className="tab-content p-10"><ul className='border-2 p-4'><li><span className='font-bold underline text-rose-600'>2024 <br /></span> Web Development Course from Programing Hero</li>
  <li className='mt-5'><span className='font-bold underline text-rose-600 '>2022 <br /></span> BSc in Nuclear Science and Engineering (MIST)</li>
  <li className='mt-5'><span className='font-bold underline text-rose-600 '>2017 <br /></span> Higher Secondary School Certificate</li></ul></div>

  
</div>
              
            
        </div>
        </div>
    );
};

export default About;