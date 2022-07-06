import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import Button from "../../styledComponents/Button"


const SignUp = () => {
    const { Signup } = useContext(AuthContext)
    const [email, setEmail] = useState("test@test.com")
    const [password, setPassword] = useState("123456")
    const [passwordConfirm, setPasswordconfirm] = useState("123456")

    const handleSubmit = (r) => {
        r.preventDefault()
        if (password.length < 6) {
            alert('Passwaor not long enough')
        }
        if (password !== passwordConfirm) {
            alert('passwords do not match')
        }
        Signup({ email, password })
    }

    return (
        <>
            <h1>Sign Up!</h1>
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
                <label>passwordConfirm</label>
                <input
                    minLength={6}
                    required
                    autoFocus
                    value={passwordConfirm}
                    onChange={(r) => setPasswordconfirm(r.target.value)}
                />
                <Button className="ButtonContainer" type={'submit'}>Sign Up</Button>

            </form>
        </>
    )
}
export default SignUp