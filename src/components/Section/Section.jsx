import React from "react";
import Table from 'react-bootstrap/Table';

const Section = ({ users }) => {
console.log(users)
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.lastName}</td>
                        <td>{item.age}</td>
                    </tr>
                    )
                )}
             </tbody>
        </Table>
    )
};

export default Section;