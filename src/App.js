import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";


const App = () => {
    if(!localStorage.getItem("username")) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="944f83f3-5e0a-48dd-ac7f-2d5418e1734d"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;