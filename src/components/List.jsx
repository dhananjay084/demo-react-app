import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
function UserList() {

    const data = [
        {
            Name: 'Wade Warren',
            Designation: 'Admin',
            Email: 'wade.warren@example.com'
        },
        {
            Name: 'Darrel Steward',
            Designation: 'Mail Person',
            Email: 'Darrel.Steward@example.com'
        },
        {
            Name: 'Robert Fox',
            Designation: 'Accountant',
            Email: 'Robert.Fox@example.com'
        },
        {
            Name: 'Arlene McCoy',
            Designation: 'Accountant',
            Email: 'Arlene.McCoy@example.com'
        }
        ,
        {
            Name: 'Arlene McCoy',
            Designation: 'Accountant',
            Email: 'Arlene.McCoy@example.com'
        }
        ,
        {
            Name: 'Arlene McCoy',
            Designation: 'Accountant',
            Email: 'Arlene.McCoy@example.com'
        }
        ,
        {
            Name: 'Arlene McCoy',
            Designation: 'Accountant',
            Email: 'Arlene.McCoy@example.com'
        }
        ,
        {
            Name: 'Arlene McCoy',
            Designation: 'Accountant',
            Email: 'Arlene.McCoy@example.com'
        }
    ];
    return (
        <div className='user_list'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Role</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((user, index) => (
                            <tr key={index}>
                                <td scope="row" className='list_name'><FaUserCircle/>{user.Name}</td>
                                <td>{user.Designation}</td>
                                <td>{user.Email}</td>
                                <td className='list_actions'><span className='edit_icon'><MdOutlineModeEdit  /></span><span className='delete_icon' ><RiDeleteBin6Line /></span></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserList;
