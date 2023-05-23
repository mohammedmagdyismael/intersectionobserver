import { useRef, useState } from 'react';
import { useIntersection } from './useIntersection';
import './App.css';

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);
  useIntersection(ref, setIsIntersecting);
  console.log(isIntersecting);

  
  return (
    <div className="App">  
        <header>This is the Header</header>
        <main ref={ref}>
            <div className="child-one">Child One</div>
            <div className="child-two">Child Two</div>
        </main>      
        <footer>This is the Footer</footer>
      </div>
  );
}

export default App;
