export async function getAllGamesLoader(){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&dates=2024-01-01,2024-12-30&page_size=16`);
    const json = await promise.json();
    return json;
}

export async function getTopRatedGames(){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&ordering=-rating&page_size=16`);
    const json = await promise.json();
    return json;
}
export async function getUpcomingGames(){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&ordering=-released&page_size=16`);
    const json = await promise.json();
    return json;
}
export async function homepageLoader(){
    const [games, topRated, upcoming] = await Promise.all([
        getAllGamesLoader(),
        getTopRatedGames(),
        getUpcomingGames()
    ]);
    return {
        games: games.results,
        topRated: topRated.results,
        upcoming: upcoming.results
    };
}

export async function getSearchedGames({params}){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${params.slug}`);
    const json = await promise.json();
    return json.results;
}

export async function getAllGenres(){
    const promise = await fetch(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json.results;
}
export async function getFilteredByGenreGames({params}){
    const promise = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&genres=${params.slug}`);
    const json = await promise.json();
    return json.results;
}

export async function getGameDetails({params}){
    const promise = await fetch(`https://api.rawg.io/api/games/${params.id}?key=${import.meta.env.VITE_API_KEY}`);
    const json = await promise.json();
    return json;
}
