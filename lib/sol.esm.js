class hashTable {
    constructor() {
        this.storage = [];
        this.count = 0;
        this.limit = 7;
    }
    hashFunc(str, size) {
        var hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        var index = hashCode % size;
        return index;
    }
    put(key, value) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index];
        if (bucket == null) {
            bucket = [];
            this.storage[index] = bucket;
        }
        for (let i = 0; i < bucket.length; i++) {
            var element = bucket[i];
            if (element[0] == key) {
                element[1] = value;
                return;
            }
        }
        bucket.push([key, value]);
        this.count += 1;
        if (this.count > this.limit * 0.75) {
            var newsize = this.limit * 2;
            var newnum = this.getPrime(newsize);
            this.resize(newnum);
        }
    }
    get(key) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index];
        if (bucket == null) {
            return null;
        }
        for (var i = 0; i < bucket.length; i++) {
            var element = bucket[i];
            if (element[0] == key) {
                return element[1];
            }
        }
        return null;
    }
    remove(key) {
        var index = this.hashFunc(key, this.limit);
        var bucket = this.storage[index];
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
                return element[1];
            }
        }
        return null;
    }
    isEmpty() { return this.count = 0; }
    size() { return this.count; }
    resize(newLimit) {
        var oldStorage = this.storage;
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        for (let i = 0; i < oldStorage.length; i++) {
            var bucket = oldStorage[i];
            if (bucket == null) {
                continue;
            }
            for (var j = 0; j < bucket.length; j++) {
                var element = element[j];
                this.put(element[0], element[1]);
            }
        }
    }
    isPrime(num) {
        var temp = Math.sqrt(num);
        for (let i = 2; i <= temp; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    getPrime(num) {
        while (!this.isPrime(num)) {
            num++;
        }
        return num;
    }
}

function hashTwoSumSolution(numsArray, target) {
    const hashTabs = new hashTable();
    for (let i = 0; i < numsArray.length; i++) {
        if (hashTabs.get(`${target - numsArray[i]}`) !== null) {
            return [hashTabs.get(`${target - numsArray[i]}`), i];
        }
        hashTabs.put(`${numsArray[i]}`, i);
    }
    return [0];
}
function mapTwoSumSolution(nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(target - nums[i])) {
            return [numsMap.get(target - nums[i]), i];
        }
        numsMap.set(nums[i], i);
    }
    return [0];
}

export { hashTwoSumSolution, mapTwoSumSolution };
//# sourceMappingURL=sol.esm.js.map
