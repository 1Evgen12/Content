import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const value = "Карточки";


root.render(
  <div className="container col-10">
    <h1 className='h1-style m-3'>{value}</h1>
    {Array.from({ length: 5 }, (_, index) =>
      <div className="card m-3">
        <img src={`https://picsum.photos/${200 + index}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        </div>
      </div>)}
    <p className='m-3'>&copy; Авторские права чьи-то {new Date().getFullYear()}</p>
  </div>
);
