import { useState } from 'react';
import './App.css';

function App() {

  const post = '강남 우동 맛집';

  const [title, setTitle] = useState(['남자 코트 추천', '인스타 맛집 추천', '예쁜 카페 추천'])
  const [like, setLike] = useState(0)

  return (
    <div className="App">
        <div className="black-nav">
          <div>BLOG^__^</div>
        </div>

        <div className="list">
          <h4>{ title[0] } <span onClick={() => {setLike(like + 1)}}>🤍</span> { like } </h4>
          <p>9월 16일 발행</p>
        </div>
        <div className="list">
          <h4>{ title[1] }</h4>
          <p>9월 16일 발행</p>
        </div>
        <div className="list">
          <h4>{ title[2] }</h4>
          <p>9월 16일 발행</p>
        </div>
    </div>
  );
}

export default App;
