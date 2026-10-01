

// import React, { useState, useEffect } from "react";
// import { BiPlusCircle, BiTrash } from "react-icons/bi";
// import axios from "axios";
// import API_BASE_URL from "../../config/api"; // ✅ Central URL (path apne folder ke hisaab se adjust karein)

// export default function AddressesTab() {
//   const [addresses, setAddresses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [showAddBox, setShowAddBox] = useState(false);
//   const [newAddress, setNewAddress] = useState({ type: "Home", text: "", phone: "" });
//   const [errorMsg, setErrorMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");

//   // 1. Fetch addresses from backend on load
//   useEffect(() => {
//     fetchAddresses();
//   }, []);

//   const fetchAddresses = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       // ✅ API_BASE_URL use karein
//       const response = await axios.get(`${API_BASE_URL}/user/addresses`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       setAddresses(response.data.addresses || response.data || []);
//     } catch (err) {
//       console.error("Failed to fetch addresses:", err);
//       setErrorMsg("Failed to load saved addresses.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // 2. Add new address to backend
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!newAddress.text) return;

//     try {
//       const token = localStorage.getItem('token');
//       // ✅ API_BASE_URL use karein
//       const response = await axios.post(
//         `${API_BASE_URL}/user/addresses`,
//         newAddress,
//         {
//           headers: { Authorization: `Bearer ${token}` }
//         }
//       );

//       setAddresses(response.data.addresses || [...addresses, response.data.address || newAddress]);
//       setNewAddress({ type: "Home", text: "", phone: "" });
//       setShowAddBox(false);
//       setSuccessMsg("New address added successfully!");
//       fetchAddresses();
//     } catch (err) {
//       console.error("Failed to save address:", err);
//       alert(err.response?.data?.message || "Failed to save address.");
//     }
//   };

//   // 3. Delete address from backend
//   const handleDelete = async (addrId) => {
//     if (!window.confirm("Are you sure you want to delete this address?")) return;

//     try {
//       const token = localStorage.getItem('token');
//       // ✅ API_BASE_URL use karein
//       await axios.delete(`${API_BASE_URL}/user/addresses/${addrId}`, {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       setAddresses(addresses.filter(a => (a._id || a.id) !== addrId));
//       setSuccessMsg("Address deleted successfully!");
//     } catch (err) {
//       console.error("Failed to delete address:", err);
//       alert(err.response?.data?.message || "Failed to delete address.");
//     }
//   };

//   if (loading) {
//     return <div className="text-xs text-stone-500 py-6 text-center">Loading your addresses...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center pb-4 border-b border-stone-200">
//         <div>
//           <h3 className="text-base font-serif font-bold text-[#4a2e18]">Saved Addresses</h3>
//           <p className="text-xs text-stone-500">Manage your delivery locations.</p>
//         </div>
//         <button
//           onClick={() => { setShowAddBox(!showAddBox); setSuccessMsg(""); }}
//           className="bg-[#8c0a15] hover:bg-[#722d21] text-white text-xs font-bold uppercase px-4 py-2 rounded-sm cursor-pointer flex items-center gap-1.5 transition"
//         >
//           <BiPlusCircle /> Add Address
//         </button>
//       </div>

//       {successMsg && <div className="bg-emerald-100 text-emerald-800 p-3 rounded text-xs">{successMsg}</div>}
//       {errorMsg && <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">{errorMsg}</div>}

//       {showAddBox && (
//         <form onSubmit={handleSubmit} className="bg-[#fff9f0] border border-amber-200 p-4 rounded-sm space-y-3 text-xs">
//           <h4 className="font-bold text-[#8b3a2b] uppercase">Add New Delivery Address</h4>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Address Label</label>
//               <select
//                 value={newAddress.type}
//                 onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
//                 className="w-full p-2 border border-stone-300 rounded-sm bg-white"
//               >
//                 <option value="Home">Home</option>
//                 <option value="Office">Office</option>
//                 <option value="Other">Other</option>
//               </select>
//             </div>
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Phone Number</label>
//               <input
//                 type="text"
//                 placeholder="+91 98765 43210"
//                 value={newAddress.phone}
//                 onChange={(e) => setNewAddress({...newAddress, phone: e.target.value})}
//                 className="w-full p-2 border border-stone-300 rounded-sm bg-white"
//                 required
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block font-bold uppercase text-stone-600 mb-1">Full Address Details</label>
//             <textarea
//               rows="2"
//               placeholder="House/Flat No., Street, City, Pincode"
//               value={newAddress.text}
//               onChange={(e) => setNewAddress({...newAddress, text: e.target.value})}
//               className="w-full p-2 border border-stone-300 rounded-sm bg-white"
//               required
//             ></textarea>
//           </div>
//           <div className="flex gap-2">
//             <button type="submit" className="bg-[#4a2e18] text-white px-4 py-2 font-bold uppercase rounded-sm cursor-pointer">Save Address</button>
//             <button type="button" onClick={() => setShowAddBox(false)} className="bg-stone-200 text-stone-700 px-4 py-2 font-bold uppercase rounded-sm cursor-pointer">Cancel</button>
//           </div>
//         </form>
//       )}

