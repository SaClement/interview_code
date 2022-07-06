interface StackData<T> {
  [index: number | string]: T;
}

export interface Stack<T> {
  items: StackData<T>;
  count: number;
  push(element: T): void;
  peek(): T;
  pop(): void | T;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  toString(): string;
}

export class Stack<T> {
  public items: StackData<T> = {};
  public count: number = 0

  constructor() { }

  push(element: T): void {
    this.items[this.count++] = element
  }

  peek(): T {
    return this.items[this.count - 1];
  }

  pop(): void | T {
    if (this.isEmpty()) return;
    const result = this.items[--this.count];
    delete this.items[this.count];
    return result;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  clear(): void {
    this.items = {};
    this.count = 0;
  }

  toString(): string {
    if (this.isEmpty()) return "";
    let objStr: string = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objStr += `${this.items[i]}`;
    }
    return objStr;
  }
}