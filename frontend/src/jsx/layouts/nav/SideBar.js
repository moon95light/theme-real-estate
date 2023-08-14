/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";

//import icon1 from "../../../images/icon1.png";

import { withTranslation  } from 'react-i18next';

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);
  }
  state = {
    loveEmoji: false,
  };
  render() {
    const { t } = this.props;
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let dashBoard = [
      "",
      "analytics",
      "order-list",
      "customer-list",
      "review",
      "property-details",
      "task",
    ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
     
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",

      ],
      redux = [
        "todo",
        "form-redux",
        "form-redux-wizard",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li>
              <Link className="" to="/dashboard" onClick={() => this.props.onClick()}>
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">{t('bdashboard')}</span>
              </Link>
            </li>
            <li className={`${dashBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="/dashboard" onClick={() => this.props.onClick()}>
                <i className="flaticon-381-layer-1"></i>
                <span className="nav-text">{t('Rentals')}</span>
              </Link>
              <ul >

                <li>
                  <Link className={`${path === "analytics" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-properties">
                    {t('Properties')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "review" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-rentroll" >
                    {t('rentroll')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "order-list" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-tenants">
                    {t('btenants')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "customer-list" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-rentalowners"
                  >
                    {t('brentalowners')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "property-details" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-outstandingbalance">
                    {t('boutstandingbalance')}
                  </Link>
                </li>
              
              </ul>
            </li>
            <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-television"></i>
                <span className="nav-text">{t('bleasing')}</span>
              </Link>
              <ul >
                <li>
                  <Link className={`${path === "app-profile" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-listings">{t('blistings')}</Link>
                </li>
                <li>
                  <Link className={`${path === "post-details" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-applicants">{t('bapplicants')}</Link>
                </li>
                <li>
                  <Link className={`${path === "app-calender" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-draftleases">
                    {t('bdraftlease')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "app-calender" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-reaserenewals">
                    {t('bleaserenewals')}
                  </Link>
                </li>
               
              </ul>
            </li>
            <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-controls-3"></i>
                <span className="nav-text">{t('bacounting')}</span>
              </Link>
              <ul >
                <li>
                  <Link
                    className={`${path === "chart-rechart" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-financials">
                    {t('bfinincial')}
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "chart-chartjs" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-generalledger">
                    {t('bgeneralledger')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-chartist" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-banking">
                    {t('bbanking')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-sparkline" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-bills">
                    {t('bbills')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-recurtrans" >
                    {t('brecurringtransaction')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-EFT" >
                    {t('beftapprovals')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-budgets" >
                    {t('bbudget')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-chart" >
                  {t('bchart')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-companyfinancials" >
                  {t('company')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "chart-apexchart" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-tax" >
                    1099 {t('taxfiling')}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${plugins.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">{t('bmaintenance')}</span>
              </Link>
              <ul >
                <li>
                  <Link className={`${path === "uc-select2" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-vendors">{t('bvendors')}</Link>
                </li>
                <li>
                  <Link className={`${path === "uc-nestable" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-workorders">{t('workoders')}</Link>
                </li>
                <li>
                  <Link
                    className={`${path === "uc-noui-slider" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-propertyinsp">{t('bpropertyinspections')}
                  </Link>
                </li>
               
              </ul>
            </li>
            <li className={`${redux.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-book"></i><span className="nav-text">{t('btasks')}</span>
              </Link>
              <ul>
                <li><Link className={`${path === "todo" ? "mm-active" : ""}`} to="/an-inrequests">{t('bincomingrequest')}</Link></li>
                <li><Link className={`${path === "form-redux" ? "mm-active" : ""}`} to="/an-mytasks">{t('bmytasks')}</Link></li>
                <li><Link className={`${path === "form-redux" ? "mm-active" : ""}`} to="/an-alltasks">{t('balltasks')}</Link></li>
                <li><Link className={`${path === "form-redux-wizard" ? "mm-active" : ""}`} to="/an-rectasks">{t('recurringtasks')}</Link></li>
              </ul>
            </li>
            <li className={`${bootstrap.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" to="#" >
                <i className="flaticon-381-internet"></i>
                <span className="nav-text">{t('bcommunication')}</span>
              </Link>
              <ul >
                <li>
                  <Link className={`${path === "ui-accordion" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-emails">
                  {t('emails')}
                  </Link>
                </li>
                <li>
                  <Link className={`${path === "ui-alert" ? "mm-active" : ""}`} onClick={() => this.props.onClick()} to="/an-textmessages" >
                    {t('textmessage')}
                  </Link>
                </li>
                
              </ul>
            </li>
            
          </MM>
          <div className="copyright">
            <p className="fs-14 font-w200">
              <strong className="font-w400">{t('realesteateownerdashboard')}</strong> ©{t('allrights')}
              {t('breversed')}
            </p>
            <p>
              {t('bmadewith')}{" "}
              <span
                className={`${this.state.loveEmoji ? "heart heart-blast" : "heart"
                  }`}
                onClick={() =>
                  this.setState({ loveEmoji: !this.state.loveEmoji })
                }
              ></span>{" "}
              {t('by')} DexignZone
            </p>
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default withTranslation()(SideBar);
