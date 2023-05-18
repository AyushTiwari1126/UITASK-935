import React from 'react'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <>
            <footer id="footer" class="footer" className={styles.myfooter}>
                <div className={styles.footertext}>
                    <div class="copyright">
                        &copy; Copyright <strong><span>NiceAdmin</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits" className={styles.creditstext}>
                        Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>

            <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
        </>
    )
}

export default Footer