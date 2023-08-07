import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

// Map
import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";

//** Import Image */
import customers1 from "../../../images/customers/1.jpg";
import customers2 from "../../../images/customers/2.jpg";
import customers3 from "../../../images/customers/3.jpg";

import PropertySlider from "../Omah/Home/Slider/PropertySlider";

// Chart
import ChartDoughnut from "../Omah/Home/Chart/DonutChart";
// Apex Chart
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
const PieChart = loadable(() =>
  pMinDelay(import("../Omah/Home/Chart/PieChart"), 500)
);
const ChartTimeLine = loadable(() =>
  pMinDelay(import("../Omah/Home/Chart/ChartTimeline"), 500)
);
const ChartBar = loadable(() =>
  pMinDelay(import("../Omah/Home/Chart/ChartBar"), 500)
);

function Home() {
  return (
    <>
      <div className="form-head d-md-flex mb-sm-4 mb-3 align-items-start">
        <div className="mr-auto  d-lg-block">
          <h2 className="text-black font-w600">Dashboard</h2>
          <p className="mb-0">Welcome to Omah Property Admin</p>
        </div>
        <Link to="/" className="btn btn-primary rounded light mr-3">
          Refresh
        </Link>
        <Link to="/" className="btn btn-primary rounded">
          <i className="flaticon-381-settings-2 mr-0" />
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-6 col-xxl-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card bg-danger property-bx text-white">
                <div className="card-body">
                  <div className="media d-sm-flex d-block align-items-center">
                    <span className="mr-4 d-block mb-sm-0 mb-3">
                      <svg
                        width={80}
                        height={80}
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M31.8333 79.1667H4.16659C2.33325 79.1667 0.833252 77.6667 0.833252 75.8333V29.8333C0.833252 29 1.16659 28 1.83325 27.5L29.4999 1.66667C30.4999 0.833332 31.8333 0.499999 32.9999 0.999999C34.3333 1.66667 34.9999 2.83333 34.9999 4.16667V76C34.9999 77.6667 33.4999 79.1667 31.8333 79.1667ZM7.33325 72.6667H28.4999V11.6667L7.33325 31.3333V72.6667Z"
                          fill="white"
                        />
                        <path
                          d="M75.8333 79.1667H31.6666C29.8333 79.1667 28.3333 77.6667 28.3333 75.8334V36.6667C28.3333 34.8334 29.8333 33.3334 31.6666 33.3334H75.8333C77.6666 33.3334 79.1666 34.8334 79.1666 36.6667V76C79.1666 77.6667 77.6666 79.1667 75.8333 79.1667ZM34.9999 72.6667H72.6666V39.8334H34.9999V72.6667Z"
                          fill="white"
                        />
                        <path
                          d="M60.1665 79.1667H47.3332C45.4999 79.1667 43.9999 77.6667 43.9999 75.8334V55.5C43.9999 53.6667 45.4999 52.1667 47.3332 52.1667H60.1665C61.9999 52.1667 63.4999 53.6667 63.4999 55.5V75.8334C63.4999 77.6667 61.9999 79.1667 60.1665 79.1667ZM50.6665 72.6667H56.9999V58.8334H50.6665V72.6667Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <div className="media-body mb-sm-0 mb-3 mr-5">
                      <h4 className="fs-22 text-white">Total Properties</h4>
                      <div className="progress mt-3 mb-2" style={{ height: 8 }}>
                        <div
                          className="progress-bar bg-white progress-animated"
                          style={{ width: "86%", height: 8 }}
                          role="progressbar"
                        >
                          <span className="sr-only">86% Complete</span>
                        </div>
                      </div>
                      <span className="fs-14">
                        431 more to break last month record
                      </span>
                    </div>
                    <span className="fs-46 font-w500">4,562</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="fs-36 text-black font-w600">2,356</h2>
                      <p className="fs-18 mb-0 text-black font-w500">
                        Properties for Sale
                      </p>
                      <span className="fs-13">Target 3k/month</span>
                    </div>
                    <div className="d-inline-block position-relative donut-chart-sale">
                      <ChartDoughnut value={71} backgroundColor="#3C4CB8" />
                      <small className="text-primary">71%</small>
                      <span className="circle bgl-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="fs-36 text-black font-w600">2,206</h2>
                      <p className="fs-18 mb-0 text-black font-w500">
                        Properties for Rent
                      </p>
                      <span className="fs-13">Target 3k/month</span>
                    </div>
                    <div className="d-inline-block position-relative donut-chart-sale">
                      <ChartDoughnut value={90} backgroundColor="#37D15A" />

                      <small className="text-success">90%</small>
                      <span className="circle bgl-success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h3 className="fs-20 text-black">Total Revenue</h3>
              <Dropdown className="dropdown ml-auto">
                <Dropdown.Toggle
                  className="btn-link   i-false p-0"
                  data-toggle="dropdown"
                  variant=""
                >
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <rect x={0} y={0} width={24} height={24} />
                      <circle fill="#000000" cx={5} cy={12} r={2} />
                      <circle fill="#000000" cx={12} cy={12} r={2} />
                      <circle fill="#000000" cx={19} cy={12} r={2} />
                    </g>
                  </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                  <Dropdown.Item className="dropdown-item" to="/">
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" to="/">
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body pt-2 pb-0">
              <div className="d-flex flex-wrap align-items-center">
                <span className="fs-36 text-black font-w600 mr-3">
                  $678,345
                </span>
                <p className="mr-sm-auto mr-3 mb-sm-0 mb-3">
                  last month $563,443
                </p>
                <div className="d-flex align-items-center">
                  <svg
                    className="mr-3"
                    width={87}
                    height={47}
                    viewBox="0 0 87 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.8043 20.9254C15.2735 14.3873 5.88029 27.282 3 34.5466V46.2406H85V4.58005C70.8925 -0.868404 70.5398 8.66639 60.8409 19.5633C51.1419 30.4602 47.9677 29.0981 29.8043 20.9254Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M3 35.2468C5.88029 27.9822 15.2735 15.0875 29.8043 21.6257C47.9677 29.7984 51.1419 31.1605 60.8409 20.2636C70.5398 9.36665 70.8925 -0.168147 85 5.28031"
                      stroke="#37D159"
                      strokeWidth={6}
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1={44}
                        y1="-36.4332"
                        x2={44}
                        y2="45.9686"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#37D159" />
                        <stop offset={1} stopColor="#37D159" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="fs-22 text-success mr-2">7%</span>
                  <svg
                    width={12}
                    height={6}
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 6L6 2.62268e-07L12 6" fill="#37D159" />
                  </svg>
                </div>
              </div>
              {/* <div id='chartTimeline' /> */}
              <ChartTimeLine />
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-xxl-8">
          <div className="row">
            <div className="col-xl-8 col-xxl-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h3 className="fs-20 text-black">Overview</h3>
                  <Dropdown className="dropdown ml-auto">
                    <Dropdown.Toggle
                      variant=""
                      className="btn-link   i-false p-0"
                      data-toggle="dropdown"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item" to="/">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="/">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body">
                  <div className="d-sm-flex flex-wrap  justify-content-around">
                    <div className="d-flex mb-4 align-items-center">
                      <span className="rounded mr-3 bg-primary p-3">
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3458 25.7292H1.35412C0.758283 25.7292 0.270782 25.2417 0.270782 24.6458V9.69583C0.270782 9.42499 0.379116 9.09999 0.595783 8.93749L9.58745 0.541659C9.91245 0.270825 10.3458 0.162492 10.725 0.324992C11.1583 0.541659 11.375 0.920825 11.375 1.35416V24.7C11.375 25.2417 10.8875 25.7292 10.3458 25.7292ZM2.38328 23.6167H9.26245V3.79166L2.38328 10.1833V23.6167Z"
                            fill="white"
                          />
                          <path
                            d="M24.6458 25.7292H10.2916C9.69578 25.7292 9.20828 25.2417 9.20828 24.6458V11.9167C9.20828 11.3208 9.69578 10.8333 10.2916 10.8333H24.6458C25.2416 10.8333 25.7291 11.3208 25.7291 11.9167V24.7C25.7291 25.2417 25.2416 25.7292 24.6458 25.7292ZM11.375 23.6167H23.6166V12.9458H11.375V23.6167Z"
                            fill="white"
                          />
                          <path
                            d="M19.5541 25.7292H15.3833C14.7874 25.7292 14.2999 25.2417 14.2999 24.6458V18.0375C14.2999 17.4417 14.7874 16.9542 15.3833 16.9542H19.5541C20.1499 16.9542 20.6374 17.4417 20.6374 18.0375V24.6458C20.6374 25.2417 20.1499 25.7292 19.5541 25.7292ZM16.4666 23.6167H18.5249V19.1208H16.4666V23.6167Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="fs-14 mb-1">Total Sale</p>
                        <span className="fs-18 text-black font-w700">
                          2,346 Unit
                        </span>
                      </div>
                    </div>
                    <div className="d-flex mb-4 align-items-center">
                      <span className="rounded mr-3 bg-success p-3">
                        <svg
                          width={26}
                          height={26}
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.3458 25.7292H1.35412C0.758283 25.7292 0.270782 25.2417 0.270782 24.6458V9.69583C0.270782 9.42499 0.379116 9.09999 0.595783 8.93749L9.58745 0.541659C9.91245 0.270825 10.3458 0.162492 10.725 0.324992C11.1583 0.541659 11.375 0.920825 11.375 1.35416V24.7C11.375 25.2417 10.8875 25.7292 10.3458 25.7292ZM2.38328 23.6167H9.26245V3.79166L2.38328 10.1833V23.6167Z"
                            fill="white"
                          />
                          <path
                            d="M24.6458 25.7292H10.2916C9.69578 25.7292 9.20828 25.2417 9.20828 24.6458V11.9167C9.20828 11.3208 9.69578 10.8333 10.2916 10.8333H24.6458C25.2416 10.8333 25.7291 11.3208 25.7291 11.9167V24.7C25.7291 25.2417 25.2416 25.7292 24.6458 25.7292ZM11.375 23.6167H23.6166V12.9458H11.375V23.6167Z"
                            fill="white"
                          />
                          <path
                            d="M19.5541 25.7292H15.3833C14.7874 25.7292 14.2999 25.2417 14.2999 24.6458V18.0375C14.2999 17.4417 14.7874 16.9542 15.3833 16.9542H19.5541C20.1499 16.9542 20.6374 17.4417 20.6374 18.0375V24.6458C20.6374 25.2417 20.1499 25.7292 19.5541 25.7292ZM16.4666 23.6167H18.5249V19.1208H16.4666V23.6167Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                      <div>
                        <p className="fs-14 mb-1">Total Rent</p>
                        <span className="fs-18 text-black font-w700">
                          1,252 Unit
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div id='chartBar' /> */}
                  <ChartBar />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-xxl-12">
              <div className="row">
                <div className="col-xl-12 col-xxl-6 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <div id="monocromeChart" />
                      {/* <MonocromeChart /> */}
                      <PieChart />
                      <div className="d-flex flex-wrap mt-3">
                        <span className="text-black font-w600 mr-5 mb-2">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width={20}
                              height={20}
                              rx={8}
                              fill="#FFB067"
                            />
                          </svg>
                          Agent
                        </span>
                        <span className="text-black font-w600 mb-2">
                          <svg
                            className="mr-2"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width={20}
                              height={20}
                              rx={8}
                              fill="#B655E4"
                            />
                          </svg>
                          Customers
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-xxl-6 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <p className="mb-2 d-flex  fs-16 text-black font-w500">
                        Product Viewed
                        <span className="pull-right ml-auto text-dark fs-14">
                          561/days
                        </span>
                      </p>
                      <div className="progress mb-4" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "75%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">75% Complete</span>
                        </div>
                      </div>
                      <p className="mb-2 d-flex  fs-16 text-black font-w500">
                        Product Listed
                        <span className="pull-right ml-auto text-dark fs-14">
                          3,456 Unit
                        </span>
                      </p>
                      <div className="progress mb-3" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "90%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">90% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h3 className="fs-20 text-black">Properties Map Location</h3>
                  <Dropdown className="dropdown ml-auto">
                    <Dropdown.Toggle
                      variant=""
                      className="btn-link   i-false p-0"
                      data-toggle="dropdown"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item" to="/">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="/">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-3">
                      <p className="mb-2 d-flex align-items-center  fs-16 text-black font-w500">
                        Europe
                        <span className="pull-right text-dark fs-14 ml-2">
                          653 Unit
                        </span>
                      </p>
                      <div className="progress mb-4" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "75%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">75% Complete</span>
                        </div>
                      </div>
                      <p className="mb-2 d-flex align-items-center  fs-16 text-black font-w500">
                        Asia
                        <span className="pull-right text-dark fs-14 ml-2">
                          653 Unit
                        </span>
                      </p>
                      <div className="progress mb-4" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "100%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">100% Complete</span>
                        </div>
                      </div>
                      <p className="mb-2 d-flex align-items-center  fs-16 text-black font-w500">
                        Africa
                        <span className="pull-right text-dark fs-14 ml-2">
                          653 Unit
                        </span>
                      </p>
                      <div className="progress mb-4" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "75%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">75% Complete</span>
                        </div>
                      </div>
                      <p className="mb-2 d-flex align-items-center  fs-16 text-black font-w500">
                        Australia
                        <span className="pull-right text-dark fs-14 ml-2">
                          653 Unit
                        </span>
                      </p>
                      <div className="progress mb-4" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "50%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">50% Complete</span>
                        </div>
                      </div>
                      <p className="mb-2 d-flex align-items-center  fs-16 text-black font-w500">
                        America
                        <span className="pull-right text-dark fs-14 ml-2">
                          653 Unit
                        </span>
                      </p>
                      <div className="progress mb-4" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "70%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">70% Complete</span>
                        </div>
                      </div>
                      <p className="mb-2 d-flex align-items-center  fs-16 text-black font-w500">
                        USA
                        <span className="pull-right text-dark fs-14 ml-2">
                          653 Unit
                        </span>
                      </p>
                      <div className="progress mb-4" style={{ height: 10 }}>
                        <div
                          className="progress-bar bg-primary progress-animated"
                          style={{ width: "40%", height: 10 }}
                          role="progressbar"
                        >
                          <span className="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9">
                      {/* <div id="world-map" /> */}
                      <div className="home-map">
                        <SVGMap map={World} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-xxl-4">
          <div className="row">
            <div className="col-xl-12 col-lg-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h3 className="fs-20 text-black">Customer Review</h3>
                  <Dropdown className="dropdown ml-auto">
                    <Dropdown.Toggle
                      variant=""
                      className="btn-link   i-false p-0"
                      data-toggle="dropdown"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item" to="/">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="/">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body pb-0">
                  <div className="pb-3 border-bottom mb-3">
                    <div className="d-flex mb-3 flex-wrap align-items-end">
                      <img
                        className="rounded mr-3"
                        src={customers1}
                        width={58}
                        alt=""
                      />
                      <div>
                        <h6 className="fs-16 text-black font-w600">John Doe</h6>
                        <div className="star-icons">
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                        </div>
                      </div>
                      <span className="fs-14 ml-auto">5m ago</span>
                    </div>
                    <p className="fs-14 mb-0">
                      Friendly service Josh, Lunar and everyone at Just Property
                      in Hastings deserved a big Thank You from us for moving us
                      from Jakarta to Medan during the lockdown.
                    </p>
                  </div>
                  <div className="pb-3 border-bottom mb-3">
                    <div className="d-flex mb-3 flex-wrap align-items-end">
                      <img
                        className="rounded mr-3"
                        src={customers2}
                        width={58}
                        alt=""
                      />
                      <div>
                        <h6 className="fs-16 text-black font-w600">
                          Amelia Tuner
                        </h6>
                        <div className="star-icons">
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                        </div>
                      </div>
                      <span className="fs-14 ml-auto">10h ago</span>
                    </div>
                    <p className="fs-14 mb-0">
                      I viewed a number of properties with Just Property and
                      found them to be professional, efficient, patient,
                      courteous and helpful every time.
                    </p>
                  </div>
                  <div className="pb-3">
                    <div className="d-flex mb-3 flex-wrap align-items-end">
                      <img
                        className="rounded mr-3"
                        src={customers3}
                        width={58}
                        alt=""
                      />
                      <div>
                        <h6 className="fs-16 text-black font-w600">
                          Jessica Humb
                        </h6>
                        <div className="star-icons">
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                          <i className="las la-star" />
                        </div>
                      </div>
                      <span className="fs-14 ml-auto">2d ago</span>
                    </div>
                    <p className="fs-14 mb-0">
                      Dealing with Syamsudin and Bakri was a joy. I got in touch
                      with Just Property after seeing a couple of properties
                      that caught my eye. Both Syamsudin and Bakri strive to
                      deliver a professional service and surpassed my
                      expectations - they were not only helpful but extremely
                      approachable and not at all bumptious...
                    </p>
                  </div>
                </div>
                <div className="card-footer border-0 p-0">
                  <Link
                    to="/review"
                    className="btn d-block btn-primary rounded"
                  >
                    See More Reviews
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h3 className="fs-20 text-black">Recent Property</h3>
                  <Dropdown className="dropdown ml-auto">
                    <Dropdown.Toggle
                      variant=""
                      className="btn-link   i-false p-0"
                      data-toggle="dropdown"
                    >
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <circle fill="#000000" cx={5} cy={12} r={2} />
                          <circle fill="#000000" cx={12} cy={12} r={2} />
                          <circle fill="#000000" cx={19} cy={12} r={2} />
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item" to="/">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="/">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body">
                  <div className="testimonial-one owl-carousel">
                    <PropertySlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
