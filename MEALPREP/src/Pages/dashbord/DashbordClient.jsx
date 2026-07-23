


function Dashbord(){
    return(
        <>
        <div className="dashbord-client">
            <aside className="sidebar">
                <h2>Meal prep</h2>
                <ul>
                    <li>Acceuil</li>
                    <li>Mon profil</li>
                    <li>Mes repas</li>
                    <li>Mes recettes</li>
                    <li>Paramètres</li>
                    <li>Déconnexion</li>
                </ul>
            </aside>

            <main className="content">
                <header>
                    <h1>Mon espace</h1>
                    <p>Bienvenue sur votre espace personnel</p>
                </header>

                <section className="cards">
                    <div className="card">
                        <h3>Mon profil</h3>
                        <p>0</p>
                    </div>

                    <div className="card">
                        <h3>Mes repas</h3>
                        <p>0</p>
                    </div>

                    <div className="card">
                        <h3>Mes recettes</h3>
                        <p>0</p>
                    </div>

                    <div className="card">
                        <h3>Paramètres</h3>
                        <p>0</p>
                    </div>

                </section>
            </main>
        </div>
        
        </>

    )
}
export default Dashbord;