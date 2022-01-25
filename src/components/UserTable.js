import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserTable() {

    const [users, setUsers] = useState({ users: [] });

    useEffect(() => {
        const fetchUserList = async () => {
            const { data } = await axios("https://jsonplaceholder.typicode.com/users");
            setUsers({ users: data });
        };
        fetchUserList();
    }, [setUsers]);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.users && users.users.map((item)=> (
                            <tr key = {item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.suite + ' ' + item.address.street + ' ' +item.address.city + ' ' + item.address.zipcode}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                            <td>{item.company.name + ' ' + item.company.catchPhrase + ' ' + item.company.bs}</td>
                          </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default UserTable;
