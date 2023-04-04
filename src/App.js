
import { MainPageComponent } from './components/mainPage'
import bg from './components/static/bg.jpg'

function App() {
  return (
    <div style={{backgroundImage: `url(${bg})` }}>
      <MainPageComponent/>
    </div>
  );
}

export default App;
