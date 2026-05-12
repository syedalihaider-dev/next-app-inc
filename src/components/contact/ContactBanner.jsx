import React from 'react';
import Image from 'next/image';
import MyButton from '@/components/layout/MyButton';
import styles from './ContactBanner.module.css';
import { SITE_CONFIG } from '@/configs/site-config';

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
                                Next Apps is a full-service digital product studio that goes beyond writing code. We design, build, and deploy
                                high-performance mobile applications and custom software solutions that solve real business problems. Partner with
                                our global team across the USA and Pakistan to transform your vision into a powerful digital reality.
                            </p>

                            <div className={styles.contactLinks}>
                                <MyButton
                                    text="Call Us Now"
                                    link={`tel:${SITE_CONFIG.contact.phone.replace(/[^0-9+]/g, '')}`}
                                    className="btn_white"
                                    // icon="/contact-phone-icon.webp"
                                    iconWidth={24}
                                    iconHeight={13}
                                />

                                <MyButton
                                    text="Email Us Now"
                                    link={`mailto:${SITE_CONFIG.contact.email}`}
                                    className="btn_white"
                                    // icon="/contact-email-icon.webp"
                                    iconWidth={24}
                                    iconHeight={13}
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
