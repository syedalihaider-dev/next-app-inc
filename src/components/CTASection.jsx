import styles from './CTASection.module.css';
import Image from 'next/image';
import MyButton from './MyButton';

const CTASection = () => {
    return (
        <section className={styles.ctaSection}>
            <Image
                src="/about-bg.png"
                alt="background image"
                fill
                className={styles.backgroundImage}
            />
            <div className="container">
                <div className={styles.ctaWrapper}>
                    <div className={styles.contentCol}>
                        <span className={styles.badge}>GET STARTED</span>
                        <h2 className={styles.heading}>
                            Build An Innovative <br />
                            <span className={styles.purpleTxt}>Unity Game</span> With <br />
                            <span className={styles.purpleTxt}>
                                Next App Inc!
                                <Image
                                    src="/blue-vector.png"
                                    alt="underline"
                                    width={350}
                                    height={20}
                                    className={styles.blueVector}
                                />
                            </span>
                        </h2>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis tellus. Nulla viverra amet suspendisse luctus elementum nam morbi sit. Risus tempus nisl nec faucibus.
                        </p>
                        <div className={styles.btnWrapper}>
                            <MyButton
                                text="Get Started"
                                className="btn_black"
                            />
                        </div>
                    </div>

                    <div className={styles.visualCol}>
                        {/* Rotating Background */}
                        <div className={styles.bgCircleWrapper}>
                            <img
                                src="/cta-right-bg.png"
                                alt="bg"
                                className={styles.rotatingBg}
                            />
                        </div>

                        {/* Hand and Phone Mockup */}
                        <div className={styles.handWrapper}>
                            <Image
                                src="/cta-mobile-casing.png"
                                alt="hand holding phone"
                                width={550}
                                height={668}
                                className={styles.handImg}
                                priority
                            />
                            {/* Video inside the phone */}
                            <div className={styles.videoContainer}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={styles.mobileVideo}
                                >
                                    <source src="/cta-mobile.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <div className={`${styles.floatingIcon} ${styles.appStore}`}>
                            <Image src="/app-store-logo-icon.png" alt="app store" width={100} height={100} />
                        </div>
                        <div className={`${styles.floatingIcon} ${styles.flutter}`}>
                            <Image src="/flutter-logo-icon.png" alt="flutter" width={100} height={100} />
                        </div>
                        <div className={`${styles.floatingIcon} ${styles.android}`}>
                            <Image src="/android-logo-icon.png" alt="android" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
