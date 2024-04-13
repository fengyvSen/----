class Difference {
    constructor(nums) {
        this.diff = new Array(nums.length);
        this.diff[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            this.diff[i] = nums[i] - nums[i - 1];
        }
    }

    increment(i, j, val) {
        this.diff[i] += val;
        if (j + 1 < this.diff.length) {
            this.diff[j + 1] -= val;
        }
    }

    result() {
        let res = new Array(this.diff.length);
        res[0] = this.diff[0];
        for (let i = 1; i < this.diff.length; i++) {
            res[i] = res[i - 1] + this.diff[i];
        }
        return res;
    }
}

function getModifiedArray(length, updates) {
    // Initialize nums to all zeros
    let nums = new Array(length).fill(0);
    // Construct the difference array
    let df = new Difference(nums);

    for (let update of updates) {
        let i = update[0];
        let j = update[1];
        let val = update[2];
        df.increment(i, j, val);
    }

    return df.result();
}