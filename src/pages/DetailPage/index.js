import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import axios from "../../api/axios"

const DetailPage = () => {
  let { movieId } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`/movie/${movieId}`)
      setMovie(response.data)
    }

    fetchData()
  }, [movieId])

  if (!movie) return null

  return (
    <section>
      <img
        className="modal_poster-img"
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="modal_poster-img"
      />
    </section>
  )
}

export default DetailPage
