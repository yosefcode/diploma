import "./halichot.css";
import { a, halichot, halichot2, halichot3 } from "../data";

function Halichot({ selectValue, setSelectValue, onchange, addText, edit }) {
  // console.log(selectValue);
  return (
    <div>
      <div className="div_halichot">
        <div className="title_halichot" dir="rtl">
          מחצית ב'
        </div>
        <div className="div_all_halichot">
          <div className="div_half">
            <div className="side_title">הליכות</div>
            <div style={{ width: "90%" }}>
              {halichot.map((item, index) => (
                <div className="div_all" key={index}>
                  <div className="div_mikzoa">{item.value}</div>
                  <div className="div_nikud">
                    {edit ? (
                      <div className="select_nikud">
                        <select
                          className="nikud"
                          name={item.value}
                          onChange={onchange}
                        >
                          <option value=""></option>
                          {a.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.value}
                            </option>
                          ))}
                        </select>
                        <select
                          style={{ width: "30%" }}
                          name={item.value}
                          onChange={addText}
                          disabled={
                            selectValue?.[item.value] === "" ||
                            selectValue?.[item.value] === undefined
                              ? true
                              : false
                          }
                        >
                          <option
                            selected={
                              selectValue?.[item.value] === "" ||
                              selectValue?.[item.value] === undefined
                                ? true
                                : false
                            }
                            value=""
                          ></option>
                          <option value="+">+</option>
                          <option value="-">-</option>
                        </select>
                      </div>
                    ) : (
                      <div className="nikud_print">
                        {selectValue?.[item.value]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="div_half">
            <div className="side_title">הרגלי למידה</div>
            <div style={{ width: "90%" }}>
              {halichot2.map((item, index) => (
                <div className="div_all" key={index}>
                  <div className="div_mikzoa">{item.value}</div>
                  <div className="div_nikud">
                    {edit ? (
                      <div className="select_nikud">
                        <select
                          className="nikud"
                          name={item.value}
                          onChange={onchange}
                        >
                          <option value=""></option>
                          {a.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.value}
                            </option>
                          ))}
                        </select>
                        <select
                          style={{ width: "30%" }}
                          name={item.value}
                          onChange={addText}
                          disabled={
                            selectValue?.[item.value] === "" ||
                            selectValue?.[item.value] === undefined
                              ? true
                              : false
                          }
                        >
                          <option
                            selected={
                              selectValue?.[item.value] === "" ||
                              selectValue?.[item.value] === undefined
                                ? true
                                : false
                            }
                            value=""
                          ></option>
                          <option value="+">+</option>
                          <option value="-">-</option>
                        </select>
                      </div>
                    ) : (
                      <div className="nikud_print">
                        {selectValue?.[item.value]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {halichot3.map((item, index) => (
                <div className="div_all" key={index}>
                  <div className="div_mikzoa">{item.value}</div>
                  <div style={{ width: "50%", display: "flex" }}>
                    {edit ? (
                      <div>
                        <input
                          className="nikud"
                          name={item.value}
                          onChange={onchange}
                        />
                      </div>
                    ) : (
                      <div className="nikud_print">
                        {selectValue?.[item.value]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Halichot;
