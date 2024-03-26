import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "./config";

const base_url = BACKEND_URL
function App() {
  const [obj, setObj] = useState({});
  const [sort , setSort] = useState({sort : "rating", order : "desc"})
  const [filterGenre, setFilterGenre] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
    useEffect(()=>{
      const getAllMovies = async()=>{
        try {
          const url = `${base_url}?page=${page}&sort=${sort.sort}&genre=${filterGenre.toString()}&search=${search}`
          const {data} = await axios.get(url)
          setObj(data)
          console.log(data.movies)
        } catch (error) {
          console.log(error.message)
        }
      }
      getAllMovies()
    },[page,filterGenre,search,sort])

    return (
      <>
        <h1>Hello world</h1>
      </>
    )
  
}

export default App
