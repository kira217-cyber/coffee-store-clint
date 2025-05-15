import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { name, price, photo, supplier, taste, details, chef,_id } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const updateCoffee = Object.fromEntries(formData.entries());

    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Coffee updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(data);
      });
  };

  return (
    <div>
      <div className="min-h-screen bg-[#f4f1ed] px-4 py-8 md:px-20">
        <a
          href="/"
          className="text-lg font-semibold text-indigo-800 hover:underline mb-6 inline-block"
        >
          ← Back to home
        </a>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-serif">
            Update Existing Coffee Details
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          <form
            onSubmit={handleUpdateCoffee}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left"
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="w-full p-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Chef</label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                className="w-full p-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Supplier</label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="w-full p-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Taste</label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="w-full p-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Price</label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                className="w-full p-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Details</label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="w-full p-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-medium">Photo</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="w-full p-2 rounded bg-white border border-gray-300"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full hover:cursor-pointer bg-[#b6895b] hover:bg-[#a3784f] text-white font-semibold py-2 px-4 rounded border border-black transition"
              >
                Update Coffee Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
