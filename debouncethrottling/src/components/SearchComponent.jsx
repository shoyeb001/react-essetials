import React from 'react'
import { useState } from 'react'
import { fetchUsers } from '../utils/fetchUsers';
import { useEffect } from 'react';
import { useDebouce } from '../utils/hook';
import { de } from '@faker-js/faker';

const SearchComponent = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const debounceValue = useDebouce(search)
    const getUsers = async()=>{
        const data = await fetchUsers(search);
        console.log(search)
        setUsers(data);
    }

    useEffect(()=>{
        getUsers()
    },[debounceValue])
    
  return (
    <div className="search">
        <input value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <div className='users'>
            {
                users.map((item, i)=>(
                    <div className='user' key={i}>
                    <h1>{item?.name}</h1>
                </div>
                ))
            }
       
        </div>
    </div>
  )
}

export default SearchComponent