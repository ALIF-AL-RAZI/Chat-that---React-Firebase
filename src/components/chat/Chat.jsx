import React, { useState } from 'react'
import "./Chat.css"
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {

  const [open, setOPen] = useState(false);
  const [text, setText] = useState("");

  
  const handleEmoji = (e) =>{
    setText((prev)=> prev + e.emoji);
    // setOPen(false);
  };

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Alif</span>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="messsage">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messsage own own">
          <div className="texts">
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messsage">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messsage own">
          <div className="texts">
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messsage">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messsage own">
          <div className="texts">
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messsage">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="messsage own">
          <div className="texts">
            <img src="https://img.freepik.com/free-photo/abstract-background-light-steel-blue-wallpaper-image_53876-102530.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user" alt="" />
            <p>hi how are you</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />

        </div>
        <input 
          type="text" 
          placeholder='Type a message...' 
          value={text} 
          onChange={(e)=>setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOPen((prev)=>!prev)}/>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
          
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat