import { Box } from "@mui/material"
import { FC } from "react"
import { NavBar, SideBar } from "../../components"

const Root: FC = () => {
    return (
        <main>
        <Box className="app">
                <SideBar/>
                <NavBar/>
        </Box>
        </main>
    )
}

export default Root;