//       <div className="grid grid-cols-1 gap-4 font-serif">
//         {addresses.length === 0 ? (
//           <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500">
//             No saved addresses found. Add a new address above.
//           </div>
//         ) : (
//           addresses.map((addr) => {
//             const addrId = addr._id || addr.id;
//             return (
//               <div key={addrId} className="bg-stone-50 border border-stone-200 rounded-sm p-4 flex justify-between items-start text-xs">
//                 <div className="space-y-1">
//                   <span className="bg-[#8b3a2b]/10 text-[#8b3a2b] font-bold px-2 py-0.5 rounded text-[10px] uppercase">{addr.type}</span>
//                   <p className="font-bold text-stone-800 mt-1">{addr.text}</p>
//                   <p className="text-stone-500 text-[11px]">Phone: {addr.phone}</p>
//                 </div>
//                 <button
//                   onClick={() => handleDelete(addrId)}
//                   className="text-stone-400 hover:text-red-600 cursor-pointer"
//                 >
//                   <BiTrash className="text-base" />
//                 </button>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// }



// src/pages/CustomerAccount/AddressesTab.jsx
import React, { useState, useEffect } from "react";
import { BiPlusCircle, BiTrash } from "react-icons/bi";
import apiClient from "../../config/apiClient";   // ✅ apiClient use karo

