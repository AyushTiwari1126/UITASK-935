import React from 'react'
import styles from '@/styles/Headerpage.module.css'
import Image from 'next/image'

const Headerpage = () => {
    return (
        <>
            <input type="checkbox" className={styles.check} />
            <header>
                <label htmlFor="check" for="check">
                    <Image src="/list.svg" width={30} height={30} className={styles.sidebarbtn}/>
                </label>
                <div className={styles.leftarea}><h3>Coding<span>Snow</span></h3></div>
                <div className={styles.rightarea}>
                    <a href="#" className={styles.logoutbtn}>Logout</a>
                </div>
            </header>
            <div className={styles.sidebar}>
                <center>
                    <Image className={styles.profileimage} src="/profile-img.jpg" width={30} height={30} />
                </center>
                <a href="#"><Image src="/bell.svg" width={22} height={22} /><span>Dashboard</span></a>
            </div>

            <div className={styles.content}>
            <Image className={styles.profileimage} src="/background.png" width={1000} height={1000} />
            </div>
        </>
    )
}

export default Headerpage