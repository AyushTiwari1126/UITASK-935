import React from 'react'
import styles from '@/styles/Asidebar.module.css'

const Asidebar = () => {
    return (<>
        {/*  ==================== NAVBAR ============================ */}
        <nav className={styles.navbar}>
            <h4>Dashboard</h4>
            <div className={styles.profile}>
                <span className='fas fa-search'></span>
                <img className={styles.profileimage} src="./search.svg" />
                <p className={styles.profilename}>Lorem ipsum</p>
            </div>
        </nav>
        {/*  ==================== SIDEBAR ========================== */}
        <input type="checkbox" id="toggle"/>
        <label className={styles.sidetoggle} htmlFor="toggle" for="toggle">
            <span><img className={styles.profileimage} src="./list.svg" /></span>
        </label>

        <div className={styles.sidebar}>
            <div className={styles.sidebarmenu}>
                <span className={styles.clipboardlist}>
                    <img className={styles.profileimage} src="./gear.svg" />
                </span>
                <p>Overview</p>
            </div>
            <div className={styles.sidebarmenu}>
                <span className={styles.clipboardlist}>
                    <img className={styles.profileimage} src="./gear.svg" />
                </span>
                <p>Teams</p>
            </div>
            <div className={styles.sidebarmenu}>
                <span className={styles.clipboardlist}>
                    <img className={styles.profileimage} src="./gear.svg" />
                </span>
                <p>Payment</p>
            </div>
        </div>

        {/*  =================== DASHBOARD ========================= */}
        {/* <main>
            <div className={styles.dashboardcontainer}>

                <div className='card total1'>
                    <div className={styles.info}>
                        test
                    </div>
                </div>
                <div className='card total2'>
                    <div className={styles.info}>

                    </div>
                </div>
                <div className='card total3'>
                    <div className={styles.info}>

                    </div>
                </div>
                <div className='card total4'>
                    <div className={styles.info}>

                    </div>
                </div>


                <div className='card detail'></div>
                <div className='card customer'></div>
            </div>
        </main> */}

    </>
    )
}

export default Asidebar