// Definition for singly-linked list.
class ListNode {
  val
  next
  constructor(val, next) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers (l1, l2) {
  const prev = new ListNode(0)
  let cur = prev
  // 存储进位
  let carry = 0


  while (l1 || l2) {
    let x = l1 ? l1.val : 0
    let y = l2 ? l2.val : 0

    let sum = x + y + carry

    // 计算进位数
    carry = Math.floor(sum / 10)
    // 计算两个数的和,如果大于10取余数,1留着一次用
    sum %= 10

    // 创建新的节点
    cur.next = new ListNode(sum)
    // 将链表向后移
    cur = cur.next

    // 当链表l1,l2不等于null的时候，将l1,l2的节点后移
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }

  // 如果最后两个数相加的时候有进位数的情况,将进位数赋予链表新的节点
  // 两数相加最多小于20，所以的的值最大只能时1
  if (carry === 1) {
    cur.next = new ListNode(carry)
  }
  console.log(prev, '---')
  return prev.next
}

let l11 = new ListNode(2)
let l1 = l11
console.log(l11)
console.log(l11.val, 'l11')
l11.next = new ListNode(4)
l11 = l11.next
console.log(l11.val, 'l11')
l11.next = new ListNode(3)
l11 = l11.next
console.log(l11.val, 'l11')
console.log(l11)

let l22 = new ListNode(5)
let l2 = l22
console.log(l22.val, 'l22')
l22.next = new ListNode(6)
l22 = l22.next
console.log(l22.val, 'l22')
l22.next = new ListNode(4)
l22 = l22.next
console.log(l22.val, 'l22')
console.log(l22)


console.log(l1, l2)
addTwoNumbers(l1, l2)