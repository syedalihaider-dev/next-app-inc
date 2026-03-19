import Image from 'next/image';
import styles from './Header.module.css';
import MyButton from './MyButton';

const Header = () => {
    return (
        <header className={styles.mainHeader}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-7 offset-lg-5">
                        <div className={styles.headerWrapper}>
                            <div className={styles.logoPart}>
                                <Image 
                                    src="/logo.png" 
                                    alt="Logo" 
                                    width={220} 
                                    height={40} 
                                    priority 
                                    className={styles.logoImage} 
                                />
                            </div>
                            <div className={styles.headerRight}>
                                <div className={styles.chatButton}>
                                    <MyButton text="Live Chat" className="chat" />
                                </div>
                                <button className={styles.menuToggle} aria-label="Toggle Menu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
