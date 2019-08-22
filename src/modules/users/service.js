const UserService = {
  reverseFullName: user => {
    const userJson = JSON.stringify(user[0]);
    const obj = JSON.parse(userJson);
    const fullName = obj.firstName + obj.lastName;
    if (fullName) {
      return fullName
        .split('')
        .reverse()
        .join('');
    } else {
      return '';
    }
  },
};
export default UserService;
