import React, { Component } from "react";
import "./App.css";
import { connect,sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chatHistory: []
    }
  }
  componentDidMount() {
      connect((msg) => {
          console.log(msg);
          this.setState(prevState => ({
              chatHistory: [...prevState.chatHistory, msg]
          }))
          console.log(this.state)
      });
  }

  send() {
      // eslint-disable-next-line no-restricted-globals
      if(event.keyCode === 13) {
          // eslint-disable-next-line no-restricted-globals
          sendMsg(event.target.value);
          // eslint-disable-next-line no-restricted-globals
          event.target.value = "";
      }
  }

  render() {
    return (
        <div className="App">
          <Header />
          <ChatHistory chatHistory={this.state.chatHistory} />
          <ChatInput send={this.send}/>
        </div>
    );
  }
}

export default App;