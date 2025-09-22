const Header = ()=>{
    return(
        <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary rounded-full p-2">

                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-foreground">Movies UTN</h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block">
                            <input 
                            type="text"
                            placeholder="Buscar películas"
                            value={search}
                            onChange={movieSearch}
                            className="pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header