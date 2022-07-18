import { isPalindrome } from "../src/isPalindrome"

describe('isPalindrome', () => {
  test('is Palindrome', () => {
    let str1 = 'race a car'
    expect(isPalindrome(str1)).toBe(false);
  })
})