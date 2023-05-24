import React from 'react'
import styles from '@/styles/Myscreen.module.css'

const Myscreen = () => {
    return (
        <>
            <div style={{ display: "flex" }}>
                <div className={styles.sidebar}>
                    <div className={styles.logo}>
                        <ul className={styles.menu}>
                            <li className={styles.active}>
                                <a href="#">
                                    <span>Dashboard 1</span>
                                </a>
                            </li>
                            <li className={styles.active}>
                                <a href="#">
                                    <span>Dashboard 2</span>
                                </a>
                            </li>
                            <li className={styles.logout}>
                                <a href="#">
                                    <span>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{display:"block"}}>
                    <div className={styles.maincontent}>
                        <div className={styles.headerwrapper}>
                            <div className={styles.headertitle}>
                                <span>Primary</span>
                                <h2>Dashboard</h2>
                            </div>
                            <div className={styles.userinfo}>
                                <div className={styles.serachbox}>
                                    <input type="text" placeholder='Search' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.cardcontainer}>
                        <h3 className={styles.maintitle}> Today's Data</h3>
                        <div className={styles.cardwrapper}>
                            <div className={styles.paymentcard}>
                                <div className={styles.cardheader}>
                                    <div className={styles.amount}>
                                        <span className={styles.title}>
                                            Payment amount
                                        </span>
                                        <span className={styles.paymentvalue}>$500.00</span>
                                    </div>

                                </div>
                                <span className={styles.carddetail}>**** **** **** 3484</span>
                            </div>

                            <div className={styles.paymentcard}>
                                <div className={styles.cardheader}>
                                    <div className={styles.amount}>
                                        <span className={styles.title}>
                                            Payment amount
                                        </span>
                                        <span className={styles.paymentvalue}>$500.00</span>
                                    </div>

                                </div>
                                <span className={styles.carddetail}>**** **** **** 3484</span>
                            </div>

                            <div className={styles.paymentcard}>
                                <div className={styles.cardheader}>
                                    <div className={styles.amount}>
                                        <span className={styles.title}>
                                            Payment amount
                                        </span>
                                        <span className={styles.paymentvalue}>$500.00</span>
                                    </div>

                                </div>
                                <span className={styles.carddetail}>**** **** **** 3484</span>
                            </div>

                            <div className={styles.paymentcard}>
                                <div className={styles.cardheader}>
                                    <div className={styles.amount}>
                                        <span className={styles.title}>
                                            Payment amount
                                        </span>
                                        <span className={styles.paymentvalue}>$500.00</span>
                                    </div>

                                </div>
                                <span className={styles.carddetail}>**** **** **** 3484</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Myscreen