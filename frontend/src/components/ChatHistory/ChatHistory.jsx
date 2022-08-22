import {Component} from "react";
import "./ChatHistory.scss";
import Message from "../Message";

class ChatHistory extends Component{
    render(){
        console.log(this.props.chatHistory);
        const messages = this.props.chatHistory.map((msg,index)=>{
            return (<Message key={index} message={msg.data}/>)
        })
        return(
            <div className="chat-history">
                <h2>Chat History</h2>
                {messages}
            </div>
        )
    }
}
export default ChatHistory;