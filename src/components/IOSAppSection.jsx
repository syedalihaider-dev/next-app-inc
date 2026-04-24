import React from 'react';
import Image from 'next/image';
import styles from './IOSAppSection.module.css';
import MyButton from './MyButton';

const IOSAppSection = () => {
    return (
        <section className={styles.iosAppSection}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>
                                High Performance <br />
                                <span className={styles.purpleText}>Built for Apple</span>
                            </h2>
                            <div className={styles.underlineWrapper}>
                                <Image src="/blue-vector.webp" alt="underline" width={280} height={15} />
                            </div>
                            <p className={styles.description}>
                                At Nextapp Inc., We Know Every Business Is Unique, So Our Custom
                                IOS App Development Approach Ensures Your App Reflects Your
                                Goals And Values. Our Expert Developers And Designers Create Apps
                                That Are Both Visually Appealing And Highly Functional.
                            </p>

                            <ul className={styles.features}>
                                <li>
                                    <Image src="/services/ios-check-icon.webp" alt="check" width={18} height={18} className={styles.checkIcon} />
                                    Apple-Certified Developers
                                </li>
                                <li>
                                    <Image src="/services/ios-check-icon.webp" alt="check" width={18} height={18} className={styles.checkIcon} />
                                    100% Client Satisfaction
                                </li>
                                <li>
                                    <Image src="/services/ios-check-icon.webp" alt="check" width={18} height={18} className={styles.checkIcon} />
                                    NDA-Protected Projects
                                </li>
                            </ul>

                            <div className={styles.statsRow}>
                                <div className={styles.statValue}>15 +</div>
                                <div className={styles.vLine}></div>
                                <div className={styles.statLabel}>
                                    Years Of Working Experience <br /> In This Company
                                </div>
                            </div>

                            <div className={styles.btnRow}>
                                <MyButton text="Get Started" className="btn_black" />
                                <a href="tel:+13473845097" className={styles.phoneBtn}>
                                    +1-347-384-5097
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hand mockup positioned absolutely to the right/bottom */}
            <div className={styles.mockupWrapper}>
                <div className={styles.mockupBg}></div>
                <Image
                    src="/services/ios-app-development/ios-hand-mockup.webp"
                    alt="iPhone Hand Mockup"
                    width={800}
                    height={800}
                    className={styles.mockupImg}
                />
            </div>
        </section>
    );
};

export default IOSAppSection;
