
// import {Provider} from 'react-redux';

import { Outlet } from "react-router";
import Navbar from "./components/navbar";
import User from "./modules/user";
import Auth from "./modules/auth";


// import neftlixStore from './redux';



function App() {

  async function  authenticate (){

  }



  return (
    // <Provider store = {neftlixStore}>
    <>

    {authenticate ? <User/> : <Auth/>}
      <Auth/>
      <User/>
   
      

    </>
    // </Provider>
  );
}

export default App;
