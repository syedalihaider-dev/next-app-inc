import React from 'react';
import Image from 'next/image';
import styles from './WhyChooseAppSection.module.css';
import MyButton from './MyButton';

const WhyChooseAppSection = () => {
    return (
        <section className={styles.whyChooseSection}>
            <div className={styles.bgBlobs}>
                <Image 
                    src="/services/why-choose-bg-blobs.png" 
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
                                Why Choose <span className={styles.purpleText}>Next <br /> App Inc</span> Mobile Apps
                            </h2>
                            <div className={styles.underlineWrapper}>
                                <Image 
                                    src="/blue-vector.png" 
                                    alt="underline" 
                                    width={250} 
                                    height={20} 
                                    className={styles.purpleVector}
                                />
                            </div>
                            
                            <div className={styles.description}>
                                <p>
                                    We're Trusted By Businesses Worldwide, Turning Their Ideas 
                                    Into Realities For All To See. Your App Idea Could Be Next.
                                </p>
                                <p>
                                    At Next App Inc, We Help Startups, Growing Businesses, And 
                                    Enterprises Transform Ideas Into Engaging, Scalable Mobile 
                                    Experiences. From Strategy To Launch, Our Team Delivers 
                                    High-Performance Apps Tailored To Your Market And Goals.
                                </p>
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
                    src="/services/why-choose-mockup.png" 
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
