//React
import { useState } from 'react'

//Images
import up from "../assets/images/up.svg"
import down from "../assets/images/down.svg"

//CSS
import '../styles/components/Collapse.css'
import '../styles/responsive/components/Collapse.css'

function Collapse({title, width, text})
{

    //width = large or small

    const [isOpen, setIsOpen] = useState(false);

    if(isOpen)
    {
        return (
            <section className={`collapse collapse-${width}`}>
                <button className="collapse__button" type="button" onClick={() => setIsOpen(false)}><h2 className="collapse__button__title">{title}</h2><img src={up} alt="Fermer"/></button>
                <div className="collapse__container">
                    <p className="collapse__container__content">{text}</p>
                </div>
            </section>
        )
    }
    else
    {
        return (
            <section className={`collapse collapse-${width}`}>
                <button className="collapse__button" type="button" onClick={() => setIsOpen(true)}><h2 className="collapse__button__title">{title}</h2><img src={down} alt="Ouvrir"/></button>
            </section>
        )
    }
}

export default Collapse