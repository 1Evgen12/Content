import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = "Евгений";
const lastname = "Шилов"
const year = new Date().getFullYear();
root.render(
  <>
    <h1>Заголовок первого уровня</h1>
    <h2>{name} {lastname}</h2>
    <ul>
      <li>Элемент 1</li>
      <li>Элемент 2</li>
      <li>Элемент 3</li>
      <li>Элемент 4</li>
      <li>Элемент 5</li>
      <li>Элемент 6</li>
    </ul>
    <p>&copy; Авторские права чьи-то {year}</p>
  </>
);
