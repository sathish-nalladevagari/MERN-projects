import express from "express"
import { Movies } from "../models/movieModel.js"
import { parse } from "dotenv"

const router = express.Router()


router.get("/movies", async (req,res)=>{
    console.log(req.query)
    
   try {
    const page = parseInt(req.query.page)-1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || ""
    let genre = req.query.genre || "All";
    let sort = req.query.sort || "rating"
    const genreOptions = [
            "Action",
            "Romance",
            "Fantasy",
            "Drama",
            "Crime",
            "Adventure",
            "Thriller",
            "Sci-fi",
            "Music",
            "Family",
        ];
    genre === "All" ? (genre = [...genreOptions]) : (genre = req.query.genre.split(","))
    req.query.sort ? ( sort = req.query.sort.split(",")) : (sort = [sort])

    let sortBy = {}
    console.log(sort)
    if (sort[1]){
        sortBy[sort[0]] = sort[1]
    }else{
        sortBy[sort[0]] = "asc"
    }


    const movies = await Movies.find({name:{$regex : search, $options:"i"}})
    .where("genre")
    .in([...genre])
    .sort(sortBy)
    .skip(page * limit)
    .limit(limit)
    console.log(movies)
    const total = await Movies.countDocuments( 
            {
                genre : {$in:[...genre]},
                name:{$regex:search,$options:"i"}
            }
        )
    const response = {
        error : false,
        total,
        page:page+1,
        limit,
        genres:genreOptions,
        movies
    }
    return res.status(200).json(response)


   } catch (error) {
    return res.json({
        error:true,
        message:error.message
    })
   }

    
    
})


export default router