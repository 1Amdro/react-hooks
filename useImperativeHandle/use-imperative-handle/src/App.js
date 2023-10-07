import './App.css';
import {ComponentsWrapper} from './components-wrapper/ComponentsWrapper';
import UseImperativeHandleUsage from './use-imperative-handle-usage/UseImperativeHandleUsage';
import {FocusOnChild} from './focus-on-child/FocusOnChild';

function App() {
  return (
      <>
        <ComponentsWrapper>
          <>
            <h1 className="title">Побочные эффекты при рендеринге</h1>
              <UseImperativeHandleUsage/>
          </>
          <>
            <h1 className="title">Пример с фокусировкой</h1>
              <FocusOnChild/>
          </>
        </ComponentsWrapper>
      </>
  );
}

export default App;
