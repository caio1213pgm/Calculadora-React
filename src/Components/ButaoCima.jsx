// eslint-disable-next-line react/prop-types
function ButaoCima({symbol, funcao}) {
  return (
    <div className="container">
      <button value={symbol} onClick={funcao} className="butaoCima">{symbol}</button>
    </div>
  );
}
export default ButaoCima;
