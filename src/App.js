import './App.css';

import messages from './data/messages';
import MessageHistory from './components/MessageHistory';

function App() {
  return (
    <div className='clearfix container'>
      <div className='chat'>
        <div className='chat-history'>
          <h1>Message History...</h1>
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;
