import {
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material"
import React from "react"
import { signin } from "./service/ApiService"

// class Login extends Component {
//     constructor(props) {
//         super(props)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleSubmit(event) {
//         event.preventDefault()
//         const data = new FormData(event.target)
//         const email = data.get("email")
//         const password = data.get("password")

//         signin({ email: email, password: password })
//     }
//     render() {
//         return (
//             <Container
//                 component="main"
//                 maxWidth="xs"
//                 style={{ marginTop: "15%" }}
//             >
//                 <Grid item xs={12} style={{ margin: "20px" }}>
//                     <Typography component="h1" variant="h5">
//                         로그인
//                     </Typography>
//                 </Grid>
//                 <form noValidate onSubmit={this.handleSubmit}>
//                     {" "}
//                     <Grid container spacing={2}>
//                         <Grid item xs={12}>
//                             <TextField
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="email"
//                                 label="이메일 주소"
//                                 name="email"
//                                 autoComplete="email"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 type="password"
//                                 variant="outlined"
//                                 required
//                                 fullWidth
//                                 id="password"
//                                 label="패스워드"
//                                 name="password"
//                                 autoComplete="password"
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 color="primary"
//                             >
//                                 로그인
//                             </Button>
//                         </Grid>
//                         <Grid container justifyContent="flex-end">
//                             <Link href="/signup" variant="body2">
//                                 <Grid item>
//                                     계정이 없습니까? 여기서 가입하세요.
//                                 </Grid>
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Container>
//         )
//     }
// }
// export default Login

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target)
        const username = data.get("username")
        const email = data.get("email")
        const password = data.get("password")

        signin({ email: email, password: password })
    }

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: "15%" }}>
            <Grid item xs={12} style={{ margin: "20px" }}>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="패스워드"
                            name="password"
                            autoComplete="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </Grid>
                    <Grid container justifyContent="flex-end">
                        <Link href="/signup" variant="body2">
                            <Grid item>
                                계정이 없습니까? 여기서 가입하세요.
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Login
