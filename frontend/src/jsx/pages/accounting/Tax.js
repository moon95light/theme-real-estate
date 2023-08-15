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
    Badge,
    SplitButton,
} from "react-bootstrap";

import '../../../css/financial.css';

import { Link } from "react-router-dom";

const AnAccountingTax = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: t('All tax years'), label: 'All tax years' },
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
    const chackbox = document.querySelectorAll(".custom-checkbox input");
    const motherChackBox = document.querySelector("#checkbox1_exam_all");
    const chackboxFun = (type) => {
        for (let i = 0; i < chackbox.length; i++) {
            const element = chackbox[i];
            if (type === "all") {
                if (motherChackBox.checked) {
                    element.checked = true;
                } else {
                    element.checked = false;
                }
            } else {
                if (!element.checked) {
                    motherChackBox.checked = false;
                    break;
                } else {
                    motherChackBox.checked = true;
                }
            }
        }
    };
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
                    <h4 className="page-title">{t('1099 tax filings')}</h4>
                    <div className="property-buttons">
                        <Button className='mr-2 btn-xs btn-success' variant='outline'>{t('Create 2022 batch')}</Button>
                        <Button className='mr-2 btn-xs' variant='outline-dark'>{t('Reprint forms')}</Button>
                        <Button className='mr-2 btn-xs' variant='outline-dark'>{t('Correct forms')}</Button>
                    </div>
                </div>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header className='listing-card-header'>
                                <div className='col-xl-2 pl-0 mt-3 mb-3'>

                                    <Select
                                        defaultValue={t('All tax years')}
                                        onChange={setSelectedOption}
                                        options={options}
                                        style={{
                                            lineHeight: '10px',
                                            color: '#7e7e7e',
                                            paddingLeft: ' 15px',
                                        }}
                                    />
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Table responsive bordered>
                                    <thead>
                                        <tr>
                                            <th className="width50">
                                                <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="checkbox1_exam_all"
                                                        onClick={() => chackboxFun("all")}
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="checkbox1_exam_all"
                                                    ></label>
                                                </div>
                                            </th>
                                            <th>{t('TAX YEAR')}</th>
                                            <th>{t('DATE CREATED')}</th>
                                            <th>{t('PAYER')}</th>
                                            <th>{t('STATUS')}</th>
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

export default AnAccountingTax;
