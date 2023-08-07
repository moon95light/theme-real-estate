import React from "react";
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";

//** Import Image */
import customers04 from "../../../images/customers/4.jpg";
import customers03 from "../../../images/customers/3.jpg";
import customers02 from "../../../images/customers/2.jpg";
import customers05 from "../../../images/customers/5.jpg";

function Reviews() {
  return (
    <>
      <div className="form-head page-titles d-flex  align-items-center">
        <div className="mr-auto  d-lg-block">
          <h2 className="text-black font-w600">Reviews</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to="/review">Customer</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/review">Reviews</Link>
            </li>
          </ol>
        </div>
        <Link to="#" className="btn btn-primary rounded light mr-3">
          Refresh
        </Link>
        <Link to="#" className="btn btn-primary rounded">
          <i className="flaticon-381-settings-2 mr-0" />
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <Tab.Container defaultActiveKey="navpills-1">
            <Nav className="nav nav-pills review-tab" variant="" as="ul">
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-1">All Review</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-2">Published</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="navpills-3">Deleted</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="tab-content pt-4 bg-white">
              <Tab.Pane eventKey="navpills-1">
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers04}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Robert Patilson
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Friendly service Josh, Lunar and everyone at Just
                        Property in Hastings deserved a big Thank You from us
                        for moving us from Jakarta to Medan during the lockdown.
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers03}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Peter Parkur
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers02}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Emilia Sigh
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers04}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Robert Patilson
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Friendly service Josh, Lunar and everyone at Just
                        Property in Hastings deserved a big Thank You from us
                        for moving us from Jakarta to Medan during the lockdown.
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers03}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Peter Parkur
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers02}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Emilia Sigh
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="navpills-2">
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers03}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Peter Parkur
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers02}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Emilia Sigh
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers05}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Peter Parkur
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="navpills-3">
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers02}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Emilia Sigh
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Dealing with Syamsudin and Bakri was a joy. I got in
                        touch with Just Property after seeing a couple of
                        properties that caught my eye. Both Syamsudin and Bakri
                        strive to deliver a professional service and surpassed
                        my expectations - they were not only help..
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card review-table">
                  <div className="media align-items-center">
                    <img
                      className="mr-3 img-fluid rounded"
                      width={90}
                      src={customers04}
                      alt="DexignZone"
                    />
                    <div className="media-body d-lg-flex d-block row align-items-center">
                      <div className="col-xl-4 col-xxl-5 col-lg-12 review-bx">
                        <span className="text-primary d-block">#C01234</span>
                        <h3 className="fs-20 text-black font-w600 mb-1">
                          Robert Patilson
                        </h3>
                        <span className="d-block mb-xl-0 mb-3">
                          Join on 26/04/2020, 12:42 AM
                        </span>
                      </div>
                      <div className="col-xl-7 col-xxl-7 col-lg-12 text-dark mb-xl-0 mb-2">
                        Friendly service Josh, Lunar and everyone at Just
                        Property in Hastings deserved a big Thank You from us
                        for moving us from Jakarta to Medan during the lockdown.
                      </div>
                    </div>
                    <div className="media-footer d-sm-flex d-block align-items-center">
                      <div className="mr-5 text-xl-center text-left  ml-xl-3 mb-sm-0 mb-3 ml-0">
                        <span className="bgl-primary text-primary rounded p-1 pl-2 pr-2 font-w600 fs-12 d-inline-block mb-2 mb-sm-3">
                          EXCELENT
                        </span>
                        <span className="star-review d-block">
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-primary" />
                          <i className="fa fa-star text-gray" />
                        </span>
                      </div>
                      <div className="edit ml-auto">
                        <Link
                          to="/review"
                          className="btn btn-outline-success rounded  mr-2"
                        >
                          Approve
                        </Link>
                        <Link
                          to="/review"
                          className="btn btn-outline-danger rounded"
                        >
                          Reject
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </>
  );
}

export default Reviews;
