import { ChatEngine } from "react-chat-engine";

import "./App.css";

import ChatFeed from "./components/ChatFeed";

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="944f83f3-5e0a-48dd-ac7f-2d5418e1734d"
            userName="miguel"
            userSecret="123123" 
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;