/**
 * @auth antonio
 * @date 2023.08.11
 */
import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { useState, useEffect } from "react";
import Select from 'react-select';
import {
    Row,
    Col,
    Card,
    Table,
    Dropdown,
    DropdownButton,
    ButtonGroup,
    SplitButton,
} from "react-bootstrap";

import '../../../css/properties.css';

import { Link } from "react-router-dom";


const AnRentalsRentalOwners = () => {
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
                    <h4 className="page-title">Rental Owners</h4>
                    <div className="property-buttons">
                        <button type="button" class="mr-2 btn btn-success" id="btn-success">Add Owner</button>
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
                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-button-drop-down'
                            drop='down'
                            variant='primary'
                            size='sm'
                            className='mr-2'
                            title='Owner draw'
                        >
                            <Dropdown.Item href='#'>By check</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton
                            as={ButtonGroup}
                            id='dropdown-button-drop-down-roll'
                            drop='down'
                            variant='primary'
                            size='sm'
                            className='dots mr-2'
                            title='•••'
                        >
                            <Dropdown.Item href='#'>Record contribution</Dropdown.Item>
                            <Dropdown.Item href='#'>Compose email</Dropdown.Item>
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
                                                <strong>FIRST NAME | LAST NAME</strong>
                                            </th>
                                            <th>
                                                <strong>AGREEMENT ENDS ON</strong>
                                            </th>
                                            <th>
                                                <strong>ADDRESS</strong>
                                            </th>
                                            <th>
                                                <strong>PHONE</strong>
                                            </th>
                                            <th>
                                                <strong>EMAIL</strong>
                                            </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                            </td>
                                            <td>
                                                <div className="date-td">
                                                    <div className="date">02/12/2022</div>
                                                    <div className="days-left-rental-owner ml-2">
                                                        90 DAYS
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>727 Rue Garneau</div>
                                                <div>Quebec QC Canada</div>
                                            </td>
                                            <td>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-fax"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-phone"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="send-opt-msg ml-3">
                                                    <Link className="text-msg"> &nbsp;Send opt-in text message</Link>
                                                </div>
                                            </td>
                                            <td>
                                                <Link className="email"><i className="ti-email"></i> antiadewew.aere@gmail.com</Link>
                                                <br></br>
                                                <Link className="email"><i className="ti-email"></i> mskdfeee.aere@gmail.com</Link>
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
                                                        <Dropdown.Item>Properties</Dropdown.Item>
                                                        <Dropdown.Item>Finacials</Dropdown.Item>
                                                        <Dropdown.Item>Record contribution</Dropdown.Item>
                                                        <Dropdown.Item>Owner draw by check</Dropdown.Item>
                                                        <Dropdown.Item>Rental owner summary</Dropdown.Item>
                                                        <Dropdown.Item>Send opt-in text message</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                            </td>
                                            <td>
                                                <div className="date-td">
                                                    <div className="date">02/12/2022</div>
                                                    <div className="days-left-rental-owner ml-2">
                                                        90 DAYS
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>727 Rue Garneau</div>
                                                <div>Quebec QC Canada</div>
                                            </td>
                                            <td>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>

                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-phone"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="send-opt-msg ml-3">
                                                    <Link className="text-msg"> &nbsp;Send opt-in text message</Link>
                                                </div>
                                            </td>
                                            <td>
                                                <Link className="email"><i className="ti-email"></i> antiadewew.aere@gmail.com</Link>
                                                <br></br>
                                                <Link className="email"><i className="ti-email"></i> mskdfeee.aere@gmail.com</Link>
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
                                                        <Dropdown.Item>Properties</Dropdown.Item>
                                                        <Dropdown.Item>Finacials</Dropdown.Item>
                                                        <Dropdown.Item>Record contribution</Dropdown.Item>
                                                        <Dropdown.Item>Owner Draw by check</Dropdown.Item>
                                                        <Dropdown.Item>Rental owner summary</Dropdown.Item>
                                                        <Dropdown.Item>Send opt-in text message</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                            </td>
                                            <td>
                                                <div className="date-td">
                                                    <div className="date">02/12/2022</div>
                                                    <div className="days-left-rental-owner ml-2">
                                                        90 DAYS
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>727 Rue Garneau</div>
                                                <div>Quebec QC Canada</div>
                                            </td>
                                            <td>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-fax"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>

                                            </td>
                                            <td>
                                                <Link className="email"><i className="ti-email"></i> antiadewew.aere@gmail.com</Link>
                                                <br></br>
                                                <Link className="email"><i className="ti-email"></i> mskdfeee.aere@gmail.com</Link>
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
                                                        <Dropdown.Item>Properties</Dropdown.Item>
                                                        <Dropdown.Item>Finacials</Dropdown.Item>
                                                        <Dropdown.Item>Record contribution</Dropdown.Item>
                                                        <Dropdown.Item>Owner Draw by check</Dropdown.Item>
                                                        <Dropdown.Item>Rental owner summary</Dropdown.Item>
                                                        <Dropdown.Item>Send opt-in text message</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                            </td>
                                            <td>
                                                <div className="date-td">
                                                    <div className="date">02/12/2022</div>
                                                    <div className="days-left-rental-owner ml-2">
                                                        90 DAYS
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>727 Rue Garneau</div>
                                                <div>Quebec QC Canada</div>
                                            </td>
                                            <td>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-fax"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>

                                            </td>
                                            <td>
                                                <Link className="email"><i className="ti-email"></i> antiadewew.aere@gmail.com</Link>
                                                <br></br>
                                                <Link className="email"><i className="ti-email"></i> mskdfeee.aere@gmail.com</Link>
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
                                                        <Dropdown.Item>Properties</Dropdown.Item>
                                                        <Dropdown.Item>Finacials</Dropdown.Item>
                                                        <Dropdown.Item>Record contribution</Dropdown.Item>
                                                        <Dropdown.Item>Owner Draw by check</Dropdown.Item>
                                                        <Dropdown.Item>Rental owner summary</Dropdown.Item>
                                                        <Dropdown.Item>Send opt-in text message</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                            </td>
                                            <td>
                                                <div className="date-td">
                                                    <div className="date">02/12/2022</div>
                                                    <div className="days-left-rental-owner ml-2">
                                                        90 DAYS
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>727 Rue Garneau</div>
                                                <div>Quebec QC Canada</div>
                                            </td>
                                            <td>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-fax"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>

                                            </td>
                                            <td>
                                                <Link className="email"><i className="ti-email"></i> antiadewew.aere@gmail.com</Link>
                                                <br></br>
                                                <Link className="email"><i className="ti-email"></i> mskdfeee.aere@gmail.com</Link>
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
                                                        <Dropdown.Item>Properties</Dropdown.Item>
                                                        <Dropdown.Item>Finacials</Dropdown.Item>
                                                        <Dropdown.Item>Record contribution</Dropdown.Item>
                                                        <Dropdown.Item>Owner Draw by check</Dropdown.Item>
                                                        <Dropdown.Item>Rental owner summary</Dropdown.Item>
                                                        <Dropdown.Item>Send opt-in text message</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/">Tony Bobby</Link>
                                            </td>
                                            <td>
                                                <div className="date-td">
                                                    <div className="date">02/12/2022</div>
                                                    <div className="days-left-rental-owner ml-2">
                                                        90 DAYS
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>727 Rue Garneau</div>
                                                <div>Quebec QC Canada</div>
                                            </td>
                                            <td>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-home"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-briefcase"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>
                                                <div className="phone-number">
                                                    <div className="phone-number-icon">
                                                        <i className="fa fa-fax"></i>
                                                    </div>
                                                    <div className="phone-number ml-2"> 550-883-2355</div>
                                                </div>

                                            </td>
                                            <td>
                                                <Link className="email"><i className="ti-email"></i> antiadewew.aere@gmail.com</Link>
                                                <br></br>
                                                <Link className="email"><i className="ti-email"></i> mskdfeee.aere@gmail.com</Link>
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
                                                        <Dropdown.Item>Properties</Dropdown.Item>
                                                        <Dropdown.Item>Finacials</Dropdown.Item>
                                                        <Dropdown.Item>Record contribution</Dropdown.Item>
                                                        <Dropdown.Item>Owner Draw by check</Dropdown.Item>
                                                        <Dropdown.Item>Rental owner summary</Dropdown.Item>
                                                        <Dropdown.Item>Send opt-in text message</Dropdown.Item>
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

export default AnRentalsRentalOwners;
