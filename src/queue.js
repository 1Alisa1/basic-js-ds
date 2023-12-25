const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.first;
  }

  enqueue(value) {
    this.l = new ListNode(value);
    

    if (!this.first) {
      this.first =  this.l;
      this.last =  this.l;
    } else {
      this.last.next =  this.l;
      this.last =  this.l;
    }
  }

  dequeue() {
    if (!this.first) return null;

    const temp = this.first;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;

    return temp.value;
  }
}

module.exports = {
  Queue
};
