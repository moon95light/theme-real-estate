import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

// Page titie

/// Scroll
import PerfectScrollbar from 'react-perfect-scrollbar'

// BS
import { Dropdown, Card, ProgressBar } from 'react-bootstrap'

const AnAccountingCompanyFinancials = () => {
    return (
        <Fragment>
            {/* <Ext /> */}
            <div className="page-titles">
                <h4 className="page-title">Company Financials</h4>
            </div>
            <div className='row'>
                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card'>
                        <div className='card-body p-4'>
                            <div className='media ai-icon'>
                                <span className='mr-3 bgl-warning text-warning'>
                                    <svg
                                        id='icon-orders'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='30'
                                        height='30'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='feather feather-file-text'
                                    >
                                        <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                                        <polyline points='14 2 14 8 20 8'></polyline>
                                        <line x1='16' y1='13' x2='8' y2='13'></line>
                                        <line x1='16' y1='17' x2='8' y2='17'></line>
                                        <polyline points='10 9 9 9 8 9'></polyline>
                                    </svg>
                                </span>
                                <div className='media-body'>
                                    <p className='mb-1'>Bills</p>
                                    <h4 className='mb-0'>2570</h4>
                                    <span className='badge badge-warning'>+3.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card'>
                        <div className='card-body  p-4'>
                            <div className='media ai-icon'>
                                <span className='mr-3 bgl-danger text-danger'>
                                    <svg
                                        id='icon-revenue'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width='30'
                                        height='30'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='feather feather-dollar-sign'
                                    >
                                        <line x1='12' y1='1' x2='12' y2='23'></line>
                                        <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'></path>
                                    </svg>
                                </span>
                                <div className='media-body'>
                                    <p className='mb-1'>Revenue</p>
                                    <h4 className='mb-0'>364.50K</h4>
                                    <span className='badge badge-danger'>-3.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card'>
                        <div className='card-body p-4'>
                            <div className='media ai-icon'>
                                <span className='mr-3 bgl-success text-success'>
                                    <svg
                                        id='icon-database-widget'
                                        xmlns='http://www.w3.org/2000/svg'
                                        width={24}
                                        height={24}
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='feather feather-database'
                                    >
                                        <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                                        <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                                        <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
                                    </svg>
                                </span>
                                <div className='media-body'>
                                    <p className='mb-1'>Patient</p>
                                    <h4 className='mb-0'>364.50K</h4>
                                    <span className='badge badge-success'>-3.5%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card bg-danger'>
                        <div className='card-body  p-4'>
                            <div className='media'>
                                <span className='mr-3'>
                                    <i className='flaticon-381-calendar-1'></i>
                                </span>
                                <div className='media-body text-white text-right'>
                                    <p className='mb-1'>Appointment</p>
                                    <h3 className='text-white'>76</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card bg-success'>
                        <div className='card-body p-4'>
                            <div className='media'>
                                <span className='mr-3'>
                                    <i className='flaticon-381-diamond'></i>
                                </span>
                                <div className='media-body text-white text-right'>
                                    <p className='mb-1'>Earning</p>
                                    <h3 className='text-white'>$56K</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card bg-info'>
                        <div className='card-body p-4'>
                            <div className='media'>
                                <span className='mr-3'>
                                    <i className='flaticon-381-heart'></i>
                                </span>
                                <div className='media-body text-white text-right'>
                                    <p className='mb-1'>Total Patient</p>
                                    <h3 className='text-white'>783K</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card bg-primary'>
                        <div className='card-body p-4'>
                            <div className='media'>
                                <span className='mr-3'>
                                    <i className='flaticon-381-user-7'></i>
                                </span>
                                <div className='media-body text-white text-right'>
                                    <p className='mb-1'>Chef</p>
                                    <h3 className='text-white'>$76</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-xl-3 col-xxl-4 col-lg-6 col-sm-6'>
                    <div className='widget-stat card bg-danger '>
                        <div className='card-body p-4'>
                            <div className='media'>
                                <span className='mr-3'>
                                    <i className='la la-dollar'></i>
                                </span>
                                <div className='media-body text-white'>
                                    <p className='mb-1'>Fees Collect</p>
                                    <h3 className='text-white'>250$</h3>
                                    <div className='progress mb-2 bg-secondary'>
                                        <div
                                            className='progress-bar progress-animated bg-light'
                                            style={{ width: '30%' }}
                                        ></div>
                                    </div>
                                    <small>30% Increase in 30 Days</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Card>
                <Card.Header className=' d-block'>
                    <Card.Title>SKILL BARS </Card.Title>
                    <Card.Text className='mb-0 subtitle'>
                        add <code>.progress-animated</code> to change the style
                    </Card.Text>
                </Card.Header>
                <Card.Body>
                    <h6>
                        Company checking
                        <span className='pull-right'>$9,533.17</span>
                    </h6>
                    <ProgressBar now={65} variant='danger' />
                    <h6 className='mt-4'>
                        Company savings
                        <span className='pull-right'>$6,953.29</span>
                    </h6>
                    <ProgressBar now='90' variant='info' />


                    <h6 className='mt-4'>
                        Rent account
                        <span className='pull-right'>$700.00</span>
                    </h6>
                    <ProgressBar now='35' variant='primary' />
                    <h6 className='mt-4'>
                        Security deposit escrow
                        <span className='pull-right'>$100.00</span>
                    </h6>
                    <ProgressBar now={10} variant='success' />
                </Card.Body>
            </Card>
            <div className='row'>
                <div className='col-xl-12 col-lg-12 col-xxl-12 col-sm-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4 className='card-title'>Recent Payments Queue</h4>
                        </div>
                        <div className='card-body'>
                            <div className='table-responsive recentOrderTable'>
                                <table className='table verticle-middle table-responsive-md'>
                                    <thead>
                                        <tr>
                                            <th scope='col'>ACCOUNT NAME</th>
                                            <th></th>
                                            <th scope='col'>ACCOUNT NUMBER</th>
                                            <th scope='col'>COMPANY CASH</th>
                                            <th scope='col'>TOTAL BALANCE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='col-lg-01'>
                                                Company checking 
                                            </td>
                                            <td>
                                                <span className='ml-4 badge badge-rounded badge-dark'>
                                                    Default account
                                                </span>
                                            </td>
                                            <td>*2345</td>
                                            <td>$9,533.17</td>
                                            <td>$9533.17</td>
                                        </tr>
                                        <tr>
                                            <td className='col-lg-01'>
                                                Company savings 
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>*****6780</td>
                                            <td>$6,953.29</td>
                                            <td>$6,953.29</td>
                                        </tr>
                                        <tr>
                                            <td className='col-lg-01'>
                                                Rent account 
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>*****6781</td>
                                            <td>$700.00</td>
                                            <td>$700.00</td>
                                        </tr>
                                        <tr>
                                            <td className='col-lg-01'>
                                                Security deposit escrow 
                                            </td>
                                            <td>
                                                
                                            </td>
                                            <td>*****6782</td>
                                            <td>$100.00</td>
                                            <td>$100.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AnAccountingCompanyFinancials;
