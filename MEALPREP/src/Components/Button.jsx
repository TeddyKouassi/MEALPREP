
import './Navbar.css';

function Button ({text}){
    return(
         <>
            <div className='btn-header'>
                  <button className='btn'>{text}</button>
            </div>
         </>
    )
}

export default Button;
