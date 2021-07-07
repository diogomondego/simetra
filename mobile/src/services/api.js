import axios from 'axios'

// Digite dentro das aspas seu endereço ip
// const ip = '192.168.100.10'
// const ip = '192.168.0.15'

const api = axios.create({
  // baseURL: `http://${ip}:3333/`
  baseURL: 'https://api-simetra.herokuapp.com/'
})

export default api