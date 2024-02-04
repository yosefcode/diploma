import "./footer.css";

function Footer({
  onchange,
  edit,
  selectValue,
  setSelectValue,
  saveLocalStorage,
}) {
  const input = (name, width) => {
    if (edit) {
      return (
        <input
          style={{ width: width }}
          name={name}
          value={selectValue?.[name]}
          onChange={(e) => {
            onchange(e);
            saveLocalStorage(e);
          }}
        />
      );
    } else return <div className="footer_print">{selectValue?.[name]}</div>;
  };

  return (
    <div className="footer" dir="rtl">
      <div className="footer_right">
        <div>
          <div className="print_flex">
            שם התלמידה{" "}
            {edit ? (
              <input
                style={{ width: "120px" }}
                name={"name"}
                onChange={onchange}
              />
            ) : (
              <div className="footer_print">{selectValue?.name}</div>
            )}
            <div style={{ marginRight: "20px" }} className="print_flex">
              {" "}
              כיתה {input("class", "30px")}
            </div>
          </div>
          {/* <br /> */}
          <div className="parent">
            <div className="block_right"></div>
            <div
              className="div1"
              contentEditable={edit ? "true" : "false"}
              onInput={(e) => {
                setSelectValue({
                  ...selectValue,
                  note_mane: e.currentTarget.textContent,
                });
              }}
              style={{ border: !edit && "none" }}
            >
              {edit ? "" : selectValue?.note_mane}
            </div>
            <div
              className="div2"
              contentEditable={edit ? "true" : "false"}
              onInput={(e) => {
                setSelectValue({
                  ...selectValue,
                  note_message: e.currentTarget.textContent,
                });
              }}
              style={{ border: !edit && "none" }}
            >
              {edit ? "" : selectValue?.note_message}
            </div>
            <div className="signature">באהבה המורה מיכל כהן</div>
          </div>
        </div>
      </div>

      <div className="footer_left">
        <div className="print_flex">
          מס' ימי לימוד
          {input("numDays", "70px")}
        </div>
        <div className="print_flex">
          יום {input("day", "40px")}
          לחודש {input("month", "60px")}
          תש{" "}
          <div style={{ marginRight: !edit && "-7px" }} className="print_flex">
            {input("year", "30px")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
