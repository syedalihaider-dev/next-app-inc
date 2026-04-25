import React from 'react';
import Image from 'next/image';
import MyButton from './MyButton';
import styles from './ContactBanner.module.css';

const ContactBanner = () => {
    return (
        <section className={styles.contactBanner}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/contact/contact-bg.webp"
                    alt="Contact Us Background"
                    fill
                    className={styles.bgImg}
                    priority
                />
                <div className={styles.overlay}></div>
            </div>

            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-12">
                        <div className={styles.content}>
                            <span className={styles.subTitle}>Contact Us</span>
                            <h1 className={styles.heading}>
                                Improve Your <span className="secondarytxt">Brand’s</span> Performance <br />
                                with a <span className="primarytxt">Powerful App</span> Today
                            </h1>

                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis
                                tellus. Nulla viverra amet suspendisse luctus ele mentum nam morbi sit.
                            </p>

                            <div className={styles.contactLinks}>
                                <MyButton
                                    text="Call Us Now"
                                    link="tel:3472187849"
                                    className="btn_white"
                                    // icon="/contact-phone-icon.webp"
                                    iconWidth={20}
                                    iconHeight={20}
                                />

                                <MyButton
                                    text="Email Us Now"
                                    link="mailto:sales@nextappinc.com"
                                    className="btn_white"
                                    // icon="/contact-email-icon.webp"
                                    iconWidth={20}
                                    iconHeight={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;
