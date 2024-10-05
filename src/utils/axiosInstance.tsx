import axios from "axios";

const axiosInstance = axios.create();
let isAlreadyFetchingAccessToken = false;

axiosInstance.interceptors.request.use(
    config => {
      // ** Get token from localStorage
     
      if(config.url === "/login"){
        const accessToken = localStorage.getItem('accessToken');
        // ** If token is present add it to request's Authorization Header
        if (accessToken) {
            // ** eslint-disable-next-line no-param-reassign
            config.headers.Authorization = `Bearer ${accessToken}`
        }

      }

      return config
    },
    error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        const { config, response } = error
        const originalRequest = config

        if (response && response.status === 401) {
            if(!isAlreadyFetchingAccessToken) {
                isAlreadyFetchingAccessToken = true
                const refreshToken = await getRefreshToken()
                if(refreshToken){
                    isAlreadyFetchingAccessToken = false
                }
            }
            const retryOriginalRequest = new Promise(resolve => {
                  originalRequest.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
                  resolve(axios(originalRequest))
            })
            return retryOriginalRequest
        }

        return Promise.reject(error)
    }
)

const getRefreshToken = async ()  => {
    return true
}

export default axiosInstance