
import './App.css';
import LightAndNightToggleButton from './assets/LightAndNightToggleButton';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import RouteBundle from './router/RouteBundle';

function App() {
  return (
    <MainLayout>
      <Header />
      <RouteBundle />
    </MainLayout>
  );
}

export default App;
