import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "인스타 맛집 추천",
    "예쁜 카페 추천",
  ]);
  const [like, setLike] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div>BLOG^__^</div>
      </div>

      {/* <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          copy[1] = "인스타 감성 카페 추천";
          copy[2] = "밤산책 하기 좋은 장소 추천";
          setTitle(copy);
        }}
      >
        제목 변경
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        가나다순 정렬
      </button> */}

      {/* <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              setLike(like + 1);
            }}
          >
            🤍
          </span>{" "}
          {like}{" "}
        </h4>
        <p>9월 16일 발행</p>
      </div>

      <div className="list">
        <h4>{title[1]}</h4>
        <p>9월 16일 발행</p>
      </div>
      
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>9월 16일 발행</p>
      </div> */}

      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setModalTitle(i);
              }}
            >
              {title[i]}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  const copy = [...like];
                  copy[i]++;
                  setLike(copy);
                }}
              >
                🤍 {like[i]}
              </span>
            </h4>
            <p>9월 16일 발행</p>
            <button
              onClick={() => {
                const copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <button
        onClick={() => {
          const copy = [...title];
          if (inputValue !== "") {
            copy.unshift(inputValue);
            setTitle(copy);
          } else {
            alert("글을 입력하세요.");
          }
        }}
      >
        글 발행
      </button>

      {modal === true ? (
        <Modal
          title={title}
          setTitle={setTitle}
          modalTitle={modalTitle}
          setModalTitle={setModalTitle}
        />
      ) : null}
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          const copy = [...props.title];
          copy[0] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        글 수정
      </button>
    </div>
  );
};

export default App;
