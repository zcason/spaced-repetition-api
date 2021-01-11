class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    //   first node
    head = null;

    insertFirstItem(item) {
        this.head = new _Node(item, this.head);
    }

    insertLastItem(item) {
        //   if list is empty
        if (this.head === null) {
            this.insertFirstItem(item);
        } else {
            // start the beginning of the list
            let tempNode = this.head;

            // find the last node in the list
            while (tempNode.next !== null) {
                // replacing the current node with the next node  
                tempNode = tempNode.next;
            }
            // set the node to end of list  
            tempNode.next = new _Node(item, null);
        }
    }

    sendBackM(mv) {
        let count = 0;
        let curr = this.head;

        while (count < mv && curr.next !== null) {
            curr = curr.next;
            count += 1;
        }

        const answer = new _Node(this.head.value);
        if (curr.next === null) {
            answer.next = curr.next;
            curr.next = answer;
            this.head = this.head.next;
            curr.value.next = answer.value.id;
            answer.value.next = null;
        } else {
            answer.next = curr.next;
            curr.next = answer;
            this.head = this.head.next;
            curr.value.next = answer.value.id;
            answer.value.next = answer.next.value.id;
        }
        return answer;
    }
    insertBefore(value, search) {
        //inserts a new node BEFORE a given node
        let temp = this.head;
        while (temp.next.value !== search) {
            temp = temp.next;
        }
        temp.next = new _Node(value, temp.next);
    }

    insertAfter(value, search) {
        //inserts an item at a specific position in the linked list
        let temp = this.head;
        while (temp.value !== search) {
            temp = temp.next;
        }
        temp.next = new _Node(value, temp.next);
    }

    insertAt(value, position) {
        let temp = this.head;
        let count = 0;

        while (temp.value !== null && count < position - 1) {
            temp = temp.next;
            count++;
        }
        temp.next = new _Node(value, temp.next);
    }

    find(item) {
        //start at the head
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        //check for the item
        while (currNode.value !== item) {
            /* Return null if it's the end of the list
                         and the item is not on the list */
            if (currNode.next === null) {
                return null;
            } else {
                //keep looking
                currNode = currNode.next;
            }
            return currNode;
        }
    }
    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while (currNode !== null && currNode.value !== item) {
            // Save the previous node
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log("Item not found");
            return;
        }
        previousNode.next = currNode.next;
    }
}

function makeArray(ll) {
    let curr = ll.head;
    let result = [];

    while (curr.next !== null) {
        result.push(curr.value);
        curr = curr.next;
    }
    result.push(curr.value);
    return result;
}

module.exports = { LinkedList, makeArray };