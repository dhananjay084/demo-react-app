import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import AddUser from './AddUser';
import DeleteUser from './DeleteUser';

function Card() {
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
        <div className='cards'>
            {data.map((user, index) => (
                <div key={index} className='card'>
                    <div className='user_info'>
                        <span>
                            <FaUserCircle className='user-icon' />
                        </span>
                        <span>
                            <p className='user-name'>{user.Name}</p>
                            <p className='user-designation'>{user.Designation}</p>
                        </span>

                    </div>
                    <p className='user-email'><MdOutlineMailOutline/>{user.Email}</p>
                    <div className="actions">
                        {/* <button className="delete-button">Delete</button> */}
                        {/* <button className="edit-button">Edit</button> */}
                        <DeleteUser/>
                        <AddUser modal='edit'/>
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default Card;
