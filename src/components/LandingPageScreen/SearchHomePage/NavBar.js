import styles from "./NavBar.module.css"
import {AiOutlineDown} from "react-icons/ai";
import {useState} from "react";
import {Menu, MenuItem} from "@mui/material";

const LoginButton = (props) => {
    return (
        <button className={styles.loginButton}>
            Login
        </button>
    )
}

const ProductsDropDown = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <button className={styles.productsButton} onClick={handleClick}>
                Products
                <AiOutlineDown style={{marginTop: 5, transform: open ? "rotate(0deg)" : "rotate(180deg)"}} className={styles.arrow}/>
            </button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Become a Host</MenuItem>
                <MenuItem onClick={handleClose}>Rent</MenuItem>
                <MenuItem onClick={handleClose}>Invest</MenuItem>
            </Menu>
        </>
    )
}


const NavBar = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.rightSideContainer}>
                <img alt={'n/a'} src={require("../../../assets/LandingPage/Logo.png")} className={styles.logo}/>
                <h1 className={styles.title}>Paso Homes</h1>
            </div>
            <div className={styles.rightSideContainer}>
                <ProductsDropDown />
                <LoginButton/>
            </div>
        </div>
    )
}

export default NavBar