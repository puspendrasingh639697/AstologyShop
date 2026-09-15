// import React, { useState } from "react";
// import { BiEdit } from "react-icons/bi";

// export default function ProfileTab({ profile, setProfile }) {
//   const [isEditing, setIsEditing] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//     alert("Profile updated successfully!");
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center pb-4 border-b border-stone-200">
//         <div>
//           <h3 className="text-base font-serif font-bold text-[#4a2e18]">Personal Profile</h3>
//           <p className="text-xs text-stone-500">Manage your personal details and preferences.</p>
//         </div>
//         {!isEditing && (
//           <button 
//             onClick={() => setIsEditing(true)}
//             className="bg-[#8c0a15] hover:bg-[#722d21] text-white text-xs font-bold uppercase px-4 py-2 rounded-sm cursor-pointer flex items-center gap-1.5 transition"
//           >
//             <BiEdit /> Edit Profile
//           </button>
//         )}
//       </div>

//       {!isEditing ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-serif">
//           <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
//             <span className="text-stone-400 block uppercase font-bold text-[10px]">Full Name</span>
//             <p className="font-bold text-stone-800 text-sm">{profile.fullName}</p>
//           </div>
//           <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
//             <span className="text-stone-400 block uppercase font-bold text-[10px]">Mobile Number</span>
//             <p className="font-bold text-stone-800 text-sm">{profile.phone}</p>
//           </div>
//           <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
//             <span className="text-stone-400 block uppercase font-bold text-[10px]">Email Address</span>
//             <p className="font-bold text-stone-800 text-sm">{profile.email}</p>
//           </div>
//           <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
//             <span className="text-stone-400 block uppercase font-bold text-[10px]">Gender & DOB</span>
//             <p className="font-bold text-stone-800 text-sm">{profile.gender} | {profile.dob}</p>
//           </div>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="space-y-4 text-xs">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Full Name</label>
//               <input 
//                 type="text" 
//                 value={profile.fullName}
//                 onChange={(e) => setProfile({...profile, fullName: e.target.value})}
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Phone Number</label>
//               <input 
//                 type="text" 
//                 value={profile.phone}
//                 onChange={(e) => setProfile({...profile, phone: e.target.value})}
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Email Address</label>
//               <input 
//                 type="email" 
//                 value={profile.email}
//                 onChange={(e) => setProfile({...profile, email: e.target.value})}
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block font-bold uppercase text-stone-600 mb-1">Date of Birth</label>
//               <input 
//                 type="date" 
//                 value={profile.dob}
//                 onChange={(e) => setProfile({...profile, dob: e.target.value})}
//                 className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
//               />
//             </div>
//           </div>

//           <div className="flex gap-3 pt-2">
//             <button 
//               type="button"
//               onClick={() => setIsEditing(false)}
//               className="bg-stone-200 hover:bg-stone-300 text-stone-700 px-5 py-2.5 font-bold uppercase cursor-pointer"
//             >
//               Cancel
//             </button>
//             <button 
//               type="submit"
//               className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-5 py-2.5 font-bold uppercase tracking-wider cursor-pointer"
//             >
//               Save Changes
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// }


import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import axios from "axios";

export default function ProfileTab({ profile, setProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const token = localStorage.getItem('token');
      
      // ✅ Phone number se +91 aur spaces hata kar sirf 10 digits clean kar rahe hain
      const cleanedPhone = (profile.phone || '').replace(/\D/g, '').slice(-10);

      const response = await axios.put(
        'http://localhost:5000/api/user/profile', 
        {
          name: profile.fullName,
          phone: cleanedPhone, // Cleaned 10-digit phone
          email: profile.email,
          gender: profile.gender,
          dob: profile.dob
        }, 
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // LocalStorage update karein
      const localUser = JSON.parse(localStorage.getItem('user') || '{}');
      const updatedUser = { 
        ...localUser, 
        name: profile.fullName, 
        phone: cleanedPhone,
        email: profile.email,
        gender: profile.gender,
        dob: profile.dob
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      setSuccessMsg("Profile updated successfully!");
      setIsEditing(false);
    } catch (err) {
      console.error("Failed to update profile:", err);
      setErrorMsg(err.response?.data?.message || "Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center pb-4 border-b border-stone-200">
        <div>
          <h3 className="text-base font-serif font-bold text-[#4a2e18]">Personal Profile</h3>
          <p className="text-xs text-stone-500">Manage your personal details and preferences.</p>
        </div>
        {!isEditing && (
          <button 
            onClick={() => { setIsEditing(true); setSuccessMsg(""); setErrorMsg(""); }}
            className="bg-[#8c0a15] hover:bg-[#722d21] text-white text-xs font-bold uppercase px-4 py-2 rounded-sm cursor-pointer flex items-center gap-1.5 transition"
          >
            <BiEdit /> Edit Profile
          </button>
        )}
      </div>

      {successMsg && <div className="bg-emerald-100 text-emerald-800 p-3 rounded text-xs">{successMsg}</div>}
      {errorMsg && <div className="bg-rose-100 text-rose-800 p-3 rounded text-xs">{errorMsg}</div>}

      {!isEditing ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-serif">
          <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
            <span className="text-stone-400 block uppercase font-bold text-[10px]">Full Name</span>
            <p className="font-bold text-stone-800 text-sm">{profile.fullName || "N/A"}</p>
          </div>
          <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
            <span className="text-stone-400 block uppercase font-bold text-[10px]">Mobile Number</span>
            <p className="font-bold text-stone-800 text-sm">{profile.phone || "N/A"}</p>
          </div>
          <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
            <span className="text-stone-400 block uppercase font-bold text-[10px]">Email Address</span>
            <p className="font-bold text-stone-800 text-sm">{profile.email || "N/A"}</p>
          </div>
          <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm space-y-1">
            <span className="text-stone-400 block uppercase font-bold text-[10px]">Gender & DOB</span>
            <p className="font-bold text-stone-800 text-sm">
              {profile.gender || "Not Specified"} | {profile.dob || "Not Provided"}
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Full Name</label>
              <input 
                type="text" 
                value={profile.fullName || ""}
                onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Phone Number</label>
              <input 
                type="text" 
                value={profile.phone || ""}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Email Address</label>
              <input 
                type="email" 
                value={profile.email || ""}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
                required
                disabled={loading}
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Date of Birth</label>
              <input 
                type="date" 
                value={profile.dob || ""}
                onChange={(e) => setProfile({...profile, dob: e.target.value})}
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
                disabled={loading}
              />
            </div>
            <div>
              <label className="block font-bold uppercase text-stone-600 mb-1">Gender</label>
              <select 
                value={profile.gender || "Male"}
                onChange={(e) => setProfile({...profile, gender: e.target.value})}
                className="w-full p-2.5 border border-stone-300 rounded-sm bg-white focus:outline-none"
                disabled={loading}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button 
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-stone-200 hover:bg-stone-300 text-stone-700 px-5 py-2.5 font-bold uppercase cursor-pointer"
              disabled={loading}
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="bg-[#4a2e18] hover:bg-[#321e10] text-white px-5 py-2.5 font-bold uppercase tracking-wider cursor-pointer disabled:bg-stone-400"
              disabled={loading}
            >
              {loading ? "Saving to DB..." : "Save Changes"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}