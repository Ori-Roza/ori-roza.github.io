import "highlight.js/styles/github.css";
import hljs from "highlight.js";
import { useEffect } from "react";
import ResponsiveDrawer from './components/app'


function App() {
  hljs.highlightAll();
  return (
    <div>
      <ResponsiveDrawer/>
    </div>
  );
}

export default App;
