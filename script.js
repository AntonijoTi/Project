'use strict';

const numberOfFilms = +prompt("Kiek filmu jau perziurejote?","");

const personalMovieDB = {
    count : numberOfFilms,
    movies : {} ,
    actors : {} ,
    genres : [] ,
    private : false 
};



for (let i=0; i<2 ; i++) {
    const a = prompt('Vienas paskutiniu perziuretu filmu?',''),
          b = prompt('Kaip ji ivertintumet skaiciais?','');
     if (a != null && b !=null && a != '' && b !='' && a.length < 50 ) {
          
        personalMovieDB.movies[a]=b;
        console.log("Done");
     }else {
         console.log("error");
         i--;
     }
      
}

if (personalMovieDB.count < 10 ){
    console.log("perziureta per mazai filmu");
}else if (personalMovieDB.count >=10 && personalMovieDB.count <30 ) {
    console.log("Klasikinis ziurovas");
    }
else if (personalMovieDB.count >=30 ) {
    console.log("Kinomanas"); 
}

else {
    console.log('Klaida');
}
console.log(personalMovieDB);