import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';

import Select from 'react-select';
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
    Button,
    DropdownButton,
    ButtonGroup,
    SplitButton,
} from "react-bootstrap";

import '../../../css/properties.css';

import { Link } from "react-router-dom";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const AnRentalsTenants = () => {
    const { t } = useTranslation();
    const svg1 = (
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24"></rect>
                <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                <circle fill="#000000" cx="19" cy="12" r="2"></circle>
            </g>
        </svg>
    );
    // Normal page
    /*  const [data, setData] = useState(
       document.querySelectorAll(".custom-checkbox")
     ); */
    const [test, settest] = useState(false);
    // use effect
    useEffect(() => {
        //   getAppData();
        //setData(document.querySelectorAll(".custom-checkbox"));
        setTimeout(() => {
            settest(true);
        }, 2000);
    }, [test]);


    return (
        <>
            <Fragment>
                <div className="page-titles">
                    <h4 className="page-title">{t('Tenants')}</h4>
                    <div className="property-buttons">
                        <button type="button" className="mr-2 btn btn-xs btn-success" id="btn-success">{t('Add')} {t('lease')}</button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>{t('Receive payment')}</Button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>{t('Commpose Email')}</Button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>{t('Resident center user')}</Button>
                    </div>
                </div>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <SplitButton
                                    as={ButtonGroup}
                                    id='dropdown-button-drop-down'
                                    drop='down'
                                    variant='outline-primary'
                                    size='sm'
                                    title={t('All') + ' ' + t('rentals')}
                                    className='mt-1 mr-1'
                                >
                                    <Dropdown.Item href='#'>{t('All')} {t('rentals')}</Dropdown.Item>
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
                                    title= {t('All')}
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
                            <Card.Body>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <strong>{t('FIRST NAME | LAST NAME')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('UNIT NUMBER')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('PHONE')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('EMAIL')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('RESIDENT CENTER STATUS')}</strong>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">Tenant</div>
                                                </div>
                                            </td>
                                            <td>150 Main Ave (fourplex) - 4</td>
                                            <td>
                                                <p className="phone-number"><i className="ti-home"></i> 550-883-2355</p>
                                                <p className="phone-number"><i className="fa fa-archive"></i> 552-669-5585</p>
                                                <p className="phone-number"><i className="la la-phone"></i> 550-444-2323</p>
                                            </td>
                                            <td>
                                                <p><i className="ti-email"></i> antiadewew.aere@gmail.com</p>
                                            </td>
                                            <td className="resident-status">
                                                <p className="not-invited">Not invited</p>
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Receive payment</Dropdown.Item>
                                                        <Dropdown.Item>Lease ledger</Dropdown.Item>
                                                        <Dropdown.Item>Tenant summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">Tenant</div>
                                                </div>
                                            </td>
                                            <td>150 Main Ave (fourplex) - 4</td>
                                            <td>
                                                <p className="phone-number"><i className="ti-home"></i> 550-883-2355</p>
                                                <p className="phone-number"><i className="fa fa-archive"></i> 552-669-5585</p>
                                                <p className="phone-number"><i className="la la-phone"></i> 550-444-2323</p>
                                            </td>
                                            <td>
                                                <p><i className="ti-email"></i> antiadewew.aere@gmail.com</p>
                                            </td>
                                            <td className="resident-status">
                                                <p className="not-invited">Not invited</p>
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Receive payment</Dropdown.Item>
                                                        <Dropdown.Item>Lease ledger</Dropdown.Item>
                                                        <Dropdown.Item>Tenant summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">Tenant</div>
                                                </div>
                                            </td>
                                            <td>150 Main Ave (fourplex) - 4</td>
                                            <td>
                                                <p className="phone-number"><i className="ti-home"></i> 550-883-2355</p>
                                                <p className="phone-number"><i className="fa fa-archive"></i> 552-669-5585</p>
                                                <p className="phone-number"><i className="la la-phone"></i> 550-444-2323</p>
                                            </td>
                                            <td>
                                                <p><i className="ti-email"></i> antiadewew.aere@gmail.com</p>
                                            </td>
                                            <td className="resident-status">
                                                <p className="not-invited">Not invited</p>
                                            </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>{t('Receive payment')}</Dropdown.Item>
                                                        <Dropdown.Item>{t('Lease ledger')}</Dropdown.Item>
                                                        <Dropdown.Item>{t('Tenant summary')}</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        </>
    );
};

export default AnRentalsTenants;
