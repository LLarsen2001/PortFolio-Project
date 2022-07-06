import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from "../../styledComponents/Button"


const Login = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState("123456")

    const handleSubmit = (r) => {
        r.preventDefault()

        login({ email, password })
    }

    return (
        <>
            <h1>Login</h1>
            <p>please enter your email and password to login.</p>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    required
                    autoFocus
                    value={email}
                    onChange={(r) => setEmail(r.target.value)}
                />
                <label>password</label>
                <input
                    minLength={6}
                    required
                    autoFocus
                    value={password}
                    onChange={(r) => setPassword(r.target.value)}
                />

                <Button className="ButtonContainer" type={'submit'}>Login</Button>
            </form>
        </>
    )
}
export default Login