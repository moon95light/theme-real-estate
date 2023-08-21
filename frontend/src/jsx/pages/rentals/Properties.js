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
    Button, Dropdown,
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

const AnRentalsProperties = () => {
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
                    <h4 className="page-title">{t('Properties')}</h4>
                    <div className="property-buttons">
                        <Link to="an-properties/an-addproperty" type="button" className="mr-2 btn btn-xs btn-success" id="btn-success">{t('Add')} {t('properties')}</Link>

                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-button-drop-down'
                            drop='down'
                            variant='outline-info'
                            size='xs'
                            className='mr-2 outline'
                            title={t('Managemnet') + t('fees')}
                        >
                            <Dropdown.Item href='#'>{t('Collect')} {t('Management')} {t('fees')}</Dropdown.Item>
                            <Dropdown.Item href='#'>{t('Pay')} {t('out')} {t('income')} {t('management')} {t('accounts')}</Dropdown.Item>
                        </DropdownButton>
                        <Button className='mr-2 btn-xs' variant='outline-info'>
                            {t('Update')} {t('unit')} {t('details')}
                        </Button>
                        <Button className='mr-2 btn-xs' variant='outline-info'>
                            {t('Property')} {t('groups')}
                        </Button>
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
                                    title= {t('All') + ' ' + t('rentals')}
                                    className='mt-1 mr-1'
                                >
                                    <Dropdown.Item href='#'>{t('All')} {t('rentals')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>{t('Receive')} {t('LEASE')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>160 East End Avenue (condo/townhouse)</Dropdown.Item>
                                    <div className='dropdown-divider'></div>
                                    <Dropdown.Item href='#'>Separated link</Dropdown.Item>
                                </SplitButton>
                                <DropdownButton
                                    as={ButtonGroup}
                                    id='dropdown-button-drop-down'
                                    drop='down'
                                    variant=''
                                    size='sm'
                                    className='mr-2'
                                    title=' All &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                                >
                                    <Dropdown.Item href='#'>{t('All')}</Dropdown.Item>
                                    <Dropdown.Item href='#'>Status</Dropdown.Item>
                                    <Dropdown.Item href='#'>Location</Dropdown.Item>
                                    <Dropdown.Item href='#'>Prefferd Vendor</Dropdown.Item>
                                    <Dropdown.Item href='#'>Type</Dropdown.Item>
                                </DropdownButton>
                             </Card.Header>
                            <Card.Body style={{ paddingTop: '0px' }}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <strong>{t('PROPERTY')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('LOCATION')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('RENTAL')} {t('OWNERS')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('MANAGER')}</strong>
                                            </th>
                                            <th>
                                                <strong>{t('TYPE')}</strong>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><Link to="/">74 Grove Street (Single family home)</Link></td>
                                            <td>Boston, MA</td>
                                            <td>Ocean Property LTT</td>
                                            <td>
                                                {/* MANAGER */}
                                            </td>
                                            <td>Residental Single Family </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/">74 Grove Street (Single family home)</Link></td>
                                            <td>Boston, MA</td>
                                            <td>Ocean Property LTT</td>
                                            <td>
                                                {/* MANAGER */}
                                            </td>
                                            <td>Residental Multi Family</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/">160 East End Avenue (condo/townhouse)</Link></td>
                                            <td>Boston, MA</td>
                                            <td>Ocean Property LTT</td>
                                            <td>
                                                {/* MANAGER */}
                                            </td>
                                            <td>Residental Single Family </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/">160 East End Avenue (condo/townhouse)</Link></td>
                                            <td>NewYork, NY</td>
                                            <td>Ocean Property LTT</td>
                                            <td>
                                                {/* MANAGER */}
                                            </td>
                                            <td>Industrial </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/">74 Grove Street (Single family home)</Link></td>
                                            <td>Boston, MA</td>
                                            <td>Ocean Property LTT</td>
                                            <td>
                                                {/* MANAGER */}
                                            </td>
                                            <td>Residental Multi Family </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/">Commercial Industrial</Link></td>
                                            <td>Boston, MA</td>
                                            <td>Ocean Property LTT</td>
                                            <td>
                                                {/* MANAGER */}
                                            </td>
                                            <td>160 East End Avenue (condo/townhouse)</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><Link to="/">74 Grove Street (Single family home)</Link></td>
                                            <td>Boston, MA</td>
                                            <td>Ocean Property LTT</td>
                                            <td>
                                                {/* MANAGER */}
                                            </td>
                                            <td>Industrial </td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle
                                                        variant="success"
                                                        className="light sharp i-false"
                                                    >
                                                        {svg1}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
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

export default AnRentalsProperties;
