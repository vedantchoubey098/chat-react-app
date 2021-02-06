import { ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm'


function App() {

  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine 
      height="100vh"
      projectID="964d9786-9298-497c-8a1a-b993a12551f0"
      userName="admin"
      userSecret="admin"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}



export default App;
