// src/config/api.js

// ✅ Sirf yahan URL change karna hai — poori app mein automatic apply ho jayega
const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export default API_BASE_URL;