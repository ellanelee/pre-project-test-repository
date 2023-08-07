import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice.jsx';
import { styled } from 'styled-components';

const ChangeValueButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 36px;
  border: 0;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;

function App() {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{count}</span>
        <ButtonWrapper>
          <ChangeValueButton
            aria-label="increment value"
            onClick={() => dispatch(decrement())}
          >
            -
          </ChangeValueButton>
          <ChangeValueButton
            aria-label="decrement value"
            onClick={() => dispatch(increment())}
          >
            +
          </ChangeValueButton>
        </ButtonWrapper>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
