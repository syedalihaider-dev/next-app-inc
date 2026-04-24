import styles from './AboutBanner.module.css';
import Image from 'next/image';
import MyButton from './MyButton';

const AboutBanner = () => {
    return (
        <section className={styles.aboutBanner}>
            <div className={styles.videoOverlay}>
                <video autoPlay loop muted playsInline className={styles.bgVideo}>
                    <source src="/video/about-bg.webm" type="video/webm" />
                </video>
            </div>
            <div className={styles.gradientOverlay}>
                <Image
                    src="/about/about-gradiant.webp"
                    alt="gradient"
                    fill
                    className={styles.gradientImg}
                />
            </div>
            <div className={styles.dotsOverlay}>
                <Image
                    src="/about/dots.webp"
                    alt="dots"
                    fill
                    className={styles.dotsImg}
                />
            </div>

            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10">
                        <div className={styles.contentWrapper}>
                            <div className={styles.clientsBadge}>
                                <div className={styles.avatarGroup}>
                                    <Image
                                        src="/about/about-char.webp"
                                        alt="clients"
                                        width={100}
                                        height={40}
                                        className={styles.avatarImg}
                                    />
                                </div>
                                <div className={styles.marqueeContainer}>
                                    <div className={styles.marqueeContent}>
                                        <span className={styles.badgeText}>Love by over 5000+ Customers worldwide — </span>
                                        <span className={styles.badgeText}>Love by over 5000+ Customers worldwide — </span>
                                        <span className={styles.badgeText}>Love by over 5000+ Customers worldwide — </span>
                                    </div>
                                </div>
                            </div>
                            <span className={styles.subTitle}>About Us</span>
                            <h1 className={styles.heading}>
                                <span className="secondarytxt">We Build</span> Innovative & <span className="primarytxt">Creative</span> <br />
                                Mobile App Solutions.
                            </h1>
                            <p className={styles.description}>
                                Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis tellus. Nulla viverra amet suspendisse luctus ele mentum nam morbi sit.
                            </p>
                            <div className={styles.btnWrapper}>
                                <MyButton text="Get Started" className="btn_white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;
