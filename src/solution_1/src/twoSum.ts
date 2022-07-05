import { hashTable } from "../../utils"

export function hashTwoSumSolution (numsArray: Array<number>, target: number) {
  const hashTabs = new hashTable()
  for ( let i = 0; i < numsArray.length; i++ ) {
    if(hashTabs.get(`${target - numsArray[i]}`) !== null) {
      return [hashTabs.get(`${target - numsArray[i]}`), i]
    }
    hashTabs.put(`${numsArray[i]}`, i)
  }
  
  return [0] as Array<number>
}


export function mapTwoSumSolution (nums: Array<number>, target: number) {
  const numsMap = new Map()
  for(let i = 0; i < nums.length; i++) {
      if (numsMap.has(target - nums[i])) {
          return [numsMap.get(target - nums[i]), i];
      }
      numsMap.set(nums[i], i);
  }
  return [0] as Array<number>
};