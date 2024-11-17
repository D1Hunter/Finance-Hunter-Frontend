import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Home, DataUsage, Settings, MenuOutlined } from "@mui/icons-material"
import { useState } from "react";
const drawerWidth = 240;

export const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <Box>
            <Drawer
                variant="permanent"
                open={!isCollapsed}
                sx={{
                    width: isCollapsed ? 60 : drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: isCollapsed ? 60 : drawerWidth,
                        boxSizing: "border-box",
                        overflowX: "hidden", // При згортанні приховує контент
                    },
                }}
            >
                <Box display="flex" alignItems="center" justifyContent="center" padding={2}>
                    {!isCollapsed && (
                        <Box display="flex" alignItems="center">
                            <Typography variant="h6">
                                FinanceHunter
                            </Typography>
                        </Box>
                    )}
                    <IconButton sx={{
                        outline: "none",
                        "&:focus": {
                            outline: "none",
                        },
                        "&:focus-visible": {
                            outline: "none",
                        },
                    }} onClick={() => setIsCollapsed(!isCollapsed)}>
                        <MenuOutlined />
                    </IconButton>
                </Box>
                <List>
                    {[
                        { text: 'Home', icon: <Home /> },
                        { text: 'Budget', icon: <DataUsage /> },
                        { text: 'Settings', icon: <Settings /> },
                    ].map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    )
}