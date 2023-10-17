class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function mergeSortedLists(list1, list2) {
    if (!list1) {
      return list2;
    }
    if (!list2) {
      return list1;
    }
  
    let mergedHead = new Node(-1); // Dummy head node to simplify code
    let current = mergedHead;
  
    while (list1 && list2) {
      if (list1.value < list2.value) {
        current.next = list1;
        list1 = list1.next;
      } else {
        current.next = list2;
        list2 = list2.next;
      }
      current = current.next;
    }
  
    // Append remaining nodes if any
    if (list1) {
      current.next = list1;
    }
    if (list2) {
      current.next = list2;
    }
  
    return mergedHead.next; // Skip the dummy head node
  }
