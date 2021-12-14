import { Movie } from "./movie";

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies=[
             {id:1,title:"Film 1",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, porro quas! Eum nobis amet delectus vel? Tempora consequuntur suscipit numquam iure rem ipsam quos sequi. Culpa laborum commodi alias repellat.",imageUrl:"4.jpeg",isPopular:false,datePublished:new Date(1999,10,10)},
             {id:2,title:"Film 2",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, porro quas! Eum nobis amet delectus vel? Tempora consequuntur suscipit numquam iure rem ipsam quos sequi. Culpa laborum commodi alias repellat.",imageUrl:"2.jpeg",isPopular:true,datePublished:new Date(1999,10,10)},
             {id:3,title:"Film 3",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, porro quas! Eum nobis amet delectus vel? Tempora consequuntur suscipit numquam iure rem ipsam quos sequi. Culpa laborum commodi alias repellat.",imageUrl:"3.jpeg",isPopular:true,datePublished:new Date(1999,10,10)},
             {id:4,title:"Film 4",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, porro quas! Eum nobis amet delectus vel? Tempora consequuntur suscipit numquam iure rem ipsam quos sequi. Culpa laborum commodi alias repellat.",imageUrl:"1.jpeg",isPopular:false,datePublished:new Date(1999,10,10)}
            
        ]
    }

    getMovies(): Movie[]{
        return this.movies;

    }

    getPopularMovies(): Movie[] { 
        return this.movies.filter(i=>i.isPopular);
    }

    getMovieById(id:number): Movie { 
        return this.movies.find(i=>i.id==id);
    }

   
}