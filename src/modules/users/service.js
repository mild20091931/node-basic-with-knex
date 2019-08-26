export const checkDataNotNull = data => {
  if (data[0] === undefined){
    return false;
  }
  return true;
}

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

  genPassWord: user => {
    console.log(user[0] === undefined);
      if(checkDataNotNull(user)){
        const userJson = JSON.stringify(user[0]);
        const random = String(Math.random().toString(36).toUpperCase().substring(3,6)
        + Math.random().toString(36).substring(4,7));
        return random;
      }else{
        return "invalid"
      }
  },
};
export default UserService;
