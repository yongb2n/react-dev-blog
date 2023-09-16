import { useState } from "react";
import "./App.css";

function App() {
  const post = "강남 우동 맛집";

  const [title, setTitle] = useState([
    "남자 코트 추천",
    "인스타 맛집 추천",
    "예쁜 카페 추천",
  ]);
  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>BLOG^__^</div>
      </div>

      <button
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
      </button>

      <div className="list">
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
        <h4>{title[2]}</h4>
        <p>9월 16일 발행</p>
      </div>

      <Modal />
      
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
