/** https://leetcode.com/problems/spiral-matrix/#/description
 * @param {number[][]} matrix
 * @return {number[]}
 */

 function Position() {
     this.x = this.y = 0;
 }

 var spiralOrder = function(matrix) {
     if (matrix === null || matrix.length === 0) {
         return [];
     }

     var x1 = 0;
     var x2 = matrix[0].length - 1;
     var y1 = 0;
     var y2 = matrix.length - 1;

     var result = [];
     var position = new Position();
     var direction = 0; // 0 horizental, 1 horizental-r, 2 vertical, 3 vertical-r

     while (x2 >= x1 && y2 >= y1) {
         result.push(matrix[position.y][position.x]);
         switch (direction) {
             case 0: {
                 if (position.x === x2) {
                     direction = 2;
                     y1++;
                     position.y++;
                 } else {
                     position.x++;
                 }
             }
             break;
             case 1: {
                 if (position.x === x1) {
                     direction = 3;
                     y2--;
                     position.y--;
                 } else {
                     position.x--;
                 }
             }
             break;
             case 2: {
                 if (position.y === y2) {
                     direction = 1;
                     x2--;
                     position.x--;
                 } else {
                     position.y++;
                 }
             }
             break;
             case 3: {
                 if (position.y === y1) {
                     direction = 0;
                     x1++;
                     position.x++;
                 } else {
                     position.y--;
                 }
             }
             break;
         }
     }

     return result;
 };
