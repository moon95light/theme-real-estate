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

const AnMaintenanceVendors = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(null);

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
                    <h4 className="page-title">{t('Vendors')}</h4>
                    <div className="property-buttons">
                        <button type="button" className="mr-2 btn btn-xs btn-success" id="btn-success">{t('Add')} {t('vendor')}</button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>{t('Manage categoriees')}</Button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>{t('Compose Email')}</Button>
                    </div>
                </div>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <div className='col-xl-2'>
                                    <Select
                                        defaultValue={options.find(option => option.value === 'All')}
                                        onChange={setSelectedOption}
                                        options={options}
                                        style={{
                                            lineHeight: '40px',
                                            color: '#7e7e7e',
                                            paddingLeft: ' 15px',
                                        }}
                                    />
                                </div>
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
                                                <strong>{t('PHONE')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('EMAIL')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('INSURANCE PROVIDER')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('EXPIRES')}</strong>
                                            </th>

                                            <th>
                                                <strong>{t('WEBSITE')}</strong>
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
                                            
                                            <td>
                                                <p><i className="la la-phone"></i> 550-220-2251</p>
                                            </td>
                                            <td>
                                                <p><i className="ti-email"></i> antiadewew.aere@gmail.com</p>
                                            </td>
                                            <td>150 Main Ave (fourplex) - 4</td>
                                            <td>

                                            </td>
                                            <td style={{display: 'inline-flex'}}>
                                                <Link className="not-invited mr-3">www.buildium.com</Link>
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

export default AnMaintenanceVendors;
