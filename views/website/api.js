import api from '@/api'

const url = "/test"

export default {
    getData() {
      return api.get(`${url}/test`)
    },
}