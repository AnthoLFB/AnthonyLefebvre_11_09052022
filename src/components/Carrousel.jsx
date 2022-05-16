//React
import { useState } from 'react'

//Images
import leftArrow from "../assets/images/leftArrow.svg";
import rightArrow from "../assets/images/rightArrow.svg";

//CSS
import "../styles/components/Carrousel.css";
import "../styles/responsive/components/Carrousel.css";

function Carrousel({gallery})
{

    const [currentIndex, setIndex] = useState(0);

    if(gallery.length <= 1)
    {
        return (
            <section className="carrousel">
                <img className="carrousel__image" src={gallery[currentIndex]} alt="Photographie du logement"/>
                <p className="carrousel__current-position">{currentIndex + 1}/{gallery.length}</p>
            </section>
        )
    }

    const nextSlide = () => {

        setIndex((prevIndex) => prevIndex + 1);

        //Lorsque l'utilisateur se trouve sur la dernère image et qu'il fait suivant alors il revient sur la première image
        if(currentIndex === (gallery.length - 1))
        {
            setIndex(0);
        }
    }

    const previousSlide = () => {

        setIndex((prevIndex) => prevIndex - 1);

       //Lorsque l'utilisateur se trouve sur la première image et qu'il fait précèdent alors il se retrouve sur la dernère image
        if(currentIndex === 0)
        {
            setIndex(gallery.length -1);
        }
    }

    return (
        <section className="carrousel">
            <button className="carrousel__btn carrousel__btn--previous" type="button" aria-label="Précèdent" onClick={previousSlide}><img src={leftArrow} alt="Précèdent"/></button>
            <button className="carrousel__btn carrousel__btn--next" type="button" aria-label="Suivant" onClick={nextSlide}><img src={rightArrow} alt="Suivant"/></button>
            <img className="carrousel__image" src={gallery[currentIndex]} alt="Photographie du logement"/>
            <p className="carrousel__current-position">{currentIndex + 1}/{gallery.length}</p>
        </section>
    )
}

export default Carrousel