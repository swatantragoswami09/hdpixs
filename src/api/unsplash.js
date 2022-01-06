import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID thc1hEb-BPWhMDp12Wv8ZfYDoO9QzA9_oxLIFEEY8Wo",
  },
});
