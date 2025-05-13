import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    const newCoffee = Object.fromEntries(formData.entries());

    console.log(newCoffee);

    // send coffee data to the database

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully",
            text: "You clicked the button!",
            icon: "success",
          });
          console.log("After added Coffee", data);
          form.reset();
        }
      });
  };

  return (
    <div>
      <div>
        <div className="bg-[#F4F3F0] min-h-screen flex items-center justify-center px-4 py-8">
          <div className="max-w-4xl w-full bg-[#F4F3F0] p-8 rounded-md">
            <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">
              Add New Coffee
            </h2>
            <p className="text-center text-sm text-gray-600 mb-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleAddCoffee} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Chef</label>
                  <input
                    type="text"
                    name="chef"
                    placeholder="Enter coffee chef"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Supplier</label>
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee supplier"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Taste</label>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Enter coffee taste"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Price</label>
                  <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Details</label>
                  <input
                    type="text"
                    name="details"
                    placeholder="Enter coffee details"
                    className="w-full border border-gray-300 px-4 py-2 rounded"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-medium">Photo</label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo URL"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-[#D2B48C] text-black py-3 mt-4 rounded border border-black hover:bg-[#c4a87a] transition"
              >
                Add Coffee
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
