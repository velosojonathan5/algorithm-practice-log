/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 0;
    let right = n;

    while (left <= right) {
      let mid = Math.ceil((right + left) / 2);

      if (isBadVersion(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return right + 1;
  };
};
