
import { useState } from "react";
import Butao from "./Butao";
import ButaoOperacao from "./ButaoOperacao";
import ButaoCima from "./butaoCima";


function GradeNumeros() {
  const numeros = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operacoes = ["/", "x", "-", "+", "="];
  const botoesCima = ["AC", "+/-", "%"];

  const [valor, setValor] = useState(0);
  const [operador, setOperador] = useState(0);
  const [valorAntigo, setValorAntigo] = useState(0);
  function valorDoBotao(botao) {
    if (valor === 0) {
      return setValor(parseFloat(botao.target.value));
    }
    setValor(parseFloat(valor + botao.target.value));
  }

  function apagarVisor() {
    setValor(0);
  }

  function pegarOperadorEFazerConta(operado) {
    let valorOperador = operado.target.value;
    if (valorOperador !== "=") {
      setOperador(valorOperador);
      setValorAntigo(parseFloat(valor));
      setValor(0);
    }
    else{
      switch (operador) {
        case "/":
          setValor(valorAntigo / valor);
          break;
        case "x":
          setValor(valorAntigo * valor);
          break;
        case "+":
          setValor(valorAntigo + valor);
          break;
        case "-":
          setValor(valorAntigo - valor);
          break;
      }
    }
  }

  function operadoresDeCima(operadoCima) {
    let valorOperadorCima = operadoCima.target.value;
    if(valorOperadorCima === "AC"){
      apagarVisor()
    }else{
      switch(valorOperadorCima){
        case "+/-": setValor(valor * -1); break;
        case "%": setValor(valor / 100); break;
      }
    }
  }


  return (
    <div className="Celular">
      <div className="visor">
        <h1>{valor}</h1>
      </div>
      <div className="Teclado">
        <div className="grade">

          {botoesCima.map((operacao) => (
            <ButaoCima symbol={operacao} key={operacao} funcao={operadoresDeCima}/>
          ))}

          {numeros.map((numero) => (
            <Butao key={numero} number={numero} funcao={valorDoBotao} />
          ))}
        </div>
        <div className="gradeOperations">
          {operacoes.map((operacao) => (
            <ButaoOperacao
              operacao={operacao}
              key={operacao}
              funcao={pegarOperadorEFazerConta}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GradeNumeros;
