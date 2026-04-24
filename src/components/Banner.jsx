import styles from './Banner.module.css';
import Image from 'next/image';
import VerticalSlider from './VerticalSlider';
import MyButton from './MyButton';

const Banner = () => {
    const slider1 = ['/banner-slider/01.webp', '/banner-slider/02.webp', '/banner-slider/03.webp', '/banner-slider/04.webp'];
    const slider2 = ['/banner-slider/05.webp', '/banner-slider/06.webp', '/banner-slider/07.webp', '/banner-slider/08.webp'];
    const slider3 = ['/banner-slider/09.webp', '/banner-slider/10.webp', '/banner-slider/11.webp', '/banner-slider/01.webp'];

    return (
        <section className={styles.bannerSection}>
            <video autoPlay loop muted playsInline className={styles.videoBackground}>
                <source src="/video/banner-video.webm" type="video/webm" />
            </video>
            <Image
                src="/banner-bg.webp"
                alt="Banner Background"
                fill
                priority
                className={styles.backgroundImage}
            />

            {/* Absolute Slider Wrapper */}
            {/* <div className={styles.absoluteSliderWrapper}>
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
            </div> */}

            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className={styles.contentWrapper}>
                            <h1 className={styles.heading}>
                                From <span className="primarytxt">Concept</span> to <br />
                                <span className="primarytxt">Code </span>We Deliver
                                <span className="primarytxt"> App Solutions </span> That Work
                            </h1>
                            {/* <div className={styles.vectorWrapper}>
                                <Image
                                    src="/green-vector.webp"
                                    alt="green vector"
                                    width={500}
                                    height={20}
                                    className={styles.greenVector}
                                />
                            </div> */}
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
