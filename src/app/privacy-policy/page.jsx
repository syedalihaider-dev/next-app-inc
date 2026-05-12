import React from 'react';
import styles from './privacy.module.css';
import { SITE_CONFIG } from '@/configs/site-config';

export const metadata = {
    title: 'Privacy Policy | Next Apps',
    description: 'Next Apps is committed to protecting the privacy of everyone who visits our website or uses our services.',
};

const PrivacyPolicyPage = () => {
    return (
        <main className={styles.privacyContainer}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Privacy Policy</h1>
                </div>
            </section>

            <div className={styles.contentWrapper}>
                <section className={styles.section}>
                    <p>
                        Next Apps is committed to protecting the privacy of everyone who visits our website, contacts us about our services, or engages us as a client. This Privacy Policy explains what personal data we collect, how we use it, how we protect it, and what your rights are in relation to it. By using our website or services, you consent to the practices described in this Policy.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>1</span> Who We Are</h2>
                    <p>
                        Next Apps is a digital product studio headquartered in the United States with development operations in Pakistan. We provide mobile app development, web development, game development, e-commerce development, blockchain development, AR/VR development, and custom software development services to clients globally.
                    </p>
                    <p>
                        For the purposes of applicable data protection law, Next Apps is the data controller for personal information collected through our website and direct client relationships. Our contact details for data-related enquiries are provided at the end of this Policy.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>2</span> Information We Collect</h2>
                    <h3>2.1 Information You Provide to Us</h3>
                    <p>We collect personal information that you voluntarily provide when you interact with Next Apps, including:</p>
                    <ul>
                        <li>Contact form submissions — name, email address, phone number, and project details</li>
                        <li>Email correspondence — any personal information contained in emails you send to us</li>
                        <li>Client onboarding — business name, contact details, billing address, and project requirements</li>
                        <li>Payment processing — billing information processed through our payment partners (we do not store full payment card details)</li>
                        <li>Newsletter or marketing opt-ins — email address and communication preferences</li>
                    </ul>
                    <h3>2.2 Information We Collect Automatically</h3>
                    <p>When you visit our website, we automatically collect certain technical and usage data, including:</p>
                    <ul>
                        <li>IP address and approximate geographic location</li>
                        <li>Browser type, version, and device type</li>
                        <li>Pages visited, time spent on pages, and navigation paths</li>
                        <li>Referral source (how you arrived at our website)</li>
                        <li>Cookies and similar tracking technologies as described in Section 6 of this Policy</li>
                    </ul>
                    <h3>2.3 Information from Third Parties</h3>
                    <p>
                        We may receive information about you from third-party sources, including LinkedIn, business directories, referral partners, and analytics platforms we use to understand website usage. We use this information only in ways consistent with this Privacy Policy.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>3</span> How We Use Your Information</h2>
                    <p>Next Apps uses the personal information we collect for the following purposes:</p>
                    <h3>3.1 Responding to Enquiries and Delivering Services</h3>
                    <p>
                        We use your contact details and project information to respond to your enquiries, provide proposals, onboard you as a client, and deliver the digital services you have engaged us to provide. This is our primary reason for collecting personal data and is necessary to perform the contract between us.
                    </p>
                    <h3>3.2 Communication and Project Management</h3>
                    <p>
                        We use your contact information to communicate with you throughout your project, send project updates, request approvals, and share deliverables. For active client relationships, this communication is necessary to fulfil our contractual obligations.
                    </p>
                    <h3>3.3 Marketing and Business Development</h3>
                    <p>
                        With your consent, we may send you information about Next Apps services, case studies, insights, and industry updates that we believe may be relevant to your business. You may opt out of marketing communications at any time by clicking the unsubscribe link in any email or by contacting us directly. Opting out of marketing does not affect communications related to an active project engagement.
                    </p>
                    <h3>3.4 Website Improvement and Analytics</h3>
                    <p>
                        We use aggregated and anonymised website usage data to understand how visitors interact with our site, identify areas for improvement, and measure the effectiveness of our marketing. This data does not identify individual users.
                    </p>
                    <h3>3.5 Legal and Compliance Obligations</h3>
                    <p>
                        We may process and retain personal data to comply with applicable laws, respond to legal processes, enforce our Terms and Conditions, protect our rights and the rights of our clients, and prevent fraud or abuse.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>4</span> Legal Basis for Processing</h2>
                    <p>For individuals in the European Economic Area, the United Kingdom, or other jurisdictions with equivalent data protection laws, we process personal data on the following legal bases:</p>
                    <ul>
                        <li><strong>Contractual necessity</strong> — processing required to enter into or perform a contract with you</li>
                        <li><strong>Legitimate interests</strong> — processing in our legitimate business interests, such as responding to enquiries, maintaining client relationships, and improving our services, where these interests are not overridden by your rights</li>
                        <li><strong>Consent</strong> — where you have given us explicit consent to process your data for a specific purpose, such as marketing communications</li>
                        <li><strong>Legal obligation</strong> — processing required to comply with applicable law</li>
                    </ul>
                    <p>Where we rely on consent as the legal basis for processing, you have the right to withdraw that consent at any time without affecting the lawfulness of processing carried out before withdrawal.</p>
                </section>

                <section className={styles.section}>
                    <h2><span>5</span> How We Share Your Information</h2>
                    <p>Next Apps does not sell, rent, or trade your personal information to third parties. We share personal data only in the following limited circumstances:</p>
                    <h3>5.1 Service Providers</h3>
                    <p>
                        We use trusted third-party service providers to help us operate our business and deliver our services. These may include cloud hosting providers (such as AWS or Google Cloud), project management tools, email and communication platforms, payment processors, and analytics services. These providers are contractually required to process your data only as instructed by us and in accordance with applicable data protection law.
                    </p>
                    <h3>5.2 Our Development Teams</h3>
                    <p>
                        Next Apps operates development teams in both the United States and Pakistan. Personal data relevant to delivering your project may be accessed by team members in both locations. All team members are subject to confidentiality obligations and data handling policies consistent with this Privacy Policy.
                    </p>
                    <h3>5.3 Legal Requirements</h3>
                    <p>
                        We may disclose your personal information if required to do so by law, court order, or regulatory authority, or if we believe in good faith that such disclosure is necessary to protect the rights, property, or safety of Next Apps, our clients, or the public.
                    </p>
                    <h3>5.4 Business Transfers</h3>
                    <p>
                        In the event of a merger, acquisition, sale of assets, or other corporate transaction, your personal data may be transferred as part of that transaction. We will notify affected individuals and update this Privacy Policy as appropriate in such circumstances.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>6</span> Cookies and Tracking Technologies</h2>
                    <p>
                        Next Apps uses cookies and similar technologies on our website to improve the browsing experience, analyse traffic, and support our marketing activities. Cookies are small text files placed on your device when you visit our website.
                    </p>
                    <h3>6.1 Types of Cookies We Use</h3>
                    <ul>
                        <li><strong>Essential cookies</strong> — necessary for the website to function correctly. These cannot be disabled.</li>
                        <li><strong>Analytics cookies</strong> — used to collect anonymised data about how visitors use our website, helping us improve content and user experience. We use tools, including Google Analytics.</li>
                        <li><strong>Marketing cookies</strong> — used to track visits from marketing campaigns and measure their effectiveness. We may use platforms including Google Ads and Meta Pixel.</li>
                    </ul>
                    <h3>6.2 Cookie Consent and Control</h3>
                    <p>
                        When you first visit our website, you will be presented with a cookie consent notice. You can accept all cookies, reject non-essential cookies, or manage your preferences. You can also control cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of parts of our website.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>7</span> Data Retention</h2>
                    <p>We retain personal data for as long as necessary to fulfil the purposes for which it was collected, including to comply with legal, accounting, or reporting obligations. Our standard retention periods are as follows:</p>
                    <ul>
                        <li>Client project data — retained for seven years from project completion for legal and accounting purposes</li>
                        <li>Contact enquiry data for non-clients — retained for two years from the date of the enquiry</li>
                        <li>Marketing contact data — retained until you opt out or request deletion</li>
                        <li>Website analytics data — retained in anonymised or aggregated form for up to three years</li>
                    </ul>
                    <p>When personal data is no longer required, we securely delete or anonymise it in accordance with our data retention procedures.</p>
                </section>

                <section className={styles.section}>
                    <h2><span>8</span> Data Security</h2>
                    <p>
                        Next Apps takes the security of your personal data seriously. We implement appropriate technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure, or destruction. These measures include encrypted data transmission (HTTPS), access controls limiting data access to authorised personnel only, secure cloud infrastructure with industry-standard security configurations, and regular security reviews of our internal systems and processes.
                    </p>
                    <p>
                        While we take all reasonable steps to protect your data, no method of internet transmission or electronic storage is completely secure. We cannot guarantee absolute security, but we will notify you and relevant authorities promptly in the event of a data breach as required by applicable law.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>9</span> International Data Transfers</h2>
                    <p>
                        As a company operating across the United States and Pakistan, personal data collected by Next Apps may be transferred to, processed in, and stored in countries outside your country of residence. Pakistan is not currently designated as a country providing adequate data protection under GDPR. Where we transfer personal data internationally, we implement appropriate safeguards, including contractual protections with our Pakistan-based team, to ensure your data is protected to the standard required by applicable law.
                    </p>
                    <p>
                        By using our services, you acknowledge and consent to the transfer of your personal data to our operating locations as described in this Policy.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>10</span> Your Privacy Rights</h2>
                    <p>Depending on your location, you may have the following rights in relation to your personal data:</p>
                    <ul>
                        <li><strong>Right of Access</strong> — You have the right to request a copy of the personal data we hold about you.</li>
                        <li><strong>Right to Rectification</strong> — You have the right to request that we correct any inaccurate or incomplete personal data.</li>
                        <li><strong>Right to Erasure</strong> — You have the right to request that we delete your personal data in certain circumstances.</li>
                        <li><strong>Right to Restriction of Processing</strong> — You have the right to request that we restrict processing in certain circumstances.</li>
                        <li><strong>Right to Data Portability</strong> — You have the right to receive your personal data in a structured, machine-readable format.</li>
                        <li><strong>Right to Object</strong> — You have the right to object to processing based on legitimate interests, including direct marketing.</li>
                    </ul>
                    <p>
                        <strong>How to Exercise Your Rights:</strong> To exercise any of the above rights, please contact us using the details in Section 13. We will respond within 30 days. We may need to verify your identity before fulfilling your request.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>11</span> Children’s Privacy</h2>
                    <p>
                        Next Apps services are intended for business clients and individuals aged 18 and over. We do not knowingly collect personal data from children under the age of 13. If we become aware that we have collected personal data from a child under 13, we will take immediate steps to delete that information.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2><span>12</span> Changes to This Privacy Policy</h2>
                    <p>
                        Next Apps may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the services we offer. We will post the updated Policy on our website with a revised effective date. For material changes, we will notify existing clients via email.
                    </p>
                </section>

                <section className={styles.contactInfo}>
                    <h2>Contact Us</h2>
                    <p>If you have questions, concerns, or requests regarding this Privacy Policy or the way Next Apps handles your personal data, please contact us:</p>
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <h4>Email</h4>
                            <a href={`mailto:${SITE_CONFIG.contact.email}`}>{SITE_CONFIG.contact.email}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <h4>Phone</h4>
                            <a href={`tel:${SITE_CONFIG.contact.phone}`}>{SITE_CONFIG.contact.phone}</a>
                        </div>
                        <div className={styles.contactItem}>
                            <h4>Website</h4>
                            <a href="https://nextappsinc.com/" target="_blank" rel="noopener noreferrer">www.nextappsinc.com</a>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default PrivacyPolicyPage;
