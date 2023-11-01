import './app.scss';
import './index.css';

const App = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='wrapper'>
          <img src='/background.png' className='card__background venom' />
        </div>
        <img src='/title.png' className='card__title' />
        <img src='venom.png' className='card__front venom' />
      </div>
      <div className='card'>
        <div className='wrapper'>
          <img src='/background.png' className='card__background venom' />
        </div>
        <img src='/title.png' className='card__title' />
        <img src='venom.png' className='card__front venom' />
      </div>
    </div>
  );
};

export default App;
