import 'bootstrap/dist/css/bootstrap.css'

const ChatContainer = ({ msgStore }) => {
    console.log('chactContainer', msgStore)
    return (
        <div>
            <div className="border p-2 bg-white rounded" style={{ height: '300px', backgroundColor : 'red' }}>
                {
                    msgStore.map((msg, index) =>
                        <div key={index}
                            className="mb-2 fs-6 d-flex">
                            <div className="p-1 bg-light shadow-sm">
                            {msg}
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}

export default ChatContainer


