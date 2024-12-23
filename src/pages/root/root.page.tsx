import { Box } from "@mui/material"
import { FC } from "react"
import { NavBar, SideBar } from "../../components"
import { Outlet, useNavigate } from "react-router-dom"
import { DataUsage, Home, Settings } from "@mui/icons-material";
import styles from './root.module.css'

const Root: FC = () => {
    const navigate = useNavigate();

    const menuItems = [
        { text: "Home", icon: <Home />, onclick: () => navigate("/") },
        { text: "Budget", icon: <DataUsage />, onclick: () => navigate("/budget") },
        { text: "Settings", icon: <Settings />, onclick: () => navigate("/settings") },
    ];

    return (
        <main>
            <Box className="app">
                <SideBar menuItems={menuItems} />
                <Box className={styles.root}>
                    <NavBar />
                    <Outlet />
                </Box>
            </Box>
        </main>
    )
}

export default Root;