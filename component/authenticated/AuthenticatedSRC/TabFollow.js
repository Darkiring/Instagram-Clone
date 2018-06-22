import { TabNavigator } from 'react-navigation';
import FollowScreen from './tools/Follow';
import Follow2Screen from './tools/Follow2';

const TabFollow = TabNavigator({
  Follow: {
    screen: Follow2Screen,
  },
  Followers: {
    screen: FollowScreen,
  },
}, {
  swipeEnabled: false,
  animationEnabled: false,
});

export default TabFollow;
