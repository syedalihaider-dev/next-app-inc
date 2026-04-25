import React from 'react';
import Image from 'next/image';
import styles from './LocationSection.module.css';

const LocationSection = () => {
    const locations = [
        {
            id: 'nyc',
            name: 'New York',
            address: '1585 grand ave, baldwin, ny 11510, united states',
            phone: '(347) 218-7849',
            image: '/contact/nyc.webp'
        },
        {
            id: 'karachi',
            name: 'Karachi, Pakistan',
            address: '299 south main street salt lake city, utah 84111',
            phone: '+1 (833) 442 2711',
            image: '/contact/karachi.webp'
        }
    ];

    return (
        <section className={styles.locationSection}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className={styles.header}>
                            <h2 className={styles.heading}>
                                Where Are We <span className={styles.purpleText}>Located</span>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    {locations.map((loc) => (
                        <div className="col-lg-6 mb-4" key={loc.id}>
                            <div className={styles.locationCard}>
                                <div className={styles.cardImageWrapper}>
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        fill
                                        className={styles.cardBg}
                                    />
                                    <div className={styles.overlay}></div>
                                </div>

                                <div className={styles.cardContent}>
                                    <h3 className={styles.locName}>{loc.name}</h3>

                                    <div className={styles.infoRow}>
                                        <div className={styles.infoItem}>
                                            <div className={styles.iconBox}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                            </div>
                                            <div className={styles.itemText}>
                                                <span className={styles.label}>Location</span>
                                                <p className={styles.value}>{loc.address}</p>
                                            </div>
                                        </div>

                                        <div className={styles.infoItem}>
                                            <div className={styles.iconBox}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.5 19.5 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                            <div className={styles.itemText}>
                                                <span className={styles.label}>Contact Us</span>
                                                <p className={styles.value}>tel: {loc.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
