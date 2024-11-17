import { Button, Container, Link, Paper, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <Container maxWidth="lg">
            <Paper elevation={10} sx={{p:10}}>
                <Stack spacing={2}>
                    <Typography component="h1" variant="h5">Sign up</Typography>
                    <TextField label="Email" placeholder="Enter email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <TextField label="Password" placeholder="Enter password" type="password" value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <Button variant="contained" onClick={()=>{}}>Sign up</Button>
                    <Typography>Already have an account?
                        <Link href="/" underline="none"> Sign in</Link>
                    </Typography>
                </Stack>
            </Paper>
        </Container>
    )
}

export default Register;