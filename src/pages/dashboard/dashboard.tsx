import { Box, Typography } from "@mui/material"

const Dashboard = () => {
    return (
        <> <Box sx={{ padding: 2 }}>
            <Box sx={{ paddingBlock: 2, width: "100%" }}>
                <Typography variant="h1">Overview</Typography>
                <Typography variant="h6">
                    A snapshot of your financial health
                </Typography>
            </Box>
        </Box>
        </>
    )
}

export default Dashboard;