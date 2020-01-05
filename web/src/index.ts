import {User} from './models/User';

const user = new User({name: 'Kader', age: 20});

user.on('custom', () => {
  console.log('Change #1');
});
user.on('custom', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('Save was triggered');
});

console.log(user);

user.trigger('custom');
user.trigger('save');
