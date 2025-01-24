/* eslint-disable react/prop-types */

function Butao({number, funcao}){
    return (
        <div className="container">
            <button value={number} onClick={funcao} className="Butao" >{number}</button>
        </div>
    )
}

export default Butao