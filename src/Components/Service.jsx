import React from 'react';

const Service = () => {
    return (
        <div>
            <div className='flex max-w-5xl justify-center mx-auto gap-8 my-20'>
                <img className='w-[400px]' src="https://i.ibb.co/bv4gNVS/Rectangle-20078.png" alt="" />
                <div className='w-[400px]'>
                    <h1 className='text-3xl font-semibold'>Our Services</h1>
                    <p className='py-4'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <div></div>
                    <img className='' src="https://i.ibb.co/BTSw4KQ/Rectangle-10.png" alt="" />
                    <h1 className='font-semibold text-2xl py-2'>Electro  Gastrology Therapy</h1>
                    <p className='py-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error </p>
                    <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <button className='py-2 px-3 mt-4 border-[#F7A582] border-2 rounded-lg'>More Details</button>
                </div>
            </div>
            <div className='flex text-left max-w-4xl gap-5 mx-auto text-white'>
                <div className='w-1/3 bg-[#07332F] rounded-lg flex p-4 py-8 gap-4'>
                    <img className='w-10 h-10' src="https://i.ibb.co/rwV7wMF/Frame.png" alt="" />
                    <div>
                        <h1 className='font-semibold'>Opening Hours</h1>
                        <p>Open 9.00 am to 5.00pm Everyday</p>
                    </div>
                </div>
                <div className='w-1/3 bg-[#F7A582] rounded-lg flex p-4 py-8 gap-4'>
                    <img className='w-10 h-10' src="https://i.ibb.co/JvM9hCT/Frame-1.png" alt="" />
                    <div>
                        <h1 className='font-semibold'>Our Locations</h1>
                        <p>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                    </div>
                </div>
                <div className='w-1/3 bg-[#07332F] rounded-lg p-4 flex py-8 gap-4'>
                    <img className='w-8 h-8' src="https://i.ibb.co/bQ6FYtM/Frame-5.png" alt="" />
                    <div>
                        <h1 className='font-semibold'>Contact Us</h1>
                        <p>+88 01750 00 00 00 <br />
                            +88 01750 00 00 00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;