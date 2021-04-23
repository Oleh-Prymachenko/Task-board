import React from "react";
import { motion } from "framer-motion";

import "./card-info.scss";
import clock from "../../../../assets/images/clock.svg";
import calendar from "../../../../assets/images/calendar.svg";
import x from "../../../../assets/images/x.svg";
import john from "../../../../assets/images/avatar-4.png";
import david from "../../../../assets/images/avatar-6.png";
import anna from "../../../../assets/images/avatar-3.png";

export const CardInfo = ({
  openCardInfo,
  setOpenCardInfo,
  infoTitle,
  infoDescription,
  infoNum,
  infoUntilDate,
  infoTime,
  infoAuthor,
  startDate,
  infoBold,
  infoItalic,
  infoUnderline,
}) => {
  const showCardInfo = openCardInfo
    ? "popup-info display-block"
    : "popup-info display-none";
  return (
    <div className={showCardInfo}>
      {openCardInfo && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="info">
            <div className="info-header">
              <span className="info-num">BM- {infoNum}</span>
              <button
                className="info-cancel"
                onClick={() => setOpenCardInfo(false)}
              >
                <img src={x} alt=" " />
              </button>
            </div>
            <div className="info-main">
              <h2 className="info-name">{infoTitle}</h2>
              <div className="info-avatar">
                <span>
                  {infoAuthor === john
                    ? "John"
                    : infoAuthor === david
                    ? "David"
                    : infoAuthor === anna
                    ? "Anna"
                    : null}
                </span>
                <img src={infoAuthor} alt=" " />
              </div>
            </div>
            <div className="info-description">
              <span>Description</span>
              <p
                className="info-text"
                style={{
                  fontStyle: infoItalic ? "italic" : "normal",
                  fontWeight: infoBold ? "bold" : "normal",
                  textDecorationLine: infoUnderline ? " underline" : "none",
                }}
              >
                {infoDescription}
              </p>
            </div>

            <div className="info-footer">
              <div className="info-until">
                <img className="calendar" src={calendar} alt=" " />
                <span className="until"> Until {infoUntilDate}</span>
              </div>

              <div className="info-time">
                <img className="clock" src={clock} alt=" " />
                <span className="time"> {infoTime}</span>
              </div>
              <span className="info-start-date">Created {startDate}</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
