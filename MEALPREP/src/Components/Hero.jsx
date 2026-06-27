import './Hero.css';




function Hero(){
    return(
        <>
        <section className="hero">
            <div className="hero-content">
                <p className='hero-content-1'>Simple .Rapide .Economique</p>
                <h1 className='hero-title'>PLANIFIE TES REPAS BENINOIS FACILEMENT</h1>
                <p className='hero-description'>
                    Génère des repas adaptés à ton budget et gagne du tepmps chaque semaine
                </p>
            </div>
            <div>
                <button className="hero-btn">Créer mon plan gratuit </button>
            </div>
        </section>
        </>
    )
}

export default Hero