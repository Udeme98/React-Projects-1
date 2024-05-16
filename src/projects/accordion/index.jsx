import { useState } from "react";
import data from "./data";
import "./accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleSingle = (getSingleId) => {
    // console.log(getSingleId);
    setSelected(getSingleId === selected ? null : getSingleId);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div className="title" onClick={() => handleSingle(dataItem.id)}>
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <p className="content">{dataItem.answer}</p>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
