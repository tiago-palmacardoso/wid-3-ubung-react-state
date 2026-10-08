import "./app.css";
import { useState } from "react";
import { Aufgabe1, Aufgabe2, Aufgabe3, Aufgabe4 } from "./static/ExText";

function App() {
  const [state, setState] = useState("defaultWert"); // Beispiel für einen "useState-Hook".
  const [counter, setCounter] = useState(0); // useState Hook für Aufgabe 1
  const [isChecked, setCheckbox] = useState(true); // useState fur Aufgabe 2
  const [text, setText] = useState(""); // useState base fur Aufgabe 3
  const [align, setAlign] = useState("center"); // useState fur Aufgabe 4
  const [font, setFont] = useState(12) // useState fur font in Aufgabe 4
  // Du benötigst für jede Aufgabe einen weiteren "useState-Hook", welchen du am besten hier platzierst. Achte darauf, einen passenden Datentype als "default Wert" anzugeben.

  return (
    <div className="App">
      <div className="App-header ">
        {" "}
        Übung WID 3 - React State und Interaktionen
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 1----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe1 />
        <div className="WrapperHorizontal">
          {/* Nachfolgende Zeile: Die State-Variable counter liest den aktuellen "State" aus. */}
          <div className="Anzeige"> {counter} </div>
          {/* Nachfolgende Zeile: Die setState Funktion im onClick Handler wir beim Klick ausgeführt. Sie liest den aktuellen State (eine Zahl) und inkrementiert diese */}
          <button className="Button" onClick={() => setCounter(counter + 1)}>
            + 1
          </button>
          {/*
           * Unter diesem Kommentar fügst du zwei weitere Buttons hinzu.
           * Setze das Attribut className="Button" um das vordefinierte Styling für einen Button zu übernehmen.
           */}
          <button className="Button" onClick={() => setCounter(counter + 5)}>
            +5
          </button>
          <button className="Button" onClick={() => setCounter(0)}>
            Reset
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 2----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}

      <div className="ExerciseContainer">
        <Aufgabe2 />
        <div className="WrapperHorizontal">
          <input
            id="Checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={
              (e) => setCheckbox(e.target.checked)}
          /* Hier brauchst du wieder eine setState Funktion. Sie kann e.target.checked als Argument bekommen und dies in State schreiben. */
          />

          <div>
            {/*
             * Im P-Element brauchst du zweimal einen Ternary-Operator (Erinnerung: Bedingung ? Wenn true : Wenn false).
             * Als Bedingung benutzt du deine State-Variable (vom Typ boolean)
             * Schreibe das Element dann so um, dass bei true die eine Farbe, und bei false die andere Farbe benutzt wird.
             * Gleiches machst du für den Text.
             */}

            <p style={{ color: isChecked ? "#007cc3" : "#ff00ff" }}>
              {isChecked ? "JA" : "NEIN"}
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 3----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe3 />
        <div className="WrapperHorizontal">
          {/* Im Input-Element fügst du ein weiteres Attribut mit dem Schlüssel `value`hinzu und weist die State-Variable in {}-Klammern als Wert zu. */}
          <input
            id="textfeld"
            type="text"
            value={text}
            onChange={
              (e) =>
                setText(e.target.value
                ) /* Hier brauchst du wieder eine setState Funktion. Sie soll e.target.value als Argument bekommen und dies in State schreiben. */
            }
          />
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 4----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}

      <div className="ExerciseContainer">
        <Aufgabe4 />
        <div className="WrapperHorizontal">
          {/*
           * Öffne als erstes die Browser-Konsole und überprüfe was der Event Handler gerade loggt - d.h. was der Wert ist, wenn du das Dropdown benutzt.
           * Passe den Listener an und nutze eine setState Funktion um "value" in State zu speichern.
           *
           */}
          <select
            className="Dropdown"
            value={align}
            onChange={(e) => setAlign(e.target.value)}
          >

            <option value="left">Links</option>
            <option value="center">Mittig</option>
            <option value="right">Rechts</option>
          </select>
          <select
            className="Dropdown"
            value={font}
            onChange={(e) => setFont(parseInt(e.target.value))}>
            <option value={10}>10</option>
            <option value={12}>12</option>
            <option value={14}>14</option>
            <option value={16}>16</option>
          </select>
          {/*
           * Hier implementierst du ein zweites Dropdown, welches die Schriftgrösse ändern soll. Gib Werte (value) für 10, 12, 14, 16 vor.
           * Du brauchst einen weiteren useState-Hook, der das Ergebnis der Auswahl als Zahl speichert.
           * Achtung - der Handler gibt dir die Zahl als Text (String) zurück. Konvertertiere diese mit `parseInt()`zu einer Zahl ("number"). Das kannst du direkt in der setState Funktion tun.
           */}

          <div>
            <p
              id="DynamicText"
              style={
                {
                  textAlign: align,
                  fontSize: font,
                } /* Diese statischen Werte möchtest du an "State" binden. Überprüfe ob deine Interaktionen den Text verändert  */
              }
            >
              Text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
