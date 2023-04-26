import React, {useEffect, useState} from "react";


function UserData(){
    const[data, setData] =useState([])
    useEffect(()=>{
        fetch("http://localhost:3003/users")
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(err=> console.log(err));
    },[])


    return(
        <div>
            <table class="table table-success table-striped  table-bordered table-responsive ">
  <thead class="table table-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Sex</th>
      <th scope="col">Mobile No.</th>
      <th scope="col">Address</th>
      <th scope="col">Govt ID</th>
      <th scope="col">Govt ID Number</th>
      <th scope="col">Title</th>
      <th scope="col">Guardian Details</th>
      <th scope="col">Nationality</th>

    </tr>
  </thead>
  <tbody>
  {data.map((user,index)=>{
                        return(
                            <tr key={index}>
                                <th scope="row">{user.name}</th>
                                <td>{user.dob}</td>
                                <td>{user.sex}</td>
                                <td>{user.number}</td>
                                <td>{user.address}</td>
                                <td>{user.govtid}</td>
                                <td>{user.idnumber}</td>
                                <td>{user.title}</td>
                                <td>{user.guardianname}</td>
                                <td>{user.nationality}</td>
                            </tr>
                    )})}

                </tbody>
</table>


        </div>
    )


}

export default UserData;