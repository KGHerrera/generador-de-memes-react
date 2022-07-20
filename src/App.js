import { useState } from "react";
import "./App.css";
import html2canvas from "html2canvas";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [image, setImage] = useState("chido");
  const [color, setColor] = useState("#ffffff");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };

  const onChangeImage = function (evento) {
    setImage(evento.target.value);
  };

  const onChangeColor = (e) => {
    setColor(e.target.value);
  };

  const exportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <select onChange={onChangeImage}>
            <option value="happy">happy</option>
            <option value="mimir">mimir</option>
            <option value="angry">angry</option>
            <option value="chido">chido</option>
          </select>

          <input onChange={onChangeLinea1} type="text" placeholder="text-1" />
          <input onChange={onChangeLinea2} type="text" placeholder="text-2" />
          <input type="color" onChange={onChangeColor} />
          <button onClick={exportar}>Exportar</button>
        </div>
        <div className="imgText" id="meme">
          <span style={{ color: color }}>{linea1}</span>
          <span style={{ color: color }}>{linea2}</span>
          <img src={"./images/" + image + ".jpg"} alt="img" />
        </div>
      </header>
    </div>
  );
}

export default App;
