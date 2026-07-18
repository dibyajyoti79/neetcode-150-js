class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const m = new Map();

        for (let i = 0; i < nums.length; i++) {
            m.set(nums[i], (m.get(nums[i]) || 0) + 1);
        }

        for (let [key, value] of m) {
            if (value > 1) {
                return true;
            }
        }
        return false;
    }
}
