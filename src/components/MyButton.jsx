import Link from 'next/link';
import Image from 'next/image';
import styles from './MyButton.module.css';

const MyButton = ({ text, link = "#", className = "btn_white", icon = "/arrow-btn.webp", iconWidth = 24, iconHeight = 13 }) => {
    return (
        <Link href={link} className={`${styles.mybtn} ${styles[className]}`}>
            <div className={styles.text}>
                <span>{text}</span>
                <span>{text}</span>
            </div>
            <div className={styles.icon}>
                <div className={styles.iconWrapper}>
                    <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
                    <Image src={icon} alt="icon" width={iconWidth} height={iconHeight} />
                </div>
            </div>
        </Link>
    );
};

export default MyButton;

