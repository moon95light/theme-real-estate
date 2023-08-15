import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import {
    Dropdown, ProgressBar, ButtonGroup, Button,
    Card,
    SplitButton,
    DropdownButton,
} from "react-bootstrap";
import '../../../css/financial.css';
import { useTranslation } from 'react-i18next';


/// images
import { Link } from "react-router-dom";

const AnAccountingBanking = () => {
    const { t } = useTranslation();
    const drop = (
        <Dropdown>
            <Dropdown.Toggle variant="primary" className="table-dropdown i-false btn  tp-btn-light sharp">
                <span className="fs--1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <rect x="0" y="0" width="24" height="24"></rect>
                            <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                            <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                            <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                        </g>
                    </svg>
                </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#">{t('Applicant summary')}</Dropdown.Item>
                <Dropdown.Item href="#">{t('View application')}</Dropdown.Item>
                <Dropdown.Item href="#">{t('Run credit check')}</Dropdown.Item>
                <Dropdown.Item href="#">{t('Add lease')}</Dropdown.Item>
                <Dropdown.Item href="#">{t('Send opt-in text message')}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

    return (
        <Fragment>
            <div className="page-titles">
                <h4 className="page-title">{t('Banking')}</h4>
                <div className="property-buttons">
                    <button type="button" className="mr-2 btn btn-xs btn-success" id="btn-success">{t('Add bank account')}</button>
                    <Button className='mr-2 btn-xs' variant='outline-dark'>{t('Print check')}</Button>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <Card.Header>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className='pl-0 mt-1 mb-2'>
                                    Add filter option
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href='#'>{t('Status')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Name')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Account number')}</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table mb-0 table-striped respon-table-data">
                                    <thead>
                                        <tr>
                                            <th>{t('NAME')}</th>
                                            <th>{t('ACCOUNT NUMBER')}</th>
                                            <th>{t('EPAY ENABLED')}</th>
                                            <th>{t('RETAIL')} <br></br> {t('CASH ENABLED')}</th>
                                            <th>{t('LAST RECONCILIATION')} <br></br>{t('DATE')}</th>
                                            <th>{t('UNDEPOSITED')} <br></br> {t('FUNDS')}</th>
                                            <th>{t('BALANCE')}</th>
                                        </tr>
                                    </thead>
                                    <tbody id="customers">
                                        <tr className="btn-reveal-trigger">
                                            <td>
                                                <div>
                                                    <a className="banking-name-up" href="/">Company checking</a>
                                                </div>
                                                <div className="banking-name-down">
                                                    <p href="/">Company operating funds</p>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                ****2345
                                            </td>
                                            <td className="py-2">
                                                
                                            </td>
                                            <td className="py-2">
                                                
                                            </td>
                                            <td className="py-2">30/03/2018</td>
                                            <td>
                                            </td>
                                            <td className="py-2" style={{display: 'inline-flex'}}>
                                                <span style={{paddingTop: '10px'}}>$4,9000</span><span> {drop}</span></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AnAccountingBanking;
