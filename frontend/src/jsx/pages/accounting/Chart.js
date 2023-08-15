import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { useState, useEffect } from "react";
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { RangeDatePicker, DatePicker } from "@y0c/react-datepicker";

import {
    Row,
    Col,
    Card,
    Table,
    Button,
    Dropdown,
    DropdownButton,
    ButtonGroup,
    SplitButton,
} from "react-bootstrap";

import '../../../css/financial.css';

import { Link } from "react-router-dom";

const AnAccountingChart = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: t('All'), label: 'All' },
        { value: 'Active', label: 'Active' },
        { value: 'Custom', label: 'Custom' },
    ]
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
                    <h4 className="page-title">{t('Chart of Accounts')}</h4>
                    <div className="property-buttons">
                        <Button className='mr-2 btn-xs' variant='outline-dark'>{t('Record general journal entry')}</Button>
                        <Button className='mr-2 btn-xs' variant='outline-dark'>{t('View locked periods')}</Button>
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
                                <div className='col-xl-2'>
                                    <Select
                                        defaultValue={options.find(option => option.value === 'Active')}
                                        onChange={setSelectedOption}
                                        options={options}
                                        style={{
                                            lineHeight: '10px',
                                            color: '#7e7e7e',
                                            paddingLeft: ' 15px',
                                        }}
                                    />
                                </div>
                                <div className='col-xl-2'>
                                    <div className='input-group input-info-o' style={{ width: '200px' }}>

                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Search'
                                            style={{ paddingBottom: '0px', paddingTop: '0px', height: '40px' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <p className="company-and-property ml-4">{t('ACCOUNT NUMBERS')}</p>
                                    <div className='card-body mt-2 financial-radio'>
                                        <div className='basic-form'>
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <div className='form-group mb-0'>
                                                    <label className='radio-inline mr-3'>
                                                        <input type='radio' name='optradio' checked /> {t('Show')}
                                                    </label>
                                                    <label className='radio-inline mr-3'>
                                                        <input type='radio' name='optradio' /> {t('Hide')}
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="mr-2 ml-3 btn btn-sm btn-success mt-4" id="btn-success">{t('Search')}</button>

                            </Card.Header>
                            <Card.Body style={{ paddingTop: '0px' }}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th><strong>{t('ACCOUNT NUMBERS')}</strong></th>
                                            <th><strong>{t('NAME')}</strong></th>
                                            <th><strong>{t('TYPE')}</strong></th>
                                            <th><strong>{t('DEFAULT ACCOUNT FOR')}</strong></th>
                                            <th><strong>{t('CASH FLOW CLASSIFICATION')}</strong></th>
                                            <th><strong>{t('NOTES')}</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td><Link>Accounts Payable</Link></td>
                                            <td>Current Liability</td>
                                            <td>Accounts Payable</td>
                                            <td>Operating activities</td>
                                            <td className="py-2" style={{ display: 'inline-flex' }}>
                                                <span className="mr-3" style={{ paddingTop: '10px' }}>Accounting Payable</span><span> {drop}</span>
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

export default AnAccountingChart;
