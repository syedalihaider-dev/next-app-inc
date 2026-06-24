"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BannerForm.module.css';

const BannerForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        budget: '',
    });
    const [status, setStatus] = useState({ loading: false, success: false, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.service) {
            setStatus({ loading: false, success: false, error: 'Please select a service.' });
            return;
        }

        setStatus({ loading: true, success: false, error: null });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    budget: formData.budget,
                    msg: 'Submitted from Banner Form',
                    services: [formData.service],
                    pageUrl: window.location.href
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ loading: false, success: true, error: null });
                setFormData({ name: '', phone: '', email: '', service: '', budget: '' });
                router.push('/thank-you');
            } else {
                setStatus({ loading: false, success: false, error: result.error || 'Failed to submit form' });
            }
        } catch (error) {
            setStatus({ loading: false, success: false, error: 'Network error. Please try again later.' });
        }
    };

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.headline}>Looking for a development partner you can actually trust?</h3>
            <p className={styles.subhead}>Don't browse blindly. Let's do a zero-pressure, 10-minute introduction call to see if we're a match.</p>
            
            <form className={styles.bannerForm} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.inputGroup}>
                    <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="" disabled>Select a Service</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Website">Website</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="Game">Game</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className={styles.inputGroup}>
                    <select name="budget" value={formData.budget} onChange={handleChange} required>
                        <option value="" disabled>Select Your Budget</option>
                        <option value="$3000 to $5000">$3000 to $5000</option>
                        <option value="$5000 to $10000">$5000 to $10000</option>
                        <option value="$10000 to $25000">$10000 to $25000</option>
                        <option value="$25000 to $50000">$25000 to $50000</option>
                    </select>
                </div>
                
                {status.error && <div className="text-danger mb-2" style={{ fontSize: '14px' }}>{status.error}</div>}
                {status.success && <div className="text-success mb-2" style={{ fontSize: '14px' }}>Form submitted successfully!</div>}
                
                <div className={styles.submitWrapper}>
                    <button type="submit" disabled={status.loading} className={styles.submitBtn}>
                        {status.loading ? "Submitting..." : "Book a Quick Intro"}
                    </button>
                    <a href="#about" className={styles.dismissText}>Just browsing</a>
                </div>
            </form>
        </div>
    );
};

export default BannerForm;
