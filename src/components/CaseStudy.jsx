'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './CaseStudy.module.css';

const CaseStudy = () => {
    const caseStudies = [
        {
            title: "Yes Table",
            industry: "Food",
            team: "BA | QA | Design | Frontend | Backend | App Developers",
            bg: "/case-study-bg-01.png",
            icon: "/case-study-icon-01.png",
            mockup: "/case-study-01.png",
        },
        {
            title: "Love On Life",
            industry: "Event",
            team: "BA | QA | Design | Frontend | Backend | App Developers",
            bg: "/case-study-bg-02.png",
            icon: "/case-study-icon-02.png",
            mockup: "/case-study-02.png",
        },
        {
            title: "Marhofer Renewables",
            industry: "Field Service",
            team: "BA | QA | Design | Frontend | Backend | App Developers",
            bg: "/case-study-bg-03.png",
            icon: "/case-study-icon-03.png",
            mockup: "/case-study-03.png",
        }
    ];

    return (
        <section className={styles.caseStudySection}>
            <div className="container">
                <div className={styles.headerArea}>
                    <span className={styles.badge}>CASE STUDY</span>
                    <h2 className={styles.heading}>
                        <span className={styles.underlinedText}>
                            Problems We've
                            <Image
                                src="/green-vector.png"
                                alt="underline"
                                width={350}
                                height={20}
                                className={styles.greenVector}
                            />
                        </span> <span className="secondarytxt">Solved</span>
                    </h2>
                </div>
            </div>
            <div className={`${styles.sliderWrapper}`}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={false}
                    breakpoints={{
                        768: { slidesPerView: 1 },
                        991: { slidesPerView: 2 },
                        1600: { slidesPerView: 3 },
                    }}
                    className={styles.casesSwiper}
                >
                    {caseStudies.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.caseStudyCard}>
                                <Image
                                    src={item.bg}
                                    alt={item.title}
                                    fill
                                    className={styles.cardBgImg}
                                />
                                <div className={styles.cardContent}>
                                    <div className={styles.cardIcon}>
                                        <Image src={item.icon} alt="icon" width={40} height={40} />
                                    </div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardIndustry}>Industry: <span>{item.industry}</span></p>

                                    <div className={styles.teamBox}>
                                        <h4 className={styles.teamHeading}>Team Involved</h4>
                                        <p className={styles.teamList}>{item.team}</p>
                                    </div>

                                    <button className={styles.viewBtn}>View Case Study</button>
                                </div>
                                <div className={styles.mockupImg}>
                                    <Image src={item.mockup} alt="mockup" width={287} height={353} priority />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CaseStudy;
