import "./mikzohot.css";
import { b, kodesh, ivrit, clali } from "../data";

function Mikzohot({ selectValue, setSelectValue, onchange, addText, edit }) {
  return (
    <div className="div_all_mikzohot">
      <div className="div_mikzohot">
        <div className="div_title">
          <div className="title_mikzohot">המקצוע</div>
          <div className="title_mikzohot">ציון</div>
        </div>
        <div className="div_all_half">
          <div className="div_half_mikzohot">
            <div className="side_title">מקצועות קודש </div>
            <div style={{ width: "90%" }}>
              {kodesh.map((item, index) => (
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
                          {b.map((item, index) => (
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

          <div className="div_half_mikzohot">
            <div className="side_title">מקצועות העברית </div>
            <div style={{ width: "90%" }}>
              {ivrit.map((item, index) => (
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
                          {b.map((item, index) => (
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
                        </select>{" "}
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

      <div className="div_mikzohot">
        <div className="div_title">
          <div className="title_mikzohot">המקצוע</div>
          <div className="title_mikzohot">ציון</div>
        </div>
        <div className="div_half_mikzohot">
          <div className="side_title">מקצועות כלליים </div>
          <div style={{ width: "90%" }}>
            {clali.map((item, index) => (
              <div className="div_all_short" key={index}>
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
                        {b.map((item, index) => (
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
                      </select>{" "}
                    </div>
                  ) : (
                    <div className="nikud_print">
                      {selectValue?.[item.value]}
                    </div>
                  )}
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mikzohot;
