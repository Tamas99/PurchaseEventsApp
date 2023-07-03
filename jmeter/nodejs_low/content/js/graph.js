/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 3292.0, "series": [{"data": [[0.0, 34.0], [0.1, 34.0], [0.2, 35.0], [0.3, 35.0], [0.4, 35.0], [0.5, 35.0], [0.6, 35.0], [0.7, 35.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 35.0], [1.3, 36.0], [1.4, 36.0], [1.5, 36.0], [1.6, 36.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 36.0], [2.4, 36.0], [2.5, 36.0], [2.6, 36.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 36.0], [3.4, 36.0], [3.5, 36.0], [3.6, 36.0], [3.7, 36.0], [3.8, 36.0], [3.9, 36.0], [4.0, 36.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 36.0], [4.8, 36.0], [4.9, 36.0], [5.0, 36.0], [5.1, 36.0], [5.2, 36.0], [5.3, 36.0], [5.4, 36.0], [5.5, 36.0], [5.6, 36.0], [5.7, 36.0], [5.8, 36.0], [5.9, 36.0], [6.0, 36.0], [6.1, 36.0], [6.2, 36.0], [6.3, 36.0], [6.4, 36.0], [6.5, 36.0], [6.6, 36.0], [6.7, 36.0], [6.8, 37.0], [6.9, 37.0], [7.0, 37.0], [7.1, 37.0], [7.2, 37.0], [7.3, 37.0], [7.4, 37.0], [7.5, 37.0], [7.6, 37.0], [7.7, 37.0], [7.8, 37.0], [7.9, 37.0], [8.0, 37.0], [8.1, 37.0], [8.2, 37.0], [8.3, 37.0], [8.4, 37.0], [8.5, 37.0], [8.6, 37.0], [8.7, 37.0], [8.8, 37.0], [8.9, 37.0], [9.0, 37.0], [9.1, 37.0], [9.2, 37.0], [9.3, 37.0], [9.4, 37.0], [9.5, 37.0], [9.6, 37.0], [9.7, 37.0], [9.8, 37.0], [9.9, 37.0], [10.0, 37.0], [10.1, 37.0], [10.2, 37.0], [10.3, 37.0], [10.4, 37.0], [10.5, 37.0], [10.6, 37.0], [10.7, 37.0], [10.8, 37.0], [10.9, 37.0], [11.0, 37.0], [11.1, 37.0], [11.2, 37.0], [11.3, 37.0], [11.4, 37.0], [11.5, 37.0], [11.6, 37.0], [11.7, 37.0], [11.8, 37.0], [11.9, 37.0], [12.0, 37.0], [12.1, 37.0], [12.2, 37.0], [12.3, 37.0], [12.4, 37.0], [12.5, 37.0], [12.6, 37.0], [12.7, 37.0], [12.8, 37.0], [12.9, 37.0], [13.0, 37.0], [13.1, 37.0], [13.2, 37.0], [13.3, 37.0], [13.4, 37.0], [13.5, 37.0], [13.6, 37.0], [13.7, 37.0], [13.8, 37.0], [13.9, 37.0], [14.0, 37.0], [14.1, 37.0], [14.2, 37.0], [14.3, 37.0], [14.4, 37.0], [14.5, 37.0], [14.6, 37.0], [14.7, 37.0], [14.8, 37.0], [14.9, 37.0], [15.0, 37.0], [15.1, 38.0], [15.2, 38.0], [15.3, 38.0], [15.4, 38.0], [15.5, 38.0], [15.6, 38.0], [15.7, 38.0], [15.8, 38.0], [15.9, 38.0], [16.0, 38.0], [16.1, 38.0], [16.2, 38.0], [16.3, 38.0], [16.4, 38.0], [16.5, 38.0], [16.6, 38.0], [16.7, 38.0], [16.8, 38.0], [16.9, 38.0], [17.0, 38.0], [17.1, 38.0], [17.2, 38.0], [17.3, 38.0], [17.4, 38.0], [17.5, 38.0], [17.6, 38.0], [17.7, 38.0], [17.8, 38.0], [17.9, 38.0], [18.0, 38.0], [18.1, 38.0], [18.2, 38.0], [18.3, 38.0], [18.4, 38.0], [18.5, 38.0], [18.6, 38.0], [18.7, 39.0], [18.8, 39.0], [18.9, 39.0], [19.0, 39.0], [19.1, 39.0], [19.2, 39.0], [19.3, 39.0], [19.4, 39.0], [19.5, 39.0], [19.6, 39.0], [19.7, 39.0], [19.8, 39.0], [19.9, 39.0], [20.0, 39.0], [20.1, 39.0], [20.2, 39.0], [20.3, 39.0], [20.4, 39.0], [20.5, 39.0], [20.6, 39.0], [20.7, 39.0], [20.8, 39.0], [20.9, 39.0], [21.0, 39.0], [21.1, 39.0], [21.2, 39.0], [21.3, 39.0], [21.4, 39.0], [21.5, 39.0], [21.6, 39.0], [21.7, 39.0], [21.8, 39.0], [21.9, 39.0], [22.0, 39.0], [22.1, 39.0], [22.2, 39.0], [22.3, 40.0], [22.4, 40.0], [22.5, 40.0], [22.6, 40.0], [22.7, 40.0], [22.8, 40.0], [22.9, 40.0], [23.0, 40.0], [23.1, 40.0], [23.2, 40.0], [23.3, 40.0], [23.4, 40.0], [23.5, 40.0], [23.6, 40.0], [23.7, 40.0], [23.8, 40.0], [23.9, 40.0], [24.0, 40.0], [24.1, 40.0], [24.2, 40.0], [24.3, 40.0], [24.4, 40.0], [24.5, 40.0], [24.6, 40.0], [24.7, 40.0], [24.8, 41.0], [24.9, 41.0], [25.0, 41.0], [25.1, 41.0], [25.2, 41.0], [25.3, 41.0], [25.4, 41.0], [25.5, 41.0], [25.6, 41.0], [25.7, 41.0], [25.8, 41.0], [25.9, 41.0], [26.0, 41.0], [26.1, 41.0], [26.2, 41.0], [26.3, 41.0], [26.4, 41.0], [26.5, 41.0], [26.6, 41.0], [26.7, 41.0], [26.8, 42.0], [26.9, 42.0], [27.0, 42.0], [27.1, 42.0], [27.2, 42.0], [27.3, 42.0], [27.4, 42.0], [27.5, 43.0], [27.6, 43.0], [27.7, 43.0], [27.8, 43.0], [27.9, 43.0], [28.0, 43.0], [28.1, 43.0], [28.2, 43.0], [28.3, 44.0], [28.4, 44.0], [28.5, 44.0], [28.6, 44.0], [28.7, 44.0], [28.8, 44.0], [28.9, 45.0], [29.0, 45.0], [29.1, 45.0], [29.2, 46.0], [29.3, 46.0], [29.4, 47.0], [29.5, 47.0], [29.6, 48.0], [29.7, 51.0], [29.8, 55.0], [29.9, 57.0], [30.0, 67.0], [30.1, 69.0], [30.2, 70.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 71.0], [30.7, 71.0], [30.8, 71.0], [30.9, 71.0], [31.0, 71.0], [31.1, 72.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 73.0], [31.6, 73.0], [31.7, 73.0], [31.8, 73.0], [31.9, 73.0], [32.0, 74.0], [32.1, 75.0], [32.2, 75.0], [32.3, 75.0], [32.4, 76.0], [32.5, 76.0], [32.6, 77.0], [32.7, 77.0], [32.8, 78.0], [32.9, 78.0], [33.0, 79.0], [33.1, 80.0], [33.2, 81.0], [33.3, 84.0], [33.4, 140.0], [33.5, 151.0], [33.6, 206.0], [33.7, 216.0], [33.8, 238.0], [33.9, 244.0], [34.0, 251.0], [34.1, 254.0], [34.2, 257.0], [34.3, 267.0], [34.4, 272.0], [34.5, 274.0], [34.6, 280.0], [34.7, 281.0], [34.8, 282.0], [34.9, 284.0], [35.0, 288.0], [35.1, 292.0], [35.2, 298.0], [35.3, 301.0], [35.4, 303.0], [35.5, 313.0], [35.6, 318.0], [35.7, 319.0], [35.8, 322.0], [35.9, 325.0], [36.0, 332.0], [36.1, 336.0], [36.2, 339.0], [36.3, 340.0], [36.4, 343.0], [36.5, 345.0], [36.6, 346.0], [36.7, 349.0], [36.8, 349.0], [36.9, 350.0], [37.0, 352.0], [37.1, 354.0], [37.2, 359.0], [37.3, 360.0], [37.4, 362.0], [37.5, 364.0], [37.6, 365.0], [37.7, 367.0], [37.8, 368.0], [37.9, 370.0], [38.0, 371.0], [38.1, 373.0], [38.2, 375.0], [38.3, 377.0], [38.4, 382.0], [38.5, 383.0], [38.6, 388.0], [38.7, 392.0], [38.8, 395.0], [38.9, 399.0], [39.0, 405.0], [39.1, 408.0], [39.2, 409.0], [39.3, 413.0], [39.4, 417.0], [39.5, 419.0], [39.6, 420.0], [39.7, 423.0], [39.8, 426.0], [39.9, 433.0], [40.0, 434.0], [40.1, 437.0], [40.2, 440.0], [40.3, 445.0], [40.4, 447.0], [40.5, 454.0], [40.6, 457.0], [40.7, 458.0], [40.8, 462.0], [40.9, 463.0], [41.0, 464.0], [41.1, 464.0], [41.2, 465.0], [41.3, 468.0], [41.4, 470.0], [41.5, 474.0], [41.6, 476.0], [41.7, 484.0], [41.8, 485.0], [41.9, 487.0], [42.0, 489.0], [42.1, 489.0], [42.2, 492.0], [42.3, 494.0], [42.4, 496.0], [42.5, 496.0], [42.6, 498.0], [42.7, 501.0], [42.8, 502.0], [42.9, 504.0], [43.0, 505.0], [43.1, 507.0], [43.2, 509.0], [43.3, 511.0], [43.4, 513.0], [43.5, 514.0], [43.6, 516.0], [43.7, 516.0], [43.8, 517.0], [43.9, 519.0], [44.0, 521.0], [44.1, 523.0], [44.2, 523.0], [44.3, 524.0], [44.4, 525.0], [44.5, 526.0], [44.6, 529.0], [44.7, 532.0], [44.8, 533.0], [44.9, 536.0], [45.0, 537.0], [45.1, 537.0], [45.2, 539.0], [45.3, 540.0], [45.4, 541.0], [45.5, 542.0], [45.6, 543.0], [45.7, 544.0], [45.8, 545.0], [45.9, 547.0], [46.0, 549.0], [46.1, 550.0], [46.2, 552.0], [46.3, 553.0], [46.4, 554.0], [46.5, 555.0], [46.6, 556.0], [46.7, 559.0], [46.8, 560.0], [46.9, 561.0], [47.0, 564.0], [47.1, 566.0], [47.2, 567.0], [47.3, 569.0], [47.4, 569.0], [47.5, 576.0], [47.6, 577.0], [47.7, 578.0], [47.8, 579.0], [47.9, 581.0], [48.0, 581.0], [48.1, 582.0], [48.2, 585.0], [48.3, 587.0], [48.4, 588.0], [48.5, 591.0], [48.6, 591.0], [48.7, 597.0], [48.8, 599.0], [48.9, 602.0], [49.0, 604.0], [49.1, 605.0], [49.2, 605.0], [49.3, 606.0], [49.4, 606.0], [49.5, 607.0], [49.6, 607.0], [49.7, 607.0], [49.8, 607.0], [49.9, 608.0], [50.0, 608.0], [50.1, 609.0], [50.2, 611.0], [50.3, 612.0], [50.4, 614.0], [50.5, 615.0], [50.6, 618.0], [50.7, 621.0], [50.8, 621.0], [50.9, 623.0], [51.0, 624.0], [51.1, 625.0], [51.2, 627.0], [51.3, 628.0], [51.4, 628.0], [51.5, 629.0], [51.6, 630.0], [51.7, 632.0], [51.8, 637.0], [51.9, 638.0], [52.0, 639.0], [52.1, 642.0], [52.2, 643.0], [52.3, 646.0], [52.4, 649.0], [52.5, 651.0], [52.6, 653.0], [52.7, 656.0], [52.8, 659.0], [52.9, 660.0], [53.0, 661.0], [53.1, 661.0], [53.2, 662.0], [53.3, 665.0], [53.4, 669.0], [53.5, 671.0], [53.6, 672.0], [53.7, 673.0], [53.8, 675.0], [53.9, 676.0], [54.0, 677.0], [54.1, 678.0], [54.2, 679.0], [54.3, 681.0], [54.4, 681.0], [54.5, 682.0], [54.6, 683.0], [54.7, 683.0], [54.8, 684.0], [54.9, 687.0], [55.0, 687.0], [55.1, 690.0], [55.2, 694.0], [55.3, 694.0], [55.4, 695.0], [55.5, 695.0], [55.6, 695.0], [55.7, 696.0], [55.8, 696.0], [55.9, 697.0], [56.0, 697.0], [56.1, 698.0], [56.2, 701.0], [56.3, 702.0], [56.4, 702.0], [56.5, 703.0], [56.6, 703.0], [56.7, 703.0], [56.8, 704.0], [56.9, 707.0], [57.0, 716.0], [57.1, 718.0], [57.2, 719.0], [57.3, 721.0], [57.4, 726.0], [57.5, 729.0], [57.6, 730.0], [57.7, 732.0], [57.8, 733.0], [57.9, 736.0], [58.0, 738.0], [58.1, 738.0], [58.2, 739.0], [58.3, 743.0], [58.4, 745.0], [58.5, 749.0], [58.6, 749.0], [58.7, 752.0], [58.8, 756.0], [58.9, 758.0], [59.0, 758.0], [59.1, 764.0], [59.2, 766.0], [59.3, 769.0], [59.4, 770.0], [59.5, 773.0], [59.6, 777.0], [59.7, 782.0], [59.8, 785.0], [59.9, 787.0], [60.0, 789.0], [60.1, 790.0], [60.2, 793.0], [60.3, 797.0], [60.4, 800.0], [60.5, 803.0], [60.6, 804.0], [60.7, 805.0], [60.8, 806.0], [60.9, 811.0], [61.0, 813.0], [61.1, 814.0], [61.2, 819.0], [61.3, 823.0], [61.4, 827.0], [61.5, 828.0], [61.6, 831.0], [61.7, 833.0], [61.8, 835.0], [61.9, 839.0], [62.0, 841.0], [62.1, 844.0], [62.2, 848.0], [62.3, 850.0], [62.4, 851.0], [62.5, 854.0], [62.6, 859.0], [62.7, 863.0], [62.8, 867.0], [62.9, 873.0], [63.0, 875.0], [63.1, 877.0], [63.2, 878.0], [63.3, 881.0], [63.4, 886.0], [63.5, 888.0], [63.6, 890.0], [63.7, 892.0], [63.8, 895.0], [63.9, 898.0], [64.0, 903.0], [64.1, 904.0], [64.2, 907.0], [64.3, 909.0], [64.4, 911.0], [64.5, 913.0], [64.6, 916.0], [64.7, 918.0], [64.8, 919.0], [64.9, 919.0], [65.0, 919.0], [65.1, 920.0], [65.2, 920.0], [65.3, 921.0], [65.4, 922.0], [65.5, 922.0], [65.6, 923.0], [65.7, 924.0], [65.8, 930.0], [65.9, 933.0], [66.0, 935.0], [66.1, 937.0], [66.2, 939.0], [66.3, 941.0], [66.4, 942.0], [66.5, 944.0], [66.6, 947.0], [66.7, 949.0], [66.8, 952.0], [66.9, 957.0], [67.0, 958.0], [67.1, 962.0], [67.2, 964.0], [67.3, 965.0], [67.4, 967.0], [67.5, 970.0], [67.6, 972.0], [67.7, 975.0], [67.8, 976.0], [67.9, 978.0], [68.0, 982.0], [68.1, 985.0], [68.2, 986.0], [68.3, 986.0], [68.4, 987.0], [68.5, 989.0], [68.6, 989.0], [68.7, 993.0], [68.8, 996.0], [68.9, 1000.0], [69.0, 1003.0], [69.1, 1003.0], [69.2, 1005.0], [69.3, 1005.0], [69.4, 1006.0], [69.5, 1010.0], [69.6, 1011.0], [69.7, 1014.0], [69.8, 1016.0], [69.9, 1020.0], [70.0, 1021.0], [70.1, 1025.0], [70.2, 1026.0], [70.3, 1029.0], [70.4, 1030.0], [70.5, 1032.0], [70.6, 1035.0], [70.7, 1037.0], [70.8, 1038.0], [70.9, 1039.0], [71.0, 1040.0], [71.1, 1040.0], [71.2, 1045.0], [71.3, 1049.0], [71.4, 1050.0], [71.5, 1051.0], [71.6, 1052.0], [71.7, 1053.0], [71.8, 1054.0], [71.9, 1058.0], [72.0, 1059.0], [72.1, 1061.0], [72.2, 1063.0], [72.3, 1065.0], [72.4, 1067.0], [72.5, 1070.0], [72.6, 1074.0], [72.7, 1076.0], [72.8, 1078.0], [72.9, 1080.0], [73.0, 1080.0], [73.1, 1081.0], [73.2, 1083.0], [73.3, 1084.0], [73.4, 1088.0], [73.5, 1089.0], [73.6, 1093.0], [73.7, 1095.0], [73.8, 1095.0], [73.9, 1098.0], [74.0, 1100.0], [74.1, 1102.0], [74.2, 1107.0], [74.3, 1111.0], [74.4, 1112.0], [74.5, 1115.0], [74.6, 1117.0], [74.7, 1118.0], [74.8, 1122.0], [74.9, 1125.0], [75.0, 1127.0], [75.1, 1128.0], [75.2, 1131.0], [75.3, 1132.0], [75.4, 1133.0], [75.5, 1134.0], [75.6, 1135.0], [75.7, 1139.0], [75.8, 1141.0], [75.9, 1146.0], [76.0, 1147.0], [76.1, 1153.0], [76.2, 1154.0], [76.3, 1155.0], [76.4, 1157.0], [76.5, 1160.0], [76.6, 1161.0], [76.7, 1164.0], [76.8, 1167.0], [76.9, 1168.0], [77.0, 1169.0], [77.1, 1171.0], [77.2, 1177.0], [77.3, 1179.0], [77.4, 1181.0], [77.5, 1185.0], [77.6, 1186.0], [77.7, 1190.0], [77.8, 1191.0], [77.9, 1194.0], [78.0, 1195.0], [78.1, 1197.0], [78.2, 1198.0], [78.3, 1204.0], [78.4, 1210.0], [78.5, 1212.0], [78.6, 1213.0], [78.7, 1217.0], [78.8, 1220.0], [78.9, 1224.0], [79.0, 1233.0], [79.1, 1234.0], [79.2, 1236.0], [79.3, 1245.0], [79.4, 1251.0], [79.5, 1255.0], [79.6, 1261.0], [79.7, 1263.0], [79.8, 1270.0], [79.9, 1274.0], [80.0, 1275.0], [80.1, 1281.0], [80.2, 1285.0], [80.3, 1288.0], [80.4, 1292.0], [80.5, 1296.0], [80.6, 1297.0], [80.7, 1301.0], [80.8, 1304.0], [80.9, 1308.0], [81.0, 1313.0], [81.1, 1320.0], [81.2, 1325.0], [81.3, 1328.0], [81.4, 1330.0], [81.5, 1335.0], [81.6, 1339.0], [81.7, 1350.0], [81.8, 1352.0], [81.9, 1356.0], [82.0, 1358.0], [82.1, 1363.0], [82.2, 1372.0], [82.3, 1376.0], [82.4, 1378.0], [82.5, 1380.0], [82.6, 1383.0], [82.7, 1385.0], [82.8, 1396.0], [82.9, 1399.0], [83.0, 1402.0], [83.1, 1406.0], [83.2, 1408.0], [83.3, 1413.0], [83.4, 1418.0], [83.5, 1419.0], [83.6, 1421.0], [83.7, 1423.0], [83.8, 1424.0], [83.9, 1426.0], [84.0, 1427.0], [84.1, 1434.0], [84.2, 1437.0], [84.3, 1439.0], [84.4, 1442.0], [84.5, 1444.0], [84.6, 1452.0], [84.7, 1461.0], [84.8, 1465.0], [84.9, 1468.0], [85.0, 1468.0], [85.1, 1480.0], [85.2, 1483.0], [85.3, 1495.0], [85.4, 1498.0], [85.5, 1504.0], [85.6, 1509.0], [85.7, 1511.0], [85.8, 1514.0], [85.9, 1519.0], [86.0, 1531.0], [86.1, 1536.0], [86.2, 1536.0], [86.3, 1537.0], [86.4, 1537.0], [86.5, 1538.0], [86.6, 1539.0], [86.7, 1543.0], [86.8, 1544.0], [86.9, 1548.0], [87.0, 1558.0], [87.1, 1565.0], [87.2, 1569.0], [87.3, 1575.0], [87.4, 1580.0], [87.5, 1581.0], [87.6, 1600.0], [87.7, 1601.0], [87.8, 1603.0], [87.9, 1606.0], [88.0, 1611.0], [88.1, 1616.0], [88.2, 1627.0], [88.3, 1631.0], [88.4, 1638.0], [88.5, 1640.0], [88.6, 1650.0], [88.7, 1655.0], [88.8, 1659.0], [88.9, 1661.0], [89.0, 1666.0], [89.1, 1670.0], [89.2, 1672.0], [89.3, 1672.0], [89.4, 1674.0], [89.5, 1674.0], [89.6, 1675.0], [89.7, 1676.0], [89.8, 1684.0], [89.9, 1692.0], [90.0, 1696.0], [90.1, 1705.0], [90.2, 1706.0], [90.3, 1712.0], [90.4, 1716.0], [90.5, 1717.0], [90.6, 1722.0], [90.7, 1731.0], [90.8, 1734.0], [90.9, 1736.0], [91.0, 1739.0], [91.1, 1746.0], [91.2, 1749.0], [91.3, 1755.0], [91.4, 1761.0], [91.5, 1764.0], [91.6, 1767.0], [91.7, 1771.0], [91.8, 1774.0], [91.9, 1777.0], [92.0, 1778.0], [92.1, 1778.0], [92.2, 1783.0], [92.3, 1790.0], [92.4, 1797.0], [92.5, 1801.0], [92.6, 1803.0], [92.7, 1807.0], [92.8, 1809.0], [92.9, 1813.0], [93.0, 1815.0], [93.1, 1817.0], [93.2, 1818.0], [93.3, 1822.0], [93.4, 1828.0], [93.5, 1833.0], [93.6, 1840.0], [93.7, 1846.0], [93.8, 1850.0], [93.9, 1855.0], [94.0, 1859.0], [94.1, 1862.0], [94.2, 1865.0], [94.3, 1867.0], [94.4, 1869.0], [94.5, 1872.0], [94.6, 1882.0], [94.7, 1886.0], [94.8, 1892.0], [94.9, 1896.0], [95.0, 1897.0], [95.1, 1897.0], [95.2, 1897.0], [95.3, 1901.0], [95.4, 1905.0], [95.5, 1911.0], [95.6, 1915.0], [95.7, 1921.0], [95.8, 1928.0], [95.9, 1936.0], [96.0, 1952.0], [96.1, 1956.0], [96.2, 1967.0], [96.3, 1971.0], [96.4, 1979.0], [96.5, 2003.0], [96.6, 2024.0], [96.7, 2060.0], [96.8, 2061.0], [96.9, 2071.0], [97.0, 2101.0], [97.1, 2109.0], [97.2, 2116.0], [97.3, 2117.0], [97.4, 2120.0], [97.5, 2140.0], [97.6, 2155.0], [97.7, 2155.0], [97.8, 2155.0], [97.9, 2178.0], [98.0, 2203.0], [98.1, 2246.0], [98.2, 2277.0], [98.3, 2322.0], [98.4, 2349.0], [98.5, 2351.0], [98.6, 2351.0], [98.7, 2352.0], [98.8, 2353.0], [98.9, 2354.0], [99.0, 2383.0], [99.1, 2384.0], [99.2, 2430.0], [99.3, 2513.0], [99.4, 2527.0], [99.5, 2552.0], [99.6, 2686.0], [99.7, 2917.0], [99.8, 2927.0], [99.9, 3061.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1002.0, "series": [{"data": [[0.0, 1002.0], [600.0, 220.0], [700.0, 126.0], [800.0, 106.0], [900.0, 149.0], [1000.0, 154.0], [1100.0, 128.0], [1200.0, 73.0], [1300.0, 68.0], [1400.0, 74.0], [1500.0, 65.0], [100.0, 6.0], [1600.0, 74.0], [1700.0, 73.0], [1800.0, 84.0], [1900.0, 36.0], [2000.0, 15.0], [2100.0, 29.0], [2300.0, 27.0], [2200.0, 9.0], [2400.0, 4.0], [2500.0, 7.0], [2600.0, 4.0], [2700.0, 1.0], [2900.0, 6.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 49.0], [3200.0, 1.0], [300.0, 111.0], [400.0, 112.0], [500.0, 185.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 436.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1283.0, "series": [{"data": [[0.0, 1281.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1283.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 436.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 95.70633333333342, "minX": 1.68695238E12, "maxY": 95.70633333333342, "series": [{"data": [[1.68695238E12, 95.70633333333342]], "isOverall": false, "label": "RestApi", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68695238E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 36.0, "minX": 1.0, "maxY": 1999.363636363637, "series": [{"data": [[3.0, 40.5], [4.0, 39.0], [5.0, 297.75], [6.0, 438.0], [7.0, 309.5], [8.0, 39.0], [9.0, 665.25], [10.0, 38.0], [11.0, 711.3333333333333], [12.0, 37.0], [13.0, 702.2], [14.0, 577.0], [15.0, 39.0], [16.0, 558.0], [17.0, 36.0], [18.0, 787.6666666666667], [19.0, 1037.0], [20.0, 510.0], [21.0, 727.5], [22.0, 711.0], [23.0, 37.0], [25.0, 38.5], [26.0, 38.0], [27.0, 1141.5], [28.0, 1573.857142857143], [29.0, 38.0], [30.0, 915.75], [33.0, 1655.3333333333335], [32.0, 37.0], [35.0, 37.0], [34.0, 1210.5], [37.0, 908.5], [36.0, 1695.8333333333333], [39.0, 37.0], [38.0, 864.0000000000001], [41.0, 1304.3333333333335], [40.0, 1353.5], [43.0, 37.0], [42.0, 40.0], [45.0, 1830.888888888889], [44.0, 1390.6], [47.0, 901.5], [46.0, 38.0], [49.0, 38.0], [48.0, 1159.3333333333335], [51.0, 839.5], [50.0, 853.0], [53.0, 773.0], [52.0, 959.4], [55.0, 37.0], [54.0, 1079.5], [56.0, 38.5], [59.0, 1309.0], [58.0, 36.0], [61.0, 1002.0], [60.0, 1999.363636363637], [63.0, 969.5], [62.0, 983.5], [67.0, 902.5], [66.0, 920.5], [65.0, 937.5], [64.0, 952.5], [71.0, 1093.0], [70.0, 853.0], [69.0, 872.5], [68.0, 885.5], [75.0, 37.5], [74.0, 952.5], [73.0, 967.5], [72.0, 39.0], [79.0, 37.0], [78.0, 998.75], [77.0, 902.5], [76.0, 1714.5833333333335], [83.0, 1713.1333333333334], [82.0, 36.5], [80.0, 1267.6666666666665], [87.0, 1574.25], [86.0, 470.0], [85.0, 917.5], [84.0, 887.875], [91.0, 789.0], [90.0, 826.0], [89.0, 36.0], [88.0, 1707.2857142857142], [95.0, 914.6666666666667], [94.0, 725.5], [93.0, 749.25], [92.0, 771.5], [99.0, 1358.4588235294113], [98.0, 39.0], [97.0, 1315.6296296296296], [96.0, 757.375], [100.0, 648.7896962706653], [1.0, 204.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[95.70633333333342, 711.2016666666672]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 13052.4, "minX": 1.68695238E12, "maxY": 2670681.45, "series": [{"data": [[1.68695238E12, 2670681.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68695238E12, 13052.4]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68695238E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 711.2016666666672, "minX": 1.68695238E12, "maxY": 711.2016666666672, "series": [{"data": [[1.68695238E12, 711.2016666666672]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68695238E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 648.1216666666653, "minX": 1.68695238E12, "maxY": 648.1216666666653, "series": [{"data": [[1.68695238E12, 648.1216666666653]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68695238E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4.440333333333354, "minX": 1.68695238E12, "maxY": 4.440333333333354, "series": [{"data": [[1.68695238E12, 4.440333333333354]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68695238E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 34.0, "minX": 1.68695238E12, "maxY": 3292.0, "series": [{"data": [[1.68695238E12, 3292.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68695238E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68695238E12, 1696.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68695238E12, 2382.8499999999967]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68695238E12, 608.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68695238E12, 1897.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68695238E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 286.0, "minX": 41.0, "maxY": 1680.0, "series": [{"data": [[132.0, 1044.5], [131.0, 1157.0], [140.0, 669.0], [138.0, 917.5], [160.0, 465.5], [167.0, 1261.0], [41.0, 286.0], [178.0, 772.0], [51.0, 1053.0], [228.0, 548.5], [254.0, 459.0], [62.0, 1311.0], [68.0, 524.0], [71.0, 1486.0], [72.0, 1510.0], [74.0, 1626.5], [80.0, 1422.0], [350.0, 322.5], [87.0, 1641.0], [88.0, 1680.0], [95.0, 1139.0], [104.0, 770.0], [113.0, 1383.0], [116.0, 890.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 350.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 178.0, "minX": 41.0, "maxY": 1569.0, "series": [{"data": [[132.0, 1003.0], [131.0, 1046.0], [140.0, 607.5], [138.0, 816.5], [160.0, 388.5], [167.0, 1169.0], [41.0, 178.0], [178.0, 725.0], [51.0, 1043.0], [228.0, 514.5], [254.0, 390.5], [62.0, 1199.5], [68.0, 524.0], [71.0, 1399.0], [72.0, 714.5], [74.0, 1500.0], [80.0, 1316.5], [350.0, 315.5], [87.0, 1569.0], [88.0, 1561.5], [95.0, 1092.0], [104.0, 636.5], [113.0, 1335.0], [116.0, 826.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 350.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.68695238E12, "maxY": 50.0, "series": [{"data": [[1.68695238E12, 50.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68695238E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.68695238E12, "maxY": 50.0, "series": [{"data": [[1.68695238E12, 50.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68695238E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.68695238E12, "maxY": 50.0, "series": [{"data": [[1.68695238E12, 50.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68695238E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 50.0, "minX": 1.68695238E12, "maxY": 50.0, "series": [{"data": [[1.68695238E12, 50.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68695238E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

