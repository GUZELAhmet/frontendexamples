import { Outlet } from "react-router-dom";
const AdminLayout = () => {
    // todo: kullanici admin roline sahip mi kontrolü yap değilse forbidden 403
    return (
        <>
            <Outlet />
        </>
    );
};
export default AdminLayout;
