import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import ScrollContainer from "react-indiana-drag-scroll";
import { CSSTransition } from "react-transition-group";

import MotionDiv from "../MotionDiv/MotionDiv";
import ProjectBanner from "./ProjectBanner";
import Item from "./Item";
import Donut from "../ApexChart/Donut";
import ApexChart from "../ApexChart/ApexChart";
import AppButton from "../Button/AppButton";
import { addNotification } from "../../AppFunctions";
import { ContextApp } from "../../../ContextAPI";
import styles from "./ProjectPage.module.css";

function ProjectPage(props) {
  const project = props.project;
  const [modal, setModal] = useState(false);
  const [img, setImg] = useState("");
  const [zoom, setZoom] = useState(100);
  const [demo, setDemo] = useState(false);
  const { notifisystem } = useContext(ContextApp);

  return (
    <MotionDiv
      html={
        <>
          <div className={`${styles["project-pages"]}`}>
            <ProjectBanner className={styles} project={project} />
            <div className={`${styles["services-container"]}`}>
              <div className={`${styles["project-section-top"]}`}>
                <div
                  className={`${styles["item-container"]}`}
                  data-aos="fade-up"
                >
                  <h3>Project Overview</h3>
                  <div>
                    <Item
                      className={styles}
                      text={project.industry}
                      title="Industry"
                    />
                    <Item
                      className={styles}
                      text={project.type}
                      title="Project Type"
                    />
                    <Item
                      className={styles}
                      text={project.service}
                      title="Service"
                    />
                  </div>
                </div>
                <div
                  className={`${styles["item-container"]}`}
                  data-aos="fade-up"
                >
                  <h3>Project Information</h3>
                  <div>
                    <Item
                      className={styles}
                      text={project.languages}
                      title="Technologies"
                    />
                    <Item
                      className={styles}
                      text={project.colors}
                      title="Color Palette"
                    />
                  </div>
                </div>
              </div>
              <div className={`${styles["project-section-top"]}`}>
                <Donut
                  colors={project.colors}
                  series={project.donut}
                  title="Project Attribute"
                />
                <ApexChart series={project.area} title="Project Commits" />
              </div>
              <div
                className={`${styles["project-section-top"]}`}
                data-aos="fade-up"
              >
                <div className={`${styles["description"]}`}>
                  <h3>Project Description</h3>
                  <small className={`${styles["graytext"]}`}>
                    {project.text}
                  </small>
                </div>
              </div>
              <div className={`${styles["project-imgs"]}`} data-aos="fade-up">
                <h3>Project Snapshots</h3>
                <div className={`${styles["img-cont"]}`}>
                  {project.featuredimg.map((img) => {
                    return (
                      <img
                        src={img}
                        alt=""
                        onClick={() => {
                          setImg(img);
                          setModal(true);
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <div className={`${styles["project-demo"]}`} data-aos="fade-up">
                <h3>Project Demo</h3>
                <CopyToClipboard
                  text={project.url}
                  onCopy={() =>
                    addNotification({
                      notifisystem,
                      msg: "Copied to clipboard!",
                      icon: "fad fa-copy",
                    })
                  }
                >
                  <input value={project.url} />
                </CopyToClipboard>
                <AppButton
                  clickEvent={() => setDemo(!demo)}
                  text={!demo ? "Show Interactive Demo" : "Hide Demo"}
                />
                {demo && (
                  <iframe
                    src={project.url}
                    title="a"
                    data-aos="fade-up"
                  ></iframe>
                )}
              </div>
            </div>
          </div>
          <CSSTransition
            in={modal}
            unmountOnExit
            classNames={{ enterDone: `${styles["modal-enter-done"]}` }}
            timeout={300}
          >
            <div className={`${styles["modal"]}`}>
              <div className={`${styles["controls"]}`}>
                <i
                  className="fad fa-search-minus"
                  onClick={() => setZoom((prev) => prev - 10)}
                ></i>
                <i className="fad fa-search" onClick={() => setZoom(100)}></i>
                <i
                  className="fad fa-search-plus"
                  onClick={() => setZoom((prev) => prev + 10)}
                ></i>
              </div>
              <ScrollContainer
                className={`${styles["img-cont"]}`}
                hideScrollbars={true}
              >
                <img src={img} alt="" style={{ width: `${zoom}%` }} />
              </ScrollContainer>
              <i
                className={`fad fa-times ${styles["fa-times"]}`}
                onClick={() => {
                  setModal(false);
                  setZoom(100);
                }}
              ></i>
            </div>
          </CSSTransition>
        </>
      }
    />
  );
}

export default ProjectPage;
