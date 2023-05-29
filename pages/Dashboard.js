import React from 'react'
// import styles from '@/styles/Dashboard.module.css'
import styles from '@/styles/Homescreen.module.css'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'next/image';
import { NextScript } from 'next/document';

const Dashboard = () => {
    return (
        <>
            <div className={styles.dashboard}>

                <div className={styles.dashboardheading}>
                    <span>Dashboard</span>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item" ><a className={styles.hometab} href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page" style={{ cursor: 'pointer' }}> Dashboard</li>
                        </ol>
                    </nav>
                </div>

                <section class="section dashboard" id={styles.cardgroup1}>
                    <div class="row" id={styles.cardrow}>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-xxl-4 col-md-6">
                                    <div class="card info-card sales-card" style={{ border: "2px solid white" }}>


                                        <div class="card-body">
                                            <h5 class="card-title">Sales <span className={styles.date}>| Today</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-cart"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>145</h6>
                                                    <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="filter" className={styles.cardfilter}>
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><Image src="/three-dots.svg" width={15} height={15} className={styles.threedoticon} /></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                <div class="col-xxl-4 col-md-6">
                                    <div class="card info-card revenue-card" style={{ border: "2px solid white" }}>
                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Revenue <span className={styles.date}>| This Month</span></h5>
                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-currency-dollar"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>$3,264</h6>
                                                    <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-xxl-4 col-xl-12">
                                    <div class="card info-card customers-card" style={{ border: "2px solid white" }}>
                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>
                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <h5 class="card-title">Customers <span className={styles.date}>| This Year</span></h5>

                                            <div class="d-flex align-items-center">
                                                <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i class="bi bi-people"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <h6>1244</h6>
                                                    <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* -------------------------------------------- */}

                                <div class="col-12">
                                    <div class="card">

                                        <div class="filter">
                                            <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <li class="dropdown-header text-start">
                                                    <h6>Filter</h6>
                                                </li>

                                                <li><a class="dropdown-item" href="#">Today</a></li>
                                                <li><a class="dropdown-item" href="#">This Month</a></li>
                                                <li><a class="dropdown-item" href="#">This Year</a></li>
                                            </ul>
                                        </div>

                                        <div class="card-body">
                                            <h5 class="card-title">Reports <span>/Today</span></h5>

                                            <div id="reportsChart"></div>

                                            {/* <script>
                    document.addEventListener("DOMContentLoaded", () => {
                                                    new ApexCharts(document.querySelector("#reportsChart"), {
                                                        series: [{
                                                            name: 'Sales',
                                                            data: [31, 40, 28, 51, 42, 82, 56],
                                                        }, {
                                                            name: 'Revenue',
                                                            data: [11, 32, 45, 32, 34, 52, 41]
                                                        }, {
                                                            name: 'Customers',
                                                            data: [15, 11, 32, 18, 9, 24, 11]
                                                        }],
                                                        chart: {
                                                            height: 350,
                                                            type: 'area',
                                                            toolbar: {
                                                                show: false
                                                            },
                                                        },
                                                        markers: {
                                                            size: 4
                                                        },
                                                        colors: ['#4154f1', '#2eca6a', '#ff771d'],
                                                        fill: {
                                                            type: "gradient",
                                                            gradient: {
                                                                shadeIntensity: 1,
                                                                opacityFrom: 0.3,
                                                                opacityTo: 0.4,
                                                                stops: [0, 90, 100]
                                                            }
                                                        },
                                                        dataLabels: {
                                                            enabled: false
                                                        },
                                                        stroke: {
                                                            curve: 'smooth',
                                                            width: 2
                                                        },
                                                        xaxis: {
                                                            type: 'datetime',
                                                            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                                                        },
                                                        tooltip: {
                                                            x: {
                                                                format: 'dd/MM/yy HH:mm'
                                                            },
                                                        }
                                                    }).render();
                    });
                                            </script> */}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <CardGroup className={styles.cardgroup}>
                    <Card className={styles.cards}>
                        <Card.Body>
                            <Card.Title>Sales</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cards}>
                        <Card.Body>
                            <Card.Title>Revenue</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to
                                additional content.{' '}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className={styles.cards}>
                        <Card.Body>
                            <Card.Title>Customer</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup> */}

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