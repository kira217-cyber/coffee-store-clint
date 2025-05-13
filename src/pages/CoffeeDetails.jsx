import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
    const {name, photo,chef,price,supplier,details,taste} = coffee
  return (
    <div>
      <div className="min-h-screen bg-[#f8f6f3] p-6">
        <Link to='/'>
        <a
          className="text-sm text-gray-700 font-bold mb-6 inline-block hover:text-[#2e2e2e]"
        >
          ← Back to home
        </a>
        </Link>

        <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-md">
          <img
            src={photo}
            alt=""
            className="w-48 md:w-64 object-contain"
          />

          <div className="text-gray-800">
            <h2 className="text-2xl font-bold font-serif text-[#4b1e1e] mb-4 drop-shadow">
              Niceties
            </h2>
            <p>
              <span className="font-semibold">Name:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Chef:</span> {chef}
            </p>
            <p>
              <span className="font-semibold">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-semibold">Taste:</span> {taste}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {price}
            </p>
            <p>
              <span className="font-semibold">Details:</span> {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
