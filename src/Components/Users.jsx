import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Users = () => {
    const initialUsers = useLoaderData()
    const [users, setUsers] = useState(initialUsers)
    const deleteUsers = (id) =>{
        Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then(result =>{
                if(result.isConfirmed){
                    fetch(`https://coffee-shop-server-two-kappa.vercel.app/users/${id}`,{
                        method:"DELETE"
                    })
                    .then(res => res.json())
                    .then(data =>{
                        // console.log(data);
                        if(data.deletedCount){
                             Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success",
                      });
                      const remaining = users.filter(user => user._id !== id)
                      setUsers(remaining)
                        }
                    })
                }
            })
    }

    return (
        <div className="my-10">
            <h2 className="rancho text-center text-5xl underline font-medium">All Users Details</h2>
            <div className="w-full p-2 bg-[#F4F3F0] border border-neutral-300 rounded-xl md:w-7xl mx-auto my-10">
            <div className="overflow-x-auto">
  <table className="table font-mono">
    {/* head */}
    <thead className="choco">
      <tr>
        <th>
       No
        </th>
        <th>Name</th>
        <th>Email Address</th>
        <th>Phone No</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className="">
      {
        users.map((user,index )=> <tr key={user._id} className="shadow hover:bg-gray-50">
        <th>
          <label className="text-base">
            {index + 1}
          </label>
        </th>
        <td className="">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt={user.name}/>
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
            </div>
          </div>
        </td>
        <td>
              {user.email}
        </td>
        <td>{user.number}</td>
        <th className="">
          <button onClick={()=>deleteUsers(user._id)} className="btn mx-1 p-2 md:p-3 rounded-md bg-red-500 btn-sm"><FaTrash className="text-white" /></button>
          <button className="btn mx-1 btn-sm p-2 md:p-3 rounded-md bg-black "> <FaEdit className="text-white" /></button>
        </th>
      </tr>
   )
      }
    </tbody>
   
  </table>
</div>
        </div>
        </div>
    );
};

export default Users;