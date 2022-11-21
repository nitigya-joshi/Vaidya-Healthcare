import React from "react";

import SocialIconTab from "../../Body/Banner/SocialIconTab";

function ProjectBanner(props) {
  const { className, project } = props;

  return (
    <>
      <SocialIconTab className={className} />
      <div className={`${className["project-banner"]}`}>
        <div className={`${className["left"]}`} data-aos="fade-right">
          <div>
            <h2>
              <i className={project.icon}></i>
              <span>{project.title}</span>
            </h2>
            <small className={`${className["graytext"]}`}>{project.type}</small>
          </div>
        </div>
        <div className={`${className["img"]}`} data-aos="zoom-out">
          <img src={project.banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default ProjectBanner;
