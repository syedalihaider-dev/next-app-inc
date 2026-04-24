import React from 'react';
import Image from 'next/image';
import styles from './ProcessSection.module.css';

const steps = [
    {
        number: '01',
        title: <>Project <br /> Discussion</>,
        description: 'Delivered over 100 successful projects, showcasing a proven track record of quality, reliability, and client satisfaction.',
        image: '/process-steps/step-01.webp'
    },
    {
        number: '02',
        title: <>Order <br /> Confirmation</>,
        description: 'Delivered over 100 successful projects, showcasing a proven track record of quality, reliability, and client satisfaction.',
        image: '/process-steps/step-02.webp'
    },
    {
        number: '03',
        title: <>Research & <br /> Wireframing</>,
        description: 'Delivered over 100 successful projects, showcasing a proven track record of quality, reliability, and client satisfaction.',
        image: '/process-steps/step-03.webp'
    },
    {
        number: '04',
        title: <>UI/UX <br /> Designing</>,
        description: 'Delivered over 100 successful projects, showcasing a proven track record of quality, reliability, and client satisfaction.',
        image: '/process-steps/step-04.webp'
    },
    {
        number: '05',
        title: <>App <br /> Development</>,
        description: 'Delivered over 100 successful projects, showcasing a proven track record of quality, reliability, and client satisfaction.',
        image: '/process-steps/step-05.webp'
    },
    {
        number: '06',
        title: <>Testing & <br /> Deployment</>,
        description: 'Delivered over 100 successful projects, showcasing a proven track record of quality, reliability, and client satisfaction.',
        image: '/process-steps/step-06.webp'
    }
];

const ProcessSection = () => {
    return (
        <section className={styles.processSection}>
            <Image src="/process-bg.webp" alt="bg" fill className={styles.bgImage} />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6">
                        <div className={styles.stickyContent}>
                            <span className={styles.badge}>Process</span>
                            <h2 className={styles.heading}>
                                Our Proven Path to <br />
                                <span className={styles.highlightedText}>
                                    Mobile Success
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6">
                        <div className={styles.rightCol}>
                            {steps.map((step, index) => (
                                <div key={index} className={styles.stepCard}>
                                    <div className={styles.stepImage}>
                                        <img src={step.image} alt={step.title} />
                                    </div>
                                    <div className={styles.stepContent}>
                                        <span className={styles.stepNumber}>{step.number}</span>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepDesc}>{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
