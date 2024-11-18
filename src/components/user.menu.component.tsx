import { Box, Typography } from "@mui/material"

interface IUserMenuProps {
    email: string,
}

export const UserMenu = ({email}:IUserMenuProps) => {

    return (
        <Box sx={{ alignItems: "center", display: "inline-flex", flexGrow: 0, gap: 2, }}>
            <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
            >
                {email}
            </Typography>
        </Box>
    )
}