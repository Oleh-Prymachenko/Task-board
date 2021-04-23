import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

import { TaskForm } from "./components/task-card/TaskForm";
import { CreateColumn } from "./components/task-column/ColumnForm";
import { LastCard } from "./components/sub-components/modals/lastcard-info/LastCard";
import { CardInfo } from "./components/sub-components/modals/card-info/CardInfo";
import { CardContainer } from "./components/task-card/card/CardContainer";

import "./App.scss";
import "./components/task-column/column/column.scss";
import pointerPassive from "./assets/images/pointer-passive.png";
import pointerActive from "./assets/images/pointer-active.png";
import logo from "./assets/images/logo.jpg";
import logoTitle1 from "./assets/images/ze.jpg";
import logoTitle2 from "./assets/images/board.jpg";
import { ColumnContainer } from "./components/task-column/column/ColumnContainer";

function App() {
  // State for  popups //
  const [openTask, setOpenTask] = useState(false);
  const [openColumn, setOpenColumn] = useState(false);
  const [openLastCard, setOpenLastCard] = useState(false);
  const [openCardInfo, setOpenCardInfo] = useState(false);
  //                  //

  // States for save main information in LocalStorage //
  const [cards, setCards] = useLocalStorageState("cards", []);
  const [card, setCard] = useState([]);
  const [columns, setColumns] = useLocalStorageState("columns", []);
  const [column, setColumn] = useState([]);
  //                                                 //

  const [startDate, setStartDate] = useState();

  // States for infoCard //
  const [infoTitle, setInfoTitle] = useState("");
  const [infoDescription, setInfoDescription] = useState("");
  const [infoNum, setInfoNum] = useState("");
  const [infoUntilDate, setInfoUntilDate] = useState("");
  const [infoTime, setInfoTime] = useState("");
  const [infoAuthor, setInfoAuthor] = useState("");
  const [infoBold, setInfoBold] = useState("");
  const [infoItalic, setInfoItalic] = useState("");
  const [infoUnderline, setInfoUnderline] = useState("");
  //                       //

  // State for mobiles //
  const [openCards, setOpenCards] = useState(false);
  const showCards = openCards ? "display" : "none";
  //                  //

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
            ></button>
            <button
              className="task-btn"
              onClick={() => {
                openTask ? setOpenTask(false) : setOpenTask(true);
              }}
            ></button>
          </div>
        </div>
      </header>
      <div className="App-main">
        <div className="main">
          <PerfectScrollbar className="scrollbar">
            <div className="columns">
              <div className="column">
                <div className="column-header">
                  <div className="column-name">TO DO - {cards.length}</div>
                  <button className="open-cards-for-mobiles-btn">
                    <img
                      className="pointer"
                      alt="pointer"
                      onClick={() =>
                        openCards ? setOpenCards(false) : setOpenCards(true)
                      }
                      src={openCards ? pointerActive : pointerPassive}
                    />
                  </button>
                </div>
                <div className={`cards-${showCards}`}>
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
              </div>
              {/* <Column2 /> */}
              {columns.map((columnStorage, idx) => (
                <ColumnContainer
                  columnStorage={columnStorage}
                  columnKey={idx}
                  openCards={openCards}
                  setOpenCards={setOpenCards}
                />
              ))}
              <div className="column">
                <div className="column-header">
                  <div className="column-name">DONE - {cards.length}</div>
                  <button className="open-cards-for-mobiles-btn">
                    <img
                      className="pointer"
                      alt="pointer"
                      onClick={() =>
                        openCards ? setOpenCards(false) : setOpenCards(true)
                      }
                      src={openCards ? pointerActive : pointerPassive}
                    />
                  </button>
                </div>
                <div className="cards"></div>

                <button
                  className="column-btn-for-mobiles"
                  onClick={() =>
                    openColumn ? setOpenColumn(false) : setOpenColumn(true)
                  }
                >
                  Create column
                </button>
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
