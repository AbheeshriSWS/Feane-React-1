import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import Client1 from '../assets/images/client1.jpg';
import Client2 from '../assets/images/client2.jpg';

function Feedback(){
    return(
        <>
            {/* client section */}

  <section className="client_section layout_padding-bottom" style={{paddingBottom: "170px"}}>
    <div className="container">
      <div className="heading_container heading_center psudo_white_primary mb_45">
        <h2>
          What Says Our Customers
        </h2>
      </div>
      <div className="carousel-wrap row">
        <Swiper
      modules={[Navigation, Autoplay]}
  spaceBetween={30}
  grabCursor={true}
  loop={true}
  slidesPerView={2}
  autoplay={{
  delay: 3000, // 3 sec baad slide change
  disableOnInteraction: false, // user interact kare tab bhi autoplay chalta rahe
}}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
  }}
>
          <SwiperSlide>
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6>Moana Michell</h6>
                <p>magna aliqua</p>
              </div>
              <div className="img-box">
                <img src={Client1} alt="Client 1" className="box-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6>Mike Hamell</h6>
                <p>magna aliqua</p>
              </div>
              <div className="img-box">
                <img src={Client2} alt="Client 2" className="box-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6>Moana Michell</h6>
                <p>magna aliqua</p>
              </div>
              <div className="img-box">
                <img src={Client1} alt="Client 1" className="box-img" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="box">
              <div className="detail-box">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
                <h6>Moana Michell</h6>
                <p>magna aliqua</p>
              </div>
              <div className="img-box">
                <img src={Client1} alt="Client 1" className="box-img" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="custom-prev">
  <i className="fa fa-angle-left"></i>
</div>

<div className="custom-next">
  <i className="fa fa-angle-right"></i>
</div>
      </div>
    </div>
  </section>

  {/* end client section */}
        </>
    );
}

export default Feedback;