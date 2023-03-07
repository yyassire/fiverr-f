import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "fiverr");

  try {
    // dmm8xnfmd
    const imgUrl = "https://api.cloudinary.com/v1_1/dmm8xnfmd/image/upload";
    const res = await axios.post(imgUrl, data);
    // const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data);

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
