import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': '82855ee8-23e5-496c-9f2a-b5bf8cf6605c' }
});



export const usersAPI = {

  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  },


  getUnfollow(userId) {
    return instance.delete(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  },

  getFollow(userId) {
    return instance.post(`follow/${userId}`)
      .then(response => {
        return response.data;
      })
  }
}

export const authAPI = {
  getMe() {
    return instance.get(`auth/me`);
  },

  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const profileAPI = {

  getProfile(userId) {
    return instance.get(`profile/` + userId)
    .then(response => {
      return response.data;
    })
      },
  

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, {status: status })
  }
}
