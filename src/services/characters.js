import axios from "axios";
const baseUrl = "https://hp-api.onrender.com/api/characters";

// const getAll = async () => {
//   const req = await axios.get(baseUrl);
//   const data = req.data;
//   return data;
// };
const getByName = async (name) => {
  const req = await axios.get(`${baseUrl}`);
  const data = req.data.find((char) =>
    char.name.toLowerCase().includes(name.toLowerCase())
  );
  return data;
};

export default { getByName };
