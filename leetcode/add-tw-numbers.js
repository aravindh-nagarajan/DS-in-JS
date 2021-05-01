// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let list1Ref = l1, list2Ref = l2;
    let list1Values = ''; 
    let list2Values = '';

    while(list1Ref || list2Ref) {
        if (list1Ref) {
                   list1Values = list1Ref.val + '' + list1Values;
                    list1Ref = list1Ref.next;
        } else {
                   list1Values = '0' + '' + list1Values;
        }

        if (list2Ref) {
                   list2Values = list2Ref.val + '' + list2Values;
                    list2Ref = list2Ref.next;
        } else {
                   list2Values = '0' + '' + list2Values;
        }
    }

    const sumArr =  String(BigInt(list1Values) + BigInt(list2Values)).split('');

    let sumList = null;

    sumArr.forEach(val => {
        const node = new ListNode(val);
         
        node.next = sumList;

        sumList = node;
    });

    return sumList;
};