import SwiperCore, { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Row, Col, Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Slide1 from '../Images/slide/slide1.png'
import Slide2 from '../Images/slide/slide2.png'
import Slide3 from '../Images/slide/slide3.gif'
import Slide4 from '../Images/slide/slide4.png'

SwiperCore.use([Pagination, Navigation])

const Body = () => {
    return (
        <div className='py-4'>
            <Row className='px-2 mx-auto'>
                <Col>
                    <Swiper
                        loop={true}
                        loopFillGroupWithBlank={true}
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={5}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        navigation={true}
                        pagination={{ "clickable": true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <Image
                                src={Slide1}
                                width={400}
                                height={250}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Slide2}
                                width={400}
                                height={250}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Slide3}
                                width={400}
                                height={250}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src={Slide4}
                                width={400}
                                height={250}
                            />
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>

        </div>
    )
}

export default Body

