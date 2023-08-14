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

const AnLeasingDraftLeases = () => {
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
                    <h4 className="page-title">{t('Draft leases')}</h4>
                    <div className="property-buttons">
                        <button type="button" className="mr-2 btn btn-xs btn-success" id="btn-success">{t('Add lease')}</button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>{t('Manage templates')}</Button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>{t('Settings')}</Button>
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
                                    title=' All rentals'
                                    className='mt-1'
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
                                    variant='outline-primary'
                                    size='sm'
                                    className='mt-1 mr-2'
                                    title= {'(8)' + t('Unknown') + ',' + t('Not sent') + ',' + t('Proc') + '...'}
                                >
                                    <Dropdown.Item href='#'>{t('Unknown')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Not sent')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Processing request')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Awaiting signatures')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Fully signed')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Request failed')}</Dropdown.Item>
                                </DropdownButton>
                                <DropdownButton
                                    as={ButtonGroup}
                                    id='dropdown-button-drop-down'
                                    drop='down'
                                    variant='outline-primary'
                                    size='sm'
                                    className='mt-1 mr-2'
                                    title={'(8)' + t('Unknown') + ',' + t('Not sent') + ',' + t('Proc') + '...'}
                                >
                                    <Dropdown.Item href='#'>{t('Unknown')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Not sent')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Processing request')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Awaiting signatures')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Fully signed')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Request failed')}</Dropdown.Item>
                                </DropdownButton>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' className='pl-0 mt-1 mb-2'>
                                        {t('Add filter option')}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href='#'>{t('Unit or Tenant')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Type')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Start-end')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Rent')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Days remaning')}</Dropdown.Item>
                                        <Dropdown.Item href='#'>{t('Most recent event')}</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Card.Header>
                            <Card.Body style={{ paddingTop: '0px' }}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <strong>{t('LEASE')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('ESIGNATURE STATUS')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('LEASE STATUS')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('AGENT')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('START DATE')}</strong>
                                            </th>
                                            <th><strong>{t('END DATE')}</strong></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/">Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">032493</div>

                                                </div>

                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-circle text-canceled mr-1"></i>{" "}
                                                    No sent
                                                </div>
                                            </td>
                                            <td>
                                                Not executed
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                01/01/2024
                                            </td>

                                            <td>
                                                12/14/2025
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">032493</div>

                                                </div>

                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-circle text-canceled mr-1"></i>{" "}
                                                    No sent
                                                </div>
                                            </td>
                                            <td>
                                                Not executed
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                01/01/2024
                                            </td>

                                            <td>
                                                12/14/2025
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">032493</div>

                                                </div>

                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <i className="fa fa-circle text-canceled mr-1"></i>{" "}
                                                    No sent
                                                </div>
                                            </td>
                                            <td>
                                                Not executed
                                            </td>
                                            <td>

                                            </td>
                                            <td>
                                                01/01/2024
                                            </td>

                                            <td>
                                                12/14/2025
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

export default AnLeasingDraftLeases;
