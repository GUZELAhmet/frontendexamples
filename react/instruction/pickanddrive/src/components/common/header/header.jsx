import { Container } from "react-bootstrap";
import {TopMenu,BottomMenu} from "../../";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
    return <Container className="p-0 fixed-top">
       <div className="header">
        <Link to="/" title="Go To Homepage">
            <div className="logo">
            <img src="/logo.png" alt="Pick & Drive Logo" />
       <div className="logo_text">
        PICK & <BR />  <span> DRIVE</span>
        <p>YOUR RELIABLE RIDE, AS LONG AS YOU NEED</p>
       </div>
            </div>
        </Link>
        <div className="menus">
            <TopMenu/>
            <BottomMenu />
        </div>
        

       </div>
        </Container>;
};

export default Header;
