import ProfileList from './ProfileList/ProfileList';
import mans from '../objects/user.json';
import style from './App.module.css';
import StatisticList from './Statistics/StatisticList';
import data from '../objects/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../objects/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../objects/transaction-history.json';

const App = () => {
  return (
    <div>
      <ProfileList className={style.work} users={mans} />
      <StatisticList
        className={style.work}
        title="Upload stats"
        data={data}
      />
      <FriendList className={style.work} friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
export default App;
