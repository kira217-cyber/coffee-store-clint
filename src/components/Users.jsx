import React, { useState } from "react";
import { useLoaderData } from "react-router";
import User from "./User";
import Swal from "sweetalert2";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        console.log(result.isConfirmed);
        if (result.isConfirmed) {
          // send and delete coffee data to the database
          fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Coffee has been deleted.",
                  icon: "success",
                });
  
                // remove the coffee from the state
                const remainingUsers = users.filter(cof=> cof._id !== id);
                setUsers(remainingUsers) 
              }
            });
        }
      });
    };

  return (
    <div>
      <h1>All Users is Here</h1>

      <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                No
              </th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
                <tr user={user} key={user._id}>
              <th>
                  {index + 1}
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50">{user.address}</div>
                  </div>
                </div>
              </td>
              <td>
                {user.phone}
              </td>
              <td>{user.email}</td>
              <th>
                <button className="btn btn-ghost btn-xs">V</button>
                <button className="btn btn-ghost btn-xs">E</button>
                <button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs">X</button>
              </th>
            </tr>
          
        ))}
            
          </tbody>
        </table>
      </div>
    </div>
        
      </div>
  );
};

export default Users;
