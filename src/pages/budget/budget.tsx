import { Box, Typography } from "@mui/material";

const Budget = () => {
    return (
        <> <Box sx={{ padding: 2 }}>
            <Box sx={{ paddingBlock: 2, width: "100%" }}>
                <Typography variant="h1">Budget</Typography>
                <Typography variant="h6">
                    A snapshot of your financial pain
                </Typography>
            </Box>
        </Box>
        </>
    )
}

export default Budget;