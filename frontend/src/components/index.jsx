import React from 'react'

import Barra from './Barra.component';

const index = () => {
    return (
        <div className="container">
            <Barra/>
            <section className="juego">
                <h1>HOLA ADMIN! Ya has trabajado demasiado</h1>
                <h3>Diviertete un rato</h3>
                <h4>F5 Para Reiniciar</h4>
                
                
            </section>
            
                <div id="stage">
                <input class="bullseye-input" id="b1" type="checkbox"/>
                <label class="bullseye" for="b1"></label>

                <input class="bullseye-input" id="b2" type="checkbox"/>
                <label class="bullseye" for="b2"></label>

                <input class="bullseye-input" id="b3" type="checkbox"/>
                <label class="bullseye" for="b3"></label>

                <input class="bullseye-input" id="b4" type="checkbox"/>
                <label class="bullseye" for="b4"></label>

                <input class="bullseye-input" id="b5" type="checkbox"/>
                <label class="bullseye" for="b5"></label>

                <input class="bullseye-input" id="b6" type="checkbox"/>
                <label class="bullseye" for="b6"></label>

                <input class="bullseye-input" id="b7" type="checkbox"/>
                <label class="bullseye" for="b7"></label>

                <input class="bullseye-input special" id="b8" type="checkbox"/>
                <label class="bullseye special" for="b8"></label>

                <p id="score"> points</p>
                
                <a id="start" href="#stage">
                    <span class="start-text">
                    insert coin<span class="start-emoji">💰</span>
                    </span>
                </a>
                </div>
        </div>
    )
}

export default index
