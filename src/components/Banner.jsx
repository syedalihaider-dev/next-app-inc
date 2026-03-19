import styles from './Banner.module.css';
import Image from 'next/image';
import VerticalSlider from './VerticalSlider';
import MyButton from './MyButton';

const Banner = () => {
    const slider1 = ['/banner-slider/01.png', '/banner-slider/02.png', '/banner-slider/03.png', '/banner-slider/04.png'];
    const slider2 = ['/banner-slider/05.png', '/banner-slider/06.png', '/banner-slider/07.png', '/banner-slider/08.png'];
    const slider3 = ['/banner-slider/09.png', '/banner-slider/10.png', '/banner-slider/11.png', '/banner-slider/01.png'];

    return (
        <section className={styles.bannerSection}>
            <Image
                src="/banner-bg.png"
                alt="Banner Background"
                fill
                priority
                className={styles.backgroundImage}
            />

            {/* Absolute Slider Wrapper */}
            <div className={styles.absoluteSliderWrapper}>
                <div className="row g-3">
                    <div className="col-4">
                        <VerticalSlider images={slider1} direction="down" />
                    </div>
                    <div className="col-4">
                        <VerticalSlider images={slider2} direction="up" />
                    </div>
                    <div className="col-4">
                        <VerticalSlider images={slider3} direction="down" />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-7 offset-lg-5">
                        <div className={styles.contentWrapper}>
                            <h1 className={styles.heading}>
                                From <span className="primarytxt">Concept</span> to <br />
                                <span className="primarytxt">Code </span>
                                <span className="secondarytxt">We Deliver </span>
                                <span className="lighttxt">App Solutions That Work</span>
                            </h1>
                            <div className={styles.vectorWrapper}>
                                <Image
                                    src="/green-vector.png"
                                    alt="green vector"
                                    width={500}
                                    height={20}
                                    className={styles.greenVector}
                                />
                            </div>
                            <p className={styles.paragraph}>
                                Lorem ipsum dolor sit amet consectetur. Tempus sem nulla euismod nulla quis venenatis tellus. Nulla viverra amet suspendisse luctus ele mentum nam morbi sit. Risus tempus nisl nec faucibus.
                            </p>
                            <div className="mt-4">
                                <MyButton text="Get Started" className="popupBtn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Banner;
