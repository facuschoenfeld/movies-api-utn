import { getPoster } from "../api/movie-api"
import {useState} from "react"

const Card = ({movie})=>{

    const [isHovered, setIsHovered] = useState(false)

    const mouseEnter = ()=>{
        setIsHovered(true)
    }
    const mouseLeave = ()=>{
        setIsHovered(false)
    }

    return(
        <div className="relative">
        <div 
        className="relative "
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}>
            <div className="backdrop-blur-sm hover:shadow-2xl shadow-white/30 transition-all duration-300 hover:scale-90 cursor-pointer">
                <img 
                src={getPoster(movie.poster_path)} 
                alt={movie.title} 
                className="w-full h-full object-cover rounded-2xl "/>

                {/* cuadro de año */}
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 rounded text-sm font-bold">
                    {new Date(movie.release_date).getFullYear()}
                </div>
            </div>

            {/* overlay con informacion */}
            {isHovered && (
                <div className="absolute top-[100px] left-[50%] w-[500px] ml-4 z-50 bg-black/70 backdrop-blur-md rounded-lg p-6 shadow-2xl animate-in fade-in duration-700">
                    <div className="text-white">
                        <h3 className="text-2xl font-bold mb-4 text-white">
                            {movie.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-orange-500 text-black px-2 rounded font-bold text-lg">
                                {movie.vote_average.toFixed(1)}
                            </span>
                            <span className="text-gray-300 text-base">/10</span>
                        </div>
                            <p className="text-sm leading-relaxed text-gray-200 text-justify">
                            {movie.overview}
                            </p>
                    </div>
                </div>
            )}

            {/* titulo de cada pelicula */}
            <h3 className="text-white text-center mt-3 font-medium text-lg max-w-72">
                {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h3>
            
        </div>
        </div>
    )
}

export default Card