import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import logo from "./assets/images/logo.jpg";
import logoTitle1 from "./assets/images/ze.jpg";
import logoTitle2 from "./assets/images/board.jpg";
import { TaskForm } from "./components/task-card/TaskForm";
import { CreateColumn } from "./components/task-column/ColumnForm";
import { LastCard } from "./components/sub-components/modals/lastcard-info/LastCard";
import { CardInfo } from "./components/sub-components/modals/card-info/CardInfo";
import { CardContainer } from "./components/task-card/card/CardContainer";
import { Column } from "./components/task-column/column/Column";
// import { Column1 } from "./statelessComponents/columns/Column1";
// import { Column2 } from "./statelessComponents/columns/Column2";
// import { Column3 } from "./statelessComponents/columns/Column3";
import "./App.scss";
import "./components/task-column/column/column.scss";

function App() {
  const [openTask, setOpenTask] = useState(false);
  const [openColumn, setOpenColumn] = useState(false);
  const [openLastCard, setOpenLastCard] = useState(false);
  const [openCardInfo, setOpenCardInfo] = useState(false);

  const [cards, setCards] = useLocalStorageState("cards", []);
  const [card, setCard] = useState([]);

  const [columns, setColumns] = useLocalStorageState("columns", []);
  const [column, setColumn] = useState([]);

  const [startDate, setStartDate] = useState();

  const [infoTitle, setInfoTitle] = useState("");
  const [infoDescription, setInfoDescription] = useState("");
  const [infoNum, setInfoNum] = useState("");
  const [infoUntilDate, setInfoUntilDate] = useState("");
  const [infoTime, setInfoTime] = useState("");
  const [infoAuthor, setInfoAuthor] = useState("");

  // const [bolds, setBolds] = useLocalStorageState("bold", []);
  // const [italics, setItalics] = useLocalStorageState("italic", []);
  // const [underlines, setUnderlines] = useLocalStorageState("underline", []);

  const [infoBold, setInfoBold] = useState("");
  const [infoItalic, setInfoItalic] = useState("");
  const [infoUnderline, setInfoUnderline] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="img" className="badge" />
            <img src={logoTitle1} alt="img" className="the" />
            <img src={logoTitle2} alt="img" className="project-title" />
          </div>
          <div className="header-buttons">
            <TaskForm
              openTask={openTask}
              setOpenTask={setOpenTask}
              card={card}
              setCard={setCard}
              cards={cards}
              setCards={setCards}
              openLastCard={openLastCard}
              setOpenLastCard={setOpenLastCard}
              openCardInfo={openCardInfo}
              setOpenCardInfo={setOpenCardInfo}
              setInfoBold={setInfoBold}
              setInfoItalic={setInfoItalic}
              setInfoUnderline={setInfoUnderline}
              // isBold={isBold}
              // isItalic={isItalic}
              // isUnderline={isUnderline}
              // setIsBold={setIsBold}
              // setIsItalic={setIsItalic}
              // setIsUnderline={setIsUnderline}
              // bold={bold}
              // italic={italic}
              // underline={underline}
            />
            <CreateColumn
              openColumn={openColumn}
              setOpenColumn={setOpenColumn}
              columns={columns}
              setColumns={setColumns}
              column={column}
              setColumn={setColumn}
            />

            <CardInfo
              openCardInfo={openCardInfo}
              setOpenCardInfo={setOpenCardInfo}
              infoTitle={infoTitle}
              infoDescription={infoDescription}
              infoNum={infoNum}
              infoUntilDate={infoUntilDate}
              infoTime={infoTime}
              infoAuthor={infoAuthor}
              startDate={startDate}
              infoBold={infoBold}
              infoItalic={infoItalic}
              infoUnderline={infoUnderline}
            />

            {cards.map((c, idx) => (
              <LastCard
                setOpenLastCard={setOpenLastCard}
                lastcardKey={idx}
                openLastCard={openLastCard}
                lastcardStorage={c}
                infoBold={infoBold}
                infoItalic={infoItalic}
                infoUnderline={infoUnderline}
                startDate={startDate}
              />
            ))}

            <button
              className="column-btn"
              onClick={() =>
                openColumn ? setOpenColumn(false) : setOpenColumn(true)
              }
            >
              Create column
            </button>
            <button
              className="task-btn"
              onClick={() => {
                openTask ? setOpenTask(false) : setOpenTask(true);
              }}
            >
              Create task
            </button>
          </div>
        </div>
      </header>
      <div className="App-main">
        <div className="main">
          <PerfectScrollbar className="scrollbar">
            {/* suppressScrollX={true} */}
            <div className="columns">
              <div className="column">
                <div className="column-header">
                  <div className="column-name">TO DO - {cards.length}</div>
                </div>
                {cards.map((cardStorage, idx) => (
                  <CardContainer
                    cardKey={idx}
                    cardStorage={cardStorage}
                    setOpenCardInfo={setOpenCardInfo}
                    openCardInfo={openCardInfo}
                    setInfoTitle={setInfoTitle}
                    setInfoNum={setInfoNum}
                    setInfoUntilDate={setInfoUntilDate}
                    setInfoTime={setInfoTime}
                    setInfoAuthor={setInfoAuthor}
                    setInfoDescription={setInfoDescription}
                    setStartDate={setStartDate}
                    setInfoBold={setInfoBold}
                    setInfoItalic={setInfoItalic}
                    setInfoUnderline={setInfoUnderline}
                  />
                ))}
              </div>
              {/* <Column2 /> */}
              {columns.map((columnStorage, idx) => (
                <Column columnStorage={columnStorage} columnKey={idx} />
              ))}
              <div className="column">
                <div className="column-header">
                  <div className="column-name">DONE - {cards.length}</div>
                </div>
                <div className="cards"></div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
      <button
        className="lastcard-btn"
        onClick={() =>
          openLastCard ? setOpenLastCard(false) : setOpenLastCard(true)
        }
      >
        Last Card
      </button>
    </div>
  );
}

export default App;
