function lengthOfLongestSubstring(s) {
    if(s.length == 1) {
        return 1
    }

    let start = 0;
    let maxWindow = 0;

    const lastIndex = new Map();
    for(let i = 0; i < s.length; i++) {
        lastIndex.set(s[i], -1)
    }

    for (let end = 0; end < s.length; end++) {
        start = Math.max(start, lastIndex.get(s[end]) + 1)

        maxWindow = Math.max(maxWindow, end - start + 1);

        lastIndex.set(s[end], end)
    }
    return maxWindow;
};

console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb") === 3);
console.log("ab", lengthOfLongestSubstring("ab") === 2);
console.log("EMPTY", lengthOfLongestSubstring(" ") === 1);
console.log("abba", lengthOfLongestSubstring("abba") === 2);