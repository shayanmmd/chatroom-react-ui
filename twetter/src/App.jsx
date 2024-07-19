import HeaderChatBox from './Components/Chat/HeaderChatBox/HeaderChatBox';
import MainChatBox from './Components/Chat/MainChatBox/MainChatBox';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <section className="message-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="chat-area">
                <div className="chatbox">
                  <div className="modal-dialog-scrollable">
                    <div className="modal-content">
                      <HeaderChatBox userName='shayan mehmandoost' userAttribute='full stack' />
                      <MainChatBox />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default App
