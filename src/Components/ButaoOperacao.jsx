/* eslint-disable react/prop-types */
function ButaoOperacao({operacao, funcao}){
    return (
        <div className="container">
            <button className="botaoOperacao" onClick={funcao} value={operacao}>{operacao}</button>
        </div>
    )
}
export default ButaoOperacao;
