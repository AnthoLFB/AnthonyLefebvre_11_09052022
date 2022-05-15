//images
import emptyStar from "../assets/images/emptyStar.svg"
import filledStar from "../assets/images/filledStar.svg"

//CSS
import "../styles/Star.css"

function Star({rating, maxRating})
{
    //Création d'un tableau avec un nombre d'emplacement défini
    let stars = new Array(maxRating);

    //Remplissage du tableau
    stars.fill(filledStar, 0, parseInt(rating));
    stars.fill(emptyStar, parseInt(rating));

    return (
        stars.map((starType, index) => <img key={`étoile-${index}`} className="star" src={starType} alt={`La note obtenue est de : ${rating}/${maxRating}`}/>)
    )

}

export default Star