import React from 'react'
import styles from '@/styles/Dashboard.module.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Dashboard = () => {
    return (
        <>
            <div className={styles.dashboard}>
                <div>
                    <div>Dashboard</div>
                    <div>
                        <span>Home</span>
                        <span>/</span>
                        <span>Dashboard</span>
                    </div>
                </div>

                <CardGroup>
                    <Card className={styles.cards}>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>Sales</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                        {/* <Card.Footer>
                            
                        </Card.Footer> */}
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
                        {/* <Card.Footer>
                            
                        </Card.Footer> */}
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
                        {/* <Card.Footer>
                            
                        </Card.Footer> */}
                    </Card>
                </CardGroup>

                <div>

                </div>
                {/* -------------------------------------------------------------------------------------- */}

                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card ">
                                    <div class="card-header ">
                                        <h4 class="card-title">Reports</h4>
                                        <p class="card-category">Last Campaign Performance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------------------- */}




            </div>
        </>
    )
}

export default Dashboard