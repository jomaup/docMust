import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import {Route, Routes} from 'react-router-dom';
import Missing from "./Missing";
import About from "./About";
import Documentation from "./Documentation";


function App() {
  return (
    <div className="App">
     <Header />
     <Routes>
            <Route path="/" element={<Content />} >
              <Route index element={<Documentation />} />
              <Route path="*" element={<Missing />} />
              <Route path="/about" element ={<About />} />
            </Route>
      </Routes>
    <Footer />
     
    </div>

  );
}

export default App;
