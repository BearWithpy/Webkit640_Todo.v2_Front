import { Box, Typography } from "@mui/material"

import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App"
import Login from "./Login"
import SignUp from "./SignUp"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright ⓒ "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<App />} />
                </Routes>
            </div>
            <div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter
