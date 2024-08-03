import React, { useEffect, useState } from 'react'
import "./ChatList.css"
import AddUser from './addUser/AddUser';
import { useUserStore } from '../../../lib/userStore';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const [chats, setChats] = useState([]);

    const {currentUser} = useUserStore();

    useEffect(()=>{
        const unsub = onSnapshot(doc(db, "userchats", currentUser.id), async (res)=>{
            const items = res.data().chats;
            const promises = items.map(async (item)=>{
                const userDocRef = doc(db, "users", item.receiverId);
                const userDocSnap = await getDoc(userDocRef);

                const user = userDocSnap.data();

                return {...item, user}
            });

            const chatData = await Promise.all(promises);
            setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt));
        });

        return () =>{
            unsub()
        }
    },[currentUser.id])

  return (
    <div className='chatlist'>
        <div className="search">
            <div className="searchBar">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <img src={addMode?"./minus.png":"./plus.png"} alt=""  className='add'
            onClick={()=>setAddMode((prev)=>!prev)}/>
        </div>

        {chats.map((chat)=>(
            <div className="item" key={chat.chatId}>
            <img src="./avatar.png" alt="" />
            <div className="texts">
                <span>Alif</span>
                <p>{chat.lastMessage}</p>
            </div>
        </div>
        ))}

        
        
        {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList