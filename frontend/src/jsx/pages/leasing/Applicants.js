import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Dropdown, ProgressBar, ButtonGroup, Button, 
    Card,
    SplitButton,
    DropdownButton, } from "react-bootstrap";
import '../../../css/applicant.css';
import { useTranslation } from 'react-i18next';


/// images
import { Link } from "react-router-dom";

const AnLeasingApplicants = () => {
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
                <h4 className="page-title">{t('Applicants')}</h4>
                <div className="property-buttons">
                    <button type="button" className="mr-2 btn btn-xs btn-success" id="btn-success">{t('Add properties')}</button>
                    <Button className='mr-2 btn-xs' variant='outline-info'>{t('Renew lease')}</Button>
                    <Button className='mr-2 btn-xs' variant='outline-info'>{t('Receive payment')}</Button>

                    <DropdownButton
                        as={ButtonGroup}
                        id='dropdown-button-drop-down-roll'
                        drop='down'
                        variant='outline-info'
                        size='xs'
                        className='dots mr-2'
                        title='•••'
                    >
                        <Dropdown.Item href='#'>Update recurring charges</Dropdown.Item>
                        <Dropdown.Item href='#'>Add meter reading</Dropdown.Item>
                        <Dropdown.Item href='#'>Enter bulk charges</Dropdown.Item>
                        <Dropdown.Item href='#'>Enter bulk Credits</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <Card.Header>
                            <SplitButton
                                as={ButtonGroup}
                                id='dropdown-button-drop-down'
                                drop='down'
                                variant='outline-primary'
                                size='sm'
                                title=' All rentals'
                                className='mt-1'
                            >
                                <Dropdown.Item href='#'>All rentals</Dropdown.Item>
                                <Dropdown.Item href='#'>74 Grove Street (Single family home)</Dropdown.Item>
                                <Dropdown.Item href='#'>160 East End Avenue (condo/townhouse)</Dropdown.Item>
                                <div className='dropdown-divider'></div>
                                <Dropdown.Item href='#'>Separated link</Dropdown.Item>
                            </SplitButton>
                            <DropdownButton
                                as={ButtonGroup}
                                id='dropdown-button-drop-down'
                                drop='down'
                                variant='primary'
                                size='sm'
                                className='mt-1 mr-2'
                                title=' All &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            >
                                <Dropdown.Item href='#'>Active</Dropdown.Item>
                                <Dropdown.Item href='#'>Past</Dropdown.Item>
                                <Dropdown.Item href='#'>Future</Dropdown.Item>
                            </DropdownButton>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className='pl-0 mt-1 mb-2'>
                                    Add filter option
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href='#'>Unit or Tenant</Dropdown.Item>
                                    <Dropdown.Item href='#'>Type</Dropdown.Item>
                                    <Dropdown.Item href='#'>Start-end</Dropdown.Item>
                                    <Dropdown.Item href='#'>Rent</Dropdown.Item>
                                    <Dropdown.Item href='#'>Days remaning</Dropdown.Item>
                                    <Dropdown.Item href='#'>most recent event</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table mb-0 table-striped respon-table-data">
                                    <thead>
                                        <tr>
                                            <th>{t('FIRST NAME | LAST NAME')}</th>
                                            <th>{t('UNIT')}</th>
                                            <th>{t('EMAIL')}</th>
                                            <th>{t('PHONE')}</th>
                                            <th className="pl-5" style={{ minWidth: 200 }}>
                                                {t('STATUS')}
                                            </th>
                                            <th>{t('LAST UPDATED')}</th>
                                            <th>%{t('COMPLETE')}</th>
                                        </tr>
                                    </thead>
                                    <tbody id="customers">
                                        <tr className="btn-reveal-trigger">
                                            <td className="py-3">
                                                <Link to="/ecom-customers">
                                                    <div className="media d-flex align-items-center">
                                                        <div className="media-body">
                                                            <h5 className="mb-0 fs--1">
                                                                Ricky Antony
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>Garden Row (muliti
                                                <br></br>building complex)-2c
                                            </td>
                                            <td className="py-2">
                                                <i className="ti-email mr-2"></i>info@example.com
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <i className="fa fa-phone mr-2"></i>
                                                    <a href="tel:2012001851">(201) 200-1851</a>
                                                </div>
                                                <div className="send-opt-msg">
                                                    <a href="/">{t('Send opt-in text message')} </a>
                                                </div>
                                            </td>
                                            <td className="py-2 pl-5 wspace-no">
                                                Approved
                                            </td>
                                            <td className="py-2">30/03/2018 3:59 AM</td>
                                            <td>
                                                <ProgressBar now={70} variant="success" />
                                            </td>
                                            <td className="py-2 text-right">{drop}</td>
                                        </tr>
                                        <tr className="btn-reveal-trigger">
                                            <td className="py-3">
                                                <Link to="/ecom-customers">
                                                    <div className="media d-flex align-items-center">
                                                        <div className="media-body">
                                                            <h5 className="mb-0 fs--1">
                                                                Ricky Antony
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>Garden Row (muliti
                                                <br></br>building complex)-2c
                                            </td>
                                            <td className="py-2">
                                                <i className="ti-email mr-2"></i>info@example.com
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <i className="fa fa-phone mr-2"></i>
                                                    <a href="tel:2012001851">(201) 200-1851</a>
                                                </div>
                                                <div className="send-opt-msg">
                                                    <a href="/">Send opt-in text message </a>
                                                </div>
                                            </td>
                                            <td className="py-2 pl-5 wspace-no">
                                                Approved
                                            </td>
                                            <td className="py-2">30/03/2018 3:59 AM</td>
                                            <td>
                                                <ProgressBar now={70} variant="success" />
                                            </td>
                                            <td className="py-2 text-right">{drop}</td>
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

export default AnLeasingApplicants;
