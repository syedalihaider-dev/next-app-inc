import React from 'react';
import Image from 'next/image';
import styles from './YesTableProject.module.css';
import MyButton from '@/components/layout/MyButton';

const YesTableProject = () => {
    return (
        <section className={styles.yesTableProject}>
            {/* Background Shape stuck to the left edge of the section */}
            <div className={styles.bgOuterShape}>
                <Image
                    src="/case-study/yestable-bg-shape.webp"
                    alt="Background Shape"
                    fill
                    className={styles.shapeImg}
                />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
                        <div className={styles.mockupWrapper}>
                            <Image
                                src="/case-study/yestable-mockup.webp"
                                alt="YesTable Mockups"
                                width={684}
                                height={669}
                                priority
                                className={styles.mockupImg}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className={styles.infoCol}>
                            <div className={styles.clientLogo}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src="/case-study/yestable-logo.webp"
                                        alt="YesTable Logo"
                                        width={226}
                                        height={226}
                                        className={styles.logoImg}
                                    />
                                </div>
                            </div>
                            <div className={styles.textContent}>
                                <p>
                                    An event management and guest intelligence platform designed to help hosts understand, manage, and personalize guest experiences for events. <br /><br />
                                    The system allows hosts to capture detailed guest preferences, including dietary restrictions, allergies, mood indicators, and general preferences for a specific event. This information is then used to align event experiences with individual guest profiles.
                                    It also functions as an event management system by tracking events, managing guest lists, and sending invitations. Guests can be invited to events, and their engagement and attendance can be tracked within the system.
                                </p>
                            </div>
                            <div className={styles.btnWrapper}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YesTableProject;
