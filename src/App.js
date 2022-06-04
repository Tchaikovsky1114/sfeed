
import './App.css';
import Header from './components/Header';
import MainLayout from './layouts/MainLayout';
import RouteBundle from './router/RouteBundle';

import HeadlineProvider from './store/HeadlineContext';



function App() {
  return (
    <MainLayout>
        <Header />
      <HeadlineProvider>
      <RouteBundle />
      </HeadlineProvider>
    </MainLayout>
  );
}

export default App;
