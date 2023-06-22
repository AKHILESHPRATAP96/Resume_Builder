
import './App.css';
import Detail from './components/detail_filling_page/detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import My_templates from './components/homepage/my_templates';

import Aboutus from './components/about_us_page/aboutus';

import Previewpage from './components/preview_page/priview';



function App() {


  return (

    <BrowserRouter><Routes>
      <Route path='/'exact element={<My_templates />}></Route>
      <Route path='det' element={<Detail/>}></Route>
      <Route path="prev" element={<Previewpage/>}></Route>
    
      <Route path='/AboutUs' exact element={<Aboutus/>}></Route>
      
    </Routes>

    </BrowserRouter>

  );
}

export default App;
