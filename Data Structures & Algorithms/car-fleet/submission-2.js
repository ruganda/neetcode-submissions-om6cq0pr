class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
    const posTime = position.map((pos, i) => {
        return [pos, (target - pos) / speed[i]];
    });

    // 2. Sort cars by position (ascending)
    posTime.sort((a, b) => a[0] - b[0]);

    const stack = [];

    // 3. Iterate backwards (from car closest to target to furthest)
    for (let i = posTime.length - 1; i >= 0; i--) {
        const currentTime = posTime[i][1];
        stack.push(currentTime);

        // 4. If the current car takes LESS or EQUAL time than the car in front,
        // it will catch up and become part of that fleet.
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop(); // Remove the faster car because it joined the fleet in front
        }
    }

    return stack.length;
    }
}
