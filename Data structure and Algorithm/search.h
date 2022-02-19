#include <vector>
using namespace std;

//Binary Search
template <class TYPE>
int linearSearch(const vector<TYPE>& arr, const TYPE& key) {
    int rc = -1; // 1
    for (int i = 0; i < arr.size() && rc == -1; i++) { // 1+ 5n
        if (arr[i] == key) { // n
            rc = i;
        }
    }
    return rc; // 1
}
// T(n) = 1+ 1+ 5n + n + 1
//      = 6n + 3
// T(n) = O(n)

//Binary Search
template <class TYPE>
int binarySearch(const vector<TYPE>& arr, const TYPE& key) {
    int rc = -1; // 1
    int low = 0; // 1 
    int high = arr.size() - 1; // 3
    int mid; // 1
    while (low <= high && rc == -1) { // 3(1 + log n)
        mid = (low + high) / 2; // 3(1 + log n)
        if (key < arr[mid]) // 1 + log n
            high = mid - 1; // skipped
        else if (key > arr[mid]) //1 + log n
            low = mid + 1; // 2(1 + log n)
        else // skipped
            rc = mid; // skipped
    }
    return rc; // 1
}
// T(n) = 1 + 1 + 3 + 1 + 3(1 + log n) + 3(1 + log n) + (1 + log n) + (1 + log n) + 2(1 + log n)
//      = 10 log n + 16
// T(n) = O(log n)