// // 11. 盛最多水的容器
// 中等
// 相关标签
// premium lock icon
// 相关企业
// 提示
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// 示例 1：

// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
// 解释：图中垂直线代表输入数组 [1,8,6,2,5,4,8,3,7]。在此情况下，容器能够容纳水（表示为蓝色部分）的最大值为 49。
// 示例 2：

// 输入：height = [1,1]
// 输出：1

// 提示：
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// 输入：[1,8,6,2,5,4,8,3,7]
function maxArea(height) {
    let l = 0;
    let r = height.length - 1;
    let max = 0;
  
    while (l < r) {
      const h = Math.min(height[l], height[r]);
      const w = r - l;
      max = Math.max(max, h * w);
  
      // 移动短板
      if (height[l] < height[r]) {
        l++;
      } else {
        r--;
      }
    }
  
    return max;
  }
  
// const maxArea = function (heights) {

//   var left = 0;
//   var right = 1;
//   var area = 0;

//   if (heights.length === 2) {
//     return Math.min(heights[0], heights[1]);
//   } else if (heights.length > 105) {
//     heights = heights.splice(0, 105);
//   }

//   while (left !== heights.length - 1) {
    
//     const height = Math.min(heights[left], heights[right]);
//     const width = Math.abs(right - left);
//     area = Math.max(area, height * width);

//     if (right === heights.length - 1) {
//       left++;
//       right = left + 1;
//     } else {
//       right++;
//     }
//   }

//   return area;
// };

const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);

console.log("res:", res);
