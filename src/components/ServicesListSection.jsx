'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ServicesListSection.module.css';
import MyButton from './MyButton';

const services = [
    {
        id: '01',
        title: 'Android App Development Services',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar Etra Arcu Auctor Commodo Varius Mi Est Imperdiet.'
    },
    {
        id: '02',
        title: 'Custom iOS App Development Services',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar Etra Arcu Auctor Commodo Varius Mi Est Imperdiet.'
    },
    {
        id: '03',
        title: 'Cross-Platform Development Services',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar Etra Arcu Auctor Commodo Varius Mi Est Imperdiet.'
    },
    {
        id: '04',
        title: 'Mobile Web Apps Development Services',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar Etra Arcu Auctor Commodo Varius Mi Est Imperdiet.'
    },
    {
        id: '05',
        title: 'Mobile Game Development Services',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar Etra Arcu Auctor Commodo Varius Mi Est Imperdiet.'
    },
    {
        id: '06',
        title: 'Blockchain Mobile App Services',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar Etra Arcu Auctor Commodo Varius Mi Est Imperdiet.'
    },
    {
        id: '07',
        title: 'AR/VR App App Services',
        description: 'Lorem Ipsum Dolor Sit Amet Consectetur. Donec Mattis Habitant Frin Gilla Interdum Lectus Nisi Sit Vestibulum Eleifend. Etiam Enim Phar Etra Arcu Auctor Commodo Varius Mi Est Imperdiet.'
    }
];

const ServicesListSection = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.bgWrapper}>
                <Image
                    src="/services/services-list-bg.webp"
                    alt="section background"
                    fill
                    className={styles.bgImg}
                />
            </div>

            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>
                        Mobile App Development <br />
                        Services Designed for <br />
                        Maximum <span className={styles.neonGreen}>Business Impact!</span>
                    </h2>

                    <p className={styles.headerDesc}>
                        We've Received Awards And Recognition For Our Quality-First
                        Approach, Delivering Complex Projects Successfully With Our Skilled
                        Team Of Developers, Designers, And Project Managers.
                    </p>
                </div>

                <div className={styles.servicesContainer}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceItem}>
                            <div className={styles.itemInner}>
                                <div className={styles.idCol}>
                                    <span className={styles.idText}>{service.id}</span>
                                    <div className={styles.separator}>
                                        <div className={styles.dot}></div>
                                        <div className={styles.dot}></div>
                                        <div className={styles.dot}></div>
                                    </div>
                                </div>

                                <div className={styles.titleCol}>
                                    <h4 className={styles.serviceTitle}>{service.title}</h4>
                                    <div className={styles.hoverButton}>
                                        <MyButton text="Get Started" className="btn_black" />
                                    </div>
                                </div>

                                <div className={styles.descCol}>
                                    <p className={styles.serviceDesc}>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesListSection;
