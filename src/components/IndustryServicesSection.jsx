import React from 'react';
import Image from 'next/image';
import styles from './IndustryServicesSection.module.css';
import MyButton from './MyButton';

const services = [
    {
        title: 'Corporate Tax <br/> & Audit Solutions',
        description: 'Comprehensive accounting app development services providing integrated tools and resources for smooth corporate tax management and auditing.',
        active: false
    },
    {
        title: 'Real-time Billing <br/> & Invoicing',
        description: 'Automate your financial cycles with robust invoicing and billing systems tailored to your specific business requirements and workflows.',
        active: false
    },
    {
        title: 'Financial Data <br/> Analytics',
        description: 'Unlock insights with advanced data analytics features, allowing for real-time tracking of financial health and informed decision-making.',
        active: false
    },
    {
        title: 'Expense & Payroll <br/> Management',
        description: 'Streamline employee salaries and company expenses with an intuitive mobile application that ensures accuracy and compliance.',
        active: false
    },
    {
        title: 'Security & Compliance <br/> Monitoring',
        description: 'We build high-security accounting applications that protect sensitive financial data and ensure adherence to international financial standards.',
        active: false
    },
    {
        title: 'Cloud Accounting <br/> Solutions',
        description: 'Specializing in secure, cloud-based accounting apps that offer seamless access to financial data anytime and anywhere.',
        active: false
    }
];

const IndustryServicesSection = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={`container ${styles.container}`}>
                <div className="row align-items-center mb-5 pb-lg-5">
                    <div className="col-lg-7">
                        <div className={styles.header}>
                            <h2 className={styles.heading}>
                                Our <span className={styles.purpleText}>Accounting App</span> <br />
                                Development Services
                            </h2>
                            <div className={styles.underlineWrapper}>
                                <Image
                                    src="/green-vector.png"
                                    alt="underline"
                                    width={300}
                                    height={20}
                                    className={styles.greenVector}
                                />
                            </div>
                            <p className={styles.description}>
                                Our Accounting App Development Services provide integrated tools and
                                resources for smooth management—from initial ideation and concept
                                development to final delivery. We specialize in creating high-performance
                                finance apps tailored to meet your specific business goals.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-5 text-center">
                        <div className={styles.mockupWrapper}>
                            <Image
                                src="/industries/accounting-app-development/services-mockup.png"
                                alt="Services Mockup"
                                width={600}
                                height={500}
                                className={styles.mockupImg}
                            />
                        </div>
                    </div>
                </div>

                <div className={styles.servicesGrid}>
                    <div className="row g-4 justify-content-center">
                        {services.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <div className={`${styles.serviceCard} ${service.active ? styles.activeCard : ''}`}>
                                    <h4
                                        className={styles.cardTitle}
                                        dangerouslySetInnerHTML={{ __html: service.title }}
                                    ></h4>
                                    <p className={styles.cardDesc}>{service.description}</p>

                                    <div className={styles.btnWrapper}>
                                        <MyButton text="Get Started" className="btn_white" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryServicesSection;
