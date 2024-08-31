import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { CiGrid2H } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import Cards from './Cards'
import UserList from './List';
import AddUser from './AddUser';
function SubHeader() {
    const [view, setView] = useState('card');
    const [show, setShow] = useState(false);

    const showmenu=()=>{
        setShow(!show)
    }
    return (
        <>
            <div className='sub_header'>
                <p>Users</p>
                <div className='right_subheader_wrapper'>
                    <div className='right_subheader'>
                        <span className='dropdown'>
                            <p onClick={showmenu}>All</p>
                            <FaAngleDown onClick={showmenu} />
                            {show &&
                                <span>
                                <ul>
                                    <li>
                                       All
                                    </li>
                                    <li>
                                        Accountant
                                    </li>
                                    <li>
                                        Sender
                                    </li>
                                    <li>
                                        Admin
                                    </li>
                                </ul>
                            </span>
}
                        </span>
                        <span className='view_icons'>
                            <span className={view==='card'?'gird_view_icon active':'gird_view_icon'} >
                            <CiGrid2H onClick={() => setView('card')} />
                            </span>
                            <span className={view==='list'?'list_view_icon active':'list_view_icon'}>
                            <LuListFilter  onClick={() => setView('list')} />

                            </span>
                        </span>
                        <AddUser/>
                    
                    </div>
                </div>
            </div>
            {
                view == 'card' ?
                    <Cards />
                    :
                    <UserList />
            }
        </>
    )
}
export default SubHeader