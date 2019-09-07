import userService,{ checkDataNotNull } from './service';
import { newUserController } from './controller';
import { testNameToKey } from 'jest-snapshot/build/utils';

describe('UserService-Test', () => {
  const mockUser = [
    {
      id: 2,
      createdAt: '2019-08-18T16:48:38.000Z',
      updatedAt: null,
      deletedAt: null,
      firstName: 'Mild',
      lastName: 'Noita',
      email: 'nakaz@email.com',
    }]
    const mockUser1 = [{
      id: 3,
      createdAt: '2019-08-18T16:48:38.000Z',
      updatedAt: null,
      deletedAt: null,
      firstName: 'Test2',
      lastName: 'Noita',
      email: 'nakaz@email.com',
    }]
    const mockUser2 = []
    const mockUser3 =[{
      id: 4,
      createdAt: '2019-09-01T11:12:58.000',
      updatedAt: null,
      deletedAt: null,
      firstName: 'kaotu',
      lastName: 'tu',
      email: 'nigel@email.com'
    }]
    ;

  describe('reverseFullName()', () => {
    test("should not return ''", () => {
      expect(userService.reverseFullName(mockUser)).not.toBe('');
    });
    test('should be return "atioNdliM" when given "MildNoita"', () => {
      expect(userService.reverseFullName(mockUser)).toBe('atioNdliM');
    });
    test('should be return "atioN2tseT" when given "Test2Noita"', () => {
      expect(userService.reverseFullName(mockUser1)).toBe('atioN2tseT');
    });
  });

  describe('genPassWord()', () => {
    test("should return invalid was given mockup data not found ", () => {
      expect(userService.genPassWord(mockUser2)).toBe('invalid');
    });
    test("should return password was generate when given mockup data", () => {
      expect(typeof userService.genPassWord(mockUser) === "string").toBe(true);
    });
  });

  describe('checkDataNotNull', () => {
    test('should return false when given data[0] is undefined', () => {
      expect(checkDataNotNull(mockUser2)).toBe(false);
    });
    test('should return true when given data is not null', () => {
      expect(checkDataNotNull(mockUser1)).toBe(true);
    })
  });

  console.log('ENV : '+ process.env.NODE_ENV);
  describe('newUserController', () => {
    test('should return Success! when given complete field on db', () =>{
      expect(newUserController(mockUser3)).toBe('Success!');
    });
  });
});
