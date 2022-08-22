import React,{Component} from "react";
import "./Message.scss"

class Message extends Component{
    constructor(props) {
        super(props);
        let tmp = JSON.parse(this.props.message);
        this.state = {
            message: tmp
        }
    }
    render() {
        return <div className="Message">{this.state.message.Body}</div>
    }
}
export default Message;