import PropTypes from 'prop-types';

function Typing({ from, time }) {
  return (
    <li className='clearfix'>
      <div className='message-data align-right'>
        <span className='message-data-time'>{time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{from.name}</span>
        <i className='fa fa-circle me'></i>
      </div>
      <div className='message other-message float-right'>. . . . .</div>
    </li>
  );
}

Typing.propTypes = {
  from: PropTypes.object.isRequired,
  time: PropTypes.string.isRequired,
};

export default Typing;