export default function AddressesTab() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddBox, setShowAddBox] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: "Home",
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    isDefault: false,
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // ✅ Fetch addresses on load
  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      setLoading(true);
      setErrorMsg("");

      console.log("🔍 Fetching addresses...");

      const response = await apiClient.get("/user/addresses");

      console.log("✅ Addresses response:", response.data);

      const fetchedAddresses =
        response.data.addresses || response.data || [];

      setAddresses(fetchedAddresses);
    } catch (err) {
      console.error("❌ Failed to fetch addresses:", err);
      setErrorMsg(
        err.response?.data?.message ||
          "Failed to load saved addresses."
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ Add new address
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zipCode) {
      alert("Please fill all required fields");
      return;
    }

    try {
      console.log("🔍 Adding address:", newAddress);

      const response = await apiClient.post("/user/addresses", newAddress);

      console.log("✅ Address added:", response.data);

      const updatedAddresses =
        response.data.addresses || response.data || [];

      setAddresses(updatedAddresses);

      // Reset form
      setNewAddress({
        type: "Home",
        fullName: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        isDefault: false,
      });

      setShowAddBox(false);
      setSuccessMsg("New address added successfully!");
      setErrorMsg("");

      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("❌ Failed to save address:", err);
      alert(err.response?.data?.message || "Failed to save address.");
    }
  };

  // ✅ Delete address
  const handleDelete = async (addrId) => {
    if (!window.confirm("Are you sure you want to delete this address?")) return;

    try {
      console.log("🔍 Deleting address:", addrId);

      await apiClient.delete(`/user/addresses/${addrId}`);

      setAddresses(
        addresses.filter((a) => (a._id || a.id) !== addrId)
      );

      setSuccessMsg("Address deleted successfully!");
      setErrorMsg("");

      setTimeout(() => setSuccessMsg(""), 3000);
    } catch (err) {
      console.error("❌ Failed to delete address:", err);
      alert(err.response?.data?.message || "Failed to delete address.");
    }
  };

  if (loading) {
    return (
      <div className="text-xs text-stone-500 py-6 text-center">
        Loading your addresses...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
        <div>
          <h3 className="text-base  font-bold text-[#4a2e18]">
            Saved Addresses
          </h3>
          <p className="text-xs text-black">
            Manage your delivery locations.
          </p>
        </div>
        <button
          onClick={() => {
            setShowAddBox(!showAddBox);
            setSuccessMsg("");
          }}
          className="bg-gradient-to-r from-red-800 to-red-600 hover:bg-[#722d21] text-white text-xs font-bold uppercase px-4 py-2 rounded-sm cursor-pointer flex items-center gap-1.5 transition"
        >
          <BiPlusCircle /> Add Address
        </button>
      </div>

      {/* Success/Error Messages */}
      {successMsg && (
        <div className="bg-emerald-100 text-black p-3 rounded text-xs">
          {successMsg}
        </div>
      )}
      {errorMsg && (
        <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">
          {errorMsg}
        </div>
      )}

      {/* Add Address Form */}
      {showAddBox && (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-black/20 p-4 rounded-sm space-y-3 text-xs"
        >
          <h4 className="font-bold text-black uppercase">
            Add New Delivery Address
          </h4>

          {/* Type + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold uppercase text-black mb-1">
                Address Label
              </label>
              <select
                value={newAddress.type}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, type: e.target.value })
                }
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              >
                <option value="Home">Home</option>
                <option value="Office">Office</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Receiver name"
                value={newAddress.fullName}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, fullName: e.target.value })
                }
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="9876543210"
              value={newAddress.phone}
              onChange={(e) =>
                setNewAddress({ ...newAddress, phone: e.target.value })
              }
              className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              required
            />
          </div>

          {/* Street */}
          <div>
            <label className="block font-bold uppercase text-stone-600 mb-1">
              Street Address
            </label>
            <input
              type="text"
              placeholder="House/Flat No., Street, Landmark"
              value={newAddress.street}
              onChange={(e) =>
                setNewAddress({ ...newAddress, street: e.target.value })
              }
              className="w-full p-2 border border-stone-300 rounded-sm bg-white"
              required
            />
          </div>

          {/* City + State + ZipCode */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                value={newAddress.city}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, city: e.target.value })
                }
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
                required
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">
                State
              </label>
              <input
                type="text"
                placeholder="State"
                value={newAddress.state}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, state: e.target.value })
                }
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
                required
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">
                Pincode
              </label>
              <input
                type="text"
                placeholder="110001"
                value={newAddress.zipCode}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, zipCode: e.target.value })
                }
                className="w-full p-2 border border-stone-300 rounded-sm bg-white"
                required
              />
            </div>
          </div>

          {/* Default checkbox */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={newAddress.isDefault}
              onChange={(e) =>
                setNewAddress({ ...newAddress, isDefault: e.target.checked })
              }
            />
            <span className="text-xs font-bold text-blue-500">
              Set as default address
            </span>
          </label>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-red-800 to-red-600 text-white px-4 py-2 font-bold uppercase rounded-sm cursor-pointer hover:bg-[#321e10] transition"
            >
              Save Address
            </button>
            <button
              type="button"
              onClick={() => setShowAddBox(false)}
              className="bg-green-500 text-white px-4 py-2 font-bold uppercase rounded-sm cursor-pointer hover:bg-stone-300 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Addresses List */}
      <div className="grid grid-cols-1 gap-4 font-serif">
        {addresses.length === 0 ? (
          <div className="bg-stone-50 border border-stone-200 rounded-sm p-6 text-center text-xs text-stone-500">
            No saved addresses found. Add a new address above.
          </div>
        ) : (
          addresses.map((addr) => {
            const addrId = addr._id || addr.id;
            return (
              <div
                key={addrId}
                className="bg-gradient-to-r from-red-800 to-red-600 border border-stone-200 rounded-sm p-4 flex justify-between items-start text-x1"
              >
                <div className="space-y-1">
                  <span className="bg-[#8b3a2b]/10 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                    {addr.type || "Home"}
                  </span>

                  {addr.fullName && (
                    <p className="font-bold text-white mt-1">
                      {addr.fullName}
                    </p>
                  )}

                  <p className="font-bold text-white mt-1">
                    {addr.street}, {addr.city}, {addr.state} - {addr.zipCode}
                  </p>

                  {addr.phone && (
                    <p className="text-white text-[11px]">
                      Phone: {addr.phone}
                    </p>
                  )}

                  {addr.isDefault && (
                    <span className="inline-block text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">
                      Default
                    </span>
                  )}
                </div>

                <button
                  onClick={() => handleDelete(addrId)}
                  className="text-white hover:text-red-600 cursor-pointer"
                >
                  <BiTrash className="text-base" />
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}