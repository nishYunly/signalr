import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

const SendMessage = ({ sendMessageDetails }) => {
    const [msg, setMsg] = useState('')

    const onSubmit = (e) => {
        // debugger;
        e.preventDefault()
        sendMessageDetails(msg)
        setMsg('')
        console.log('this is from send msg', msg)
    }
    return (
        <div className="d-flex justify-content-center">
            <form className="w-100" onSubmit={onSubmit}>
                <div className="d-flex">
                    <input type="text"
                        className="form-control"
                        placeholder="type message"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
