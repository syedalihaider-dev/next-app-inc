import React from 'react';
import Image from 'next/image';
import styles from './Appointment.module.css';
import MyButton from './MyButton';

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
                                Have an <span className={styles.highlight}>App Idea?</span><br />
                                Let’s Make It Happen
                            </h2>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis tellus. Nulla viverra amet suspendisse luctus elementum nam morbi sit. Risus tempus nisl nec faucibus.
                            </p>
                            <div className={styles.btnWrapper}>
                                <MyButton text="Get Started" className="btn_black" />
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
