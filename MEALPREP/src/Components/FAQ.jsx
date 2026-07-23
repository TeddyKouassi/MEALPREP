
import "./FAQ.css";
const questions=[
{
    q:"Combien de temps dure la livraison?",
    r:"Entre 30 et 45 minutes selon ta zone"
},

{
    q:"Est-ce que les repas sont frais?",
    r:"Oui, tous les repas sont ptréparés le même jour"
},

{
    q:"Peut -on commander à l'avance?",
    r:"Oui tu peux  programmer te commandes "
},
]
function FAQ(){
    return(
        <>
        <section className="faq" id="faq">
            <p className="section-label"> FAQ</p>
            <h2 className="section-title">Questions fréquentes</h2>
            {
                questions.map((item, index)=>(
                    <details className="faq-item" key={index}>
                        <summary className="faq-question"> {item.q}
                            
                        </summary>
                        <div className="faq-answer"> {item.r}
                        </div>

                    </details>

                )

                )
            }
             
        </section>

        </>
    )
}
export default FAQ;
 

// function FAQ(){
//     return(
//         <>
//          <section className="faq">
//             <h2>FAQ</h2>
//             <div className="faq-item">
//                 <input type="checkbox" name="" id="q1" />
//                 <label htmlFor="q1">
//                     Combien de tepms dure la livraison??
//                 </label>
//                 <div className="answer">
//                     Entre 30 et 45 minutes selon ta zone.
//                 </div>
//             </div>

//             <div className="faq-item">
//                 <input type="checkbox" name="" id="q2" />
//                 <label htmlFor="q2">
//                     Est-ce-que leq repas sont frais??
//                 </label>
//                 <div className="answer">
//                     Oui, tous les repas sont préparés le même jour.
//                 </div>
//             </div>

//             <div className="faq-item">
//                 <input type="checkbox" name="" id="q3" />
//                 <label htmlFor="q3">
//                     Peut-on commander à l'avance??
//                 </label>
//                 <div className="answer">
//                     Oui,tu peux programmer tes commaandes.
//                 </div>
//             </div>

//          </section>
//         </>

//     )
// }
// export default FAQ;