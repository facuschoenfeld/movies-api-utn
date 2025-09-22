import {useState, useEffect} from "react"
import {getMovies, searchMovies} from "./api/movie-api"
import Container from "./components/container"
import Card from "./components/card"

function App(){
// States
const [movies, setMovies] = useState([])
const [search, setSearch] = useState("")

// Effects
useEffect(()=>{
    async function fetchMovies(){
        const results = await getMovies()
        setMovies(results)
    }
    fetchMovies()
},[])

// Functions
const movieSearch = async (e)=>{
    const query = e.target.value
    setSearch(query)
    if(query){
        const results = await searchMovies(query)
        setMovies(results)
    }
    else{
        const results = await getMovies()
        setMovies(results)
    }
}

return(
    <div className="min-h-screen bg-gray-950">
        {/*header */}
        <header className="backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-8 py-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary rounded-full p-2">

                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground text-white">Cuevamasiva</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <input 
                            type="text"
                            placeholder="Buscar..."
                            value={search}
                            onChange={movieSearch}
                            className="pl-10 pr-4 py-2 bg-muted/50 text-white border border-white border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/*container */}
        <div className="flex justify-center">
            <Container>
            {movies.map(movie=>(
                <div>
                    <Card key={movie.id}  movie={movie}/>
                </div>

            ))}
            </Container>
        </div>
    </div>
)

}

export default App