import axios from "axios";

export const backendApi= axios.create({ baseURL: "https://localhost:3000/api" });