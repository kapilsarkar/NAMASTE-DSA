# Find Second Largest Number

A simple JavaScript function to find the second largest unique number in an array.

---

## Code

```javascript
function secondLargestNum(arr) {
  if (arr.length < 2) return null;

  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }

  return second === -Infinity ? null : second;
}

// Example:
const arr = [10, 20, 50, 60, 100, 100];
console.log(secondLargestNum(arr)); // 60
```

---

## How It Works (In 3 Lines)

1. Keep track of two numbers: `first` and `second` (starting at `-Infinity`).
2. If the current number is bigger than `first`, push `first` down to `second` and update `first`.
3. If it's smaller than `first` but bigger than `second`, update `second`.

---

## Quick Dry Run

**Array:** `[10, 20, 50, 60, 100, 100]`

| Step | Number | Action | `first` | `second` |
| :--- | :--- | :--- | :--- | :--- |
| Start | — | Initialize | `-Infinity` | `-Infinity` |
| 1 | `10` | Greater than `first` | `10` | `-Infinity` |
| 2 | `20` | Greater than `first` | `20` | `10` |
| 3 | `50` | Greater than `first` | `50` | `20` |
| 4 | `60` | Greater than `first` | `60` | `50` |
| 5 | `100` | Greater than `first` | `100` | `60` |
| 6 | `100` | Duplicate of `first`, skip | `100` | `60` |

**Result:** `60`

---

## Edge Cases Handled

* **Fewer than 2 items:** Returns `null`.
* **Duplicates of the maximum:** Skipped automatically.
* **Negative numbers:** Handled correctly because initial values start at `-Infinity`.
* **All elements identical (e.g., `[5, 5, 5]`):** Returns `null` since no distinct second largest exists.

---

## Complexity

* **Time:** $\mathcal{O}(n)$ (single loop)
* **Space:** $\mathcal{O}(1)$ (uses two variables)