import userService from './service';

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
    },
  ];
  describe('reverseFullName()', () => {
    test("should not return ''", () => {
      expect(userService.reverseFullName(mockUser)).not.toBe('');
    });
    test('should be return "dliM" when given "Mild"', () => {
      expect(userService.reverseFullName(mockUser)).toBe('atioNdliM');
    });
  });
});
