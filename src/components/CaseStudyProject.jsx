import React from 'react';
import Image from 'next/image';
import styles from './CaseStudyProject.module.css';

const CaseStudyProject = () => {
    return (
        <section className={styles.caseStudyProject}>
            {/* Background Shape stuck to the right edge of the DOM */}
            <div className={styles.bgOuterShape}>
                <Image
                    src="/case-study/project-mockup.webp"
                    alt="Mockup Background"
                    fill
                    className={styles.shapeImg}
                />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className={styles.header}>
                            <h2 className={styles.heading}>
                                We Create Apps <span className={styles.purpleText}>That Users Love!</span>
                            </h2>
                            <div className={styles.underlineWrapper}>
                                <Image src="/blue-vector.webp" alt="underline" width={280} height={15} className={styles.purpleUnderline} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center mt-lg-5">
                    {/* Left Column: Client Info */}
                    <div className="col-lg-6">
                        <div className={styles.infoCol}>
                            <div className={styles.clientLogo}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src="/case-study/project-logo.webp"
                                        alt="Client Logo"
                                        width={226}
                                        height={226}
                                        className={styles.logoImg}
                                    />
                                </div>
                            </div>

                            <div className={styles.textContent}>
                                <p>
                                    Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin
                                    Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar
                                    Etra Arcu Auctor Commodo Varius Miibulum Eleifend. Etiam Enim Phar
                                    Etra Arcu Auctor Commodo Varius Mi Est Im St Imperdiet. <strong>Phasellus
                                        Ut Ac Aliquam Sed Ullamcorper Maecenas Diam. Sapien Sit Pulvinar
                                        Nunc Nunc Faucibus Facilisi Facilisi Imperdiet.</strong>
                                </p>
                                <p>
                                    Congue Faucibus Morbi Tristique Felis. Integ Er Diam Ornare Diam
                                    Adipiscing Congue Nunc Porttitor Donec.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Mockups */}
                    <div className="col-lg-6 position-relative">
                        <div className={styles.phones}>
                            <Image
                                src="/case-study/project-shape.webp"
                                alt="Phones Mockup"
                                width={684}
                                height={669}
                                priority
                                className={styles.phonesImg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudyProject;
