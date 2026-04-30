import React from 'react';
import Image from 'next/image';
import styles from './MarhoferProject.module.css';
import MyButton from '@/components/layout/MyButton';

const MarhoferProject = () => {
    return (
        <section className={styles.marhoferProject}>
            {/* Background Shape stuck to the bottom right of the section */}
            <div className={styles.bgOuterShape}>
                <Image
                    src="/case-study/marhofer-mockup.webp"
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
                                        src="/case-study/marhofer-logo.webp"
                                        alt="Marhofer Logo"
                                        width={240}
                                        height={60}
                                        className={styles.logoImg}
                                    />
                                </div>
                            </div>

                            <div className={styles.textContent}>
                                <p>
                                    This platform is a multi-role enterprise operational system designed for renewable energy project management and execution. <br /><br />
                                    The platform supports four primary user roles: field technicians, managers, clients, and super administrators. Each role has defined responsibilities within the system, ensuring structured workflow execution across the organization.
                                    The system enables project tracking with detailed reporting, allowing managers and stakeholders to monitor progress in real time. It includes check-in and check-out functionality for field technicians, which is directly used for timesheet tracking and payroll processing.
                                </p>
                            </div>
                            <div className={styles.btnWrapper}>
                                <MyButton text="Get Started" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Mockups */}
                    <div className="col-lg-6 position-relative">
                        <div className={styles.phones}>
                            <Image
                                src="/case-study/marhofer-bg-shape.webp"
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
