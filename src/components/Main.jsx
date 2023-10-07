import React, { useEffect , useState} from 'react'
import requests from  '../Request.js'
import axios from 'axios'

const Main = () => {
    const [movies , setMovies]= useState([])

    let movie=movies[Math.floor(Math.random()*movies.length)]
  
    useEffect(()=>{
     axios.get(requests.requestPopular).then((response)=>{
      setMovies(response.data.results)
     })
    },[])
  
    console.log(movie)
  
    const truncateString=(str,num)=>{
            if(str?.length>num){
              return str.slice(0,num) + '...';
            }
            else{
              return str;
            }
    }

  return (
    <div className='h-[40vh] md:h-[95vh] w-full  text-white'>
      <div className='w-full h-full'>
      <div className='absolute w-full sm:h-[20vh] md:h-[95vh] bg-gradient-to-r from-black'></div> 
      <img className="w-full h-[100%] md:h-[100%] lg:h-[100%] object-fit" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.original_title}  />
      <div className="information  top-[10%] md:top-[30%] absolute m-10">
        <div className="title mx-3 font-bold text-[1.6rem] md:text-[2.3rem] object-fit">
          {movie?.original_title}
        </div>
      <button className="border bg-white text-black md:px-10 md:py-2 px-7 py-1 rounded-sm mx-3 my-[1.6rem]">
        Play
      </button>
      <button className="bg-gray-100/25 bg-opacity md:px-10 md:py-2 px-7 py-1 font-bold">
        Watch Later
        </button>
        <div className="released text-gray-500/75 mx-3">Release Date:{movie?.release_date}</div>
        <div className="synopsis mx-3 my-3 w-full lg:max-w-[50%] xl:max-w-[35%] hidden md:block">
          {truncateString(movie?.overview,120)}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main
