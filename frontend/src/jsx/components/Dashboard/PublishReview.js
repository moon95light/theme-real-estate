import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import avatar4 from "../../.././images/avatar/4.jpg";
import avatar5 from "../../.././images/avatar/5.jpg";
import avatar6 from "../../.././images/avatar/6.jpg";

const PublishReview = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#publish_review tbody tr")
   );
   const sort = 5;
   const activePag = useRef(0);
   const [test, settest] = useState(0);

   // Active data
   const chageData = (frist, sec) => {
      for (var i = 0; i < data.length; ++i) {
         if (i >= frist && i < sec) {
            data[i].classList.remove("d-none");
         } else {
            data[i].classList.add("d-none");
         }
      }
   };
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#publish_review tbody tr"));
      chackboxFun();
   }, [test]);

   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
   const onClick = (i) => {
      activePag.current = i;
      chageData(activePag.current * sort, (activePag.current + 1) * sort);
      settest(i);
   };
   const chackbox = document.querySelectorAll(".publish_review_checkbox input");
   const motherChackBox = document.querySelector(".publish_review input");
   // console.log(document.querySelectorAll(".publish_review input")[0].checked);
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
      <div className="table-responsive table-hover fs-14">
         <div id="publish_review" className="dataTables_wrapper no-footer">
            <table
               className="table display mb-4 dataTablesCard fs-14 dataTable no-footer"
               id="example4"
               role="grid"
               aria-describedby="example4_info"
            >
               <thead>
                  <tr role="row">
                     <th
                        className="publish_review"
                        tabIndex={0}
                        aria-controls="example4"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label=": activate to sort column descending"
                        style={{ width: 0 }}
                     >
                        <div className="checkbox mr-3 align-self-center">
                           <div className="custom-control custom-checkbox checkbox-info">
                              <input
                                 type="checkbox"
                                 onClick={() => chackboxFun("all")}
                                 className="custom-control-input"
                                 id="customCheckBox01"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox01"
                              />
                           </div>
                        </div>
                     </th>
                     <th
                        style={{ width: 250 }}
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example4"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Customer: activate to sort column ascending"
                     >
                        Customer
                     </th>
                     <th
                        className="d-none d-lg-inline-block sorting"
                        tabIndex={0}
                        aria-controls="example4"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Event NAME: activate to sort column ascending"
                        style={{ width: 0 }}
                     >
                        Event NAME
                     </th>
                     <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example4"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Stars Review: activate to sort column ascending"
                        style={{ width: 0 }}
                     >
                        Stars Review
                     </th>
                     <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="example4"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Action: activate to sort column ascending"
                        style={{ width: 0 }}
                     >
                        Action
                     </th>
                  </tr>
               </thead>
               <tbody>
                  <tr role="row" className="odd">
                     <td className="publish_review_checkbox">
                        <div className="checkbox mr-3 align-self-center">
                           <div className="custom-control custom-checkbox checkbox-info">
                              <input
                                 type="checkbox"
                                 onClick={() => chackboxFun()}
                                 className="custom-control-input"
                                 id="customCheckBox05"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox05"
                              />
                           </div>
                        </div>
                     </td>
                     <td>
                        <div className="media align-items-center">
                           <img
                              className="img-fluid rounded mr-3 d-none d-xl-inline-block"
                              width={70}
                              src={avatar4}
                              alt="DexignZone"
                           />
                           <div className="media-body">
                              <h4 className="text-black font-w600 mb-1 wspace-no">
                                 Glee Smiley
                              </h4>
                              <span>Sunday, 24 July 2020 04:55 PM</span>
                           </div>
                        </div>
                     </td>
                     <td className="d-none d-lg-inline-block">
                        The Story of Danau Toba (Musical Drama)
                     </td>
                     <td>
                        <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-gray" />
                        </span>
                        <p className="mb-0 d-none d-xl-inline-block">
                           Karciz is one of the best vendors we've ever worked
                           with. Thanks for your wonderful, helpful service
                           across the board. It is greatly appreciated!
                        </p>
                     </td>
                     <td>
                        <div className="d-flex">
                           <Link
                              to="/reviews"
                              className="btn btn-primary btn-sm px-4"
                           >
                              Publish
                           </Link>
                           <Link
                              to="/reviews"
                              className="btn btn-danger  btn-sm ml-2 px-4"
                           >
                              Delete
                           </Link>
                        </div>
                     </td>
                  </tr>
                  <tr role="row" className="even">
                     <td className="publish_review_checkbox">
                        <div className="checkbox mr-3 align-self-center">
                           <div className="custom-control custom-checkbox checkbox-info">
                              <input
                                 type="checkbox"
                                 onClick={() => chackboxFun()}
                                 className="custom-control-input"
                                 id="customCheckBox6"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox6"
                              />
                           </div>
                        </div>
                     </td>
                     <td>
                        <div className="media align-items-center">
                           <img
                              className="img-fluid rounded mr-3 d-none d-xl-inline-block"
                              width={70}
                              src={avatar5}
                              alt="DexignZone"
                           />
                           <div className="media-body">
                              <h4 className="text-black font-w600 mb-1 wspace-no">
                                 Louis Jovanny
                              </h4>
                              <span>Sunday, 24 July 2020 04:55 PM</span>
                           </div>
                        </div>
                     </td>
                     <td className="d-none d-lg-inline-block">
                        The Story of Danau Toba (Musical Drama)
                     </td>
                     <td>
                        <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-gray" />
                        </span>
                        <p className="mb-0 d-none d-xl-inline-block">
                           Karciz is one of the best vendors we've ever worked
                           with. Thanks for your wonderful, helpful service
                           across the board. It is greatly appreciated!
                        </p>
                     </td>
                     <td>
                        <div className="d-flex">
                           <Link
                              to="/reviews"
                              className="btn btn-primary btn-sm px-4"
                           >
                              Publish
                           </Link>
                           <Link
                              to="/reviews"
                              className="btn btn-danger  btn-sm ml-2 px-4"
                           >
                              Delete
                           </Link>
                        </div>
                     </td>
                  </tr>
                  <tr role="row" className="odd">
                     <td className="publish_review_checkbox">
                        <div className="checkbox mr-3 align-self-center">
                           <div className="custom-control custom-checkbox checkbox-info">
                              <input
                                 type="checkbox"
                                 onClick={() => chackboxFun()}
                                 className="custom-control-input"
                                 id="customCheckBox0007"
                                 required
                              />
                              <label
                                 className="custom-control-label"
                                 htmlFor="customCheckBox0007"
                              />
                           </div>
                        </div>
                     </td>
                     <td>
                        <div className="media align-items-center">
                           <img
                              className="img-fluid rounded mr-3 d-none d-xl-inline-block"
                              width={70}
                              src={avatar6}
                              alt="DexignZone"
                           />
                           <div className="media-body">
                              <h4 className="text-black font-w600 mb-1 wspace-no">
                                 Cindy Hawkins
                              </h4>
                              <span>Sunday, 24 July 2020 04:55 PM</span>
                           </div>
                        </div>
                     </td>
                     <td className="d-none d-lg-inline-block">
                        The Story of Danau Toba (Musical Drama)
                     </td>
                     <td>
                        <span className="star-review d-inline-block mb-2 fs-16 wspace-no">
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-orange" />{" "}
                           <i className="fa fa-star fs-16 text-gray" />
                        </span>
                        <p className="mb-0 d-none d-xl-inline-block">
                           Karciz is one of the best vendors we've ever worked
                           with. Thanks for your wonderful, helpful service
                           across the board. It is greatly appreciated!
                        </p>
                     </td>
                     <td>
                        <div className="d-flex">
                           <Link
                              to="/reviews"
                              className="btn btn-primary btn-sm px-4"
                           >
                              Publish
                           </Link>
                           <Link
                              to="/reviews"
                              className="btn btn-danger  btn-sm ml-2 px-4"
                           >
                              Delete
                           </Link>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
            <div className="d-sm-flex text-center justify-content-between">
               <div
                  className="dataTables_info"
                  id="example4_info"
                  role="status"
                  aria-live="polite"
               >
                  Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                     ? (activePag.current + 1) * sort
                     : data.length}{" "}
                  of {data.length} entries
               </div>
               <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
               >
                  <Link
                     className="paginate_button previous disabled"
                     to="/reviews"
                     onClick={() =>
                        activePag.current > 0 && onClick(activePag.current - 1)
                     }
                  >
                     Previous
                  </Link>
                  <span>
                     {paggination.map((number, i) => (
                        <Link
                           key={i}
                           to="/reviews"
                           className={`paginate_button  ${
                              activePag.current === i ? "current" : ""
                           } ${i > 0 ? "ml-1" : ""}`}
                           onClick={() => onClick(i)}
                        >
                           {number}
                        </Link>
                     ))}
                  </span>
                  <Link
                     className="paginate_button next"
                     to="/reviews"
                     onClick={() =>
                        activePag.current + 1 < paggination.length &&
                        onClick(activePag.current + 1)
                     }
                  >
                     Next
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PublishReview;
