/**
 * Smoothly scrolls to the target section (defaulting to #contact).
 * Prevents adding /#contact to the URL slug and keeps the URL clean.
 * Ensures smooth scrolling triggers on repeated clicks every single time.
 *
 * @param {Event} [e] - Click event object
 * @param {string} [targetId='contact'] - ID of the target DOM element
 */
export const scrollToContact = (e, targetId = 'contact') => {
    if (typeof window === 'undefined') return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        if (e && e.preventDefault) {
            e.preventDefault();
        }

        // Smoothly scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // If the URL already contains a hash, remove it cleanly without reloading
        if (window.location.hash) {
            window.history.replaceState(null, '', window.location.pathname + window.location.search);
        }
    } else {
        // Fallback: If target element is not on the current page, navigate to home
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        window.location.href = '/';
    }
};
