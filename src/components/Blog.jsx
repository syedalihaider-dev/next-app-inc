import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.css";
import MyButton from "./MyButton";

const blogs = [
    {
        id: 1,
        image: "/blog-01.webp",
        title: "Create YouTube Ads Like a Pro in 10 Simple Steps",
        description: "Lorem ipsum dolor sit amet consectetur Tempus sem nulla euismod nulla quis venenatis tellus.",
        date: "November 29, 2025",
        readTime: "3 min read"
    },
    {
        id: 2,
        image: "/blog-02.webp",
        title: "Create YouTube Ads Like a Pro in 10 Simple Steps",
        description: "Lorem ipsum dolor sit amet consectetur Tempus sem nulla euismod nulla quis venenatis tellus.",
        date: "November 29, 2025",
        readTime: "3 min read"
    },
    {
        id: 3,
        image: "/blog-03.webp",
        title: "Create YouTube Ads Like a Pro in 10 Simple Steps",
        description: "Lorem ipsum dolor sit amet consectetur Tempus sem nulla euismod nulla quis venenatis tellus.",
        date: "November 29, 2025",
        readTime: "3 min read"
    }
];

const Blog = () => {
    return (
        <section className={styles.blogSection}>
            <div className="container">
                <div className={styles.headerRow}>
                    <h2 className={styles.heading}>
                        Our <span className={styles.underlinedText}>
                            <span className={styles.highlight}>Blog</span>
                        </span>
                    </h2>
                    <div className={styles.viewMoreBtn}>
                        <MyButton text="View More" className="btn_white" />
                    </div>
                </div>

                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-4">
                            <div className={styles.blogCard}>
                                <div className={styles.cardThumb}>
                                    <img src={blog.image} alt={blog.title} />
                                </div>
                                <h3 className={styles.cardTitle}>{blog.title}</h3>
                                <p className={styles.cardDesc}>{blog.description}</p>
                                <div className={styles.cardMeta}>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                            </svg>
                                        </span>
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span className={styles.metaIcon}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                        </span>
                                        <span>{blog.readTime}</span>
                                    </div>
                                </div>
                                <Link href="#" className={styles.readLink}>
                                    Read Article
                                    <svg width="50" height="50" viewBox="0 0 36 36" fill="none">
                                        <path d="M27 19V25C27 25.5304 26.7893 26.0391 26.4142 26.4142C26.0391 26.7893 25.5304 27 25 27H11C10.4696 27 9.96086 26.7893 9.58579 26.4142C9.21071 26.0391 9 25.5304 9 25V11C9 10.4696 9.21071 9.96086 9.58579 9.58579C9.96086 9.21071 10.4696 9 11 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M27 9L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 9H27V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
