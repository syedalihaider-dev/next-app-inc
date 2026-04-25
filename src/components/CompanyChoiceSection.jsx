import React from 'react';
import Image from 'next/image';
import styles from './CompanyChoiceSection.module.css';
import MyButton from './MyButton';

const CompanyChoiceSection = () => {
    const cards = [
        {
            title: 'End-To-End Development',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            icon: '/about/development-icon.webp'
        },
        {
            title: '100% Transparency',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            icon: '/about/development-icon.webp'
        },
        {
            title: 'High Retention Rate',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            icon: '/about/development-icon.webp'
        },
        {
            title: '4.5/5 Average Rating',
            description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aliquam Cras Nunc In Ridiculus Nunc Nunc Facilisis Pellentesque Imperdiet. Pharetra Tristique.',
            icon: '/about/development-icon.webp'
        }
    ];

    return (
        <section className={styles.companySection}>
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.contentCol}>
                            <h2 className={styles.heading}>
                                <span className={styles.purpleText}>App Development</span> <br />
                                Company Of <br />
                                Choice
                            </h2>
                            <p className={styles.description}>
                                Lorem Ipsum Dolor Sit Amet Consect Etur. Donec Mattis Habitant
                                Frin Gilla Interdum Lectus Nisi Sit Vestibulumel Eifend. Etiam
                                Enim Phar Etra Arcu.
                            </p>
                            <div className={styles.btnRow}>
                                <MyButton text="Explore More" className="btn_black" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styles.cardsGrid}>
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className={styles.col1}>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[0].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[0].title}</h4>
                                            <p className={styles.cardDesc}>{cards[0].description}</p>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[1].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[1].title}</h4>
                                            <p className={styles.cardDesc}>{cards[1].description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className={styles.col2}>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[2].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[2].title}</h4>
                                            <p className={styles.cardDesc}>{cards[2].description}</p>
                                        </div>
                                        <div className={styles.card}>
                                            <div className={styles.iconBox}>
                                                <Image src={cards[3].icon} alt="icon" width={40} height={40} />
                                            </div>
                                            <h4 className={styles.cardTitle}>{cards[3].title}</h4>
                                            <p className={styles.cardDesc}>{cards[3].description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyChoiceSection;
