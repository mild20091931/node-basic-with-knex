import userModel from './model';
import userService from './service';

export default {
  reverseFullNameController: async (req, res) => {
    const firstName = await req.params.firstName;
    const user = await userModel.findUserByFirstName(firstName);
    console.log(user);
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
    const data = await req.body;
    const newUser = await userModel.createUser(data);
    return res.status(201).send('Success!');
    console.log(data);
  },

  updateAllController: async (req, res) => {
    const data = await req.body;
    const id = req.params.id;
    const user = await userModel.findUserById(id);
    const updateData = await userModel.updateDataByModel(id, data);
    return res.send('ID : ' + id + ' update success!');
  },

  deleteUserController: async (req, res) => {
    const id = await req.params.id;
    const user = await userModel.findUserById(id);
    const delUser = await userModel.deleteUser(id, user);
    return res.send('ID :' + id + ' Deleted');
  },
};
