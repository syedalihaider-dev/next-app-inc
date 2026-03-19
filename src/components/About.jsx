import Image from 'next/image';
import styles from './About.module.css';
import MyButton from './MyButton';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutCard}>
                <Image
                    src="/about-bg.png"
                    alt="about Background"
                    fill
                    priority
                    className={styles.backgroundImage}
                />
                <div className="container">
                    <div className="row align-items-center">
                        {/* Top Part */}
                        <div className="col-lg-9">
                            <div className={styles.headerArea}>
                                <span className={styles.badge}>WHO WE ARE</span>
                                <h2 className={styles.heading}>
                                    Creating Apps That <span className="secondarytxt">Solve Real </span>
                                    <span className="secondarytxt">Problems</span> for Real People.
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-3 d-flex justify-content-end align-items-start">
                            <div className={styles.videoWrapper}>
                                <video autoPlay loop muted playsInline className={styles.laptopVideo}>
                                    <source src="/video-01.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-end mt-5">
                        {/* Bottom Part */}
                        <div className="col-lg-6">
                            <div className={styles.handWrapper}>
                                <div className={styles.springElement}>
                                    <Image
                                        src="/spring.png"
                                        alt="spring"
                                        width={500}
                                        height={500}
                                        className={styles.springImage}
                                    />
                                </div>
                                <Image
                                    src="/mobile-hand.png"
                                    alt="hand holding mobile"
                                    width={700}
                                    height={900}
                                    className={styles.handImage}
                                />
                                <div className={styles.gifOverlay}>
                                    <Image
                                        src="/mobile.gif"
                                        alt="mobile ui"
                                        width={280}
                                        height={600}
                                        className={styles.gifImage}
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={styles.contentArea}>
                                <div className={styles.vectorWrapper}>
                                    <Image
                                        src="/blue-vector.png"
                                        alt="vector"
                                        width={200}
                                        height={20}
                                        className={styles.blueVector}
                                    />
                                </div>
                                <div className={styles.paragraphs}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis tellus. Nulla viverra amet suspendisse luctus ele mentum nam morbi sit. Risus tempus nisl nec faucibus.Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis vene natis tellus. Nulla viverra amet suspendisse luctus elmentum nam morbi sit. Risus tempus nisl nec faucibus.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis tellus. Nulla viverra amet suspendisse luctus ele mentum nam morbi sit. Risus tempus nisl nec faucibus.
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <MyButton text="Read More" className="popupBtn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
