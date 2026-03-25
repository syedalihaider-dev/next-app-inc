import React from 'react';
import Image from 'next/image';
import styles from './MarhoferProject.module.css';

const MarhoferProject = () => {
    return (
        <section className={styles.marhoferProject}>
            {/* Background Shape stuck to the bottom right of the section */}
            <div className={styles.bgOuterShape}>
                <Image
                    src="/case-study/marhofer-mockup.png"
                    alt="Background Shape"
                    fill
                    className={styles.shapeImg}
                />
            </div>

            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Project Info */}
                    <div className="col-lg-6">
                        <div className={styles.infoCol}>
                            <div className={styles.clientLogo}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src="/case-study/marhofer-logo.png"
                                        alt="Marhofer Logo"
                                        width={240}
                                        height={60}
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
                                src="/case-study/marhofer-bg-shape.png"
                                alt="Marhofer Mockup"
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

export default MarhoferProject;
