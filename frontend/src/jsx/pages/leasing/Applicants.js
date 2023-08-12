
import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { Dropdown, ProgressBar } from "react-bootstrap";

/// images
import { Link } from "react-router-dom";

const AnLeasingApplicants = () => {
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
                <Dropdown.Item href="#">Edit</Dropdown.Item>
                <Dropdown.Item href="#" className="text-danger">
                    Delete
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );

    return (
        <Fragment>
            <PageTitle activeMenu="Shop" motherMenu="Customers" />
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table mb-0 table-striped respon-table-data">
                                    <thead>
                                        <tr>
                                            <th>FIRST NAME | LAST NAME</th>
                                            <th>UNIT</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th className="pl-5" style={{ minWidth: 200 }}>
                                                STATUS
                                            </th>
                                            <th>LAST UPDATED</th>
                                            <th>%COMPLETE</th>
                                        </tr>
                                    </thead>
                                    <tbody id="customers">
                                        <tr className="btn-reveal-trigger">
                                            <td className="py-3">
                                                <Link to="/ecom-customers">
                                                    <div className="media d-flex align-items-center">
                                                        <div className="media-body">
                                                            <h5 className="mb-0 fs--1">
                                                                Ricky Antony
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>Garden Row (muliti
                                                <br></br>building complex)-2c
                                            </td>
                                            <td className="py-2" style={{ display: "flex", marginTop: 16 }}>
                                                <div className="mr-4" style={{ paddingTop: 1 }}>
                                                    <i className="ti-email"></i></div>
                                                <div>
                                                    <a href="mailto:ricky@example.com">
                                                        info@example.com
                                                    </a>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div>
                                                    <i className="fa fa-phone mr-2"></i>
                                                    <a href="tel:2012001851">(201) 200-1851</a>
                                                </div>
                                                <div className="">
                                                    <a>Send opt-in text message </a>
                                                </div>
                                            </td>
                                            <td className="py-2 pl-5 wspace-no">
                                                2392 Main Avenue, Penasauka
                                            </td>
                                            <td className="py-2">30/03/2018</td>
                                            <td>
                                                <ProgressBar now={70} variant="success" />
                                            </td>
                                            <td className="py-2 text-right">{drop}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AnLeasingApplicants;
