import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import NFTBox from "./pages/NFTBox/NFTBox";
import React from "react";
import "./app.css"
import BoxGame from './Components/BoxGames/BoxGame';

function App() {
  
  return (
    <BrowserRouter>
        
        <Routes>
        {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<NFTBox />} /> 
        {/* <Route path="/market" element={<Market />} />  */}
           {/* <Route exact strict path="/auctions" component={Auctions} />
        <Route exact strict path="/market" component={Market} /> */}
      </Routes>
        
     </BrowserRouter>
  );
}

export default App;
