import React from 'react';
import Image from 'next/image';
import styles from './Appointment.module.css';
import MyButton from '@/components/layout/MyButton';

const Appointment = ({
    badge = "Book An Appointment",
    heading = (
        <>
            Your Next Big Idea  <span className={styles.highlight}>  Starts Here.</span> Lets’ Define What’s<br /> <span className={styles.highlight}>  Next.</span>
        </>
    ),
    description = "Whether you're prototyping a first wearable product or modernizing one that's already live, our wearable app developers can scope it in a 10-minute call. No boardroom pitch. Just a conversation about what you're building and who it's for.",
    image = "/appointment-mobile-hand.webp",
    btnText1 = "Get Started",
    btnText2 = "Live Chat"
}) => {
    return (
        <section className={styles.appointmentSection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            {badge && <span className={styles.badge}>{badge}</span>}
                            <h2 className={styles.heading}>
                                {heading}
                            </h2>
                            <p className={styles.description}>
                                {description}
                            </p>
                            <div className={`${styles.btnWrapper} d-flex gap-3 flex-wrap`}>
                                <MyButton text={btnText1} className="btn_black" />
                                <MyButton text={btnText2} className="btn_black chat" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.visualCol}>
                            <div className={styles.handImgWrapper}>
                                <Image
                                    src={image}
                                    alt="Mobile App Idea"
                                    width={700}
                                    height={700}
                                    className={styles.handImg}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;
