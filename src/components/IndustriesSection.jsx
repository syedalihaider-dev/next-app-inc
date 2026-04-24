'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './IndustriesSection.module.css';

const industries = [
    {
        title: 'E-Commerce',
        description: 'We create apps for retail businesses that are great at engaging',
        image: '/services/ios-app-development/industry-01.webp'
    },
    {
        title: 'Real Estate',
        description: 'Premium mobile solutions for real estate management and listing',
        image: '/services/ios-app-development/industry-02.webp'
    },
    {
        title: 'Fintech',
        description: 'Secure and scalable financial technology applications for all',
        image: '/services/ios-app-development/industry-03.webp'
    },
    {
        title: 'Healthcare',
        description: 'Intuitive and HIPAA-compliant healthcare solutions for patients',
        image: '/services/ios-app-development/industry-04.webp'
    },
    {
        title: 'Education',
        description: 'Engaging learning platforms for the modern student and teacher',
        image: '/services/ios-app-development/industry-05.webp'
    }
];

const IndustriesSection = () => {
    return (
        <section className={styles.industriesSection}>
            <Image
                src="/services/industries-bg.webp"
                alt="Industries background"
                fill
                className={styles.bgImage}
            />

            <div className="container position-relative z-2">
                <div className={styles.headerArea}>
                    <h2 className={styles.heading}>Industries We Have Served</h2>
                    {/* <div className={styles.underlineWrapper}>
                        <Image
                            src="/blue-vector.webp"
                            alt="underline"
                            width={250}
                            height={25}
                            className={styles.purpleVector}
                        />
                    </div> */}
                    <p className={styles.description}>
                        We Specialize In Developing Industry-Specific Applications For Our Clients.
                    </p>
                </div>
            </div>
            <div className={styles.sliderWrapper}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        576: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1400: { slidesPerView: 4.5 },
                    }}
                    className={styles.industriesSwiper}
                >
                    {industries.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.industryCard}>
                                <div className={styles.imageBox}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className={styles.industryImg}
                                    />
                                </div>
                                <div className={styles.overlay}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <p className={styles.cardDesc}>{item.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default IndustriesSection;
