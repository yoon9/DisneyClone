import { useState, useEffect } from "react"
import axios from "../api/axios"
import requests from "../api/request"

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    // 현재 상영중인 영화 정보 가져오기 (여러 영화)
    const request = await axios.get(requests.fetchNowPlaying)
    // 여러 영화 중 영화 하나의 ID 가져오기
    const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id
    // 특정 영화의 상세한 정보를 가져오기 (비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: "videos" },
    })
    setMovie(movieDetail)
  }

  return <div>Banner</div>
}

export default Banner
