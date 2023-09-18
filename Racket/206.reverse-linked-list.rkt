#lang racket

(struct list-node
  (val next) #:mutable #:transparent)

(define (make-list-node [val 0])
  (list-node val #f))

(define (append-list-node l1 l2)
  (if (false? l1) l2
      (list-node (list-node-val l1) (append-list-node (list-node-next l1) l2))))

(define/contract (reverse-list head)
  (-> (or/c list-node? #f) (or/c list-node? #f))
  (if (false? head) #f
      (append-list-node (reverse-list (list-node-next head)) (list-node (list-node-val head) #f))))

(define node1 (make-list-node 1))
(define node2 (make-list-node 2))
(define node3 (make-list-node 3))

(set-list-node-next! node1 node2)
(set-list-node-next! node2 node3)

(displayln (reverse-list #f))
(displayln (reverse-list node1))
