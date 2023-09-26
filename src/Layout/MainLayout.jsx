import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;