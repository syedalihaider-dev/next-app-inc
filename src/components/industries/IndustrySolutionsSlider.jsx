'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './IndustrySolutionsSlider.module.css';

const IndustrySolutionsSlider = ({
    title = <>Next-Gen eLearning App Solutions <br /> For <span className={styles.highlightWrapper}><span className={styles.highlightText}>Modern Education</span></span> Needs</>,
    solutionsData = []
}) => {
    const defaultSolutions = [
        {
            title: 'Content Authoring Tools',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            image: '/industries/accounting-app-development/solution-1.webp',
            active: false
        },
        {
            title: 'Employee Engagement Apps',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            image: '/industries/accounting-app-development/solution-2.webp',
            active: false
        },
        {
            title: 'Skill Boosting Apps',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            image: '/industries/accounting-app-development/solution-3.webp',
            active: false
        },
        {
            title: 'ELearning Apps',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            image: '/industries/accounting-app-development/solution-4.webp',
            active: false
        },
        {
            title: 'Corporate Training',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            image: '/industries/accounting-app-development/solution-1.webp',
            active: false
        }
    ];

    const displaySolutions = solutionsData.length > 0 ? solutionsData : defaultSolutions;

    return (
        <section className={styles.solutionsSliderSection}>
            <div className="container">
                <div className={styles.headerArea}>
                    <h2 className={styles.heading}>
                        {title}
                    </h2>
                </div>
            </div>

            <div className={styles.sliderWrapper}>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1.2}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        576: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 3.5 },
                        1400: { slidesPerView: 4 },
                    }}
                    className={styles.solutionsSwiper}
                >
                    {displaySolutions.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={`${styles.solutionCard} ${item.active ? styles.activeCard : ''}`}>
                                <div className={styles.imageBox}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className={styles.cardImg}
                                    />
                                </div>
                                <div className={styles.contentBox}>
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

export default IndustrySolutionsSlider;
