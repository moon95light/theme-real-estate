import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../layouts/PageTitle';
import { useTranslation } from 'react-i18next';
import {
    Row, Col, Table, Card, Tab, Nav, Badge, Button,
    SplitButton, Dropdown, DropdownButton, ButtonGroup
} from 'react-bootstrap'
import '../../../css/leaserenewal.css';

const AnLeasingLeaseRenewals = () => {
    const { t } = useTranslation();

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
    let cnt_notstarted = 1;
    let cnt_offers = 1;
    let cnt_moveouts = 0;
    let cnt_renewals = 0;
    const tabData = [
        {
            name: 'Home',
            title: t('Not started') + ' (' + cnt_notstarted+ ')',
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Header className='listing-card-header'>
                            <div className='input-group col-sm-2 input-group-sm mb-4 mt-2' style={{ paddingTop: '10px' }}>
                                <input type='text' className='form-control' placeholder='All rentals' />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            {t('Action')}
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            {t('Another action')}
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            {t('Something else here')}
                                        </Dropdown.Item>
                                        <div
                                            role='separator'
                                            className='dropdown-divider'
                                        ></div>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                            <div className='input-group col-sm-2 input-group-sm mb-4 mt-2'>
                                <input type='text' className='form-control' 
                                placeholder={'(8) 241+ ' + t('days') +','+ '181-240' + t('days')+','+ '1...'}
                                />
                                
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>

                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
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
                                        <th>{t('DAYS LEFT')}</th>
                                        <th>{t('LEASE')}</th>
                                        <th>{t('CURRENT TERMS')}</th>
                                        <th>{t('RENTAL OWNERS')}</th>

                                        <th className='remove-listing-rent'></th>
                                        <th className='remove-th'></th>
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
                                            <Badge variant="success light">230 days</Badge>
                                        </td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>
                                            <p className='renewal-dollars'> Fixed w/rollover | $ 5500</p>
                                            <p className='renewal-date'>12/1/2022 - 12/1/2023</p>
                                        </td>
                                        <td><Link to=''>Patric Moran</Link></td>
                                        <td className='listing-rent'>
                                            <Button className='btn-xs' variant='outline-success'>{t('Generate offer')}</Button>
                                        </td>
                                        <td className="remove-td">
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    variant="success"
                                                    className="light sharp i-false"
                                                >
                                                    {svg1}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>{t('Generate offer')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Update offer status')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Renew lease')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Record intent')} <br></br>{t('to moveout')}</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            ),
        },
        {
            name: 'Profile',
            title: t('Offers') + ' (' + cnt_offers + ')',
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Header className='listing-card-header'>
                            <div className='input-group col-sm-2 input-group-sm mb-4 mt-2' style={{ paddingTop: '10px' }}>
                                <input type='text' className='form-control' placeholder={t('All') + t('rentals')} />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Something else here
                                        </Dropdown.Item>
                                        <div
                                            role='separator'
                                            className='dropdown-divider'
                                        ></div>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                            <div className='input-group col-sm-2 input-group-sm mb-4 mt-2' style={{ paddingTop: '10px' }}>
                                <input type='text' className='form-control' placeholder='(8) 241+ days, 181-240 days, 1...' />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">240+ {t('days')}</label>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                            <div className='input-group col-sm-2 input-group-sm'>
                                <input type='text' className='form-control' 
                                placeholder={'(8) 241+' + t('days') +', 181-240' + t('days') +', 1...'} />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Generated')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Declined')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Sent')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Accepted')}</label>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                            
                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
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
                                        <th>{t('DAYS LEFT')}</th>
                                        <th>{t('LEASE')}</th>
                                        <th>{t('STATUS')}</th>
                                        <th>{t('LAST UPDATED')}</th>
                                        <th>{t('COMMENTS')}</th>
                                        <th className='remove-listing-rent'></th>
                                        <th className='remove-th'></th>
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
                                            <Badge variant="success light">230 days</Badge>
                                        </td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>
                                            <Badge variant='warning light'>Pending </Badge>
                                        </td>
                                        <td>12/12/2023</td>
                                        <td><Link to=''>Patric Moran</Link></td>
                                        <td className='listing-rent'>
                                            <Button className='btn-xs' variant='outline-success'>Generate offer</Button>
                                        </td>
                                        <td className="remove-td">
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    variant="success"
                                                    className="light sharp i-false"
                                                >
                                                    {svg1}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>{t('Generate offer')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Update offer status')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Renew lease')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Record intent')} <br></br>{t('to moveout')}</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            ),
        },
        {
            name: 'Renewals',
            title: t('Renewals') + ' (' + cnt_renewals + ')',
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Header className='listing-card-header'>
                            <div className='input-group col-sm-2 input-group-sm mb-4 mt-2' style={{ paddingTop: '10px' }}>
                                <input type='text' className='form-control' placeholder='All rentals' />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Something else here
                                        </Dropdown.Item>
                                        <div
                                            role='separator'
                                            className='dropdown-divider'
                                        ></div>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                            <div className='input-group col-sm-2 input-group-sm mb-4 mt-2' style={{ paddingTop: '10px' }}>
                                <input type='text' className='form-control' placeholder='(9) Unknown, Not sent, Proc...' />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Unknown')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Not sent')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Proccessing request')}</label>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            <div className="custom-control">
                                                <input type="checkbox" className="custom-control-input"></input>
                                                <label className="custom-control-label">{t('Awaiting signatures')}</label>
                                            </div>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th>{t('DAYS LEFT')}</th>
                                        <th>{t('LEASE')}</th>
                                        <th>{t('ESIGNATURE STATUS')}</th>
                                        <th>{t('TERMS')}</th>
                                        <th>{t('COMMENTS')}</th>
                                        {/* <th className='remove-listing-rent'></th>
                                        <th className='remove-th'></th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        
                                    </tr>

                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            ),
        },
        {
            name: 'Moveouts',
            title: t('Move outs') + ' (' + cnt_moveouts + ')',
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Header className='listing-card-header'>
                            <div className='input-group col-sm-2 input-group-sm mb-4 mt-2' style={{ paddingTop: '10px' }}>
                                <input type='text' className='form-control' placeholder='All rentals' />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-outline dropdown-toggle'
                                        type='button'
                                        data-toggle='dropdown'
                                    >

                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='dropdown-menu'>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Something else here
                                        </Dropdown.Item>
                                        <div
                                            role='separator'
                                            className='dropdown-divider'
                                        ></div>
                                        <Dropdown.Item className='dropdown-item' to='#'>
                                            Separated link
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>{' '}
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
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
                                        <th>{t('DAYS LEFT')}</th>
                                        <th>{t('LEASE')}</th>
                                        <th>{t('STATUS')}</th>
                                        <th>{t('NOTICE GIVEN DATE')}</th>
                                        <th>{t('MOVE OUT DATE')}</th>
                                        <th>{t('COMMENTS')}</th>
                                        <th>{t('NEXT LEASE')}</th>
                                        <th className='remove-listing-rent'></th>
                                        <th className='remove-th'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                   <tr></tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            ),
        },
    ]

    return (
        <Fragment>
            <div className="page-titles">
                <h4 className="page-title">  {t('Lease renewals')}</h4>
            </div>
            <Row>
                <div className='col-xl-12'>
                    <Card>
                        <Card.Body>
                            <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                                <Nav as='ul' className='nav-tabs'>
                                    {tabData.map(
                                        (data, i) =>
                                            i !== tabData.length && (
                                                <Nav.Item as='li' key={i}>
                                                    <Nav.Link eventKey={data.name.toLowerCase()}>
                                                        {data.title}
                                                    </Nav.Link>
                                                </Nav.Item>
                                            )
                                    )}
                                </Nav>
                                <Tab.Content className='pt-4'>
                                    {tabData.map(
                                        (data, i) =>
                                            i !== tabData.length && (
                                                <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                                                    <p>{data.content}</p>
                                                </Tab.Pane>
                                            )
                                    )}
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </div>
            </Row>
        </Fragment>
    )
}

export default AnLeasingLeaseRenewals;
