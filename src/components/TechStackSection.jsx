'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './TechStackSection.module.css';

const categories = [
    'DESIGN',
    'FRONT-END',
    'BACK-END',
    'DATABASE',
    'CLOUD',
    'FRAMEWORK',
    'PROJECT MANAGEMENT'
];

const techStacks = {
    'FRONT-END': [
        { name: 'Flutter', icon: '/tech-stack/flutter.png' },
        { name: 'React Native', icon: '/tech-stack/react-native.png' },
        { name: 'Ionic', icon: '/tech-stack/ionic.png' },
        { name: 'Swift', icon: '/tech-stack/swift.png' },
        { name: 'TypeScript', icon: '/tech-stack/typescript.png' },
        { name: 'Xamarin', icon: '/tech-stack/xamarin.png' },
        { name: 'HTML5', icon: '/tech-stack/html.png' },
        { name: 'Kotlin', icon: '/tech-stack/kotlin.png' }
    ],
    // Placeholders for other categories as requested
    'DESIGN': [
        { name: 'Flutter', icon: '/tech-stack/flutter.png' },
        { name: 'React Native', icon: '/tech-stack/react-native.png' },
        { name: 'Ionic', icon: '/tech-stack/ionic.png' },
        { name: 'Swift', icon: '/tech-stack/swift.png' },
        { name: 'TypeScript', icon: '/tech-stack/typescript.png' },
        { name: 'Xamarin', icon: '/tech-stack/xamarin.png' },
        { name: 'HTML5', icon: '/tech-stack/html.png' },
        { name: 'Kotlin', icon: '/tech-stack/kotlin.png' }
    ],
    'BACK-END': [
        { name: 'Flutter', icon: '/tech-stack/flutter.png' },
        { name: 'React Native', icon: '/tech-stack/react-native.png' },
        { name: 'Ionic', icon: '/tech-stack/ionic.png' },
        { name: 'Swift', icon: '/tech-stack/swift.png' },
        { name: 'TypeScript', icon: '/tech-stack/typescript.png' },
        { name: 'Xamarin', icon: '/tech-stack/xamarin.png' },
        { name: 'HTML5', icon: '/tech-stack/html.png' },
        { name: 'Kotlin', icon: '/tech-stack/kotlin.png' }
    ],
    'DATABASE': [
        { name: 'Flutter', icon: '/tech-stack/flutter.png' },
        { name: 'React Native', icon: '/tech-stack/react-native.png' },
        { name: 'Ionic', icon: '/tech-stack/ionic.png' },
        { name: 'Swift', icon: '/tech-stack/swift.png' },
        { name: 'TypeScript', icon: '/tech-stack/typescript.png' },
        { name: 'Xamarin', icon: '/tech-stack/xamarin.png' },
        { name: 'HTML5', icon: '/tech-stack/html.png' },
        { name: 'Kotlin', icon: '/tech-stack/kotlin.png' }
    ],
    'CLOUD': [
        { name: 'Flutter', icon: '/tech-stack/flutter.png' },
        { name: 'React Native', icon: '/tech-stack/react-native.png' },
        { name: 'Ionic', icon: '/tech-stack/ionic.png' },
        { name: 'Swift', icon: '/tech-stack/swift.png' },
        { name: 'TypeScript', icon: '/tech-stack/typescript.png' },
        { name: 'Xamarin', icon: '/tech-stack/xamarin.png' },
        { name: 'HTML5', icon: '/tech-stack/html.png' },
        { name: 'Kotlin', icon: '/tech-stack/kotlin.png' }
    ],
    'FRAMEWORK': [
        { name: 'Flutter', icon: '/tech-stack/flutter.png' },
        { name: 'React Native', icon: '/tech-stack/react-native.png' },
        { name: 'Ionic', icon: '/tech-stack/ionic.png' },
        { name: 'Swift', icon: '/tech-stack/swift.png' },
        { name: 'TypeScript', icon: '/tech-stack/typescript.png' },
        { name: 'Xamarin', icon: '/tech-stack/xamarin.png' },
        { name: 'HTML5', icon: '/tech-stack/html.png' },
        { name: 'Kotlin', icon: '/tech-stack/kotlin.png' }
    ],
    'PROJECT MANAGEMENT': [
        { name: 'Flutter', icon: '/tech-stack/flutter.png' },
        { name: 'React Native', icon: '/tech-stack/react-native.png' },
        { name: 'Ionic', icon: '/tech-stack/ionic.png' },
        { name: 'Swift', icon: '/tech-stack/swift.png' },
        { name: 'TypeScript', icon: '/tech-stack/typescript.png' },
        { name: 'Xamarin', icon: '/tech-stack/xamarin.png' },
        { name: 'HTML5', icon: '/tech-stack/html.png' },
        { name: 'Kotlin', icon: '/tech-stack/kotlin.png' }
    ]
};

const TechStackSection = () => {
    const [activeTab, setActiveTab] = useState('FRONT-END');
    const activeStack = techStacks[activeTab] || techStacks['FRONT-END'];

    return (
        <section className={styles.techStackSection}>
            <div className="container">
                <div className={styles.headerArea}>
                    <h2 className={styles.heading}>
                        Our Tech Stack For <br />
                        <span className={styles.purpleText}>Mobile App Development</span>
                    </h2>
                    <div className={styles.underlineWrapper}>
                        <Image
                            src="/green-vector.png"
                            alt="underline"
                            width={400}
                            height={25}
                            className={styles.greenVector}
                        />
                    </div>
                </div>

                <div className={styles.tabsWrapper}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.tabBtn} ${activeTab === cat ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.techGrid}>
                    <Swiper
                        key={activeTab} // Force re-render on tab change
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            576: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 6 },
                            1200: { slidesPerView: 8 },
                        }}
                        className={styles.techSwiper}
                    >
                        {activeStack.map((tech, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.techCard}>
                                    <div className={styles.iconBox}>
                                        <Image
                                            src={tech.icon}
                                            alt={tech.name}
                                            width={166}
                                            height={150}
                                            className={styles.techIcon}
                                        />
                                    </div>
                                    <h5 className={styles.techName}>{tech.name}</h5>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
