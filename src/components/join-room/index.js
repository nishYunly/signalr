import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"


const JoinChatRoom = ({ joinChatRom }) => {

    const [room, setRoom] = useState('')
    const [username, SetUserame] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!room || !username) {
            alert('plaese fill the form')
        }else{
            joinChatRom(username, room)
        }
        setRoom('')
        SetUserame('')
    }
    return (
        <div className="d-flex flex-column align-items-center pt-3">
            <div className="pt-4 pb-4 p-5 shadow rounded bg-white">
                <div className="">
                    <h2>
                        Join Chat Room
                </h2>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label"> Room</label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Room1"
                            value={room}
                            onChange={(e) => { setRoom(e.target.value) }}
                        />
                    </div>
                    <div className="mb-1">
                        <label className="form-label"> Username</label>
                        <input
                            className="form-control "
                            type="text"
                            placeholder="nisH"
                            value={username}
                            onChange={(e) => { SetUserame(e.target.value) }}
                        />
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary w-100">
                            Join Chat
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default JoinChatRoom;
