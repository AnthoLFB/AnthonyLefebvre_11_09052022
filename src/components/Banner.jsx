import '../styles/Banner.css'

function Banner({ image, itHaveText, text = null })
{  
    if(!itHaveText || text == null)
    {
        return (
            <section className="banner">
                <img className="banner__image" src={image} alt="Bannière d'introduction"/>
            </section>
        );
    }

    return (
        <section className="banner">
            <img className="banner__image" src={image} alt="Bannière d'introduction"/>
            <h1 className="banner__title">{text}</h1>
        </section>
    );
}

export default Banner