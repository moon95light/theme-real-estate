import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    Table,
    Badge,
    Dropdown,
    ProgressBar,
    SplitButton,
    DropdownButton,
    ButtonGroup,
} from "react-bootstrap";

/// imge
import { Link } from "react-router-dom";

const AnRentalsOutStandingBalance = () => {
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

    return (
        <Fragment>
            <div className="page-titles">
                <h4 className="page-title">Outstanding lease balances</h4>
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
                                <Dropdown.Item href='#'>All rentals</Dropdown.Item>
                                <Dropdown.Item href='#'>74 Grove Street (Single family home)</Dropdown.Item>
                                <Dropdown.Item href='#'>160 East End Avenue (condo/townhouse)</Dropdown.Item>
                                <div className='dropdown-divider'></div>
                                <Dropdown.Item href='#'>Separated link</Dropdown.Item>
                            </SplitButton>
                            <DropdownButton
                                as={ButtonGroup}
                                id='dropdown-button-drop-down'
                                drop='down'
                                variant='primary'
                                size='sm'
                                className='mt-1 mr-2'
                                title=' All &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                            >
                                <Dropdown.Item href='#'>Active</Dropdown.Item>
                                <Dropdown.Item href='#'>Past</Dropdown.Item>
                                <Dropdown.Item href='#'>Future</Dropdown.Item>
                            </DropdownButton>
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
                                            <strong>+</strong>
                                        </th>
                                        <th>
                                            <strong>LEASE</strong>
                                        </th>
                                        <th>
                                            <strong>PAST DUE EMAIL</strong>
                                        </th>
                                        <th>
                                            <strong>0 - 30 DAYS</strong>
                                        </th>
                                        <th>
                                            <strong>31 - 60 DAYS</strong>
                                        </th>
                                        <th>
                                            <strong>61 - 90 DAYS</strong>
                                        </th>
                                        <th>
                                            <strong>90+ DAYS</strong>
                                        </th>
                                        <th>
                                            <strong>BALANCE</strong>
                                        </th>
                                        <th>

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
                                            <strong>+</strong>
                                        </td>
                                        <td>
                                            <div className="align-items-center">
                                                <Link to="/">Garden  Evanasad wdasdqwdqwd vwqdwdqwdq wqdwd</Link>
                                                <br></br>
                                                <div className="balance-lease">
                                                    <div className="balance-number">032493</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td> </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            $ 223
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
                                                    <Dropdown.Item>Receive payment</Dropdown.Item>
                                                    <Dropdown.Item>Add note</Dropdown.Item>
                                                    <Dropdown.Item>Lease ledger</Dropdown.Item>
                                                    <Dropdown.Item>Tenants</Dropdown.Item>
                                                    <Dropdown.Item>View lease</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheckBox2"
                                                    onClick={() => chackboxFun()}
                                                    required=""
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheckBox2"
                                                ></label>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>+</strong>
                                        </td>
                                        <td>
                                            <div className="align-items-center">
                                                <Link to="/">Garden  Evanasad wdasdqwdqwd vwqdwdqwdq wqdwd</Link>
                                                <br></br>
                                                <div className="balance-lease">
                                                    <div className="balance-number">032493</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td> </td>
                                        <td>
                                            $ 32323
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
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
                                                    <Dropdown.Item>Receive payment</Dropdown.Item>
                                                    <Dropdown.Item>Add note</Dropdown.Item>
                                                    <Dropdown.Item>Lease ledger</Dropdown.Item>
                                                    <Dropdown.Item>Tenants</Dropdown.Item>
                                                    <Dropdown.Item>View lease</Dropdown.Item>
                                                    <Dropdown.Item>Send opt-in text message</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheckBox3"
                                                    onClick={() => chackboxFun()}
                                                    required=""
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheckBox3"
                                                ></label>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>+</strong>
                                        </td>
                                        <td>
                                            <div className="align-items-center">
                                                <Link to="/">Garden  Evanasad wdasdqwdqwd vwqdwdqwdq wqdwd</Link>
                                                <br></br>
                                                <div className="balance-lease">
                                                    <div className="balance-number">032493</div>
                                                    <div className="evition-pending-outstanding">
                                                        EVICTION PENDING
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td> </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            $8567
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            $ 223
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
                                                    <Dropdown.Item>Receive payment</Dropdown.Item>
                                                    <Dropdown.Item>Add note</Dropdown.Item>
                                                    <Dropdown.Item>Lease ledger</Dropdown.Item>
                                                    <Dropdown.Item>Tenants</Dropdown.Item>
                                                    <Dropdown.Item>View lease</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheckBox4"
                                                    onClick={() => chackboxFun()}
                                                    required=""
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheckBox4"
                                                ></label>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>+</strong>
                                        </td>
                                        <td>
                                            <div className="align-items-center">
                                                <Link to="/"> Canada farm house </Link>
                                                <br></br>
                                                <div className="balance-lease">
                                                    <div className="balance-number">032493</div>

                                                </div>
                                            </div>
                                        </td>
                                        <td> </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            $43555
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
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
                                                    <Dropdown.Item>Receive payment</Dropdown.Item>
                                                    <Dropdown.Item>Add note</Dropdown.Item>
                                                    <Dropdown.Item>Lease ledger</Dropdown.Item>
                                                    <Dropdown.Item>Tenants</Dropdown.Item>
                                                    <Dropdown.Item>View lease</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox checkbox-success check-lg mr-3">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheckBox5"
                                                    onClick={() => chackboxFun()}
                                                    required=""
                                                />
                                                <label
                                                    className="custom-control-label"
                                                    htmlFor="customCheckBox5"
                                                ></label>
                                            </div>
                                        </td>
                                        <td>
                                            <strong>+</strong>
                                        </td>
                                        <td>
                                            <div className="align-items-center">
                                                <Link to="/">Garden  E wqdwd</Link>
                                                <br></br>
                                                <div className="balance-lease">
                                                    <div className="balance-number">032493</div>
                                                    <div className="evition-pending-outstanding">
                                                        EVICTION PENDING
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>example@example.com </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            --
                                        </td>
                                        <td>
                                            $ 2344
                                        </td>
                                        <td>
                                            --
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
                                                    <Dropdown.Item>Receive payment</Dropdown.Item>
                                                    <Dropdown.Item>Add note</Dropdown.Item>
                                                    <Dropdown.Item>Lease ledger</Dropdown.Item>
                                                    <Dropdown.Item>Tenants</Dropdown.Item>
                                                    <Dropdown.Item>View lease</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><strong>T o t a l</strong></td>
                                        <td></td>
                                        <td></td>
                                        <td>$ 31112</td>
                                        <td>$ 433</td>
                                        <td>$ 0.00</td>
                                        <td>$ 0.00</td>
                                        <td>$ 475000</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Fragment>
    );
};

export default AnRentalsOutStandingBalance;
