import userModel from './model';
import userService from './service';

export default {
  reverseFullName: async (req, res) => {
    const firstName = await req.params.firstName;
    const user = await userModel.findUserByFirstName(firstName);
    const reverseFullName = await userService.reverseFullName(user);
    return res.send(reverseFullName);
  },

  genPassWordController: async (req, res) => {
    const firstName = await req.params.firstName;
    const user = await userModel.findUserByFirstName(firstName);
    const genPassWord = await userService.genPassWord(user);
    return res.send(genPassWord);
  },
};
