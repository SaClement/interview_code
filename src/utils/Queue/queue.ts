interface IDequeData<T> {
  [index: number]: T
}

export class Deque<T> {
  protected data: Map<number, T> // IDequeData<T> = {} 使用Map储存数据
  protected count: 0 // 队尾的键
  protected lowestCount: 0 // 队首的键

  enqueue(element: T) {
    this.data.set(this.count, element);
    this.count++
  }

  dequeue(): T | any {
    if (this.isEmpty()) return
    const result: T = <T>this.data.get(this.lowestCount);
    this.data.delete(this.lowestCount);
    this.lowestCount++;
    return result
  }

  isEmpty() {
    return this.data.size === 0;
  }

  peek(): T | any {
    return this.data.get(this.lowestCount)
  }

  size(): number {
    return this.data.size;
  }

  clear() {
    this.data = new Map()
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) return ''
    let objString: string = `${this.data.get(this.lowestCount)}`
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString += `${this.data.get(i)}`;
    }
    return objString;
  }
}

export class DouQueue<T> extends Deque<T>{

  /**
   * 在LowestCount方向（队列的顶部）入队
   * @param {T} element - 内容
   */
  addFront(element: T) {
    this.lowestCount--
    this.data.set(this.lowestCount, element)
  }

  /**
   * 在count方向（队列的底部）入队
   * @param element 
   */
  addBack(element: T): void {
    this.data.set(this.count, element)
    this.count++
  }

  /**
   * 在lowestCount方向 出队
   * @returns {T} elemnet
   */
  removeFront(): T | undefined {
    if (this.isEmpty()) return;
    const result = this.data.get(this.lowestCount);
    this.data.delete(this.lowestCount)
    this.lowestCount++
    return result
  }

  /**
   * 在count方向 出队
   * @returns {T} element
   */
  removeBack(): T | undefined {
    if (this.isEmpty()) return;
    this.count--;
    const result = this.data.get(this.count);
    this.data.delete(this.count);
    return result;
  }

  peekFlont(): T | undefined {
    if (this.isEmpty()) return;
    return this.data.get(this.lowestCount);
  }

  peekBack(): T | undefined {
    if (this.isEmpty()) return;
    return this.data.get(this.count - 1);
  }
}