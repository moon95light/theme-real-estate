import React from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";

//Images
import cardpng from "../../../images/card/4.png";

import { Dropdown } from "react-bootstrap";

import BarChart8 from "../charts/Chartjs/bar8";
import RevenueChart from "../charts/Chartjs/RevenueChart";
import ChartDoughnut2 from "../charts/Chartjs/donught2";
import RealTime from "../charts/Chartjs/realtime2";

const ApexPie4 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/Pie4"), 1000)
);

const Events = () => {
   return (
      <>
         <div className="page-titles">
            <ol className="breadcrumb">
               <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
               </li>
               <li className="breadcrumb-item active">
                  <Link to="/events">Events</Link>
               </li>
            </ol>
         </div>
         <div className="row">
            <div className="col-xl-3 col-xxl-5 col-lg-5">
               <div className="row">
                  <div className="col-md-6 col-lg-12">
                     <div className="card">
                        <div className="card-body p-4">
                           <div className="media align-items-center">
                              <span className="mr-3">
                                 <ChartDoughnut2
                                    backgroundColor="#2130B8"
                                    backgroundColor2="#E8EAF8"
                                    value={60}
                                    cutoutPercentage={50}
                                    height={90}
                                    width={90}
                                 />
                              </span>
                              <div className="media-body">
                                 <div className="d-flex align-items-center">
                                    <h2 className="mb-0 mr-3 text-black font-w600">
                                       25 Left
                                    </h2>
                                 </div>
                                 <p className="mb-0">Available Ticket</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-12">
                     <div className="card overflow-hidden">
                        <div className="card-header border-0 pb-0">
                           <div>
                              <h3 className="mb-0 text-black font-w600">
                                 $124,136
                              </h3>
                              <p className="mb-1">Revenue</p>
                           </div>
                        </div>
                        <div className="card-body p-0  mt-widget">
                           <RevenueChart />
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-12">
                     <div className="card overflow-hidden">
                        <div className="card-header border-0 pb-0">
                           <div>
                              <h3 className="mb-0 text-black font-w600">
                                 639 Pcs
                              </h3>
                              <p className="mb-1">Ticket Ordered</p>
                           </div>
                        </div>
                        <div className="card-body p-0">
                           <div className="col-7 px-0 offset-5 mt-widget">
                              <BarChart8 />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-12">
                     <div className="card overflow-hidden">
                        <div className="card-header border-0 pb-2">
                           <div>
                              <h3 className="mb-0 text-black font-w600">2%</h3>
                              <p className="mb-1">Ticket Refunded</p>
                           </div>
                        </div>
                        <div className="card-body p-0">
                           <RealTime
                              height={30}
                              backgroundColor={"rgba(255, 38, 38, .04)"}
                              borderColor={"rgb(255, 38, 38)"}
                           />
                        </div>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <h4 className="card-title">Sales Summary</h4>
                           <Dropdown className="btn-group">
                              <Dropdown.Toggle
                                 className="btn btn-light btn-sm tp-btn dropdown-toggle"
                                 type="button"
                                 data-toggle="dropdown"
                                 aria-expanded="false"
                              >
                                 This Week
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-right">
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="/events"
                                 >
                                    This Week
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    className="dropdown-item"
                                    to="/events"
                                 >
                                    Next Week
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="card-body pt-2">
                           <div className="border p-3 d-flex justify-content-between fs-14 rounded-lg mb-4">
                              <span className="text-black">Tuesday</span>
                              <span className="text-black">215,523 pcs</span>
                           </div>
                           <ApexPie4 />
                           <div className="row mx-0">
                              <div className="col-6 px-0 d-flex align-items-center mb-3">
                                 <div
                                    className="bg-primary rounded mr-3 d-block"
                                    style={{ width: 25, height: 25 }}
                                 />
                                 <div>
                                    <h5 className="mb-1 text-black">VIP</h5>
                                    <span>30%</span>
                                 </div>
                              </div>
                              <div className="col-6 px-0 d-flex align-items-center mb-3">
                                 <div
                                    className="bg-success rounded mr-3 d-block"
                                    style={{ width: 25, height: 25 }}
                                 />
                                 <div>
                                    <h5 className="mb-1 text-black">
                                       Exclusive
                                    </h5>
                                    <span>24%</span>
                                 </div>
                              </div>
                              <div className="col-6 px-0 d-flex align-items-center">
                                 <div
                                    className="bg-warning rounded mr-3 d-block"
                                    style={{ width: 25, height: 25 }}
                                 />
                                 <div>
                                    <h5 className="mb-1 text-black">Reguler</h5>
                                    <span>30%</span>
                                 </div>
                              </div>
                              <div className="col-6 px-0 d-flex align-items-center">
                                 <div
                                    className="bg-secondary rounded mr-3 d-block"
                                    style={{ width: 25, height: 25 }}
                                 />
                                 <div>
                                    <h5 className="mb-1 text-black">
                                       Economic
                                    </h5>
                                    <span>2%</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-9 col-xxl-7 col-lg-7">
               <div className="row">
                  <div className="col-xl-12 ">
                     <div className="card event-bx">
                        <div className="card-media">
                           <img className="rounded" src={cardpng} alt="" />
                           <div className="overlay-bx row p-3 p-xl-5 ">
                              <div className="col-lg-6 p-0">
                                 <h2 className="text-white mb-4">
                                    Beautiful Fireworks Show In The New Year
                                    Night 2020.
                                 </h2>
                                 <Link
                                    className="btn btn-primary rounded"
                                    to="/events"
                                 >
                                    <svg
                                       className="mr-3"
                                       width={16}
                                       height={16}
                                       viewBox="0 0 16 16"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M0.648682 9.33093V14.3327C0.648682 15.2524 1.39695 16 2.31594 16H14.3203C15.2399 16 15.9875 15.2524 15.9875 14.3327V9.33093H0.648682Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M7.89524 1.52481L5.39966 2.11702L7.49041 5.19347L10.1934 4.5786L7.89524 1.52481Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M4.70626 2.28177L2.0166 2.91931L4.08535 5.9671L6.79232 5.35153L4.70626 2.28177Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M15.9768 2.90997L15.4092 0.757192C15.2785 0.23366 14.7423 -0.0957707 14.2135 0.0249289L11.9727 0.55712L14.0988 3.69159L15.728 3.3208C15.8167 3.30079 15.8927 3.24543 15.9394 3.16809C15.9861 3.09075 15.9995 2.998 15.9768 2.90997Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M11.2785 0.721863L8.60352 1.35675L10.9057 4.41719L13.4006 3.84964L11.2785 0.721863Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M4.00918 5.99707L2.94214 8.66404H5.55843L6.62547 5.99707H4.00918Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M7.34389 5.99707L6.27686 8.66404H8.89311L9.96018 5.99707H7.34389Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M15.6541 5.99707H14.0128L12.9458 8.66469H15.9875V6.3305C15.9875 6.14578 15.8388 5.99707 15.6541 5.99707Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M10.6784 5.99707L9.61133 8.66404H12.227L13.2947 5.99707H10.6784Z"
                                          fill="white"
                                       />
                                       <path
                                          d="M1.32296 3.08472L0.779418 3.21342C0.514667 3.27344 0.290587 3.43416 0.148536 3.66493C0.00648451 3.89635 -0.0355306 4.16845 0.0304931 4.43186L0.648715 6.8754V8.66404H2.22394L3.22495 6.16248L3.38767 6.12581L1.32296 3.08472Z"
                                          fill="white"
                                       />
                                    </svg>
                                    Fireworks Show
                                 </Link>
                              </div>
                              <div className="col-lg-6 p-0 d-flex align-items-end justify-content-end">
                                 <Dropdown className="dropdown ml-3">
                                    <Dropdown.Toggle
                                       type="button"
                                       className="btn rounded border-white p-2 i-false"
                                       variant=""
                                    >
                                       <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                             stroke="white"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                          <path
                                             d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                             stroke="white"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                          <path
                                             d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                             stroke="white"
                                             strokeWidth={2}
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       </svg>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          to="/events"
                                       >
                                          Edit
                                       </Dropdown.Item>
                                       <Dropdown.Item
                                          className="dropdown-item"
                                          to="/events"
                                       >
                                          Delete
                                       </Dropdown.Item>
                                    </Dropdown.Menu>
                                 </Dropdown>
                              </div>
                           </div>
                        </div>
                        <div className="card-body">
                           <div className="row align-items-center">
                              <div className="col-xl-8 col-xxl-12">
                                 <div className="border-right pr-5">
                                    <h3 className="text-black">
                                       Event Description
                                    </h3>
                                    <p>
                                       Lorem Ipsum is simply dummy text of the
                                       printing and typesetting industry. Lorem
                                       Ipsum has been the industry's standard
                                       dummy text ever since the 1500s, when an
                                       unknown printer took a galley of type and
                                       scrambled it to make a type specimen
                                       book. text ever since the 1500s, when an
                                       unknown printer took a galley of type and
                                       scrambled it to make a type specimen
                                       book.
                                    </p>
                                    <p>
                                       Lorem Ipsum is simply dummy text of the
                                       printing and typesetting industry. Lorem
                                       Ipsum has been the industry's standard
                                       dummy text ever since the 1500s, when an
                                       unknown printer took a galley of type and
                                       scrambled it book.
                                    </p>
                                 </div>
                              </div>
                              <div className="col-xl-4 col-xxl-12">
                                 <div className="media mb-4 align-items-center">
                                    <div className="mr-3">
                                       <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 14 25"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <path
                                             d="M6.07438 25H7.95454V22.6464C11.8595 22.302 14 19.6039 14 16.8197C14 12.7727 10.8471 11.9977 7.95454 11.3088V5.10907C9.34297 5.4535 10.1529 6.5155 10.2686 7.66361H13.7975C13.5372 4.42021 11.281 2.61194 7.95454 2.32492V0H6.07438V2.35362C2.4876 2.66935 0 4.87945 0 8.09415C0 12.1412 3.18182 12.9449 6.07438 13.6625V19.977C4.45455 19.69 3.64463 18.628 3.52893 17.1929H0C0 20.4363 2.54545 22.3594 6.07438 22.6751V25ZM10.6736 16.992C10.6736 18.4845 9.69008 19.69 7.95454 19.977V14.1504C9.51653 14.6383 10.6736 15.3559 10.6736 16.992ZM3.35537 7.92193C3.35537 6.17107 4.48347 5.22388 6.07438 5.02296V10.8209C4.5124 10.333 3.35537 9.58668 3.35537 7.92193Z"
                                             fill="#2130B8"
                                          />
                                       </svg>
                                    </div>
                                    <div className="media-body">
                                       <p className="mb-1">Ticket Price</p>
                                       <h4 className="mb-0 text-black">
                                          $124,00
                                       </h4>
                                    </div>
                                 </div>
                                 <div className="media mb-4 align-items-center">
                                    <div className="mr-3">
                                       <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <g clipPath>
                                             <path
                                                d="M21 3H20C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.31607 17.7956 0 17 0C16.2044 0 15.4413 0.31607 14.8787 0.87868C14.3161 1.44129 14 2.20435 14 3H10C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 4.47035e-08 7 4.47035e-08C6.20435 4.47035e-08 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3H3C2.20435 3 1.44129 3.31607 0.87868 3.87868C0.31607 4.44129 0 5.20435 0 6L0 21C0 21.7956 0.31607 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H21C21.7956 24 22.5587 23.6839 23.1213 23.1213C23.6839 22.5587 24 21.7956 24 21V6C24 5.20435 23.6839 4.44129 23.1213 3.87868C22.5587 3.31607 21.7956 3 21 3ZM3 5H4C4 5.79565 4.31607 6.55871 4.87868 7.12132C5.44129 7.68393 6.20435 8 7 8C7.26522 8 7.51957 7.89464 7.70711 7.70711C7.89464 7.51957 8 7.26522 8 7C8 6.73478 7.89464 6.48043 7.70711 6.29289C7.51957 6.10536 7.26522 6 7 6C6.73478 6 6.48043 5.89464 6.29289 5.70711C6.10536 5.51957 6 5.26522 6 5V3C6 2.73478 6.10536 2.48043 6.29289 2.29289C6.48043 2.10536 6.73478 2 7 2C7.26522 2 7.51957 2.10536 7.70711 2.29289C7.89464 2.48043 8 2.73478 8 3V4C8 4.26522 8.10536 4.51957 8.29289 4.70711C8.48043 4.89464 8.73478 5 9 5H14C14 5.79565 14.3161 6.55871 14.8787 7.12132C15.4413 7.68393 16.2044 8 17 8C17.2652 8 17.5196 7.89464 17.7071 7.70711C17.8946 7.51957 18 7.26522 18 7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6C16.7348 6 16.4804 5.89464 16.2929 5.70711C16.1054 5.51957 16 5.26522 16 5V3C16 2.73478 16.1054 2.48043 16.2929 2.29289C16.4804 2.10536 16.7348 2 17 2C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V4C18 4.26522 18.1054 4.51957 18.2929 4.70711C18.4804 4.89464 18.7348 5 19 5H21C21.2652 5 21.5196 5.10536 21.7071 5.29289C21.8946 5.48043 22 5.73478 22 6V10H2V6C2 5.73478 2.10536 5.48043 2.29289 5.29289C2.48043 5.10536 2.73478 5 3 5ZM21 22H3C2.73478 22 2.48043 21.8946 2.29289 21.7071C2.10536 21.5196 2 21.2652 2 21V12H22V21C22 21.2652 21.8946 21.5196 21.7071 21.7071C21.5196 21.8946 21.2652 22 21 22Z"
                                                fill="#2130B8"
                                             />
                                             <path
                                                d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z"
                                                fill="#2130B8"
                                             />
                                             <path
                                                d="M18 16C18.5523 16 19 15.5523 19 15C19 14.4477 18.5523 14 18 14C17.4477 14 17 14.4477 17 15C17 15.5523 17.4477 16 18 16Z"
                                                fill="#2130B8"
                                             />
                                             <path
                                                d="M6 16C6.55228 16 7 15.5523 7 15C7 14.4477 6.55228 14 6 14C5.44771 14 5 14.4477 5 15C5 15.5523 5.44771 16 6 16Z"
                                                fill="#2130B8"
                                             />
                                             <path
                                                d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                                fill="#2130B8"
                                             />
                                             <path
                                                d="M18 20C18.5523 20 19 19.5523 19 19C19 18.4477 18.5523 18 18 18C17.4477 18 17 18.4477 17 19C17 19.5523 17.4477 20 18 20Z"
                                                fill="#2130B8"
                                             />
                                             <path
                                                d="M6 20C6.55228 20 7 19.5523 7 19C7 18.4477 6.55228 18 6 18C5.44771 18 5 18.4477 5 19C5 19.5523 5.44771 20 6 20Z"
                                                fill="#2130B8"
                                             />
                                          </g>
                                          <defs>
                                             <clipPath>
                                                <rect
                                                   width={24}
                                                   height={24}
                                                   fill="white"
                                                />
                                             </clipPath>
                                          </defs>
                                       </svg>
                                    </div>
                                    <div className="media-body">
                                       <p className="mb-1">Date</p>
                                       <h4 className="mb-0 text-black">
                                          Sunday,12 june 2020
                                       </h4>
                                    </div>
                                 </div>
                                 <div className="media mb-4 align-items-center">
                                    <div className="mr-3">
                                       <svg
                                          width={24}
                                          height={24}
                                          viewBox="0 0 32 32"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                       >
                                          <g clipPath>
                                             <path
                                                d="M27.5711 13.4286C27.5711 22.4286 15.9997 30.1428 15.9997 30.1428C15.9997 30.1428 4.42822 22.4286 4.42822 13.4286C4.42822 10.3596 5.64735 7.41638 7.81742 5.24632C9.98748 3.07625 12.9307 1.85712 15.9997 1.85712C19.0686 1.85712 22.0118 3.07625 24.1819 5.24632C26.3519 7.41638 27.5711 10.3596 27.5711 13.4286Z"
                                                stroke="#2130B8"
                                                strokeWidth={3}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                             <path
                                                d="M15.9997 17.2857C18.13 17.2857 19.8569 15.5588 19.8569 13.4286C19.8569 11.2983 18.13 9.57141 15.9997 9.57141C13.8695 9.57141 12.1426 11.2983 12.1426 13.4286C12.1426 15.5588 13.8695 17.2857 15.9997 17.2857Z"
                                                stroke="#2130B8"
                                                strokeWidth={3}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                             />
                                          </g>
                                          <defs>
                                             <clipPath>
                                                <rect
                                                   width="30.8571"
                                                   height="30.8571"
                                                   fill="white"
                                                   transform="translate(0.571289 0.571411)"
                                                />
                                             </clipPath>
                                          </defs>
                                       </svg>
                                    </div>
                                    <div className="media-body">
                                       <p className="mb-1">Location</p>
                                       <h4 className="mb-0 text-black">
                                          Blue Corner St.123566 Franklin
                                          Avenue,London
                                       </h4>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-12">
                     <div className="card bg-transparent shadow-none">
                        <div className="card-header pl-0 border-0">
                           <h4 className="card-title">Recent Sales</h4>
                        </div>
                        <div className="card-body p-0 bg-white rounded shadow">
                           <div className="table-responsive">
                              <table className="table fs-14">
                                 <thead>
                                    <tr>
                                       <th>Order ID</th>
                                       <th>Date</th>
                                       <th>Customer Name</th>
                                       <th>Location</th>
                                       <th>Sold Ticket</th>
                                       <th>Refund</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>#5552351</td>
                                       <td>26 March 2020, 12:42 AM</td>
                                       <td>James WItcwicky</td>
                                       <td>Medan Indonasia</td>
                                       <td>4 pcs</td>
                                       <td className="color-primary">NO</td>
                                    </tr>
                                    <tr>
                                       <td>#5552351</td>
                                       <td>26 March 2020, 12:42 AM</td>
                                       <td>James WItcwicky</td>
                                       <td>Medan Indonasia</td>
                                       <td>4 pcs</td>
                                       <td className="color-primary">NO</td>
                                    </tr>
                                    <tr>
                                       <td>#5552351</td>
                                       <td>26 March 2020, 12:42 AM</td>
                                       <td>James WItcwicky</td>
                                       <td>Medan Indonasia</td>
                                       <td>4 pcs</td>
                                       <td className="color-primary">NO</td>
                                    </tr>
                                    <tr>
                                       <td>#5552351</td>
                                       <td>26 March 2020, 12:42 AM</td>
                                       <td>James WItcwicky</td>
                                       <td>Medan Indonasia</td>
                                       <td>4 pcs</td>
                                       <td className="color-primary">NO</td>
                                    </tr>
                                    <tr>
                                       <td>#5552351</td>
                                       <td>26 March 2020, 12:42 AM</td>
                                       <td>James WItcwicky</td>
                                       <td>Medan Indonasia</td>
                                       <td>4 pcs</td>
                                       <td className="color-primary">NO</td>
                                    </tr>
                                    <tr>
                                       <td>#5552351</td>
                                       <td>26 March 2020, 12:42 AM</td>
                                       <td>James WItcwicky</td>
                                       <td>Medan Indonasia</td>
                                       <td>4 pcs</td>
                                       <td className="color-primary">NO</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Events;
