'use strict';



const personalMovieDB = {
    count : 0,
    movies : {} ,
    actors : {} ,
    genres : [] ,
    private : false,
    start: function() {
        personalMovieDB.count = +prompt("Kiek filmu jau perziurejote?","");
    
        while (personalMovieDB.count == ""|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Kiek filmu jau perziurejote?","");
        }
    
    },
    rememberMyFilms: function() {
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
        
    },
    detectPersonalLevel: function() {
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
        
        
    },
     showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    
        
    },
    toogleVisibleMyDb: function () {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;

        }else{
            personalMovieDB.privat = true;

        }

    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Jusu megstamo zanro numeris ${i}`)
        
        if (genre === ''|| genre == null){
            console.log('jus ivedete neteisingus duomenys');
            i--;
        } else{
            personalMovieDB.genres[i-1] = genre; 
        }
        
      }
      personalMovieDB.genres.forEach((item, i) =>
    {console.log(`Megstamas zanras ${i+1} - tai ${item}`);

    })
    }

};






