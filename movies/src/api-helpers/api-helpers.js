import axios from "axios";

export const getAllMovies = async () => {
  const res = await axios.get("/movie").catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data!");
  }
  const data = await res.data;
  return data;
};

export const sendUserAuthRequest = async (data, signup) => {
  try {
    const res = await axios.post(`/user/${signup ? "signup" : "login"}`, {
      name: signup ? data.name : "",
      email: data.email,
      password: data.password,
    });

    if (res && (res.status === 200 || res.status === 201)) {
      const resData = res.data;
      return resData;
    } else {
      console.log("Unexpected Error Occurred!");
    }
  } catch (err) {
    console.log(err);
  }
};

export const sendAdminAuthRequest = async (data) => {
  const res = await axios
    .post("/admin/login", {
      email: data.email,
      password: data.password,
    })
    .catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpected Error!");
  }

  const resData = await res.data;
  return resData;
};
