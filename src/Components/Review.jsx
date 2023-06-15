import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";


const Review = () => {
    return (
        <div>
            <h1 className="text-center text-3xl font-semibold my-5">What Our Patients Says</h1>
            <p className="text-center w-[900px] mx-auto mb-10">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <div className='w-[900px] mx-auto'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper text-center">
                    <SwiperSlide className="text-left">
                        <div className="w-[500px] p-10 mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3 items-center my-3">
                                    <img className="w-12" src="https://i.ibb.co/1z6rx3Z/Ellipse-2.png" alt="" />
                                    <div>
                                        <h1 className="font-semibold">Awlad Hossain</h1>
                                        <p>Product Designer</p>
                                    </div>
                                </div>
                                <img className="w-12 h-10" src="https://i.ibb.co/vzRPWMY/Group-17.png" alt="" />
                            </div>
                            <p className="py-2">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-left">
                        <div className="w-[500px] p-10 mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3 items-center my-3">
                                    <img className="w-12 h-12 rounded-full object-cover" src="https://i.ibb.co/nfGJq19/Rectangle-15.png" alt="" />
                                    <div>
                                        <h1 className="font-semibold">Farhana Hossain</h1>
                                        <p>Brand Designer</p>
                                    </div>
                                </div>
                                <img className="w-12 h-10" src="https://i.ibb.co/vzRPWMY/Group-17.png" alt="" />
                            </div>
                            <p className="py-2">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknow printer tool a galley of type and scrambled it to make type specimen book has survived not only five centurines.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Review;