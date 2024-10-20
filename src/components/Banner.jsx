
import image from '../assets/20240704_162505.png'
const Banner = () => {
    return (
        <div className="mt-10 font-serif md:flex lg:gap-60 bg-slate-100" >
            <div  className='p-5 lg:p-20'>
                <p className="text-2xl">Hello,</p>
                <p className="text-5xl">I'm  <span className="text-yellow-500">Nusrat</span> </p>
                <p className="text-5xl">Website Designer</p>
                <p className="text-slate-600">I am a skilled and passionate web Designer with experience in creating <br /> visually appealing and user-friendly websites. </p>
            </div>
            <div>
               <img className='md:w-96 w-96' src={image} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;