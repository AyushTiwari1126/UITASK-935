import React from 'react'
import styles from '@/styles/Dashboard.module.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Dashboard = () => {
    return (
        <>
            <div className={styles.dashboard}>

                <div className={styles.dashboardtitle}>
                    <span>Dashboard</span>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" ><a className={styles.hometab} href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ cursor: 'pointer' }}> Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <CardGroup className={styles.cardgroup}>
                    <Card className={styles.cards}>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>Sales</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cards}>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>Revenue</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cards}>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>Customer</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>

                {/* <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default Dashboard