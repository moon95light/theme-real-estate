import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../layouts/PageTitle'
import {
    Row, Col, Table, Card, Tab, Nav, Badge, Button,
    SplitButton, Dropdown, DropdownButton, ButtonGroup
} from 'react-bootstrap'
import '../../../css/leasing.css';

const AnLeasingListings = () => {
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
    const tabData = [
        {
            name: 'Home',
            title: 'Listed units',
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Header className='listing-card-header'>
                            {/* <div className='input-group col-xl-3'>
                                <input type='text' className='form-control-sm' />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-primary dropdown-toggle filter-listing'
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
                            </div> */}

                            <div className='input-group-prepend'>
                                <SplitButton
                                    className='input-group-prepend'
                                    as={ButtonGroup}
                                    variant=''
                                    id='dropdown-button-drop-dwon'
                                    drop='down'
                                    
                                >
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Something else here
                                    </Dropdown.Item>
                                    <div role='separator' className='dropdown-divider'></div>
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Separated link
                                    </Dropdown.Item>
                                </SplitButton>
                                <input type='text' className='form-control' />
                            </div>

                            <Dropdown>
                                <Dropdown.Toggle variant='' className='pl-0 mt-1 mb-2'>
                                    Add filter option
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href='#'>Unit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th>LISTED</th>
                                        <th>AVAILABLE</th>
                                        <th>UNIT</th>
                                        <th>BEDS</th>
                                        <th>BATHS</th>
                                        <th>SIZE</th>
                                        <th className='remove-listing-rent'>LISTING RENT</th>
                                        <th className='remove-th'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/" className='listing-listed'>7/1/2022</Link></td>
                                        <td>7/1/2023</td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>1 Bed</td>
                                        <td>2 Bath</td>
                                        <td>700</td>
                                        <td className='listing-rent'>
                                            $ 599
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
                                                    <Dropdown.Item>Post to craigslist</Dropdown.Item>
                                                    <Dropdown.Item>Export to html</Dropdown.Item>
                                                    <Dropdown.Item>Dlist unit</Dropdown.Item>
                                                    <Dropdown.Item>Edit listing</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/" className='listing-listed'>7/1/2022</Link></td>
                                        <td>7/1/2023</td>
                                        <td>1 Bed</td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>2 Bath</td>
                                        <td>700</td>
                                        <td className='listing-rent'>
                                            $ 599
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
                                                    <Dropdown.Item>Post to craigslist</Dropdown.Item>
                                                    <Dropdown.Item>Export to html</Dropdown.Item>
                                                    <Dropdown.Item>Dlist unit</Dropdown.Item>
                                                    <Dropdown.Item>Edit listing</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/" className='listing-listed'>7/1/2022</Link></td>
                                        <td>7/1/2023</td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>1 Bed</td>
                                        <td>2 Bath</td>
                                        <td>700</td>
                                        <td className='listing-rent'>
                                            $ 599
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
                                                    <Dropdown.Item>Post to craigslist</Dropdown.Item>
                                                    <Dropdown.Item>Export to html</Dropdown.Item>
                                                    <Dropdown.Item>Dlist unit</Dropdown.Item>
                                                    <Dropdown.Item>Edit listing</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/" className='listing-listed'>7/1/2022</Link></td>
                                        <td>7/1/2023</td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>1 Bed</td>
                                        <td>2 Bath</td>
                                        <td>700</td>
                                        <td className='listing-rent'>
                                            $ 599
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
                                                    <Dropdown.Item>Post to craigslist</Dropdown.Item>
                                                    <Dropdown.Item>Export to html</Dropdown.Item>
                                                    <Dropdown.Item>Dlist unit</Dropdown.Item>
                                                    <Dropdown.Item>Edit listing</Dropdown.Item>
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
            title: 'Unlisted units',
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Header className='listing-card-header'>
                            {/* <div className='input-group col-xl-3'>
                                <input type='text' className='form-control-sm' placeholder='All rentals' />
                                <Dropdown className='input-group-prepend'>
                                    <Dropdown.Toggle
                                        variant=''
                                        className='btn btn-primary dropdown-toggle filter-listing'
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
                            </div> */}
                             <div className='input-group-prepend'>
                                <SplitButton
                                    className='input-group-prepend'
                                    as={ButtonGroup}
                                    variant=''
                                    id='dropdown-button-drop-dwon'
                                    drop='down'
                                >
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Action
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Something else here
                                    </Dropdown.Item>
                                    <div role='separator' className='dropdown-divider'></div>
                                    <Dropdown.Item className='dropdown-item' to='#'>
                                        Separated link
                                    </Dropdown.Item>
                                </SplitButton>
                                <input type='text' className='form-control' />
                            </div>

                            <Dropdown>
                                <Dropdown.Toggle variant='' className='pl-0 mt-1 mb-2'>
                                    Add filter option
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href='#'>Unit</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th>STATUS</th>
                                        <th>LEASE END</th>
                                        <th>NEXT LEASE</th>
                                        <th>UNIT</th>
                                        <th>TENANTS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/" className='listing-listed'>List unit</Link></td>
                                        <td>7/1/2023</td>
                                        <td>--</td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>Clifton Munoz, Virginia Gonzalez</td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/" className='listing-listed'>List unit</Link></td>
                                        <td>7/1/2023</td>
                                        <td>--</td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>Clifton Munoz, Virginia Gonzalez</td>
                                    </tr>
                                    <tr>
                                        <td><Link to="/" className='listing-listed'>List unit</Link></td>
                                        <td>7/1/2023</td>
                                        <td>--</td>
                                        <td>Garden Row (multi building complex)-2D</td>
                                        <td>Clifton Munoz, Virginia Gonzalez</td>
                                    </tr>
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
                <h4 className="page-title">  Listings</h4>
                <div className="property-buttons">
                <Button className='ml- btn-xs' variant='outline-info'>Update unit details</Button>
                </div>
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

export default AnLeasingListings;