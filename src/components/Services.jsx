'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import styles from './Services.module.css';
import MyButton from './MyButton';

const Services = () => {
    const swiperRef = useRef(null);

    const servicesData = [
        {
            icon: "/services-icon-01.png",
            title: "Mobile Application",
            description: "Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse. Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse."
        },
        {
            icon: "/services-icon-02.png",
            title: "E-commerce Development",
            description: "Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse. Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse."
        },
        {
            icon: "/services-icon-03.png",
            title: "Game Development",
            description: "Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse. Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse."
        },
        {
            icon: "/services-icon-04.png",
            title: "Web Development",
            description: "Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse. Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse."
        },
        {
            icon: "/services-icon-01.png",
            title: "Software Solutions",
            description: "Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse. Lorem ipsum dolor sit amet nsec tetur. Tempus sem nulla euismod lla quis venenatis tellus. Nullavive Rramet suspendisse."
        }
    ];

    return (
        <section className={styles.servicesSection}>
            <Image
                src="/services-bg.png"
                alt="services Background"
                fill
                priority
                className={styles.backgroundImage}
            />
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className={styles.headerArea}>
                            <span className={styles.badge}>WHAT WE DO</span>
                            <h2 className={styles.heading}>
                                Your Partner in <span className="secondarytxt">Mobile Strategy,</span><br />
                                <span className="secondarytxt">Design</span>, and Development.
                                <Image
                                    src="/green-vector.png"
                                    alt="underline"
                                    width={450}
                                    height={20}
                                    className={styles.greenVector}
                                />
                            </h2>
                        </div>
                    </div>
                </div>

                <div className={styles.sliderWrapper}>
                    <button
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Image src="/arrow-icon.png" alt="prev" width={40} height={40} className={styles.prevArrow} />
                    </button>

                    <div className={styles.cardsScroll}>
                        <Swiper
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1400: { slidesPerView: 4 },
                            }}
                            className={styles.mySwiper}
                        >
                            {servicesData.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.serviceCard}>
                                        <div className={styles.iconBox}>
                                            <Image src={service.icon} alt={service.title} width={45} height={45} />
                                        </div>
                                        <h4 className={styles.cardTitle}>{service.title}</h4>
                                        <p className={styles.cardDescription}>{service.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Image src="/arrow-icon.png" alt="next" width={40} height={40} />
                    </button>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <MyButton text="Explore More" className="btn_black" />
                </div>
            </div>
        </section>
    );
};

export default Services;
