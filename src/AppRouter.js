import { Box, Typography } from "@mui/material"
import React, { Component } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import App from "./App"
import Login from "./Login"

function CopyRight() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            fsoftwareengineer, {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/" element={<App />}></Route>
                    </Routes>
                </div>

                <div>
                    <Box mt={5}>
                        <CopyRight />
                    </Box>
                </div>
            </BrowserRouter>
        )
    }
}

export default AppRouter
