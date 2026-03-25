import React from 'react';
import Image from 'next/image';
import styles from './YesTableProject.module.css';

const YesTableProject = () => {
    return (
        <section className={styles.yesTableProject}>
            {/* Background Shape stuck to the left edge of the section */}
            <div className={styles.bgOuterShape}>
                <Image
                    src="/case-study/yestable-bg-shape.png"
                    alt="Background Shape"
                    fill
                    className={styles.shapeImg}
                />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Mockups */}
                    <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0">
                        <div className={styles.mockupWrapper}>
                            <Image
                                src="/case-study/yestable-mockup.png"
                                alt="YesTable Mockups"
                                width={684}
                                height={669}
                                priority
                                className={styles.mockupImg}
                            />
                        </div>
                    </div>

                    {/* Right Column: Project Info */}
                    <div className="col-lg-6 order-1 order-lg-2">
                        <div className={styles.infoCol}>
                            <div className={styles.clientLogo}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src="/case-study/yestable-logo.png"
                                        alt="YesTable Logo"
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
                                    Etra Arcu Auctor Commodo Varius Mi Est Imperdiet. <strong>Phasellus
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
                </div>
            </div>
        </section>
    );
};

export default YesTableProject;
