import Image from 'next/image';
import styles from './AboutWhyChooseUs.module.css';
import MyButton from '@/components/layout/MyButton';

const AboutWhyChooseUs = () => {
    return (
        <section className={styles.whyChooseSection}>
            <Image
                src="/services-bg.webp"
                fill
                style={{ objectFit: 'cover' }}
                alt="bg"
                className={styles.bgImage}
            />
            <div className={`container ${styles.container}`}>
                <div className="row align-items-center">
                    {/* Left Column */}
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className={styles.leftContent}>
                            <span className={styles.badge}>WHY CHOOSE US</span>
                            <h2 className={styles.heading}>
                                Expert Team.<br />
                                Proven Process.<br />
                                <span className={styles.highlightText}>
                                    Powerful Results.
                                </span>
                            </h2>
                            <p className={styles.paragraph}>
                                Lorem Ipsum Dolor Sit Amet Consect Etur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulumel Eifend. Etiam Enim Phar Etra Arcu.
                            </p>

                            <div className="mt-4">
                                <MyButton text="Explore More" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Cards) */}
                    <div className="col-lg-6">
                        <div className="row">
                            {/* Card Column 1 */}
                            <div className="col-md-6">
                                <div className={styles.cardWrapper}>
                                    <div className={styles.iconBox}>
                                        <Image src="/about/development-icon.webp" alt="Development" width={46} height={46} />
                                    </div>
                                    <h4 className={styles.cardHeading}>End-To-End Development</h4>
                                    <p className={styles.cardParagraph}>
                                        Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.
                                    </p>
                                </div>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.iconBox}>
                                        <Image src="/about/custom-icon.webp" alt="Custom" width={46} height={46} />
                                    </div>
                                    <h4 className={styles.cardHeading}>Custom-Built Solutions</h4>
                                    <p className={styles.cardParagraph}>
                                        Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.
                                    </p>
                                </div>
                            </div>

                            {/* Card Column 2 offsets to center vertically */}
                            <div className={`col-md-6 ${styles.offsetColumn}`}>
                                <div className={styles.cardWrapper}>
                                    <div className={styles.iconBox}>
                                        <Image src="/about/quality-icon.webp" alt="Quality" width={41} height={51} />
                                    </div>
                                    <h4 className={styles.cardHeading}>Quality You Can Trust</h4>
                                    <p className={styles.cardParagraph}>
                                        Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutWhyChooseUs;
