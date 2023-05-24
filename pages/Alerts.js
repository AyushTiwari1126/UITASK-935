import React from 'react'
import styles from '@/styles/Alerts.module.css'

const Alerts = () => {
    return (
        <div className={styles.alerts}>
            <div className={styles.dashboardtitle}>
                <span>Alerts</span>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item" ><a className={styles.hometab} href="#">Home</a></li>
                        <li class="breadcrumb-item" ><a className={styles.hometab} href="#">Components</a></li>
                        <li class="breadcrumb-item active" aria-current="page" style={{ cursor: 'pointer' }}> Alerts</li>
                    </ol>
                </nav>
            </div>
        </div>
    )
}

export default Alerts