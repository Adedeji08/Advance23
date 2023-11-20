import './App.css';
import Footer from './component/layout/footer';
import Header from './component/layout/header';
import AboutAdvance from './pages/About';
import DiscoveryHome from './pages/Home';
import AdvanceRegistration from './pages/Register';


function App() {
  return (
    <div className='w-[90%] mx-auto'>
       <Header />
       <DiscoveryHome />
       <AboutAdvance />
       <AdvanceRegistration />
       <Footer />
    </div>
  );
}

export default App;
