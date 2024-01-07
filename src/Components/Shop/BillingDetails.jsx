import React, { useState } from "react";
import Select from "react-select";
import YourPurchase from "./YourPurchase";

const BillingDetails = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: null,
    streetAddress: "",
    apartment: "",
    townCity: "",
    county: "",
    postcode: "",
    phone: "",
    email: "",
    createAccount: false,
    orderNotes: "",
  });

  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
    // Add more country options as needed
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleCountryChange = (selectedCountry) => {
    setFormData({
      ...formData,
      country: selectedCountry,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

    return (
      <div className="bg-zinc-100">
        <form
          className="container mx-auto font-bold text-zinc-500 space-y-6 p-4"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <h2 className="text-2xl ">BILLING DETAILS</h2>
            <div className="grid gap-6 grid-cols-2">
              <div className="space-y-4">
                <label htmlFor="firstName">
                  First name <span className="text-red-500">*</span>{" "}
                </label>{" "}
                <input
                  className="w-full p-2 shadow-lg outline-blue-500"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-4">
                <label htmlFor="lastName">
                  Last name <span className="text-red-500">*</span>{" "}
                </label>{" "}
                <input
                  className="w-full p-2 shadow-lg outline-blue-500"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <label htmlFor="companyName">Company name (optional)</label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="country">
                Country / Region <span className="text-red-500">*</span>{" "}
              </label>
              <Select
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                options={countryOptions}
                required
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="streetAddress">
                Street address <span className="text-red-500">*</span>{" "}
              </label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="text"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="apartment">House number and street name</label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="text"
                id="apartment"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="townCity">
                Town / City <span className="text-red-500">*</span>{" "}
              </label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="text"
                id="townCity"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="county">County (optional)</label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="text"
                id="county"
                name="county"
                value={formData.county}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="postcode">
                Postcode <span className="text-red-500">*</span>{" "}
              </label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="text"
                id="postcode"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="phone">
                Phone <span className="text-red-500">*</span>{" "}
              </label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-4">
              <label htmlFor="email">
                Email address <span className="text-red-500">*</span>{" "}
              </label>
              <input
                className="w-full p-2 shadow-lg outline-blue-500"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-4">
              <label>
                <input
                  type="checkbox"
                  name="createAccount"
                  checked={formData.createAccount}
                  onChange={handleChange}
                />
                Create an account?
              </label>
            </div>
          </div>
          <div>
            <h2>ADDITIONAL INFORMATION</h2>
            <div>
              <label htmlFor="orderNotes">Order notes (optional)</label>
              <textarea
                className="w-full p-2 shadow-lg outline-blue-500"
                id="orderNotes"
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>
          <button
            className="w-full py-4 bg-palevioletred text-white uppercase text-lg"
            type="submit"
          >
            Place Order
          </button>
          {/* <button className="w-full py-4 bg-palevioletred text-white uppercase text-lg" type="submit">Submit</button> */}
        </form>
      </div>
    );
};

export default BillingDetails;
