import axios from "axios"

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "24574a6ac6addbfc6199a2f08d162f08",
    language: "ko-KR",
  },
})

export default instance
