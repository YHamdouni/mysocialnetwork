"use client";
import "../styles/chat.css";
import { useEffect, useState } from "react";
export default function ChatBoxGroup({ user }) {
    const [newMessage, setNewMessage] = useState("");
    const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

    const emojis = [
        "😀", "😂", "😍", "😎", "😢", "😡", "👍", "👋", "🙏",
        "😃", "😄", "😁", "😆", "😅", "😜", "😝", "😛", "😋",
        "😊", "😇", "😎", "🥺", "🥰", "😱", "😤", "😬", "😯",
        "😳", "😵", "🤔", "😶", "🤩", "🥳", "🤗", "🤤", "😴",
        "🤒", "🤕", "🥶", "🥵", "🥴", "😷", "💩", "💥", "💫",
        "⭐", "🌟", "✨", "🌈", "🔥", "🌹", "💐", "🌻", "🌼",
        "🌸", "💖", "💓", "💗", "💙", "💚", "💛", "💜", "🤍",
        "🤎", "❤️", "💋", "👑", "👻", "💀", "🎃", "👽", "👾",
        "🎮", "🎲", "🧸", "🎉", "🎈", "🎁", "🎂", "🍰", "🍩",
        "🍪", "🍫", "🍬", "🍒", "🍉", "🍓", "🍍", "🍑", "🍊",
        "🍋", "🍈", "🥥", "🥝", "🍇", "🍏", "🍎", "🍊", "🍌"
    ];

    const handleSendMessage = () => {
        if (newMessage.trim() !== "") {
            setNewMessage("");
            sendMessageGroup([`${user.nickname}`], groupid, newMessage);
        }
    };

    const handleEmojiClick = (emoji) => {
        setNewMessage(newMessage + emoji);
    };

    const toggleEmojiPicker = () => {
        setEmojiPickerVisible(!emojiPickerVisible);
    };

    window.addEventListener("click", () => {
        setEmojiPickerVisible(false);
    })

    return (
        <div className="chat-container">
            <div className="chat-header">
                <div className="user-info">
                    <div className="avatar">
                        {/* <img src={`${user.avatar}`} alt="Post" /> */}
                    </div>
                    {/* <span>{user.nickname}</span> */}
                </div>
            </div>

            <div className="chat-messages" id="messages"></div>

            <div className="chat-input">
                <div className="input-field">
                    <input
                        type="text"
                        value={newMessage}
                        id="message-input"
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>

                    <button onClick={(e) => (
                        e.stopPropagation(),
                        toggleEmojiPicker()
                    )}>😊</button>

                    {emojiPickerVisible && (
                        <div className="emoji-picker">
                            {emojis.map((emoji, index) => (
                                <button
                                    key={index}
                                    className="emoji-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleEmojiClick(emoji)
                                    }}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}