import PropTypes from 'prop-types';
import Message from './Messages/Message';
import Response from './Messages/Response';
import Typing from './Messages/Typing';

function MessageHistory({ list }) {
  if (list.length === 0) {
    return null;
  }

  const filterMessages = (messageData) => {
    if (messageData.type === 'message') {
      return (
        <Message
          key={messageData.id}
          from={messageData.from}
          time={messageData.time}
          text={messageData.text}
        />
      );
    } else if (messageData.type === 'response') {
      return (
        <Response
          key={messageData.id}
          from={messageData.from}
          time={messageData.time}
          text={messageData.text}
        />
      );
    } else if (messageData.type === 'typing') {
      return (
        <Typing
          key={messageData.id}
          from={messageData.from}
          time={messageData.time}
        />
      );
    }
  };

  const elements = list.map((elem) => filterMessages(elem));

  return <ul className='list-unstyled'>{elements}</ul>;
}

MessageHistory.defaultProps = {
  list: [],
};

MessageHistory.propTypes = {
  list: PropTypes.array.isRequired,
};

export default MessageHistory;
