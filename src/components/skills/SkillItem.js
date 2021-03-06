import React from "react";
import SkillBar from "../UI/SkillBar";
import "./SkillItem.css";

const SkillItem = (props) => {
  const data = props.skill;
  return (
    <>
      {!props.isOther && (
        <div>
          <h2 className="skill-item">
            {data.text}
            {/* <img src={line} className="skill-item__line" alt="line" /> */}
          </h2>
          {data.skills.map((skill) => (
            <SkillBar length={skill.num} name={skill.name} key={skill.name} />
          ))}
        </div>
      )}
      {props.isOther && (
        <div>
          <h2 className="skill-item">
            {data.text}
            {/* <img src={line} className="skill-item__line" alt="line" /> */}
          </h2>

          <p className="skill-item__other">{data.skills.join(" , ")}</p>
        </div>
      )}
    </>
  );
};

export default SkillItem;
