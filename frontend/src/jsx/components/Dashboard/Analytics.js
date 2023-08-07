import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import AnalyticsDonutChart from "../Omah/Analytics/DonutChart";
// Map
import World from "@svg-maps/world";
import { SVGMap } from "react-svg-map";

// Apex Chart
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import WidgetChart1 from "../Omah/Analytics/WidgetChart1";
import WidgetChart2 from "../Omah/Analytics/WidgetChart2";
const ChartBar1 = loadable(() =>
  pMinDelay(import("../Omah/Analytics/ChartBar1"), 500)
);
const ChartBar2 = loadable(() =>
  pMinDelay(import("../Omah/Analytics/ChartBar2"), 500)
);
const ChartTimeLine = loadable(() =>
  pMinDelay(import("../Omah/Analytics/ChartTimeline"), 500)
);
const RedialBar = loadable(() =>
  pMinDelay(import("../Omah/Analytics/RadialBar"), 500)
);

function Analytics() {
  return (
    <>
      <div className="form-head page-titles d-flex  align-items-center">
        <div className="mr-auto  d-lg-block">
          <h2 className="text-black font-w600">Analytics</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to="/analytics">Property</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/analytics">Analytics</Link>
            </li>
          </ol>
        </div>
        <Link to="/analytics" className="btn btn-primary rounded light mr-3">
          Refresh
        </Link>
        <Link to="/analytics" className="btn btn-primary rounded">
          <i className="flaticon-381-settings-2 mr-0" />
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header align-items-center border-0 pb-0">
              <h3 className="fs-20 text-black">Rent Statistic</h3>
              <Link className="btn btn-outline-primary rounded" to="/analytics">
                Download CSV
              </Link>
            </div>
            <div className="card-body pb-0 pt-0">
              <div className="d-flex align-items-center mb-3">
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
                  <span className="fs-18 text-black font-w700">1,252 Unit</span>
                </div>
              </div>
              {/* <div id='chartBar' /> */}
              <ChartBar1 />
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-header align-items-center border-0 pb-0">
              <h3 className="fs-20 text-black">Sales Statistic</h3>
              <Link className="btn btn-outline-primary rounded" to="/analytics">
                Download CSV
              </Link>
            </div>
            <div className="card-body pb-0 pt-0">
              <div className="d-flex align-items-center mb-3">
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
                  <span className="fs-18 text-black font-w700">2,346 Unit</span>
                </div>
              </div>
              {/* <div id='chartBar2' /> */}
              <ChartBar2 />
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h3 className="fs-20 text-black">Total Revenue</h3>
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
                  <Dropdown.Item className="dropdown-item" to="/analytics">
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" to="/analytics">
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
        <div className="col-xl-6 col-xxl-12">
          <div className="row">
            <div className="col-sm-6">
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
                      <AnalyticsDonutChart
                        value={71}
                        backgroundColor="#3C4CB8"
                      />
                      <small className="text-primary">71%</small>
                      <span className="circle bgl-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
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
                      <AnalyticsDonutChart
                        value={90}
                        backgroundColor="#37D15A"
                      />
                      <small className="text-success">90%</small>
                      <span className="circle bgl-success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header align-items-center border-0 pb-0">
                  <span className="fs-36 text-black pr-3 d-flex align-items-center font-w600 mr-auto">
                    34%
                    <svg
                      className="ml-1"
                      width={14}
                      height={8}
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.90735e-06 0.499999L7 7.5L14 0.5"
                        fill="#FF6746"
                      />
                    </svg>
                  </span>
                  <span className="fs-18 text-black">Target This Month</span>
                </div>
                <div className="card-body p-0">
                  {/* <canvas id="widgetChart1" className="max-h80" /> */}
                  <WidgetChart1 />
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-header align-items-center border-0 pb-0">
                  <span className="fs-36 text-black font-w600 mr-auto">
                    4%
                    <svg
                      className="ml-1"
                      width={14}
                      height={8}
                      viewBox="0 0 14 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.90735e-06 7.5L7 0.499999L14 7.5"
                        fill="#37D159"
                      />
                    </svg>
                  </span>
                  <span className="fs-18 text-black">Customers</span>
                </div>
                <div className="card-body p-0">
                  {/* <canvas id="widgetChart2" className="max-h80" /> */}
                  <WidgetChart2 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="row">
            <div className="col-xl-12 col-sm-6">
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
                      className="progress-bar bg-secondary progress-animated"
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
                      className="progress-bar bg-secondary progress-animated"
                      style={{ width: "90%", height: 10 }}
                      role="progressbar"
                    >
                      <span className="sr-only">90% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-sm-6">
              <div className="card">
                <div className="card-body">
                  {/* <div id="chartratio" /> */}
                  <RedialBar />
                  <div className="d-flex mt-3">
                    <span className="text-black font-w600 mr-5">
                      <svg
                        className="mr-2"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={20} rx={8} fill="#3B4CB8" />
                      </svg>
                      Usage
                    </span>
                    <span className="text-black font-w600">
                      <svg
                        className="mr-2"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width={20} height={20} rx={8} fill="#B655E4" />
                      </svg>
                      Insight
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9">
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
                  <Dropdown.Item className="dropdown-item" to="/analytics">
                    Edit
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item" to="/analytics">
                    Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="card-body" style={{ minHeight: "400px" }}>
              <div className="row">
                <div className="col-lg-3 col-md-4">
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
                    South America
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
                <div className="col-lg-9 col-md-8">
                  {/* <div id="world-map" /> */}
                  <div className="analytics-map">
                    <SVGMap map={World} />
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

export default Analytics;
