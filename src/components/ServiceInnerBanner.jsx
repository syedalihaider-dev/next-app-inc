import React from 'react';
import Image from 'next/image';
import styles from './ServiceInnerBanner.module.css';
import MyButton from './MyButton';

const ServiceInnerBanner = ({ badge, title, description, bgImage, underlineImage = "/green-vector.png" }) => {
    return (
        <section className={styles.serviceBanner}>
            <div className={styles.bgWrapper}>
                <Image
                    src={bgImage}
                    alt="Banner Background"
                    fill
                    className={styles.bgImg}
                    priority
                />
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className={styles.content}>
                            {badge && <span className={styles.badge}>{badge}</span>}
                            <h1 className={styles.heading}>
                                {title}
                            </h1>
                            <div className={styles.underlineWrapper}>
                                <Image src={underlineImage} alt="underline" width={400} height={20} />
                            </div>
                            <p className={styles.desc}>
                                {description}
                            </p>
                            <div className={styles.btnWrapper}>
                                <MyButton text="Get Started" className="btn_white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceInnerBanner;
