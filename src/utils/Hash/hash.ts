export class hashTable {
  public storage: any[]
  public count: number
  public limit: number

  constructor() {
    this.storage = []
    this.count = 0
    this.limit = 7
  }

  hashFunc(str: string, size: number) {
    var hashCode = 0

    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i)
      // console.log(hashCode);
    }

    var index = hashCode % size
    return index
  }

  put(key: string, value: number) {
    // 1.使用哈希函数获取我们在storage的对应位置index
    var index = this.hashFunc(key, this.limit)
    // 2.根据index取出我们的bucket
    var bucket = this.storage[index]
    // 3.如果bucket为空，我们创建bucket
    if (bucket == null) {
      bucket = []
      this.storage[index] = bucket
    }
    // 4.遍历bucket判断我们到底是插入还是修改数据
    for (let i = 0; i < bucket.length; i++) {
      var element = bucket[i];
      if (element[0] == key) {
        element[1] = value;
        return
      }
    }
    // 5.进行添加操作
    bucket.push([key, value]);
    this.count += 1;
    // 6.判断是否扩容 
    if (this.count > this.limit * 0.75) {
      var newsize = this.limit * 2
      var newnum = this.getPrime(newsize);
      // 重置
      this.resize(newnum)
    }
  }

  get(key: string) {
    var index = this.hashFunc(key, this.limit);

    var bucket = this.storage[index];
    // 3.判断bucket是否为空，若为空则返回null
    if (bucket == null) {
      return null
    }
    // 4.顺序遍历bucket，若没有则返回null，有则返回value
    for (var i = 0; i < bucket.length; i++) {
      var element = bucket[i];
      if (element[0] == key) {
        return element[1]
      }
    }
    return null
  }

  remove(key: string) {
    var index = this.hashFunc(key, this.limit);
    var bucket = this.storage[index]
    if (bucket == null) {
      return null;
    }

    for (let i = 0; i < bucket.length; i++) {
      var element = bucket[i];
      if (element[0] == key) {
        bucket.splice(i, 1);
        this.count -= 1;

        if (this.limit > 7 && this.count < this.limit * 0.25) {
          this.resize(Math.floor(this.limit / 2));
        }
        return element[1]
      }
    }

    return null
  }

  isEmpty() { return this.count = 0; }

  size() { return this.count }

  resize(newLimit: number) {
    var oldStorage = this.storage;
    // 重置所有属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    for (let i = 0; i < oldStorage.length; i++) {
      var bucket = oldStorage[i]
      // 4.若没有数据就continue
      if (bucket == null) {
        continue;
      }

      for (var j = 0; j < bucket.length; j++) {
        var element: any = element[j];
        this.put(element[0], element[1])
      }
    }
  }

  // 判断是否是质数
  isPrime(num: number) {
    var temp = Math.sqrt(num);
    for (let i = 2; i <= temp; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true
  }

  getPrime(num: number) {
    while (!this.isPrime(num)) {
      num++
    }
    return num
  }
}