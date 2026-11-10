'use client';
import { useEffect } from 'react';
import { scrollToContact } from '@/utils/scrollHelper';

/**
 * Global handler that catches any anchor clicks targeting #contact across the entire site.
 * Ensures smooth scrolling triggers on repeated clicks even when #contact is already in the URL.
 */
const ContactScrollHandler = () => {
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href="#contact"], a[href$="#contact"]');
            if (anchor && !e.defaultPrevented) {
                scrollToContact(e);
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);

    return null;
};

export default ContactScrollHandler;

