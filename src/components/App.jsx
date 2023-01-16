import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends';
import transactions from './TransactionHistory/transactions';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <h2 className="taskNumber">1 - Social network profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2 className="taskNumber">2- Statistics Section</h2>
      <Statistics title="Upload stats" stats={data} />
       <h2 className="taskNumber">3 - Friend list</h2>
      <FriendList friends={friends} />
      <h2 className="taskNumber">4 - Transaction History</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
};
