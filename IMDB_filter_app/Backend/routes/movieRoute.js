import express from "express"
import { Movies } from "../models/movieModel.js"

const router = express.Router()


router.get("/movies", async (req,res)=>{
    console.log(req.query)


    //parse filters 
    const page = parseInt(req.query.page) -1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.sort || "rating";
    let genre = req.query.genre || "All"
    
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
    req.query.sort ? (sort = req.query.sort.split(",")): (sort = [sort])

    let sortBy = {}
    if(sort[1]){
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
    res.status(200).json(response)
    // try {
    //     const queryBuilder = await Movies.find(filters)
    //     console.log(queryBuilder)

    //     //sorting
    //     if(sortBy && sortOrder){
    //         const sortOptions = {}
    //         sortOptions[sortBy] = sortOrder === "asc" ? 1 : -1;
    //         queryBuilder = queryBuilder.sort(sortOptions)
    //     }
    //     //pagination
    //     const movies = await queryBuilder.skip(skip).limit(limitValue).exec()
    //      // Count total number of documents for pagination
    //      const totalCount = await Book.countDocuments(filters);
    //      res.json({
    //         status: 'success',
    //         data: books,
    //         totalItems: totalCount
    //     });
    // } catch (error) {
    //     res.status(500).json({
    //         status: 'error',
    //         message: 'Internal server error'
    //     });
    // }
})


export default router