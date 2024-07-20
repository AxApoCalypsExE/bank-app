import React from "react";
import { ModeToggle } from "../mode-toggle";

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="header-box">
      <div className="flex justify-between">
        <h1 className="header-box-title">
          {title}
          {type === "greeting" && (
            <span className="text-bankGradient">&nbsp;{user}!</span>
          )}
        </h1>
        <div className="flex xl:hidden">
        </div>
      </div>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
