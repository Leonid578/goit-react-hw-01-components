import Profile from '../Profile/Profile';
import PropTypes from 'prop-types';
import style from './ProfileList.module.css';

const ProfileList = ({ users }) => {
  return (
    <div className={style.conteiner}>
      <ul className={style.cards}>
        {users.map(user => (
          <li className={style.card} key={user.tag}>
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string.isRequired })
  ),
};
export default ProfileList;
