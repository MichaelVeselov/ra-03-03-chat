import PropTypes from 'prop-types';

function Response({ from, time, text }) {
  return (
    <li>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i> {from.name}
        </span>
        <span className='message-data-time'>{time}</span>
      </div>
      <div className='message my-message'>{text}</div>
    </li>
  );
}

Response.propTypes = {
  from: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Response;
