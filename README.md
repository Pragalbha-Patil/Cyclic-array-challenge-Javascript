# Cyclic array challenge

Cyclic array challenge implemented in Javascript

## Problem Statement

A cyclic array A having N numbers, and he has to perform Q operations on this array. In each operation the coach would provide him with a number X. After each operation, every element of the cyclic array would be replaced by the sum of itself and the element lying X positions behind it in the cyclic array. All these replacements take place simultaneously. For example, if the cyclic array was [a, b, c, d], then after the operation with X = 1, the new array would be [a+d, b+a, c+b, d+c]. He needs to output the sum of the elements of the final array modulus 10^9+7.

## Input

The first line of each test file contains a integer N (1 <= N <= 100000). The next line contains N space separated integers which represent the elements of the cyclic array ( 1 <= Ai <= 10^9 ). The third line contains a integer Q (0 <= Q <= 1000000) representing the number of operations that will be applied to the array. Finally, Q lines follow, each one containing an integer X (0 <= X < N).

## Output
Your program should output to the standard output stream the sum of the elements of the final array modulus 10^9+7. Note: There is a newline character at the end of the last line of the output.

## Sample Input
5 (# no.of integers in the following array)

1 2 3 4 5 ( # array itself)

2 (# no.of Q operations)

1 (# Q1 value)

0 (# Q2 value)

## Sample output 
60

## Explanation of Sample Input

After the 1st operation (X = 1), the array would be [1+5, 2+1, 3+2, 4+3, 5+4] = [6, 3, 5, 7, 9]
