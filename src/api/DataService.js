import http from "./CrudApiConnect";


const get = id => {
  return http.get(`/data/${id}`);
};

const create = data => {
  return http.post("/data", data);
};

const update = (id, data) => {
  return http.put(`/data/${id}`, data);
};

const remove = id => {
  return http.delete(`/data/${id}`);
};


// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };

export default {
  get,
  create,
  update,
  remove,
};