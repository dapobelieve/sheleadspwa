import axios from "axios"
import store from "@/store"

const instance = axios.create({
	baseURL: process.env.VUE_APP_API
})

// request interceptor
// request interceptor
instance.interceptors.request.use((config, reqAuth) => {
  // do somethong here
  return config;
}, error => {

})

class Api {
  static async get(url, requireAuth = false) {
    try {
      let config = {
        headers: {
          'Authorization': `Bearer ${store.state.user.token}`
        }
      }
      let response = requireAuth ? await instance.get(url, config) : await instance.get(url)
      return response
    } catch (error) {
      return error.response
    }
  }

  static async post(url, payload, requireAuth = false) {
    console.log(url)
    try {
      let config = {
        headers: {
          'Authorization': `Bearer ${store.state.user.token}`
        }
      }
      let response = requireAuth ? await instance.post(url, payload, config) : await instance.post(url, payload)
      return response
    } catch (error) {
      return error.response
    }
  }

  static async put(url, payload = {}, requireAuth = false) {
    try {
      let config = {
        headers: {
          'Authorization': `Bearer ${store.state.user.token}`
        }
      }
      let response = requireAuth ? await instance.put(url, payload, config) : await instance.put(url, payload)
      return response
    } catch (error) {
      return error.response
    }
  }

  static async delete(url, payload = {}, requireAuth = true) {
    try {
      let config = {
        headers: {
          'Authorization': `Bearer ${store.state.user.token}`
        },
        data: payload
      }
      let response = requireAuth ? await instance.delete(url, config) : await instance.delete(url, {data : payload })
      return response
    } catch (error) {
      return error.response
    }
  }
}



export default Api