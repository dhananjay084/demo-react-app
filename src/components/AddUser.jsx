import React, { useEffect } from 'react';
import { FaUserLarge } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

function AddUser(props) {
    // Log props to check if modal is correctly passed
    console.log(props);

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className='modal_icon_wrapper'>
                                <FaUserLarge />
                            </span>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        
                            <form>
                                <div className="mb-1">
                                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="exampleInputName" aria-describedby="NameHelp" />
                                </div>

                                <div className="mb-1 password-input">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <div className="input-wrapper">
                                        <input type="password" className="form-control" id="exampleInputPassword1" />
                                        <span className="icon">
                                            <IoEyeOutline />
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-1 select-container">
                                    <label htmlFor="exampleInputSelect" className="form-label">Role</label>
                                    <div className="select-wrapper">
                                        <select className="form-control" id="exampleInputSelect" aria-describedby="selectHelp">
                                            <option selected>All</option>
                                            <option>Admin</option>
                                            <option>Accountant</option>
                                            <option>Sender</option>
                                        </select>
                                        <span className="icon">
                                            <FaAngleDown />
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-1">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="delete-button" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="edit-button">
                               Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <a className="btn btn-primary add_user" data-bs-toggle="modal" href="#exampleModalToggle" role="button">
                {props.modal === 'edit' ? 'Edit User' : 'Add New'}
            </a>
        </>
    );
}

export default AddUser;
