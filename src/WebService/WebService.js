import axios from "axios";

const root_url = "http://localhost:5000/";

export async function get(url) {
  return await axios
    .get(root_url + url)
    .then((data) => data.data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}

export async function post(url, body) {
  return await axios
    .post(root_url + url, body)
    .then((data) => data.data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}

export async function put(url, body) {
  return await axios
    .put(root_url + url, body)
    .then((data) => data.data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      if (err) {
        return err;
      }
    });
}

export async function remove(url) {
  return await axios
    .delete(root_url + url)
    .then((data) => data.data)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
}
