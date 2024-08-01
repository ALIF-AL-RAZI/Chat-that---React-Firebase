import React from 'react'
import "./Detail.css"

const Detail = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Alif</h2>
        <p>Lorem ipsum dolor sit amet,</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-background-light-steel-blue-wallpaper-image_53876-102530.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-background-light-steel-blue-wallpaper-image_53876-102530.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            {/* <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-background-light-steel-blue-wallpaper-image_53876-102530.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://img.freepik.com/free-photo/abstract-background-light-steel-blue-wallpaper-image_53876-102530.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=ais_user" alt="" />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon"/>
            </div> */}
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button>Block User</button>
        <button className='logout'>Logout</button>
      </div>
    </div>
  )
}

export default Detail