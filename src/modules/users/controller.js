import userModel from './model';
import userService from './service';

export default {
  reverseFullNameController: async (req, res) => {
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

  newUserController: async (req, res) => {
    console.log(req.body);
    // const data = await req.body;
    // const newUser = await userModel.createUser(data);
    // return res.status(201).send('Success!');
    // console.log(data);
  },
};
