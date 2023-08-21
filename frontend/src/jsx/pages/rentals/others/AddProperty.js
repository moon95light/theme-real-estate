import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, Modal, Table, Button } from 'react-bootstrap';
import swal from "sweetalert";
import { nanoid } from 'nanoid';
//Images

const CardListBlog = [];

const AnAddProperty = () => {

    const [postModal, setPostModal] = useState(false);
    const [contacts, setContacts] = useState(CardListBlog);
    // delete data  
    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setContacts(newContacts);
    }

    //Add data 
    const [addFormData, setAddFormData] = useState({
        Cust_Id: '',
        Date_Join: '',
        Cust_Name: '',
        Location: '',
        image: '',
    });

    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    //Add Submit data
    const handleAddFormSubmit = (event) => {
        event.preventDefault();
        var error = false;
        var errorMsg = '';
        if (addFormData.Date_Join === "") {
            error = true;
            errorMsg = 'Please fill date';
        } else if (addFormData.Cust_Name === "") {
            error = true;
            errorMsg = 'Please fill name.';
        }
        else if (addFormData.Location === "") {
            error = true;
            errorMsg = 'Please fill location';
        }
        if (!error) {
            const newContact = {
                id: nanoid(),
                Cust_Id: addFormData.Cust_Id,
                Date_Join: addFormData.Date_Join,
                Cust_Name: addFormData.Cust_Name,
                Location: addFormData.Location,
                image: addFormData.image,
            };
            const newContacts = [...contacts, newContact];
            setContacts(newContacts);
            setPostModal(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.Cust_Name = addFormData.Location = addFormData.Date_Join = '';

        } else {
            swal('Oops', errorMsg, "error");
        }
    };


    const [editModal, setEditModal] = useState(false);

    // Edit function editable page loop
    const [editContactId, setEditContactId] = useState(null);

    // Edit function button click to edit
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            Cust_Id: contact.Cust_Id,
            Date_Join: contact.Date_Join,
            Cust_Name: contact.Cust_Name,
            Location: contact.Location,
            image: contact.image,
        }
        setEditFormData(formValues);
        setEditModal(true);
    };


    // edit  data  
    const [editFormData, setEditFormData] = useState({
        Cust_Id: '',
        Date_Join: '',
        Cust_Name: '',
        Location: '',
        image: '',
    })

    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            Cust_Id: editFormData.Cust_Id,
            Date_Join: editFormData.Date_Join,
            Cust_Name: editFormData.Cust_Name,
            Location: editFormData.Location,
            image: editFormData.image,
        }
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
        setEditModal(false);
    }

    //For Image upload in ListBlog
    const [file, setFile] = React.useState(null)
    const fileHandler = (e) => {
        setFile(e.target.files[0]);
        setTimeout(function () {
            var src = document.getElementById("saveImageFile").getAttribute("src");
            addFormData.image = src;
        }, 200);
    }

    return (
        <>
            <div className="mb-sm-5 mb-3 d-flex flex-wrap align-items-center text-head">
                <Button className="btn btn-primary font-w600 mb-2 mr-auto" onClick={() => setPostModal(true)}>+ New Task</Button>
                {/* <!-- Modal --> */}
                <Modal className="modal fade" show={postModal} onHide={setPostModal} >
                    <div className="" >
                        <div className="">

                            <form >
                                <div className="modal-header">
                                    <h4 className="modal-title fs-20">Add Rental Owner</h4>
                                    <button type="button" className="btn close" onClick={() => setPostModal(false)}>
                                        <span>×</span>
                                    </button>
                                </div>
                                <div className='custom-control custom-checkbox mt-4 ml-5 mb-3 checkbox-success'>
                                    <input
                                        type='checkbox'
                                        // defaultChecked
                                        className='custom-control-input'
                                        id='customCheckBox3'
                                    // required
                                    />
                                    <label
                                        className='custom-control-label'
                                        htmlFor='customCheckBox3'
                                    >
                                        Choose existing rental owner
                                    </label>
                                </div>
                                <div className="modal-body">
                                    <i className="flaticon-cancel-12 close"></i>
                                    <div className="add-contact-box">
                                        <div className="add-contact-content">
                                            <div className='form-row'>
                                                <div className='form-group input-group-sm col-md-6'>
                                                    <label className="text-black font-w200">First Name</label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        placeholder='First'
                                                    />
                                                </div>
                                                <div className='form-group input-group-sm col-md-6'>
                                                    <label className="text-black font-w200">Last Name</label>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        placeholder='Last'
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-group mb-3">
                                                <label className="text-black font-w200">Company Name</label>
                                                <div className="contact-name input-group-sm">
                                                    <input type="text" className="form-control" autoComplete="off"
                                                        name="Date_Join" required="required"
                                                        onChange={handleAddFormChange}
                                                        placeholder=""
                                                    />
                                                    <span className="validation-text">asdf</span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="text-black font-w200">email</label>
                                                <div className="contact-occupation input-group-sm ">
                                                    <input type="email" autoComplete="off"
                                                        onChange={handleAddFormChange}
                                                        name="Cust_Name" required="required"
                                                        className="form-control" placeholder="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="text-black font-w200">Mobile Numbers</label>
                                                <div className="contact-occupation input-group-sm">
                                                    <input type="text" autoComplete="off"
                                                        name="Location" required="required"
                                                        onChange={handleAddFormChange}
                                                        className="form-control" placeholder="phone number 1"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="contact-occupation input-group-sm">
                                                    <input type="text" autoComplete="off"
                                                        name="Location" required="required"
                                                        onChange={handleAddFormChange}
                                                        className="form-control" placeholder="phone number 2"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <div className="contact-occupation input-group-sm">
                                                    <input type="text" autoComplete="off"
                                                        name="Location" required="required"
                                                        onChange={handleAddFormChange}
                                                        className="form-control" placeholder="phone number 3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary btn-xs" onClick={handleAddFormSubmit}>Add</button>
                                    <button type="button" onClick={() => setPostModal(false)} className="btn btn-danger btn-xs"> <i className="flaticon-delete-1"></i> Cancel</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </Modal>
                <Modal className="modal fade" show={editModal} onHide={setEditModal} >
                    <div className="" role="document">
                        <div className="">
                            <form >
                                <div className="modal-header">
                                    <h4 className="modal-title fs-20">Edit Task</h4>
                                    <button type="button" className="btn close" onClick={() => setEditModal(false)}>
                                        <span>×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <i className="flaticon-cancel-12 close" data-dismiss="modal"></i>
                                    <div className="add-contact-box">
                                        <div className="add-contact-content">
                                            <div className="form-group mb-3">
                                                <label className="text-black font-w200">Customer Id</label>
                                                <div className="contact-name">
                                                    <input type="text" className="form-control" autoComplete="off"
                                                        name="Cust_Id" required="required"
                                                        value={editFormData.Cust_Id}
                                                        onChange={handleEditFormChange}
                                                    />
                                                    <span className="validation-text"></span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="text-black font-w200">Deadline Date</label>
                                                <div className="contact-name">
                                                    <input type="text" className="form-control" autoComplete="off"
                                                        name="Date_Join" required="required"
                                                        value={editFormData.Date_Join}
                                                        onChange={handleEditFormChange}
                                                    />
                                                    <span className="validation-text"></span>
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="text-black font-w200">Client</label>
                                                <div className="contact-occupation">
                                                    <input type="text" autoComplete="off"
                                                        value={editFormData.Cust_Name}
                                                        onChange={handleEditFormChange}
                                                        name="Cust_Name" required="required"
                                                        className="form-control" placeholder="name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-3">
                                                <label className="text-black font-w200">Location</label>
                                                <div className="contact-occupation">
                                                    <input type="text" autoComplete="off"
                                                        name="Location" required="required"
                                                        value={editFormData.Location}
                                                        onChange={handleEditFormChange}
                                                        className="form-control" placeholder="Location"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary" onClick={handleEditFormSubmit}>Save</button>
                                    <button type="button" onClick={() => setEditModal(false)} className="btn btn-danger"> <i className="flaticon-delete-1"></i> Discard</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </Modal>
            </div>
            <div className="col">
                {contacts.map((contact, index) => (
                    <div className="col-xl-12 col-xxl-4 col-lg-6 col-md-6 col-sm-6" key={index}>
                        <div className="card">

                            <Table responsive>
                                <td>
                                    NAME
                                </td>
                                <td>
                                    EMAIL
                                </td>
                                <td>
                                    PHONE NUMBER 1
                                </td>
                                <td>
                                    PHONE NUMBER 2
                                </td>
                                <td>
                                    PHONE NUMBER 3
                                </td>
                                <td>
                                    OWNERSHIP PERCENTAGE
                                </td>
                                <td></td>
                                <tbody>
                                    <tr>
                                        <td>{contact.Cust_Id}</td>
                                        <td>{contact.Date_Join}</td>
                                        <td>{contact.Cust_Name}</td>
                                        <td>{contact.Location}</td>
                                        <td></td>
                                        <td><ProgressBar variant="success" now="0" /> </td>
                                        <td>0 % </td>
                                        <td>
                                            <div className="d-flex">
                                                <Button className="btn btn-primary shadow btn-xs sharp mr-1" onClick={(event) => handleEditClick(event, contact)}>
                                                    <i className="fa fa-pencil"></i>
                                                </Button>
                                                <Button className="btn btn-danger shadow btn-xs sharp" onClick={() => handleDeleteClick(contact.id)}>
                                                    <i className="fa fa-trash"></i>
                                                </Button>
                                            </div>
                                        </td>

                                    </tr>

                                </tbody>
                            </Table>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AnAddProperty;