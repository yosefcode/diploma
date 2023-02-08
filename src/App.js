import { useEffect, useRef, useState } from "react";
import "./App.css";
import Halichot from "./halichot/halichot";
import Mikzohot from "./mikzohot/mikzohot";
import Footer from "./footer/footer.js";
import { useReactToPrint } from "react-to-print";

function App() {
  const [selectValue, setSelectValue] = useState();
  const [write, setWrite] = useState(true);
  console.log(selectValue);
  const ref = useRef(null);

  useEffect(() => {
    if (localStorage.getItem(`dataStorage`)) {
      setSelectValue(JSON.parse(localStorage.getItem(`dataStorage`)));
    }
  }, []);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const onchange = (e) => {
    setSelectValue({
      ...selectValue,
      [e.target.name]: e.target.value,
    });
  };

  const saveLocalStorage = (e) => {
    localStorage.setItem(
      `dataStorage`,
      JSON.stringify({
        ...JSON.parse(localStorage.getItem(`dataStorage`)),
        [e.target.name]: e.target.value,
      })
    );
  };

  const addText = (e) => {
    selectValue[e.target.name] = selectValue[e.target.name]
      .split("+")
      .join("")
      .split("-")
      .join("")
      .split("  ")
      .join("");
    setSelectValue({
      ...selectValue,
      [e.target.name]: e.target.value + " " + selectValue[e.target.name],
    });
  };

  return (
    <div className="App">
      <div className="header">
        <button onClick={() => setWrite(!write)}>
          {write ? "הצג לפני הדפסה" : "חזור לעריכה"}{" "}
        </button>
        {!write ? <button onClick={handlePrint}>הדפסת תעודה</button> : null}
      </div>

      <div className="div_diploma">
        <div ref={ref} style={{ padding: "0.5cm" }}>
          <div className="diploma">
            <Halichot
              onchange={onchange}
              addText={addText}
              write={write}
              selectValue={selectValue}
              edit={true}
            />
            <Mikzohot
              onchange={onchange}
              addText={addText}
              write={write}
              selectValue={selectValue}
              edit={true}
            />
            <Footer
              onchange={onchange}
              selectValue={selectValue}
              edit={true}
              setSelectValue={setSelectValue}
              saveLocalStorage={saveLocalStorage}
            />
          </div>
        </div>
      </div>

      {!write && (
        <div className=" print">
          <div className="div_diploma ">
            <div ref={ref} style={{ padding: "0.5cm" }}>
              <div className="diploma">
                <Halichot
                  onchange={onchange}
                  addText={addText}
                  write={write}
                  selectValue={selectValue}
                  edit={false}
                />
                <Mikzohot
                  onchange={onchange}
                  addText={addText}
                  write={write}
                  selectValue={selectValue}
                  edit={false}
                />
                <Footer
                  onchange={onchange}
                  selectValue={selectValue}
                  edit={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
