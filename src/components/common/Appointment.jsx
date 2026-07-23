import React from 'react';
import Image from 'next/image';
import styles from './Appointment.module.css';
import MyButton from '@/components/layout/MyButton';

const Appointment = () => {
    return (
        <section className={styles.appointmentSection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <span className={styles.badge}>Book An Appointment</span>
                            <h2 className={styles.heading}>      
                                Your Next Big Idea  <span className={styles.highlight}> Starts Here.</span> Lets’ DefineWhat’s<br />  Next. <span className={styles.highlight}>  Next.</span>
                            </h2>
                            <p className={styles.description}>
                               Whether you&#39;re prototyping a first wearable product or modernizing one that&#39;s already live, our wearable app developers can scope it in a 10-minute call. No boardroom pitch. Just a conversation about what you&#39;re building and who it&#39;s for.
                            </p>
                            <div className={`${styles.btnWrapper} d-flex gap-3 flex-wrap`}>
                                <MyButton text="Get Started" className="btn_black" />
                                <MyButton text="Live Chat" className="btn_black chat" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.visualCol}>
                            <div className={styles.handImgWrapper}>
                                <Image
                                    src="/appointment-mobile-hand.webp"
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
