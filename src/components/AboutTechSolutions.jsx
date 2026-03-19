import Image from 'next/image';
import styles from './AboutTechSolutions.module.css';
import MyButton from './MyButton';

const AboutTechSolutions = () => {
    return (
        <section className={styles.techSection}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column (Image) */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/about/tech-experts.png"
                                alt="30+ Experts"
                                width={600}
                                height={600}
                                className={styles.heroImage}
                            />
                        </div>
                    </div>

                    {/* Right Column (Text) */}
                    <div className="col-lg-6">
                        <div className={styles.textContent}>
                            <h2 className={styles.heading}>
                                <span className={styles.purpleText}>Next App Inc!</span><br />
                                Presents Revolutionary<br />
                                <span className={styles.relativeText}>
                                    Trending Tech Solutions
                                    <div className={styles.greenUnderline}>
                                        <Image src="/green-vector.png" alt="underline" fill style={{ objectFit: 'contain' }} />
                                    </div>
                                </span>
                            </h2>
                            <p className={styles.paragraph}>
                                Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Eifend. Etiam Enimperdiet <strong>Diam. Sapien Sit Pulvinar Auctor A Nunc Nunc Faucibus Facilisis Facilisi Ultrices Pellentesque Imperdiet.</strong>
                            </p>
                            
                            <div className="mt-4">
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutTechSolutions;
