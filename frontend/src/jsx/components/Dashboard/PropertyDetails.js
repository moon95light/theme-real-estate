import React from "react";
import { Link } from "react-router-dom";

//** Import Image */
import avatar1 from "../../../images/avatar/1.jpg";
import map from "../../../images/map.jpg";
import customers10 from "../../../images/customers/10.jpg";
import customers11 from "../../../images/customers/11.jpg";
import customers12 from "../../../images/customers/12.jpg";
import FrontViewSlider from "../Omah/PropertyDetails/FrontViewSlider";
import ImageGallery from "../Omah/PropertyDetails/ImageGallery";

function PropertyDetails() {
  return (
    <>
      <div className="form-head page-titles d-flex  align-items-center">
        <div className="mr-auto  d-lg-block">
          <h2 className="text-black font-w600">Property Details</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item active">
              <Link to="/property-details">Property</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/property-details">98AB Alexander Court New York</Link>
            </li>
          </ol>
        </div>
        <Link to="/property-details" className="btn btn-danger rounded mr-3">
          Update Info
        </Link>
        <Link
          to="/property-details"
          className="btn btn-primary rounded light mr-3"
        >
          Refresh
        </Link>
        <Link to="/property-details" className="btn btn-primary rounded">
          <i className="flaticon-381-settings-2 mr-0" />
        </Link>
      </div>
      <div className="row">
        <div className="col-xl-3 col-xxl-4">
          <div className="row">
            <div className="col-xl-12">
              <div className="card bg-primary text-center">
                <div className="card-body">
                  <h2 className="fs-30 text-white">SALE</h2>
                  <span className="text-white font-w300">
                    $400.000 - $600.000
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-12">
              <div className="card text-center">
                <div className="card-body">
                  <div className="position-relative mb-3 d-inline-block">
                    <img src={avatar1} alt="" className="rounded" width={140} />
                    <Link to="/app-profile" className="profile-icon">
                      <i className="las la-cog" />
                    </Link>
                  </div>
                  <h4 className="text-black fs-20 font-w600">
                    Samuel Rodriguez
                  </h4>
                  <span className="mb-3 text-black d-block">Agent</span>
                  <p>
                    Midnight Corner St. Suite 600 San Francisco, CADGE 94107
                  </p>
                  <ul className="property-social">
                    <li>
                      <Link to="/property-details">
                        <i className="lab la-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/property-details">
                        <i className="lab la-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="/property-details">
                        <i className="lab la-twitter" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="card-footer border-0 pt-0">
                  <Link
                    to="/property-details"
                    className="btn btn-outline-primary d-block rounded"
                  >
                    <i className="las la-phone scale5 mr-2" />
                    +12 5123 5512 66
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header mb-0 border-0">
                  <h3 className="fs-20 text-black">Property Location</h3>
                </div>
                <div className="card-body pt-0 text-center">
                  <img src={map} alt="" className="mw-100" />
                </div>
                <div className="card-footer border-0 p-0">
                  <Link
                    to="/property-details"
                    className="btn btn-primary d-block rounded"
                  >
                    View in Full Screen
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-6 col-md-6">
              <div className="card">
                <div className="card-header mb-0 border-0 pb-0">
                  <h3 className="fs-20 text-black mb-0">Owner History</h3>
                </div>
                <div className="card-body pt-4">
                  <div className="media mb-3 mb-sm-4">
                    <img
                      src={customers10}
                      alt=""
                      className="rounded mr-3"
                      width={52}
                    />
                    <div className="media-body">
                      <h4 className="fs-16 font-w600 mb-0">
                        <Link to="/review" className="text-black">
                          James Humbly
                        </Link>
                      </h4>
                      <span className="fs-14 d-block mb-2">
                        2 June 2018 - 4 June 2019
                      </span>
                      <div className="star-icons">
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                      </div>
                    </div>
                  </div>
                  <div className="media mb-3 mb-sm-4">
                    <img
                      src={customers11}
                      alt=""
                      className="rounded mr-3"
                      width={52}
                    />
                    <div className="media-body">
                      <h4 className="fs-16 font-w600 mb-0">
                        <Link to="/review" className="text-black">
                          Erico Lee
                        </Link>
                      </h4>
                      <span className="fs-14 d-block mb-2">
                        2 June 2018 - 4 June 2019
                      </span>
                      <div className="star-icons">
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                      </div>
                    </div>
                  </div>
                  <div className="media">
                    <img
                      src={customers12}
                      alt=""
                      className="rounded mr-3"
                      width={52}
                    />
                    <div className="media-body">
                      <h4 className="fs-16 font-w600 mb-0">
                        <Link to="/review" className="text-black">
                          Cindy Samantha
                        </Link>
                      </h4>
                      <span className="fs-14 d-block mb-2">
                        2 June 2018 - 4 June 2019
                      </span>
                      <div className="star-icons">
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                        <i className="las la-star fs-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-xxl-8">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="front-view-slider mb-sm-5 mb-3 owl-carousel">
                    <FrontViewSlider />
                  </div>
                  <div>
                    <Link
                      to="/property-details"
                      className="btn btn-primary rounded mb-4"
                    >
                      Type XYZ
                    </Link>
                    <div className="d-md-flex d-block mb-sm-5 mb-3">
                      <div className="mr-auto mb-md-0 mb-4">
                        <h2 className="font-w600 text-black">
                          98AB Alexander Court, London
                        </h2>
                        <span className="fs-18">
                          <svg
                            width={26}
                            height={26}
                            viewBox="0 0 26 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.9475 4.78947C8.94136 4.78947 7.02346 5.55047 5.61418 6.89569C4.20599 8.23987 3.42116 10.056 3.42116 11.9426C3.42116 14.7033 5.29958 17.3631 7.32784 19.4068C8.3259 20.4124 9.32653 21.2351 10.0786 21.8068C10.434 22.077 10.7326 22.29 10.9475 22.4389C11.1623 22.29 11.4609 22.077 11.8163 21.8068C12.5684 21.2351 13.569 20.4124 14.5671 19.4068C16.5954 17.3631 18.4738 14.7033 18.4738 11.9426C18.4738 10.056 17.689 8.23987 16.2808 6.89569C14.8715 5.55047 12.9536 4.78947 10.9475 4.78947ZM10.9475 23.2632C10.5801 23.8404 10.58 23.8403 10.5797 23.8401L10.5792 23.8398L10.5774 23.8387L10.5718 23.835L10.5517 23.8221C10.5345 23.8109 10.5097 23.7948 10.4779 23.7737C10.4143 23.7317 10.3224 23.6701 10.2063 23.5901C9.97419 23.43 9.64481 23.1959 9.25054 22.8962C8.46315 22.2977 7.41114 21.4333 6.35658 20.3707C4.27957 18.278 2.05273 15.2776 2.05273 11.9426C2.05273 9.67199 2.99797 7.50121 4.66932 5.90583C6.33959 4.31148 8.59845 3.42105 10.9475 3.42105C13.2965 3.42105 15.5554 4.31148 17.2256 5.90583C18.897 7.50121 19.8422 9.67199 19.8422 11.9426C19.8422 15.2776 17.6154 18.278 15.5384 20.3707C14.4838 21.4333 13.4318 22.2977 12.6444 22.8962C12.2501 23.1959 11.9207 23.43 11.6886 23.5901C11.5725 23.6701 11.4806 23.7317 11.417 23.7737C11.3979 23.7864 11.3814 23.7972 11.3675 23.8063C11.3582 23.8124 11.3501 23.8176 11.3432 23.8221L11.3232 23.835L11.3175 23.8387L11.3158 23.8398L11.3152 23.8401C11.315 23.8403 11.3148 23.8404 10.9475 23.2632ZM10.9475 23.2632L11.3148 23.8404C11.0907 23.983 10.8043 23.983 10.5801 23.8404L10.9475 23.2632Z"
                              fill="#666666"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10.9474 10.2632C9.81378 10.2632 8.89479 11.1822 8.89479 12.3158C8.89479 13.4494 9.81378 14.3684 10.9474 14.3684C12.0811 14.3684 13.0001 13.4494 13.0001 12.3158C13.0001 11.1822 12.0811 10.2632 10.9474 10.2632ZM7.52637 12.3158C7.52637 10.4264 9.05802 8.89474 10.9474 8.89474C12.8368 8.89474 14.3685 10.4264 14.3685 12.3158C14.3685 14.2052 12.8368 15.7368 10.9474 15.7368C9.05802 15.7368 7.52637 14.2052 7.52637 12.3158Z"
                              fill="#666666"
                            />
                          </svg>
                          45 Connor St. London, 44523
                        </span>
                      </div>
                      <div className="ml-md-4 text-md-right">
                        <p className="fs-14 text-black mb-1 mr-1">
                          Price range
                        </p>
                        <h4 className="fs-24 text-primary">
                          $400.000 - $600.000
                        </h4>
                      </div>
                    </div>
                    <div className="mb-sm-5 mb-2">
                      <Link
                        to="/property-details"
                        className="btn btn-primary light rounded mr-2 mb-sm-0 mb-2"
                      >
                        <svg
                          className="mr-2"
                          width={28}
                          height={19}
                          viewBox="0 0 28 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.1 8.03846C25.7498 8.03846 28 10.2859 28 13.1538V17.5385H25.9V19H24.5V17.5385H3.5V19H2.1V17.5385H0V13.1538C0 10.3876 2.17398 8.03846 4.9 8.03846H23.1ZM21.7 0C23.5821 0 25.2005 1.57962 25.2 3.65385L25.2005 7.14522C24.5639 6.78083 23.8517 6.57692 23.1 6.57692L21.7 6.57618C21.7 5.32466 20.7184 4.38462 19.6 4.38462H15.4C14.8622 4.38462 14.3716 4.59567 14.0001 4.94278C13.629 4.59593 13.1381 4.38462 12.6 4.38462H8.4C7.24044 4.38462 6.30038 5.36575 6.3 6.57619L4.9 6.57692C4.14851 6.57692 3.43653 6.7807 2.8 7.14488V3.65385C2.8 1.68899 4.3096 0 6.3 0H21.7ZM12.6 5.84579C12.9799 5.84579 13.3 6.21117 13.3 6.57692L7.7 6.57618C7.7 6.12909 8.04101 5.84615 8.4 5.84615L12.6 5.84579ZM19.6 5.85107C19.9961 5.84578 20.2996 6.20175 20.3 6.57618H14.7C14.7 6.1227 15.041 5.84615 15.4 5.84615L19.6 5.85107Z"
                            fill="#3B4CB8"
                          />
                        </svg>
                        4 Bedroom
                      </Link>
                      <Link
                        to="/property-details"
                        className="btn btn-primary light rounded mr-2 mb-sm-0 mb-2"
                      >
                        <svg
                          className="mr-2"
                          width={19}
                          height={22}
                          viewBox="0 0 19 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 10.4211L18.6388 12.249C18.0616 15.1706 15.4406 17.3684 12.5829 17.3684H11.6923L13.4082 22H2.28779V10.4211H19ZM5.14753 0C6.68536 0 8.00727 1.29706 8.00727 2.89474V7.52632H18.8743V8.68421H8.00727V9.26316H1.1439L1.14378 11.0001C0.481336 10.4964 0 9.64309 0 8.68421V2.89474C0 1.33809 1.25234 0 2.85974 0H5.14753Z"
                            fill="#3B4CB8"
                          />
                        </svg>
                        2 Bathroom
                      </Link>
                      <Link
                        to="/property-details"
                        className="btn btn-primary light rounded mb-sm-0 mb-2"
                      >
                        <svg
                          className="mr-2"
                          width={24}
                          height={16}
                          viewBox="0 0 24 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.8559 4.49675C21.3906 3.03139 19.6817 1.89671 17.7768 1.12424C15.9372 0.378271 13.9935 0 11.9998 0C10.0061 0 8.06245 0.378271 6.22283 1.12424C4.31792 1.89671 2.60904 3.03139 1.14367 4.49675C0.890918 4.74947 0.890918 5.15923 1.14363 5.41203L3.03417 7.30265C3.15554 7.42403 3.32019 7.49224 3.49178 7.49224H3.49183C3.66347 7.49224 3.82807 7.42407 3.94945 7.30265C6.09977 5.15242 8.95879 3.9682 11.9998 3.9682C15.0407 3.9682 17.8997 5.15242 20.05 7.30265C20.1714 7.42403 20.336 7.49224 20.5076 7.49224C20.6792 7.49224 20.8439 7.42407 20.9652 7.30265L22.8557 5.41203C23.1087 5.15928 23.1087 4.74951 22.8559 4.49675Z"
                            fill="#3B4CB8"
                          />
                          <path
                            d="M11.9998 5.34747C9.32727 5.34747 6.81468 6.38818 4.92492 8.27794C4.67217 8.53065 4.67217 8.94042 4.92488 9.19321L6.81542 11.0838C7.06817 11.3366 7.47794 11.3365 7.7307 11.0839C8.87103 9.94367 10.3871 9.31575 11.9997 9.31575C13.6123 9.31575 15.1284 9.94371 16.2687 11.0839C16.3901 11.2053 16.5547 11.2735 16.7264 11.2735C16.898 11.2735 17.0626 11.2053 17.184 11.0839L19.0744 9.19317C19.3271 8.94046 19.3271 8.53069 19.0744 8.27794C17.1848 6.38818 14.6723 5.34747 11.9998 5.34747Z"
                            fill="#3B4CB8"
                          />
                          <path
                            d="M11.9998 10.6951C10.7557 10.6951 9.58601 11.1796 8.70619 12.0592C8.58482 12.1806 8.5166 12.3453 8.5166 12.5169C8.5166 12.6885 8.58477 12.8532 8.70619 12.9745L11.5421 15.8105C11.6685 15.9369 11.8341 16 11.9997 16C12.1653 16 12.331 15.9368 12.4574 15.8105L15.2934 12.9745C15.4148 12.8531 15.483 12.6885 15.483 12.5169C15.483 12.3453 15.4148 12.1806 15.2934 12.0593C14.4136 11.1796 13.2439 10.6951 11.9998 10.6951Z"
                            fill="#3B4CB8"
                          />
                        </svg>
                        Wifi Available
                      </Link>
                    </div>
                    <h4 className="text-black fs-20 font-w600">Description</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body image-gallery-body">
                  <div className="image-gallery owl-carousel">
                    <ImageGallery />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card property-features">
                <div className="card-header border-0 pb-0">
                  <h3 className="fs-20 text-black mb-0">Property Features</h3>
                </div>
                <div className="card-body">
                  <ul>
                    <li>
                      <i className="las la-check-circle" />
                      Swimming pool
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Terrace
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Radio
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Grill
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Cable TV
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Air conditioning
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Cofee pot
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Balcony
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Computer
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Parquet
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Internet
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Towelwes
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Roof terrace
                    </li>
                    <li>
                      <i className="las la-check-circle" />
                      Oven
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
