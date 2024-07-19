
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function HeaderChatBox({ userName, userAttribute, imageUrl = null }) {
    return (
        <div className="msg-head">
            <div className="row">
                <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                        {imageUrl == null ? <PersonOutlineIcon /> : <img className="img-fluid" src={imageUrl} alt="user img" /> }

                    </div>
                    <div className="flex-grow-1 ms-3">
                        <h3>{userName}</h3>
                        <p>{userAttribute}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderChatBox;