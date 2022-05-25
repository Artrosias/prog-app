import React, {useState} from "react";

const Esempio = () => {

    const [contatore, setContatore] = useState();

    const [auto, setAuto] = useState(new Macchina("JF-", "Rosso") );

    const aumenta = () => {
        console.log("Ok generazione evento")
        setContatore(contatore +1)
    }

        return(
            <>
                <div>
                <button onClick={aumenta} >Aumenta il contatore</button>
                <h1>Il contatore vale {contatore}</h1>
                </div>
            </>
        )

}

    class Macchina{
        constructor(marca, colore){
            this.marca = marca
            this.colore = colore
        }
    }
export default Esempio;