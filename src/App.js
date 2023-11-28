import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./component/layout/footer";
import Header from "./component/layout/header";
import AboutAdvance from "./pages/About";
import DiscoveryHome from "./pages/Home";
import AdvanceRegistration from "./pages/Register";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer } from "react-toastify";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate content loading delay
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="w-[90%] mx-auto">
       <ToastContainer className="toast-message-container" />
      {loading ? (
        <div className="load mx-auto mt-[85%] lg:mt-[20%]">
          <TailSpin
            // color="#ffffff"
            className="bg-red-500 "
            loading={loading}
            size={50}
          />
        </div>
      ) : (
        <div>
          <Header />
          <DiscoveryHome />
          <AboutAdvance />
          <AdvanceRegistration />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
