import React from "react";

import { socialIcons } from "../../AppConstant";
import Icon from "../../Reuseable/Icon/Icon";
import MappedArray from "../MappedArray/MappedArray";

function SocialIconTab(props) {
  const { className } = props;
  const scoialIconsRow = (
    <MappedArray array={socialIcons}>
      {({ prop }) => (
        <a href={prop.link} target="__blank">
          <Icon icon={`${prop.icon} social-icon`} />
        </a>
      )}
    </MappedArray>
  );

  return (
    <div className={`${className["social-icon-tab"]}`}>{scoialIconsRow}</div>
  );
}

export default SocialIconTab;
