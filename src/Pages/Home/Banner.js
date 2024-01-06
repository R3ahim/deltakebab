import React from 'react';
import bannerImg from '../../images/banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={bannerImg} className=" rounded-lg shadow-2xl"  width={500}/>
        <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className='btn btn-primary'>hire me</button>
        </div>
    </div>
</div>
    );
};

export default Banner;