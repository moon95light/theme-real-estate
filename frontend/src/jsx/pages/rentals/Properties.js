import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { useState, useEffect } from "react";
import Select from 'react-select';
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
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

const AnRentalsProperties = () => {
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
                    <h4 className="page-title">Properties</h4>
                    <div className="property-buttons">
                        <button type="button" class="mr-2 btn btn-success" id="btn-success">Add property</button>
                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-button-drop-down'
                            drop='down'
                            variant='primary'
                            size='sm'
                            className='mr-2'
                            title='Management Fees'
                        >
                            <Dropdown.Item href='#'>Collect Management fees</Dropdown.Item>
                            <Dropdown.Item href='#'>Pay out income management accounts</Dropdown.Item>
                        </DropdownButton>
                        <button type="button" class="mr-2 btn update-button" id="update-button1">Update Unit Details</button>
                        <button type="button" class="mr-2 btn update-button" id="update-button2">Property groups</button>
                    </div>
                </div>
                <Row>
                    <Col lg={12}>
                        <Card>
                            <Card.Header>
                                <div className="filter-select" >
                                    <select className="select-filter1" >
                                        <option value="">All rentals</option>
                                        <option value="">74 Grove Street (Single family home)</option>
                                        <option value="">160 East End Avenue (condo/townhouse)</option>
                                        <option value="">Commercial Industrial</option>
                                    </select>
                                    <select className="select-filter2">
                                        <option value="">All</option>
                                        <option value="">Status</option>
                                        <option value="">Location</option>
                                        <option value="">Prefferd Vendor</option>
                                        <option value="">Type</option>
                                    </select>
                                </div>
                            </Card.Header>
                            <Card.Body style={{ paddingTop: '0px' }}>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>
                                                <strong>PROPERTY</strong>
                                            </th>
                                            <th>
                                                <strong>LOCATION</strong>
                                            </th>
                                            <th>
                                                <strong>RENTAL OWNERS</strong>
                                            </th>
                                            <th>
                                                <strong>MANAGER</strong>
                                            </th>
                                            <th>
                                                <strong>TYPE</strong>
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
