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

const AnAccountingGeneralLedger = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: t('All'), label: 'All' },
        { value: 'Multiple (55)', label: 'Multiple (55)' },
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
                    <h4 className="page-title">{t('General Ledger')}</h4>
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
                                    <p className="company-and-property">
                                        {t('PROPERTY OR COMPANY')}
                                    </p>
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
                                    <p className="company-and-property">
                                        {t('ACCOUNTS')}
                                    </p>
                                    <Select
                                        defaultValue={options.find(option => option.value === 'Multiple (55)')}
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
                                    <p className="company-and-property">
                                        {t('DATE RANGE')}
                                    </p>
                                    <Select
                                        defaultValue={options.find(option => option.value === 'Custom')}
                                        onChange={setSelectedOption}
                                        options={options}
                                        style={{
                                            lineHeight: '10px',
                                            color: '#7e7e7e',
                                            paddingLeft: ' 15px',
                                        }}
                                    />
                                </div>

                                <div>
                                    <p className="company-and-property">{t('FROM')} ~ {('TO')}</p>
                                    <RangeDatePicker
                                        startText="Start"
                                        endText="End"
                                        startPlaceholder="Start Date"
                                        endPlaceholder="End Date"
                                    />
                                </div>
                                <div>
                                    <p className="company-and-property ml-4">{t('ACCOUNTING BASIS')}</p>
                                    <div className='card-body mt-2 financial-radio'>
                                        <div className='basic-form'>
                                            <form onSubmit={(e) => e.preventDefault()}>
                                                <div className='form-group mb-0'>
                                                    <label className='radio-inline mr-3'>
                                                        <input type='radio' name='optradio' checked /> {t('Cash')}
                                                    </label>
                                                    <label className='radio-inline mr-3'>
                                                        <input type='radio' name='optradio' /> {t('Accrual')}
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
                                            <th>
                                                <strong>{t('DATE (CASH BASIS)')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('PROPRTY OF COMPANY')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('NAME')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('DESCRIPTION')}</strong>
                                            </th>
                                            <th></th>
                                            <th><strong>{t('AMOUNT')}</strong></th>
                                            <th><strong>{t('BALANCE')}</strong></th>

                                        </tr>
                                    </thead>
                                    <tbody>
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

export default AnAccountingGeneralLedger;
