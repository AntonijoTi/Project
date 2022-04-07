'use strict';

let numberOfFilms; 

function start () {
    numberOfFilms = +prompt("Kiek filmu jau perziurejote?","");

    while (numberOfFilms == ""|| numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Kiek filmu jau perziurejote?","");
    }

}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {} ,
    actors : {} ,
    genres : [] ,
    private : false 
};


function rememberMyFilms() {
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
    
}
rememberMyFilms();


function detectPersonalLevel() {

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
    
    
}
 
detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

    
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
for (let i = 1; i <= 3; i++){
personalMovieDB.genres[i-1] = prompt(`Jusu megstamo zanro numeris ${i}`);
}
    
}

writeYourGenres();