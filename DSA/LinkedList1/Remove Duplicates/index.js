class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicates(head) {
    if (!head) {
      return head;
    }
  
    const uniqueValues = new Set();
    let current = head;
    let previous = null;
  
    while (current) {
      if (uniqueValues.has(current.value)) {
  
        previous.next = current.next;
      } else {
      
        uniqueValues.add(current.value);
        previous = current;
      }
  
      current = current.next;
    }
  
    return head;
  }
  

  