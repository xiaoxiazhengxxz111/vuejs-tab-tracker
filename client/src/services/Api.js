import axios from 'axios'

export default () => {
  // frontend and backend connector
  return axios.create({
    baseURL: ` http://localhost:8081/`
  })
}
