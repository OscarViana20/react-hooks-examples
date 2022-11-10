import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'oscar',
        email: 'oviana@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('formstate change')
    }, [formState])

    return (
        <>
            <h1>Formulario simple</h1>
            <hr/>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="oviana@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                username === 'oscar2' && <Message/>
            }            
        </>
    )
}
