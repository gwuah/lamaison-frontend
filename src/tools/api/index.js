const {post, get, put, patch, delete:Delete} = require('axios');

// declare constants
const BASE_URL = ''
const API_VER = 'api/v1'

module.exports = {
  async login(p) {
    const {data} = await post(`${BASE_URL}/login`, p);
    return data
  },
  async register(p) {
    const {data} = await post(`${BASE_URL}/${API_VER}/owners`, p);
    return data
  },
  async createHousing(p) {
    const {data} = await post(`${BASE_URL}/${API_VER}/housing`, p);
    return data
  },
  async getAllHousing(id) {
    const {data} = await get(`${BASE_URL}/${API_VER}/housing/?id=${id}`);
    return data
  },
  async getHousing(id) {
    const {data} = await get(`${BASE_URL}/${API_VER}/housing/${id}`);
    return data
  },
  async deleteHousing(id) {
    const {data} = await Delete(`${BASE_URL}/${API_VER}/housing/${id}`);
    return data
  },
  async getHousing(id) {
    const {data} = await get(`${BASE_URL}/${API_VER}/housing/${id}`);
    return data
  },
  async editHousing(id, p) {
    const {data} = await put(`${BASE_URL}/${API_VER}/housing/${id}`, p);
    return data
  }
};