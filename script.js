// import { getmovieReviewData } from "./data.js";

// function init(){
//     const movieReviewData = getmovieReviewData();
    
//     const avrg = paintStatistics(movieReviewData);
//     console.log(avrg);
// }

// function paintStatistics(movieReviewData){
//     const Reviews = movieReviewData.flat();
//     console.log(Reviews);

//     const totalmovies = movieReviewData.length;
//     console.log(totalmovies);

//     const totalreviews = Reviews.length;
//     console.log(totalreviews);
//     const totalRating = Reviews.reduce((acc, item) => {
//         return acc + item.rating;
//     }, 0);

//     const avrg = (totalRating / totalreviews).toFixed(2);
    
    
//     const ToMoviesEl = document.getElementById("ToMovies");
    
//     if (ToMoviesEl) {
//         addstat(ToMoviesEl, totalmovies);
//     } else {
//         console.warn("Element with ID 'ToMovies' not found.");
//     }
    
//     function addstat(element, value){
//         let spanEl = document.createElement("span")
//         spanEl.innerText = value;
//         element.append(spanEl);
//     }
//     return avrg;
// }

//     init();

import { getmovieReviewData } from "./data.js";

function init() {
    const movieReviewData = getmovieReviewData();
    
    const avrg = paintStatistics(movieReviewData);
    console.log(avrg);
}

function paintStatistics(movieReviewData) {
    const Reviews = movieReviewData.flat();
    console.log(Reviews);

    const totalmovies = movieReviewData.length;
    console.log(totalmovies);

    const totalreviews = Reviews.length;
    console.log(totalreviews);

    const totalRating = Reviews.reduce((acc, item) => {
        return acc + item.rating;
    }, 0);

    const avrg = (totalRating / totalreviews).toFixed(2);

    // Append total movies to the DOM element
    const ToMoviesEl = document.getElementById("ToMovies");
    addstat(ToMoviesEl, totalmovies);

    const avrgEl = document.getElementById("AvRat");
    addstat(avrgEl, avrg);

    const totalRatingEl = document.getElementById("ToAvRat");
    addstat(totalRatingEl, totalreviews);

    // if (ToMoviesEl) {
        //  addstat(ToMoviesEl, totalmovies);
    // } else {
    //     console.warn("Element with ID 'ToMovies' not found.");
    // }

    function addstat(element, value) {
        let spanEl = document.createElement("span");
        spanEl.innerText = value;
        spanEl.classList.add("text-500-center");
        element.append(spanEl);
        
       return addstat;
    }

    return avrg;
}

init();
