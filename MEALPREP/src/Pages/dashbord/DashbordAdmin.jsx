
import "./Dashbord.css"
function DashbordAdmin(){
    return(
        <>
        <div className="dashbord-admin">
            <aside className="sidebar">
                <h2>Meal prep</h2>
                <ul>
                    <li>Dahbord</li>
                    <li>Clients</li>
                    <li>Recettes</li>
                    <li>Ingrédients</li>
                    <li>Plans de repas</li>
                    <li>Déconnexion</li>
                </ul>
            </aside>

            <main>
                <header>
                    <h1>Dashbord Admin</h1>
                    <p>Bienvenue sur votre espace admministrateur</p>
                </header>

                <section className="cards">
                    <div className="card">
                        <h3>Clients</h3>
                        <p>0</p>
                    </div>

                    <div className="card">
                        <h3>Recettes</h3>
                        <p>0</p>
                    </div>

                    <div className="card">
                        <h3>Ingrédients</h3>
                        <p>0</p>
                    </div>

                    <div className="card">
                        <h3>Plans de repas</h3>
                        <p>0</p>
                    </div>

                </section>
            </main>
        </div>
        </>
    )
    
}
export default DashbordAdmin;