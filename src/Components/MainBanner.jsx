import React from 'react';

const MainBanner = () => {
    return (
        <div className='bg-[#07332F]'>
            <div className=' flex py-10 justify-center gap-4 items-center'>
                <div className='w-[460px] text-white'>
                    <h1 className='text-5xl font-semibold'>Your Best Medical Help Center</h1>
                    <p className='py-3'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className=' bg-[#F7A582] py-2 px-3 font-semibold rounded-md'>All Service</button>
                </div>
                <img className='w-[400px]' src="https://i.ibb.co/ssCYfcC/Group-34991.png" alt="" />
            </div>
            <img className='absolute top-0 w-[200px]' src="https://i.ibb.co/zfMmV6S/Vector.png" alt="" />
            <img className='absolute top-28 right-[470px] w-[200px]' src="https://i.ibb.co/PGLkbWC/Group-7.png" alt="" />
            <img className='absolute bottom-[170px] right-[600px] w-[50px]' src="https://i.ibb.co/XxZGfkv/Group-6.png" alt="" />
        </div>
    );
};

export default MainBanner;