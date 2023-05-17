// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";

function Carrossel() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img src="https://thumbs.dreamstime.com/b/cabe%C3%A7alho-de-banner-pixels-preto-no-cabelo-mulher-beleza-221476472.jpg"
                     alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Panoramic_view_of_Ibirapuera_Park%2C_S%C3%A3o_Paulo%2C_Brazil.jpg/1200px-Panoramic_view_of_Ibirapuera_Park%2C_S%C3%A3o_Paulo%2C_Brazil.jpg"
                     alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/153khxC.png" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.imgur.com/RxL2yjz.jpg" alt="Imagem" />
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default Carrossel