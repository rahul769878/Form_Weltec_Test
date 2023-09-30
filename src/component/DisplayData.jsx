import React from 'react';

const DisplayData = (props) => {
    return <>
    {props.data.map((item)=>{
        return <table class="table container mt-5">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{item.title}</th>
            <td>{item.contactNumber}</td>
            <td>{item.gender}</td>
            <td>{item.email}</td>
          </tr>
        </tbody>
      </table>
    })}
    </>
}



export default DisplayData;