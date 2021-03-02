import React from 'react';
import ChatPageCointainer from "./ChatPageContainer";
import '../../assets/skrypts/connect'

class ChatPage extends React.Component {
    constructor(props) 
    {
        super(props)
    }

    render() {
        return (
            <ChatPageCointainer>
                <LeftNavMenu />
                <TopNavMenu />
                <RightNavMenu />
                <ChatBox />
            </ChatPageCointainer>
          );
    }
}

export default ChatPage;
