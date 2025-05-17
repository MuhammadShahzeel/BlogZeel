import { Outlet } from "react-router-dom";
import Header from "../ui/Header";


const AppLayout = () => {


  return (
  <>
  
      <Header/>
        <Outlet />
        </>


   
  );
};

export default AppLayout;