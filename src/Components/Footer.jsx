import React from 'react';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <div className={styles.daitelSection}>
          <h3 className={styles.footerheading}>Scrapify</h3> 
            <div className={styles.daitelSectionLine}></div>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#FFC208" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
                <span>35 Main Nisbat Road Lahore</span>
              </div>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#FFC208" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
                <span>abcxyzjh@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="#FFC208" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
                <span>(+92) 321 4247 165</span>
              </div>
            </div>
          </div>

          <div className={styles.otherPages}>
            <h5>Other Pages</h5>
            {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map(page => (
              <div className={styles.footerLi} key={page}>
                <svg fill="#FFC208" height="11px" width="11px" viewBox="0 0 330 330">
                  <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/>
                </svg>
                <span>{page}</span>
              </div>
            ))}
          </div>

          <div className={styles.otherPages}>
            <h5>Quick Links</h5>
            {['Privacy Policy', 'Term Of Service', 'Disclaimer', 'Credits', 'FAQ'].map(link => (
              <div className={styles.footerLi} key={link}>
                <svg fill="#FFC208" height="11px" width="11px" viewBox="0 0 330 330">
                  <path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z"/>
                </svg>
                <span>{link}</span>
              </div>
            ))}
          </div>

          <div className={styles.newsletter}>
            <h5>NewsLetter</h5>
            <input type="email" className={`form-control ${styles.newletterinput}`} placeholder="Your Email Address" />
            <button className={styles.footerSubscribeBtn}>Subscribe</button>
            <p className={styles.newsletterText}>Get the latest news & updates</p>
            <div className={styles.footerIcons}>
              <a href="https://facebook.com" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.677 6.677 0 0 0 16 4.514a6.616 6.616 0 0 1-1.889.518 3.329 3.329 0 0 0 1.457-1.838 6.606 6.606 0 0 1-2.086.797A3.293 3.293 0 0 0 7.88 6.196a9.328 9.328 0 0 1-6.764-3.42 3.287 3.287 0 0 0 1.016 4.384A3.316 3.316 0 0 1 .64 7.672v.039A3.294 3.294 0 0 0 3.285 11a3.306 3.306 0 0 1-1.49.057 3.293 3.293 0 0 0 3.067 2.279"/>
                </svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ffffff" viewBox="0 0 16 16">
                  <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 13.5c-3.037 0-5.5-2.463-5.5-5.5s2.463-5.5 5.5-5.5 5.5 2.463 5.5 5.5-2.463 5.5-5.5 5.5zm3.5-8.5a.75.75 0 1 1-.001 1.5.75.75 0 0 1 .001-1.5zm-3.5 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
