class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseKNodes(head, k) {
    if (!head || k <= 1) {
      return head;
    }
  
    let current = head;
    let previous = null;
    let next = null;
    let count = 0;
  
    // Count the number of nodes in the current group
    let temp = head;
    while (temp && count < k) {
      temp = temp.next;
      count++;
    }
  
    if (count < k) {
      return head;
    }
  
    count = 0;
    while (current && count < k) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      count++;
    }
  
    if (next) {
      head.next = reverseKNodes(next, k);
    }
  
    return previous;
  }
  
  
  
 
  