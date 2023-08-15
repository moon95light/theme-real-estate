import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { useState, useEffect } from "react";
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
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

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const AnAccountingFinancials = () => {
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
                    <h4 className="page-title">{t('Financials')}</h4>

                </div>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <div>
                                    <p className="company-and-property">{t('PROPERTY OR COMPANY')}</p>
                                    <SplitButton
                                        as={ButtonGroup}
                                        id='dropdown-button-drop-down'
                                        drop='down'
                                        variant='outline-primary'
                                        size='sm'
                                        title={t('All properties')}
                                        className='mt-1 mr-4'
                                    >
                                        <Dropdown.Item href='#'>{t('All')} {t('rentals')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>74 Grove Street (Single family home)</Dropdown.Item>
                                        <Dropdown.Item href='#'>160 East End Avenue (condo/townhouse)</Dropdown.Item>
                                        <div className='dropdown-divider'></div>
                                        <Dropdown.Item href='#'>Separated link</Dropdown.Item>
                                    </SplitButton>
                                </div>
                                <div>
                                    <p className="company-and-property">{t('PERIOD')}</p>
                                    <DropdownButton
                                        as={ButtonGroup}
                                        id='dropdown-button-drop-down'
                                        drop='down'
                                        variant='outline-primary'
                                        size='sm'
                                        className='mt-1 mr-2'
                                        title={t('Year to date')}
                                    >
                                        <Dropdown.Item href='#'>{t('Year to date')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Last month')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Last quarter')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Last year')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('This year vs. last year')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Last year vs. prior year')}</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <button type="button" className="mr-2 ml-3 btn btn-sm btn-success mt-4" id="btn-success">{t('Search')}</button>
                                <div className='card-body mt-2 financial-radio'>
                                    <div className='basic-form'>
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <div className='form-group mb-0'>
                                                <label className='radio-inline mr-3'>
                                                    <input type='radio' name='optradio' checked /> {t('Cash basis')}
                                                </label>
                                                <label className='radio-inline mr-3'>
                                                    <input type='radio' name='optradio' /> {t('Accrual basis')}
                                                </label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Card.Header>
                            <Card.Body style={{ paddingTop: '0px' }}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <strong>{t('PROPERTY OR COMPANY ACCOUNT (CASH BASIS)')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('Q1')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('Q2')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('Q3')}</strong>
                                            </th>
                                            <th><strong>{t('TOTAL')}</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link className="mr-3"> + </Link>
                                                <Link to="/"> Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                            </td>
                                            <td>
                                                $ 3,000
                                            </td>
                                            <td>
                                                $ 40,000
                                            </td>
                                            <td>
                                                $ 200
                                            </td>
                                            <td>
                                                $ 43,200
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

export default AnAccountingFinancials;
