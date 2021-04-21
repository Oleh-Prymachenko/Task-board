import React from "react";
import "./lastcard.scss";
import clock from "../../../../assets/images/clock.svg";
import calendar from "../../../../assets/images/calendar.svg";
import x from "../../../../assets/images/x.svg";
import john from "../../../../assets/images/avatar-4.png";
import david from "../../../../assets/images/avatar-6.png";
import anna from "../../../../assets/images/avatar-3.png";
import { motion } from "framer-motion";

export const LastCard = ({
  setOpenLastCard,
  openLastCard,
  lastcardStorage,
  lastcardKey,
  makeBold,
  makeItalic,
  makeUnderline,
  startDate,
}) => {
  const bold = makeBold ? "bold" : "normal";
  const italic = makeItalic ? "italic" : "normal";
  const underline = makeUnderline ? " underline" : "none";

  const convertedDate = new Date(lastcardStorage.props.cardUntilDate);
  const untilDate =
    convertedDate.getDate() +
    "." +
    convertedDate.getMonth() +
    "." +
    convertedDate.getFullYear();

  const showLastCard = openLastCard
    ? "popup-lastcard display-block"
    : "popup-lastcard display-none";
  return (
    <div className={showLastCard} key={lastcardKey}>
      {openLastCard && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <div className="lastcard" key={lastcardKey}>
            <div className="lastcard-header">
              <span className="lastcard-num">
                BM- {lastcardStorage.props.cardNumer}
              </span>
              <button
                type="button"
                className="lastcard-cancel"
                onClick={() => setOpenLastCard(false)}
              >
                <img src={x} alt=" " />
              </button>
            </div>
            <div className="lastcard-main">
              <h2 className="lastcard-name">
                {lastcardStorage.props.cardTitle}
              </h2>

              <div className="lastcard-avatar">
                <span>
                  {lastcardStorage.props.cardAuthor === john
                    ? "John"
                    : lastcardStorage.props.cardAuthor === david
                    ? "David"
                    : lastcardStorage.props.cardAuthor === anna
                    ? "Anna"
                    : null}
                </span>
                <img src={lastcardStorage.props.cardAuthor} alt=" " />
              </div>
            </div>
            <div className="lastcard-description">
              <span>Description</span>
              <p
                className="lastcard-text"
                style={{
                  fontStyle: italic,
                  fontWeight: bold,
                  textDecorationLine: underline,
                }}
              >
                {lastcardStorage.props.cardDescription}
              </p>
            </div>

            <div className="lastcard-footer">
              <div className="lastcard-until">
                <img className="calendar" src={calendar} alt=" " />
                <span className="until"> Until {untilDate}</span>
              </div>

              <div className="lastcard-time">
                <img className="clock" src={clock} alt=" " />
                <span className="time"> {lastcardStorage.props.cardTime}</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
