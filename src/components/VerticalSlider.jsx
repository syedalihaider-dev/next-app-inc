import Image from 'next/image';
import styles from './VerticalSlider.module.css';

const VerticalSlider = ({ images, direction = 'down' }) => {
    // To make it infinite, we duplicate the images
    const loopedImages = [...images, ...images];

    return (
        <div className={styles.sliderContainer}>
            <div className={`${styles.sliderTrack} ${direction === 'up' ? styles.scrollUp : styles.scrollDown}`}>
                {loopedImages.map((src, index) => (
                    <div key={index} className={styles.slide}>
                        <Image
                            src={src}
                            alt={`Slide ${index}`}
                            width={300}
                            height={500}
                            style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
                            className="img-fluid"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VerticalSlider;
