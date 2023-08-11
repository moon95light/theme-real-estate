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

const AnRentalsRentRoll = () => {
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
                    <h4 className="page-title">Rent Roll</h4>
                    <div className="property-buttons">
                        <button type="button" class="mr-2 btn btn-success" id="btn-success">Add lease</button>

                        <button type="button" class="mr-2 btn update-button" id="update-button1">Renew lease</button>
                        <button type="button" class="mr-2 btn update-button" id="update-button2">Receive payment</button>
                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-button-drop-down-roll'
                            drop='down'
                            variant='primary'
                            size='sm'
                            className='dots mr-2'
                            title='•••'
                        >
                            <Dropdown.Item href='#'>Update recurring charges</Dropdown.Item>
                            <Dropdown.Item href='#'>Add meter reading</Dropdown.Item>
                            <Dropdown.Item href='#'>Enter bulk charges</Dropdown.Item>
                            <Dropdown.Item href='#'>Enter bulk Credits</Dropdown.Item>
                        </DropdownButton>
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
                                        <option value="">Active</option>
                                        <option value="">Past</option>
                                        <option value="">Future</option>
                                    </select>
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
                                            <th>
                                                <strong>Lease</strong>
                                            </th>
                                            <th>
                                                <strong>Status</strong>
                                            </th>
                                            <th>
                                                <strong>Type</strong>
                                            </th>
                                            <th>
                                                <strong>Days Left</strong>
                                            </th>
                                            <th>
                                                <strong>Rent</strong>
                                            </th>
                                            <th></th>
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
                                            <td>Active</td>
                                            <td>
                                                <p> Fixed w/rollover </p>
                                                <p className="dates">12/1/2022 - 12/1/2023</p>
                                            </td>
                                            <td>
                                                <div className="days-left">
                                                    90 DAYS
                                                </div>
                                            </td>
                                            <td>
                                                <div className="rent">
                                                    <Link className="dollars mr-3" to="/"> $9890 </Link>
                                                </div>
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
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
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
                                            <td>Past</td>
                                            <td>
                                                <p> Fixed w/rollover </p>
                                                <p className="dates">12/1/2022 - 12/1/2023</p>
                                            </td>
                                            <td>
                                                <div className="days-left">
                                                    90 DAYS
                                                </div>
                                            </td>
                                            <td>
                                                <div className="rent">
                                                    <Link className="dollars mr-3" to="/"> $9890 </Link>
                                                </div>
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
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">032493</div>
                                                    <div className="evition-pending">
                                                        EVICTION PENDING
                                                    </div>
                                                </div>

                                            </td>
                                            <td>Active</td>
                                            <td>
                                                <p> Fixed w/rollover </p>
                                                <p className="dates">12/1/2022 - 12/1/2023</p>
                                            </td>
                                            <td>
                                                {/* <div className="days-left">
                                                    90 DAYS
                                                </div> */}
                                            </td>
                                            <td>
                                                <div className="rent">
                                                    <Link className="dollars mr-3" to="/"> $10000 </Link>
                                                </div>
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
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">032493</div>
                                                    <div className="evition-pending">
                                                        EVICTION PENDING
                                                    </div>
                                                </div>

                                            </td>
                                            <td>Active</td>
                                            <td>
                                                <p> Fixed w/rollover </p>
                                                <p className="dates">12/1/2022 - 12/1/2023</p>
                                            </td>
                                            <td>
                                                <div className="days-left">
                                                    90 DAYS
                                                </div>
                                            </td>
                                            <td>
                                                <div className="rent">
                                                    <Link className="dollars mr-3" to="/"> $9890 </Link>
                                                </div>
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
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
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
                                            <td>Past</td>
                                            <td>
                                                <p> Fixed w/rollover </p>
                                                <p className="dates">12/1/2022 - 12/1/2023</p>
                                            </td>
                                            <td>
                                                <div className="days-left">
                                                    90 DAYS
                                                </div>
                                            </td>
                                            <td>
                                                <div className="rent">
                                                    <Link className="dollars mr-3" to="/"> $700 </Link>

                                                </div>
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
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
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
                                            <td>Past</td>
                                            <td>
                                                <p> Fixed w/rollover </p>
                                                <p className="dates">12/1/2022 - 12/1/2023</p>
                                            </td>
                                            <td>
                                                {/* <div className="days-left">
                                                    90 DAYS
                                                </div> */}
                                            </td>
                                            <td>
                                                <div className="rent">
                                                    <Link className="dollars mr-3" to="/"> $12,000 </Link>
                                                </div>
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
                                                        <Dropdown.Item>Financials</Dropdown.Item>
                                                        <Dropdown.Item>Units</Dropdown.Item>
                                                        <Dropdown.Item>Event History</Dropdown.Item>
                                                        <Dropdown.Item>Property Summary</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Garden Row (multi-building complex) - 1D | Joanne Evan</Link>
                                                <br></br>
                                                <div className="another-events">
                                                    <div className="number">032493</div>
                                                    <div className="evition-pending">
                                                        EVICTION PENDING
                                                    </div>
                                                </div>

                                            </td>
                                            <td>Active</td>
                                            <td>
                                                <p> Fixed w/rollover </p>
                                                <p className="dates">12/1/2022 - 12/1/2023</p>
                                            </td>
                                            <td>
                                                {/* <div className="days-left">
                                                    90 DAYS
                                                </div> */}
                                            </td>
                                            <td>
                                                <div className="rent">
                                                    <Link className="dollars mr-3" to="/"> $10000 </Link>
                                                </div>
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

export default AnRentalsRentRoll;
