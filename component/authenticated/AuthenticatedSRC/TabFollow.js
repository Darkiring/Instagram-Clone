import { TabNavigator } from 'react-navigation';
import Follow from './tools/Follow';

const TabFollow = TabNavigator({
  Follow: {
    screen: Follow,
  },
  Followers: {
    screen: Follow,
  },
}, {
  swipeEnabled: false,
  animationEnabled: false,
});

export default TabFollow;
