
import { MainPageComponent } from './components/mainPage'
import bg from './components/static/bg.jpg'

function App() {
  return (
    <div style={{backgroundImage: `url(${bg})`,         
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh' }}>
      <MainPageComponent/>
    </div>
  );
}

export default App;
