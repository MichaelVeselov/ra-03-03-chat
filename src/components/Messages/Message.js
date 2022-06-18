import PropTypes from 'prop-types';

function Message({ from, time, text }) {
  return (
    <li className='clearfix'>
      <div className='message-data align-right'>
        <span className='message-data-time'>{time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{from.name}</span>
        <i className='fa fa-circle me'></i>
      </div>
      <div className='message other-message float-right'>{text}</div>
    </li>
  );
}

Message.propTypes = {
  from: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
