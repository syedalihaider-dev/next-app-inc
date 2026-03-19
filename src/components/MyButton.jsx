import Link from 'next/link';
import Image from 'next/image';

const MyButton = ({ text, link = "#", className = "btn_white", icon = "/arrow-btn.png" }) => {
    return (
        <Link href={link} className={`mybtn ${className}`}>
            <div className="text">
                <span>{text}</span>
                <span>{text}</span>
            </div>
            <div className="icon">
                <div className="icon-wrapper">
                    <Image src={icon} alt="icon" width={22} height={22} />
                    <Image src={icon} alt="icon" width={22} height={22} />
                </div>
            </div>
        </Link>
    );
};

export default MyButton;
