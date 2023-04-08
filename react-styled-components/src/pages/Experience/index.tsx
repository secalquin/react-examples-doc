import { experienceList } from "./data";
import "./styles.css";

type Props = {};

const Experience = (props: Props) => {
  return (
    <div className="main-experience">
      {experienceList.map((item) => (
        <div className="experience-item" key={item.id}>
          <div className="experience-head">
            <div className="job">
              <h3 className="job-title">{item.name}</h3>
              <h6 className="job-sub-title">{item.company}</h6>
            </div>
            <div>
              <p className="job-date">{item.date}</p>
            </div>
          </div>
          <div className="job-resume">
            <p className="job-resume-text">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
