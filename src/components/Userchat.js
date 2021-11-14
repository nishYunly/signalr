import {useState} from 'react'
import './style.scss'
const Userchat = ({storeChat}) => {

    const [username,setUsername] = useState('')
    const [msg,setMsg] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if(!username || !msg) {
            console.log("please add data")
        } else {
            console.log(username,msg)
        }
        storeChat({username,msg})
        setUsername('')
        setMsg('')
    }
    return (
        <div className="user-main" >
            <div className="border-div" >
                <div className="chat-head">
                    <h2>Chat Box</h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>User Name</label>
                        <input type="text"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea type="text"
                         value={msg}
                         onChange={(e)=>setMsg(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Userchat;
