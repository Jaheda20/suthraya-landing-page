import { useEffect, useState } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import { BsChatLeftQuoteFill } from "react-icons/bs";
import RatingComponent from "./RatingComponent";


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('testimonials.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    })

    return (
        <div className="max-w-7xl mx-auto w-full my-20 flex items-center">
            <div className="w-1/3">
                <p className="mb-2 text-fuchsia-900 font-semibold text-lg">What They Say</p>
                <h1 className="text-3xl font-bold text-slate-700">Hear from Our Learners: Their Journey with Suthraya</h1>
            </div>
            <div className="w-2/3 ml-10">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={50}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {
                        reviews.map((review => <SwiperSlide key={review.id}>
                            <div>
                                <div className="border border-t-4 border-t-fuchsia-700 p-8 rounded-xl h-80 flex flex-col justify-between">
                                    <p className="text-fuchsia-800 mb-10"><BsChatLeftQuoteFill size={56} />
                                    </p>
                                    <p className="text-slate-600 leading-relaxed">{review.review}</p>
                                    <div className="mt-3">
                                        <RatingComponent value={Number(review.rating)} readOnly={true} />
                                    </div>

                                </div>

                                <div className="flex mt-10 items-center p-4">
                                    <img src={review.image} alt="" className="w-24 h-24 mr-4 rounded-full" />
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-700">{review.name}</h3>
                                        <p className="text-fuchsia-800 text-sm">{review.profession}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>))
                    }


                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;