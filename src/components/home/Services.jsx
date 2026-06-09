'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import styles from './Services.module.css';
import MyButton from '@/components/layout/MyButton';

const Services = () => {
    const swiperRef = useRef(null);

    const servicesData = [
        {
            icon: "/services/service-icon-android.png",
            title: "Android App <br />Development",
            description: "We build Android apps designed for speed, usability, and long-term performance. From consumer apps to enterprise tools, every build is optimized for Android devices, user behavior, and scalable business growth.",
            link: "/services/android-app-development-services"
        },
        {
            icon: "/services/service-icon-app-store.png",
            title: "App Store <br />Optimization",
            description: "We help apps get found, clicked, and downloaded through strategic App Store Optimization. From keyword planning to metadata, visuals, and conversion-focused improvements, we position your app for stronger visibility and better organic growth.",
            link: "/services/app-store-optimization-services"
        },
        {
            icon: "/services/service-icon-ar-vr.png",
            title: "AR/VR App <br />Development",
            description: "We create immersive AR and VR app experiences that bring ideas closer to users. From interactive product demos to training tools and entertainment concepts, our teams build experiences that feel smooth, engaging, and purposeful.",
            link: "/services/ar-vr-app-development-services"
        },
        {
            icon: "/services/service-icon-flutter.png",
            title: "Flutter App <br />Development",
            description: "We develop Flutter apps that deliver a consistent experience across iOS and Android. With clean interfaces, efficient code, and reliable performance, we help businesses launch faster without sacrificing quality, flexibility, or user experience.",
            link: "/services/flutter-app-development-services"
        },
        {
            icon: "/services/service-icon-ios.png",
            title: "iOS App <br />Development",
            description: "We design and develop iOS apps built for Apple users and Apple standards. From intuitive interfaces to secure functionality, every app is crafted for performance, polish, and a smooth experience across iPhone and iPad.",
            link: "/services/ios-app-development-services"
        },
        {
            icon: "/services/service-icon-mobile-game.png",
            title: "Mobile Game <br />Development",
            description: "We build mobile games that are fun to play, easy to navigate, and designed to keep users engaged. From concept and mechanics to visuals and launch support, we help turn game ideas into playable products.",
            link: "/services/mobile-game-development-services"
        },
        {
            icon: "/services/service-icon-react-native.png",
            title: "React Native <br />Development",
            description: "We build React Native apps for businesses that need speed, flexibility, and cross-platform reach. Our teams create smooth mobile experiences with shared codebases, helping you reduce development time while maintaining strong app performance.",
            link: "/services/react-native-app-development-services"
        },
        {
            icon: "/services/service-icon-wearable.png",
            title: "Wearable App <br />Development",
            description: "We develop wearable apps that connect technology with everyday movement, health, fitness, and convenience. From smartwatches to connected devices, we build lightweight, responsive solutions that keep users engaged without slowing them down.",
            link: "/services/wearable-app-development-services"
        }
    ];

    return (
        <section className={styles.servicesSection}>
            <Image
                src="/services-bg.webp"
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
                                One <span className="secondarytxt">Technology Partner</span> for <br /> Every
                                <span className="secondarytxt"> Digital Need</span>.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className={styles.sliderWrapper}>
                    <button
                        className={`${styles.navBtn} ${styles.prevBtn}`}
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <Image src="/arrow-icon.webp" alt="prev" width={40} height={40} className={styles.prevArrow} />
                    </button>

                    <div className={styles.cardsScroll}>
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                576: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1400: { slidesPerView: 4 },
                            }}
                            className={styles.mySwiper}
                        >
                            {servicesData.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <Link href={service.link} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                                        <div className={styles.serviceCard}>
                                            <div className={styles.iconBox}>
                                                <Image src={service.icon} alt={service.title} width={45} height={45} />
                                            </div>
                                            <h4 className={styles.cardTitle} dangerouslySetInnerHTML={{ __html: service.title }}></h4>
                                            <p className={`${styles.cardDescription} scroll_block`}>{service.description}</p>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <button
                        className={`${styles.navBtn} ${styles.nextBtn}`}
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <Image src="/arrow-icon.webp" alt="next" width={40} height={40} />
                    </button>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <MyButton text="Get Started" className="btn_black" />
                </div>
            </div>
        </section>
    );
};

export default Services;
