
type AnyKeyValueNumber = { [key: string]: number };

function solution(nums: number[], target: number): { data: null | number[] } {
    const map: AnyKeyValueNumber = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) return { data: [i, i + 1] }
        const comp = target - nums[i];
        if (map[comp] !== undefined) {
            return { data: [map[comp], i] };
        }
        map[nums[i]] = i;
    }
    return { data: null }
}

export default solution