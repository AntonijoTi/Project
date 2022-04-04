'use strict';

const numberOfFilms = +prompt("Kiek filmu jau perziurejote?","");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {} ,
    actors : {} ,
    genres : [] ,
    privat : false 
};

const a = prompt('Vienas paskutiniu perziuretu filmu?',''),
      b = prompt('Kaip ji ivertintumet skaiciu?',''),
      c = prompt('Vienas paskutiniu perziuretu filmu?',''),
      d = prompt('Kaip ji ivertintumet skaiciu?','');


personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);