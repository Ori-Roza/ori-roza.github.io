
import ResponsiveDrawer from './components/app'
useEffect(() => {
  hljs.highlightAll();
}, []);
function App() {
  return (
    <div>
      <ResponsiveDrawer/>
    </div>
  );
}

export default App;
