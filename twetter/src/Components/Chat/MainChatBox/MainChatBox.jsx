import { useState } from "react"
import SingleChat from "./SingleChat"
import MessageSender from "../FooterChatBox/MessageSender"

function MainChatBox() {

  const [newMessages, setNewMessages] = useState([
    { textMessage: " سلام چه کمکی می تونم بکنم؟ در خدمتم", reply: false, time: "9:00 am" },
  ])

  const handleSendMessage = (textMessage) => {
    setNewMessages((prevMessages) =>
      [
        ...prevMessages,
        { textMessage: textMessage, reply: true }
      ]
    )
  }

  return (
    <>
      <div className="modal-body">
        <div className="msg-body container">
          <ul>
            {
              newMessages.map((newMessage, index) => <SingleChat key={index} reply={newMessage.reply} textMessage={newMessage.textMessage} time={newMessage.time} />)
            }
          </ul>
        </div>
      </div>
      <MessageSender onSendMessage={handleSendMessage} />
    </>
  )
}

export default MainChatBox