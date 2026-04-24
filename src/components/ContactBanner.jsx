import React from 'react';
import Image from 'next/image';
import styles from './ContactBanner.module.css';

const ContactBanner = () => {
    return (
        <section className={styles.contactBanner}>
            {/* Background Image */}
            <div className={styles.bgWrapper}>
                <Image
                    src="/contact/contact-bg.jpg"
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
                                <div className={styles.vectorWrapper}>
                                    <Image
                                        src="/green-vector.webp"
                                        alt="underline"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </h1>

                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis
                                tellus. Nulla viverra amet suspendisse luctus ele mentum nam morbi sit.
                            </p>

                            <div className={styles.contactLinks}>
                                {/* Phone Link */}
                                <a href="tel:3472187849" className={styles.contactCard}>
                                    <div className={styles.iconBox}>
                                        <Image src="/contact-phone-icon.webp" alt="Phone" width={20} height={20} />
                                    </div>
                                    <span className={styles.cardText}>(347) 218-7849</span>
                                    <div className={styles.arrowCircle}>
                                        <Image src="/arrow-icon.webp" alt="Arrow" width={12} height={12} />
                                    </div>
                                </a>

                                {/* Email Link */}
                                <a href="mailto:sales@nextappinc.com" className={styles.contactCard}>
                                    <div className={styles.iconBox}>
                                        <Image src="/contact-email-icon.webp" alt="Email" width={20} height={20} />
                                    </div>
                                    <span className={styles.cardText}>sales@nextappinc.com</span>
                                    <div className={styles.arrowCircle}>
                                        <Image src="/arrow-icon.webp" alt="Arrow" width={12} height={12} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;
