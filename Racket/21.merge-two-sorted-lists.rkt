#lang racket

(struct list-node
  (val next) #:mutable #:transparent)

(define (make-list-node [val 0])
  (list-node val #f))


(define/contract (merge-two-lists list1 list2)
  (-> (or/c list-node? #f) (or/c list-node? #f) (or/c list-node? #f))
  (cond ((false? list1) list2)
        ((false? list2) list1)
        ((< (list-node-val list1) (list-node-val list2)) (list-node (list-node-val list1) (merge-two-lists (list-node-next list1) list2)))
        (else (list-node (list-node-val list2) (merge-two-lists list1 (list-node-next list2))))))
