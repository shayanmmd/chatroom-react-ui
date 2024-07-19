import SendIcon from '@mui/icons-material/Send'
import { useState } from 'react'
import './MessageSenderStyles.css'

function MessageSender({ onSendMessage }) {

    const [textMessage, setTextMessage] = useState('')

    const handleSendMessage = () => {
        if (textMessage === '') {
            const inputTextMessage = document.getElementById('textMessage')
            inputTextMessage.classList.add('error-empty-text')
            setTimeout(() => {
                inputTextMessage.classList.remove('error-empty-text')
            }, 1000);
            return
        }
        onSendMessage(textMessage)
        setTextMessage('')
    }

    const handleEnter = (event) => {
        if (event.keyCode === 13)
            handleSendMessage()
    }

    const handleTextMessageInput = (event) => {
        setTextMessage(event.target.value)
    }

    return (
        <div className="container m-2">
            <hr />
            <div className='row d-flex justify-content-center'>
                <div className=' col-sm-3 col-md-2 btn-group m-1 order-sm-1 order-2'>
                    <button className='btn btn-sm btn-primary'
                        onClick={handleSendMessage}
                        type="button">ارسال <SendIcon fontSize='sm' />
                    </button>
                </div>
                <div className='col-sm-8 m-1 order-sm-2 order-1'>
                    <div className='input-group'>
                        <input
                            id='textMessage'
                            dir='rtl'
                            onKeyDown={handleEnter}
                            value={textMessage}
                            onChange={handleTextMessageInput} type="text"
                            className="form-control form-control-sm"
                            aria-label="message…" placeholder="متن پیام را بنویسید ..." />
                    </div>

                </div>


            </div>
        </div>
    )
}

export default MessageSender