import axios from 'axios';

export default axios.create({
  baseURL: `https://thingproxy.freeboard.io/fetch/https://5f6c76d934d1ef0016d581d5.mockapi.io/data`,
});
