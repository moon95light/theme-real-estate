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

import '../../../css/properties.css';

import { Link } from "react-router-dom";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
]

const AnTasksIncomingRequests = () => {
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
                    <h4 className="page-title">{t('Incoming requests')}</h4>
                    <div className="property-buttons">
                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-button-drop-down'
                            drop='down'
                            variant='success'
                            size='xs'
                            className='mr-2'
                            title={t('Add   task')}
                        >
                            <Dropdown.Item href='#'>{t('To do')}</Dropdown.Item>
                            <Dropdown.Item href='#'>{t('Resident Request')}</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-button-drop-down'
                            drop='down'
                            variant='outline-dark'
                            size='xs'
                            className='mr-2'
                            title={t('Add') + t('task')}
                        >
                            <Dropdown.Item href='#'>{t('To do')}</Dropdown.Item>
                            <Dropdown.Item href='#'>{t('Resident Request')}</Dropdown.Item>
                        </DropdownButton>
                        <Button className='mr-2 btn-xs' variant='outline-dark'>{t('Manage Categories')}</Button>
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
                                        defaultValue={options.find(option => option.value === 'Pending')}
                                        onChange={setSelectedOption}
                                        options={options}
                                        style={{
                                            lineHeight: '10px',
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
                            <Card.Body style={{ paddingTop: '0px' }}>
                                <Table responsive>
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
                                            <th>
                                                <strong>{t('WORK ORDER | UNIT')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('UPDATED | AGE')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('STATUS | DUE')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('PRIORITY | CATEGORY')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('WORK ORDER')}</strong>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheckBox1"
                                                        onClick={() => chackboxFun()}
                                                        required=""
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="customCheckBox1"
                                                    ></label>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="/">Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">Resident request | 222060</div>
                                                </div>

                                            </td>

                                            <td>
                                                <div className="d-flex align-items-center">
                                                    8/3/2023 9:59 AM
                                                </div>
                                                <div className="another-events">
                                                    <div className="number">12 days 1 hour</div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-circle text-success mr-1"></i>{" "}
                                                    In progress
                                                </div>
                                                <div className="another-events">
                                                    <div className="number">Normal</div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link to="/">Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">Normal</div>
                                                </div>
                                            </td>

                                            <td>
                                                Tony Bagwell
                                            </td>
                                            <td className="py-2">
                                                <span> {drop}</span>
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
export default AnTasksIncomingRequests;
