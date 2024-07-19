function SingleChat({ textMessage, reply, time = 'just now' }) {
    return (
        <li className={reply ? "repaly" : "sender"}>
            <p>{textMessage}</p>
            <span className="time">{time}</span>
        </li>
    )
}

export default SingleChat