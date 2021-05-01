// Given two sorted arrays nums1 and nums2 of size m and n respectively, 
// return the median of the two sorted arrays.

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.

var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [];
    
    const len1 = nums1.length;
    const len2 = nums2.length;
    
    let i = 0, j = 0;
    
    while (i < len1 && j < len2) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            
            i++;
        } else if (nums1[i] > nums2[j]) {
            mergedArray.push(nums2[j]);
            
            j++;
        } else if (nums1[i] === nums2[j]) {
            mergedArray.push(nums1[i]);
            mergedArray.push(nums2[j]);
            
            i++;
            j++;
        }
    }
    
    while (i < len1) {
        mergedArray.push(nums1[i]);
            
        i++;
    }
    
    while (j < len2) {
        mergedArray.push(nums2[j]);
            
        j++;
    }
        
    const arrLen = mergedArray.length;
    
    if (arrLen % 2) {
        const middleElem = Math.floor(arrLen/2);
        
        return mergedArray[middleElem].toFixed(5);
    } else {
        const middle = arrLen/2 -1;
        
        return ((mergedArray[middle] + mergedArray[middle+1])/2).toFixed(5);
    }
};