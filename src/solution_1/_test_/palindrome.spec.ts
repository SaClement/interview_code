import { isPalindrome } from '../src/palindrome'
describe('palindrome', () => {
  test('is palindrome number', () => {
    const num1 = 12345654321;
    const num2 = 5644;

    expect(isPalindrome(num1)).toBe(true);
    expect(isPalindrome(num2)).toBe(false);
  })
})