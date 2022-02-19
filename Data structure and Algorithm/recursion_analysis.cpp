// factorial with iteration
unsigned long long factorial(unsigned int n) {
	unsigned long long total = 1; // 1
	for (int i = 1; i <= n; i++) { // 1 + (n + 1) + n
		total *= i; // n
	}
	return total; // 1
}
// T(n) = 1 + 1 + (n+ 1) + n + n + 1
// T(n) = 3n + 4
// T(n) = O(n)


// factorial with recursion
unsigned long long factorial(unsigned int n) {
	unsigned long long res = 1; // 1
	if (n > 1) // 1
		res = n * factorial(n - 1); // 3 + T(n-1)
	return res; // 1
}
// T(n) = 6 + T(n-1)
// T(n-1) = 6 + 6 + T(n-2)
// T(n-2) = 6 + 6 + 6 + T(n-3)
// ...
// T(1) = 3
// T(n) = 6(n-1) + 3
// T(n) = 6n - 3
// T(n) = O(n)


// power with iteration
unsigned long long power(unsigned int base, unsigned int n) {
	unsigned long long total = 1; // 1
	int i = 1; // 1
	while (i <= n) { // n+1
		total *= base; // n
		i++; // n
	}
	return total; // 1
}
// T(n) = 1 + 1 + (n+ 1) + n + n + 1
// T(n) = 3n + 4
// T(n) = O(n)


// power with recursion
unsigned long long power(unsigned int base, unsigned int n) {
	unsigned long long res = 1; // 1
	if (n > 0) // 1
		res = base * power(base, n - 1); // 3 + T(n-1)
	return res; // 1
}
// T(n) = 6 + T(n-1)
// T(n-1) = 6 + 6 + T(n-2)
// T(n-2) = 6 + 6 + 6 + T(n-3)
// ...
// T(1) = 3
// T(n) = 6(n-1) + 3
// T(n) = 6n - 3
// T(n) = O(n)


// fibonacci with iteration
unsigned long long fibonacci(unsigned int n) {
	unsigned long long twoBefore = 1, oneBefore = 1, total = 0; // 3
	if (n == 0) { // 1
		total = 0; // skipped
	}
	else if (n == 1 || n == 2) { // 3
		total = 1; // skipped
	}
	else {
		for (int i = 3; i <= n; i++) { // 1 + (n-2) + (n-3)
			total = twoBefore + oneBefore; // 2(n-3)
			twoBefore = oneBefore; // (n-3)
			oneBefore = total; // (n-3)
		}
	}
	return total; // 1
}
// T(n) = 3 + 1 + 3 + 1 + (n-2) + (n-3) + 2(n-3) + (n-3) + (n-3) + 1
// T(n) = 6n - 8
// T(n) = O(n)


// fibonacci with recursion
unsigned long long fibonacci(unsigned int n) {
	unsigned long long res = n; // 1
	if (n > 1) // 1
		res = fibonacci(n - 1) + fibonacci(n - 2); // 3 + T(n-1) + T(n-2)
	return res; // 1
}
// T(n) = O(n^2)


// bubbleSort
void bubbleSort(int arr[], int size) {
	int tmp;                            
	for (int i = 0; i < size - 1; i++) {   
		for (int j = 0; j < size - 1 - i; j++) { 
			if (arr[j + 1] < arr[j]) { 
				tmp = arr[j]; 
				arr[j] = arr[j + 1]; 
				arr[j + 1] = tmp; 
			}
		}
	}
}
// T(n) = n + (n-1) + (n-2) + ... + 1 
// T(n) = n(n-2)/2
// T(n) = O(n^2)