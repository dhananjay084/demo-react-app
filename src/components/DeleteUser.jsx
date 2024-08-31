import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";

function DeleteUser() {


    return (
        <>
            <div class="modal fade" id="exampleModalToggle1" aria-hidden="true" aria-labelledby="exampleModalToggle1Label" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered delete_modal">
                    <div class="modal-content">

                        <div class="modal-body delete_modal_body">
                            <div class="card">
                                <span>
                                    <span>
                                        <RiDeleteBin6Line />
                                    </span>

                                </span>
                                <div class="card-body">
                                    <h5 class="card-title">Are you sure you want to delete this?</h5>
                                    <p class="card-text">Proceeding with this action will delete the user profile!.</p>

                                </div>
                                <div className='actions'>
                                    <button className="delete-button" data-bs-dismiss="modal">No ,Stop</button>
                                    <button className="edit-button" data-bs-dismiss="modal">Yes ,Delete</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <a class="btn btn-primary delete_modal_button" data-bs-toggle="modal" href="#exampleModalToggle1" role="button">Delete User</a>
        </>
    );
}

export default DeleteUser;
