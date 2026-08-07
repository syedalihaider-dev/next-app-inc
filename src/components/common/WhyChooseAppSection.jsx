import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseAppSection.module.css';
import MyButton from '@/components/layout/MyButton';

const WhyChooseAppSection = ({
    title,
    desc1,
    desc2,
    mockupImage = "/services/why-choose-mockup.webp",
    underlineImage = "/blue-vector.webp"
}) => {
    const defaultTitle = ( 
        <> 
            Security &amp; Compliance, Built <span className={styles.purpleText}> Into Every <br /> App</span>   Wearable App 
        </>
    );

    const defaultDesc1 = "Wearable apps handle sensitive data, from heart rate and sleep to location and glucose.";
    const defaultDesc2 = "Every solution we build includes encrypted data, GDPR-compliant privacy controls, role-based access, and secure Bluetooth Low Energy (BLE) connections to help protect users at every touchpoint";

    return (
        <section className={styles.whyChooseSection}>
            <div className={styles.bgBlobs}>
                <Image
                    src="/services/why-choose-bg-blobs.webp"
                    alt="background blobs"
                    fill
                    className={styles.blobImg}
                />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>
                                {title || defaultTitle}
                            </h2>

                            <div className={styles.description}>
                                {(desc1 !== undefined ? desc1 : defaultDesc1) && (
                                    <p>
                                        {desc1 !== undefined ? desc1 : defaultDesc1}
                                    </p>
                                )}
                                {(desc2 !== undefined ? desc2 : defaultDesc2) && (
                                    <p>
                                        {desc2 !== undefined ? desc2 : defaultDesc2}
                                    </p>
                                )}
                            </div>

                            <div className={styles.btnRow}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={styles.mockupWrapper}>
                <Image
                    src={mockupImage}
                    alt="Mobile App Mockup"
                    width={800}
                    height={700}
                    className={styles.mockupImg}
                    priority
                />
            </div>
        </section>
    );
};

export default WhyChooseAppSection;

