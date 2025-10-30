import './Head.css'
import reflexoQuebrado from "../img/reflexoQuebrado.png"

export function Head(){
    return(
        <>
            <div className='imagens'>
                <img src={reflexoQuebrado} alt='Reflexos quebrados' title='Reflexos quebrados'/>
            </div>
        </>
    )
}