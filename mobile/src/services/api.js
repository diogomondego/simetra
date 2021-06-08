import axios from 'axios'

// Digite dentro das aspas seu endereço ip
const ip = ''

const api = axios.create({
  baseURL: `http://${ip}:3333/`
})

export default api