import styles from './FriendList.module.css';
import Friend from '../Friends/Friend';
import propTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <div className={styles.conteiner}>
      <ul className={styles.friendList}>
        {friends.map(frend => (
          <li className={styles.item} key={frend.id}>
            <Friend
              avatar={frend.avatar}
              isOnline={frend.isOnline}
              name={frend.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
FriendList.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};
export default FriendList;
