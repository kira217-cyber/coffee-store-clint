import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price, photo, _id } = coffee;

  const handleDelete = () => {
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
        fetch(`http://localhost:3000/coffees/${_id}`, {
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
              console.log("after delete", data);
            }
          });
      }
    });
  };

  return (
    <div className="bg-[#F4F3F0] p-4 rounded-md flex items-center justify-between shadow-md w-full mx-auto my-4">
      {/* Coffee Image */}
      <img
        src={photo} // Replace with your actual image URL
        alt=""
        className="w-24 h-24 object-cover rounded"
      />

      {/* Coffee Details */}
      <div className="flex-1 ml-6 space-y-1">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-semibold">Price:</span>$ {price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center space-y-2">
        <Link to={`/coffee/${_id}`}>
          <button className="bg-[#D2B48C] hover:bg-[#c4a87a] text-white p-2 rounded">
            <FaEye />
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-[#3C3C3C] hover:bg-[#2e2e2e] text-white p-2 rounded">
            <FaEdit />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] hover:bg-red-600 text-white p-2 rounded"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
