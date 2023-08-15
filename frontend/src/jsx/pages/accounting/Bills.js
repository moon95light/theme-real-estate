import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../layouts/PageTitle';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import {
    Row, Col, Table, Card, Tab, Nav, Badge, Button,
    SplitButton, Dropdown, DropdownButton, ButtonGroup
} from 'react-bootstrap'
import '../../../css/financial.css';

const AnAccountingBills = () => {
    const { t } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        { value: t('All'), label: 'All' },
        { value: 'Multiple (55)', label: 'Multiple (55)' },
        { value: 'Custom', label: 'Custom' },
    ]
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
    const tabData = [
        {
            name: 'Home',
            title: t('Bills'),
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Title>
                            <div className="property-buttons">
                                <button type="button" className="mr-2 btn btn-xs btn-success" id="btn-success">{t('Record bill')}</button>
                                <Button className='mr-2 btn-xs' variant='outline-info'>
                                    {t('Record credit')}
                                </Button>
                                <DropdownButton
                                    as={ButtonGroup}
                                    id='dropdown-button-drop-down'
                                    drop='down'
                                    variant='outline-info'
                                    size='xs'
                                    className='mr-2 outline'
                                    title={t('Pay bills')}
                                >
                                    <Dropdown.Item href='#'>{t('by check')}</Dropdown.Item>
                                </DropdownButton>
                                <Button className='mr-2 btn-xs' variant='outline-info'>
                                    {t('Collect markup')}
                                </Button>
                                <DropdownButton
                                    as={ButtonGroup}
                                    id='dropdown-button-drop-down-roll'
                                    drop='down'
                                    variant='outline-info'
                                    size='xs'
                                    className='dots mr-2'
                                    title='•••'
                                >
                                    <Dropdown.Item href='#'>Update recurring charges</Dropdown.Item>
                                    <Dropdown.Item href='#'>Add meter reading</Dropdown.Item>
                                    <Dropdown.Item href='#'>Enter bulk charges</Dropdown.Item>
                                    <Dropdown.Item href='#'>Enter bulk Credits</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Card.Title>
                        <Card.Header className='listing-card-header'>
                            <div className='col-xl-2'>

                                <Select
                                    defaultValue={options.find(option => option.value === 'Multiple (55)')}
                                    onChange={setSelectedOption}
                                    options={options}
                                    style={{
                                        lineHeight: '10px',
                                        color: '#7e7e7e',
                                        paddingLeft: ' 15px',
                                    }}
                                />
                            </div>
                            <div className='col-xl-2'>

                                <Select
                                    defaultValue={options.find(option => option.value === 'Custom')}
                                    onChange={setSelectedOption}
                                    options={options}
                                    style={{
                                        lineHeight: '10px',
                                        color: '#7e7e7e',
                                        paddingLeft: ' 15px',
                                    }}
                                />
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className='pl-0 mt-1 mb-2'>
                                    Add filter option
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href='#'>Unit or Tenant</Dropdown.Item>
                                    <Dropdown.Item href='#'>Type</Dropdown.Item>
                                    <Dropdown.Item href='#'>Start-end</Dropdown.Item>
                                    <Dropdown.Item href='#'>Rent</Dropdown.Item>
                                    <Dropdown.Item href='#'>Days remaning</Dropdown.Item>
                                    <Dropdown.Item href='#'>most recent event</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th className="width50"></th>
                                        <th>{t('PAID')}</th>
                                        <th>{t('DUE')}</th>
                                        <th>{t('VENDOR OF COMPANY')}</th>
                                        <th>{t('MEMO')}</th>
                                        <th>{t('REF NO')}</th>
                                        <th></th>
                                        <th className='remove-listing-rent'>{t('AMOUNT')}</th>
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
                                            <Badge variant="warning light">OVERDUE</Badge>
                                        </td>
                                        <td>7/17/2022</td>

                                        <td>Garden Row LLC</td>
                                        <td>
                                            Eviction fees / consult
                                        </td>
                                        <td>DC-7771</td>
                                        <td></td>
                                        <td className='listing-rent'>$ 40,023</td>
                                        <td className="remove-td">
                                            <Dropdown>
                                                <Dropdown.Toggle
                                                    variant="success"
                                                    className="light sharp i-false"
                                                >
                                                    {svg1}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>{t('Delete')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Email')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Print')}</Dropdown.Item>
                                                    <Dropdown.Item>{t('Edit')}</Dropdown.Item>
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
            title: t('Invoice Files') + '(0)',
            content: (
                <Col lg={12}>
                    <Card>
                        <Card.Header className='listing-card-header'>
                            {/* <input type='text' name='search'></input> */}
                            <div className='input-group input-info-o' style={{width: '200px'}}>
                                
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Search'
                                    style={{paddingBottom: '0px', paddingTop:'0px', height: '40px'}}
                                />
                            </div>
                            <div className='col-xl-2'>
                                <Select
                                    defaultValue={options.find(option => option.value === 'Multiple (55)')}
                                    onChange={setSelectedOption}
                                    options={options}
                                    style={{
                                        lineHeight: '10px',
                                        color: '#7e7e7e',
                                        paddingLeft: ' 15px',
                                    }}
                                />
                            </div>
                            <div className='col-xl-2'>
                                <Select
                                    defaultValue={options.find(option => option.value === 'Custom')}
                                    onChange={setSelectedOption}
                                    options={options}
                                    style={{
                                        lineHeight: '10px',
                                        color: '#7e7e7e',
                                        paddingLeft: ' 15px',
                                    }}
                                />
                            </div>
                            <Button className='mr-2 btn-sm' variant='outline-dark'>
                                    {t('Upload invoice files')}
                                </Button>

                        </Card.Header>
                        <Card.Body>
                            <Table responsive bordered>
                                <thead>
                                    <tr>
                                        <th className="width50"></th>
                                        <th>{t('FILENAME')}</th>
                                        <th>{t('UPLOADED')}</th>
                                        <th>{t('CREATED BY')}</th>
                                        <th></th>
                                        <th></th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
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
                <h4 className="page-title">  {t('Bills')}</h4>
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

export default AnAccountingBills;
