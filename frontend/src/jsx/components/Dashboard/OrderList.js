import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown } from 'react-bootstrap'

function OrderList() {
  const [data, setData] = useState(
    document.querySelectorAll('#orderList tbody tr')
  )
  const sort = 7
  const activePag = useRef(0)
  const [test, settest] = useState(0)

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove('d-none')
      } else {
        data[i].classList.add('d-none')
      }
    }
  }
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll('#orderList tbody tr'))
    //chackboxFun()
  }, [test])

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort)
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1)

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i
    chageData(activePag.current * sort, (activePag.current + 1) * sort)
    settest(i)
  }
  const chackbox = document.querySelectorAll('.orderList_sorting_1 input')
  const motherChackBox = document.querySelector('#checkAll')

  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i]
      if (type === 'all') {
        if (motherChackBox.checked) {
          element.checked = true
        } else {
          element.checked = false
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false
          break
        } else {
          motherChackBox.checked = true
        }
      }
    }
  }
  return (
    <>
      <div className='form-head page-titles d-flex  align-items-center'>
        <div className='mr-auto  d-lg-block'>
          <h2 className='text-black font-w600'>Order List</h2>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item active'>
              <Link to='/order-list'>Customer</Link>
            </li>
            <li className='breadcrumb-item'>
              <Link to='/order-list'>Order List</Link>
            </li>
          </ol>
        </div>
        <Link to='/order-list' className='btn btn-primary rounded light mr-3'>
          Refresh
        </Link>
        <Link to='/order-list' className='btn btn-primary rounded'>
          <i className='flaticon-381-settings-2 mr-0' />
        </Link>
      </div>
      <div className='row'>
        <div className='col-xl-3 col-xxl-6 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='media align-items-center'>
                <div className='media-body'>
                  <h2 className='fs-36 text-black font-w600'>245</h2>
                  <span className='fs-18 text-black'>Total Customers</span>
                </div>
                <span className='bg-primary rounded p-3'>
                  <svg
                    width={38}
                    height={38}
                    viewBox='0 0 32 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M30.0833 38H1.58333C1.16341 38 0.76068 37.8332 0.463748 37.5363C0.166815 37.2393 0 36.8366 0 36.4167V34.846C0.00454968 32.3984 0.823669 30.022 2.32819 28.0915C3.83271 26.161 5.93704 24.7861 8.30933 24.1838C8.64572 24.1014 8.94519 23.9096 9.1607 23.6385C9.37622 23.3673 9.49557 23.0323 9.5 22.686V21.0932L7.73142 19.3262C7.2884 18.8912 6.93657 18.3723 6.69651 17.7997C6.45645 17.2272 6.33298 16.6125 6.33333 15.9917V9.43984C6.36235 6.99347 7.32801 4.65129 9.03156 2.8953C10.7351 1.13932 13.047 0.103143 15.4913 8.17276e-06C16.7821 -0.00165631 18.0606 0.250939 19.2538 0.743372C20.447 1.23581 21.5315 1.95843 22.4454 2.86999C23.3594 3.78156 24.0848 4.8642 24.5803 6.05611C25.0758 7.24803 25.3317 8.52587 25.3333 9.81667V15.9917C25.3329 16.6169 25.2072 17.2358 24.9638 17.8117C24.7205 18.3876 24.3643 18.909 23.9163 19.3452L22.1667 21.0932V22.686C22.1712 23.0325 22.2908 23.3677 22.5066 23.6389C22.7224 23.91 23.0222 24.1017 23.3589 24.1838C25.7308 24.7867 27.8346 26.1617 29.3388 28.0922C30.8429 30.0226 31.6619 32.3987 31.6667 34.846V36.4167C31.6667 36.8366 31.4999 37.2393 31.2029 37.5363C30.906 37.8332 30.5033 38 30.0833 38ZM3.16667 34.8333H28.5C28.4927 33.091 27.9061 31.4005 26.8326 30.0281C25.7591 28.6556 24.2597 27.6791 22.5704 27.2523C21.5532 26.9949 20.6503 26.4066 20.004 25.58C19.3576 24.7534 19.0045 23.7353 19 22.686V20.4377C19.0001 20.0178 19.167 19.6151 19.4639 19.3183L21.6964 17.0873C21.8445 16.9458 21.9625 16.7758 22.0433 16.5875C22.1241 16.3992 22.1661 16.1966 22.1667 15.9917V9.81667C22.1693 8.06695 21.4812 6.3869 20.252 5.14168C19.0228 3.89645 17.3518 3.1867 15.6022 3.16667C13.9751 3.23184 12.4352 3.91887 11.2998 5.08606C10.1644 6.25326 9.52019 7.81164 9.5 9.43984V15.9917C9.49967 16.1922 9.53942 16.3907 9.61691 16.5756C9.69441 16.7605 9.80808 16.928 9.95125 17.0683L12.2028 19.3167C12.4997 19.6135 12.6666 20.0162 12.6667 20.4361V22.6844C12.6623 23.7335 12.3093 24.7514 11.6633 25.578C11.0173 26.4046 10.1148 26.9931 9.09783 27.2508C7.40797 27.6773 5.90801 28.6539 4.8342 30.0267C3.76039 31.3995 3.17375 33.0905 3.16667 34.8333Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-3 col-xxl-6 col-md-6'>
          <div className='card'>
            <div className='card-body'>
              <div className='media align-items-center'>
                <div className='media-body'>
                  <h2 className='fs-36 text-black font-w600'>562</h2>
                  <span className='fs-18 text-black'>Total Transactions</span>
                </div>
                <span className='bg-primary rounded p-3'>
                  <svg
                    width={38}
                    height={38}
                    viewBox='0 0 38 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15.1208 37.6042H1.97909C1.10825 37.6042 0.395752 36.8917 0.395752 36.0208V14.1708C0.395752 13.775 0.554085 13.3 0.870752 13.0625L14.0124 0.791659C14.4874 0.395825 15.1208 0.237492 15.6749 0.474992C16.3083 0.791659 16.6249 1.34583 16.6249 1.97916V36.1C16.6249 36.8917 15.9124 37.6042 15.1208 37.6042ZM3.48325 34.5167H13.5374V5.54166L3.48325 14.8833V34.5167Z'
                      fill='white'
                    />
                    <path
                      d='M36.0208 37.6042H15.0416C14.1708 37.6042 13.4583 36.8917 13.4583 36.0208V17.4167C13.4583 16.5458 14.1708 15.8333 15.0416 15.8333H36.0208C36.8916 15.8333 37.6041 16.5458 37.6041 17.4167V36.1C37.6041 36.8917 36.8916 37.6042 36.0208 37.6042ZM16.6249 34.5167H34.5166V18.9208H16.6249V34.5167Z'
                      fill='white'
                    />
                    <path
                      d='M28.5791 37.6042H22.4832C21.6124 37.6042 20.8999 36.8917 20.8999 36.0208V26.3625C20.8999 25.4917 21.6124 24.7792 22.4832 24.7792H28.5791C29.4499 24.7792 30.1624 25.4917 30.1624 26.3625V36.0208C30.1624 36.8917 29.4499 37.6042 28.5791 37.6042ZM24.0666 34.5167H27.0749V27.9458H24.0666V34.5167Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-xxl-12'>
          <div className='card house-bx'>
            <div className='card-body'>
              <div className='media align-items-center'>
                <svg
                  width={88}
                  height={85}
                  viewBox='0 0 88 85'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M77.25 	30.8725V76.25H10.75V30.8725L44 8.70001L77.25 30.8725Z'
                    fill='url(#paint0_linear)'
                  />
                  <path
                    d='M2 76.25H86V85H2V76.25Z'
                    fill='url(#paint1_linear)'
                  />{' '}
                  <path
                    d='M21.25 39.5H42.25V76.25H21.25V39.5Z'
                    fill='url(#paint2_linear)'
                  />
                  <path
                    d='M52.75 39.5H66.75V64H52.75V39.5Z'
                    fill='url(#paint3_linear)'
                  />
                  <path
                    d='M87.9424 29.595L84.0574 35.405L43.9999 8.70005L3.94237 35.405L0.057373 29.595L43.9999 0.300049L87.9424 29.595Z'
                    fill='url(#paint4_linear)'
                  />
                  <path
                    d='M49.25 62.25H70.25V65.75H49.25V62.25Z'
                    fill='url(#paint5_linear)'
                  />
                  <path
                    d='M52.75 50H66.75V53.5H52.75V50Z'
                    fill='url(#paint6_linear)'
                  />
                  <path
                    d='M28.25 57C28.25 57.4642 28.0656 57.9093 27.7374 58.2375C27.4092 58.5657 26.9641 58.75 26.5 58.75C26.0359 58.75 25.5908 58.5657 25.2626 58.2375C24.9344 57.9093 24.75 57.4642 24.75 57C24.75 56.5359 24.9344 56.0908 25.2626 55.7626C25.5908 55.4344 26.0359 55.25 26.5 55.25C26.9641 55.25 27.4092 55.4344 27.7374 55.7626C28.0656 56.0908 28.25 56.5359 28.25 57Z'
                    fill='url(#paint7_linear)'
                  />
                  <defs>
                    <linearGradient
                      id='paint0_linear'
                      x1='19.255'
                      y1='28.8075'
                      x2='64.1075'
                      y2='73.6775'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#F9F9DF' />
                      <stop offset={1} stopColor='#B6BDC6' />
                    </linearGradient>
                    <linearGradient
                      id='paint1_linear'
                      x1={2}
                      y1='80.625'
                      x2={86}
                      y2='80.625'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#3C6DB0' />
                      <stop offset={1} stopColor='#291F51' />
                    </linearGradient>
                    <linearGradient
                      id='paint2_linear'
                      x1='22.9825'
                      y1='40.6025'
                      x2='37.8575'
                      y2='69.915'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#F0CB49' />
                      <stop offset={1} stopColor='#E17E43' />
                    </linearGradient>
                    <linearGradient
                      id='paint3_linear'
                      x1='52.75'
                      y1='51.75'
                      x2='66.75'
                      y2='51.75'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#7BC7E9' />
                      <stop offset={1} stopColor='#3C6DB0' />
                    </linearGradient>
                    <linearGradient
                      id='paint4_linear'
                      x1='0.057373'
                      y1='17.8525'
                      x2='87.9424'
                      y2='17.8525'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#E17E43' />
                      <stop offset={1} stopColor='#85152E' />
                    </linearGradient>
                    <linearGradient
                      id='paint5_linear'
                      x1='784.25'
                      y1='216.25'
                      x2='1036.25'
                      y2='216.25'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#3C6DB0' />
                      <stop offset={1} stopColor='#291F51' />
                    </linearGradient>
                    <linearGradient
                      id='paint6_linear'
                      x1='570.75'
                      y1='179.5'
                      x2='682.75'
                      y2='179.5'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#3C6DB0' />
                      <stop offset={1} stopColor='#291F51' />
                    </linearGradient>
                    <linearGradient
                      id='paint7_linear'
                      x1='98.25'
                      y1='195.25'
                      x2='105.25'
                      y2='195.25'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop stopColor='#E17E43' />
                      <stop offset={1} stopColor='#85152E' />
                    </linearGradient>
                  </defs>
                </svg>
                <div className='media-body'>
                  <h4 className='fs-22 text-white'>INFORMATION</h4>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-xl-12'>
          <div className='table-responsive table-hover fs-14'>
            <div id='orderList' className='dataTables_wrapper no-footer'>
              <table
                className='table table-hover display mb-4 dataTablesCard card-table dataTable no-footer'
                id='example5'
              >
                <thead>
                  <tr role='row'>
                    <th className='orderList_sorting_asc'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          className='custom-control-input'
                          id='checkAll'
                          required
                          onClick={() => chackboxFun('all')}
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='checkAll'
                        />
                      </div>
                    </th>
                    <th className='sorting'>Order ID</th>
                    <th className='sorting'>Date</th>
                    <th className='sorting'>Customer</th>
                    <th className='sorting'>Property</th>
                    <th className='sorting'>Location</th>
                    <th className='sorting'>Price</th>
                    <th className='sorting'>Type</th>
                    <th className='sorting'>Agent</th>
                    <th className='sorting'>Status</th>
                    <th className='sorting' />
                  </tr>
                </thead>
                <tbody>
                  <tr role='row' className='odd'>
                    <td className='orderList_sorting_1'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          onClick={() => chackboxFun()}
                          className='custom-control-input'
                          id='customCheckBox5'
                          required
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='customCheckBox5'
                        />
                      </div>
                    </td>
                    <td>#0001234</td>
                    <td>26/04/2020, 12:42 AM</td>
                    <td>James WItcwicky</td>
                    <td className='text-ov'>
                      TY35 Avenue <br />
                      GGLondon Center
                    </td>
                    <td className='text-ov'>
                      Flat 2551 Center
                      <br /> London 287223
                    </td>
                    <td>$521k</td>
                    <td>ABC356</td>
                    <td>Kevin Jr.</td>
                    <td>
                      <span className='text-warning'>Pending</span>
                    </td>
                    <td>
                      <Dropdown className='ml-auto'>
                        <Dropdown.Toggle
                          variant=''
                          className='btn-link i-false'
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right'>
                          <Dropdown.Item className='text-black'>
                            Accept order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            Reject order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            View Details
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role='row' className='even'>
                    <td className='orderList_sorting_1'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          onClick={() => chackboxFun()}
                          className='custom-control-input'
                          id='customCheckBox51'
                          required
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='customCheckBox51'
                        />
                      </div>
                    </td>
                    <td>#0001234</td>
                    <td>26/04/2020, 12:42 AM</td>
                    <td>Stephani</td>
                    <td className='text-ov'>
                      TY35 Avenue <br />
                      GGLondon Center
                    </td>
                    <td className='text-ov'>
                      Straight 22th London
                      <br /> 51256
                    </td>
                    <td>$235k</td>
                    <td>TY1255</td>
                    <td>Louis</td>
                    <td>
                      <span className='text-primary'>Negotiation</span>
                    </td>
                    <td>
                      <Dropdown className='ml-auto'>
                        <Dropdown.Toggle
                          variant=''
                          className='btn-link i-false'
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right'>
                          <Dropdown.Item className='text-black'>
                            Accept order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            Reject order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            View Details
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role='row' className='odd'>
                    <td className='orderList_sorting_1'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          onClick={() => chackboxFun()}
                          className='custom-control-input'
                          id='customCheckBox52'
                          required
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='customCheckBox52'
                        />
                      </div>
                    </td>
                    <td>#0001234</td>
                    <td>26/04/2020, 12:42 AM</td>
                    <td>Smantha Jr.</td>
                    <td className='text-ov'>
                      65SM Alexander
                      <br /> Court,New York
                    </td>
                    <td className='text-ov'>
                      Corner Street 5th
                      <br /> London 126623{' '}
                    </td>
                    <td>$116k</td>
                    <td>UJ2356</td>
                    <td>Melinda S.</td>
                    <td>
                      <span className='text-warning'>Pending</span>
                    </td>
                    <td>
                      <Dropdown className='ml-auto'>
                        <Dropdown.Toggle
                          variant=''
                          className='btn-link i-false'
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right'>
                          <Dropdown.Item className='text-black'>
                            Accept order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            Reject order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            View Details
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role='row' className='even'>
                    <td className='orderList_sorting_1'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          onClick={() => chackboxFun()}
                          className='custom-control-input'
                          id='customCheckBox53'
                          required
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='customCheckBox53'
                        />
                      </div>
                    </td>
                    <td>#0001234</td>
                    <td>26/04/2020, 12:42 AM</td>
                    <td>Hawkins</td>
                    <td className='text-ov'>
                      TY35 Avenue <br />
                      GGLondon Center
                    </td>
                    <td className='text-ov'>
                      Waves Street 1st
                      <br /> London 2441
                    </td>
                    <td>$763k</td>
                    <td>RE5135</td>
                    <td>Peter P.</td>
                    <td>
                      <span className='text-primary'>Negotiation</span>
                    </td>
                    <td>
                      <Dropdown className='ml-auto'>
                        <Dropdown.Toggle
                          variant=''
                          className='btn-link i-false'
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right'>
                          <Dropdown.Item className='text-black'>
                            Accept order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            Reject order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            View Details
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role='row' className='odd'>
                    <td className='orderList_sorting_1'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          onClick={() => chackboxFun()}
                          className='custom-control-input'
                          id='customCheckBox54'
                          required
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='customCheckBox54'
                        />
                      </div>
                    </td>
                    <td>#0001234</td>
                    <td>26/04/2020, 12:42 AM</td>
                    <td>Sanji Fujiwara</td>
                    <td className='text-ov'>
                      5122 Franklin <br />
                      Court,New York
                    </td>
                    <td className='text-ov'>
                      Flat 2551 Center
                      <br /> London 287223
                    </td>
                    <td>$245k</td>
                    <td>POT434</td>
                    <td>Robinson</td>
                    <td>
                      <span className='text-success'>Approved</span>
                    </td>
                    <td>
                      <Dropdown className='ml-auto'>
                        <Dropdown.Toggle
                          variant=''
                          className='btn-link i-false'
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right'>
                          <Dropdown.Item className='text-black'>
                            Accept order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            Reject order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            View Details
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role='row' className='even'>
                    <td className='orderList_sorting_1'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          onClick={() => chackboxFun()}
                          className='custom-control-input'
                          id='customCheckBox55'
                          required
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='customCheckBox55'
                        />
                      </div>
                    </td>
                    <td>#0001234</td>
                    <td>26/04/2020, 12:42 AM</td>
                    <td>Ilham Supriadi</td>
                    <td className='text-ov'>
                      TY35 Avenue <br />
                      GGLondon Center
                    </td>
                    <td className='text-ov'>
                      Waves Street 1st
                      <br /> London 2441
                    </td>
                    <td>$765k</td>
                    <td>VBDF42</td>
                    <td>Rendy</td>
                    <td>
                      <span className='text-warning'>Pending</span>
                    </td>
                    <td>
                      <Dropdown className='ml-auto'>
                        <Dropdown.Toggle
                          variant=''
                          className='btn-link i-false'
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right'>
                          <Dropdown.Item className='text-black'>
                            Accept order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            Reject order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            View Details
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role='row' className='odd'>
                    <td className='orderList_sorting_1'>
                      <div className='custom-control custom-checkbox ml-2'>
                        <input
                          type='checkbox'
                          onClick={() => chackboxFun()}
                          className='custom-control-input'
                          id='customCheckBox56'
                          required
                        />
                        <label
                          className='custom-control-label'
                          htmlFor='customCheckBox56'
                        />
                      </div>
                    </td>
                    <td>#0001234</td>
                    <td>26/04/2020, 12:42 AM</td>
                    <td>Yun-Yun</td>
                    <td className='text-ov'>
                      5122 Franklin
                      <br /> Court,New York
                    </td>
                    <td className='text-ov'>
                      Corner Street 5th
                      <br /> London 126623{' '}
                    </td>
                    <td>$521k</td>
                    <td>QWR55</td>
                    <td>Thomas</td>
                    <td>
                      <span className='text-primary'>Negotiation</span>
                    </td>
                    <td>
                      <Dropdown className='ml-auto'>
                        <Dropdown.Toggle
                          variant=''
                          className='btn-link i-false'
                        >
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M11.0005 12C11.0005 12.5523 11.4482 13 12.0005 13C12.5528 13 13.0005 12.5523 13.0005 12C13.0005 11.4477 12.5528 11 12.0005 11C11.4482 11 11.0005 11.4477 11.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.0005 12C18.0005 12.5523 18.4482 13 19.0005 13C19.5528 13 20.0005 12.5523 20.0005 12C20.0005 11.4477 19.5528 11 19.0005 11C18.4482 11 18.0005 11.4477 18.0005 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.00049 12C4.00049 12.5523 4.4482 13 5.00049 13C5.55277 13 6.00049 12.5523 6.00049 12C6.00049 11.4477 5.55277 11 5.00049 11C4.4482 11 4.00049 11.4477 4.00049 12Z'
                              stroke='#3E4954'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu-right'>
                          <Dropdown.Item className='text-black'>
                            Accept order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            Reject order
                          </Dropdown.Item>
                          <Dropdown.Item className='text-black'>
                            View Details
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='d-sm-flex text-center justify-content-between align-items-center mt-3'>
                <div className='dataTables_info'>
                  Showing {activePag.current * sort + 1} to{' '}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{' '}
                  of {data.length} entries
                </div>
                <div
                  className='dataTables_paginate paging_simple_numbers'
                  id='example5_paginate'
                >
                  <Link
                    className='paginate_button previous disabled'
                    to='/order-list'
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
                        to='/order-list'
                        className={`paginate_button  ${
                          activePag.current === i ? 'current' : ''
                        } `}
                        onClick={() => onClick(i)}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className='paginate_button next'
                    to='/order-list'
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
        </div>
      </div>
    </>
  )
}

export default OrderList
