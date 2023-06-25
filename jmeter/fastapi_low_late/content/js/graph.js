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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 14418.0, "series": [{"data": [[0.0, 19.0], [0.1, 31.0], [0.2, 119.0], [0.3, 120.0], [0.4, 122.0], [0.5, 123.0], [0.6, 123.0], [0.7, 123.0], [0.8, 124.0], [0.9, 125.0], [1.0, 125.0], [1.1, 126.0], [1.2, 126.0], [1.3, 127.0], [1.4, 127.0], [1.5, 127.0], [1.6, 128.0], [1.7, 128.0], [1.8, 128.0], [1.9, 128.0], [2.0, 129.0], [2.1, 129.0], [2.2, 130.0], [2.3, 130.0], [2.4, 130.0], [2.5, 131.0], [2.6, 131.0], [2.7, 131.0], [2.8, 132.0], [2.9, 132.0], [3.0, 132.0], [3.1, 133.0], [3.2, 133.0], [3.3, 133.0], [3.4, 133.0], [3.5, 133.0], [3.6, 133.0], [3.7, 134.0], [3.8, 134.0], [3.9, 135.0], [4.0, 135.0], [4.1, 136.0], [4.2, 137.0], [4.3, 137.0], [4.4, 138.0], [4.5, 138.0], [4.6, 139.0], [4.7, 139.0], [4.8, 139.0], [4.9, 140.0], [5.0, 140.0], [5.1, 141.0], [5.2, 142.0], [5.3, 142.0], [5.4, 143.0], [5.5, 144.0], [5.6, 146.0], [5.7, 146.0], [5.8, 150.0], [5.9, 154.0], [6.0, 156.0], [6.1, 158.0], [6.2, 159.0], [6.3, 160.0], [6.4, 160.0], [6.5, 161.0], [6.6, 161.0], [6.7, 162.0], [6.8, 162.0], [6.9, 163.0], [7.0, 163.0], [7.1, 163.0], [7.2, 164.0], [7.3, 165.0], [7.4, 165.0], [7.5, 165.0], [7.6, 165.0], [7.7, 166.0], [7.8, 166.0], [7.9, 166.0], [8.0, 167.0], [8.1, 167.0], [8.2, 167.0], [8.3, 167.0], [8.4, 167.0], [8.5, 168.0], [8.6, 168.0], [8.7, 168.0], [8.8, 168.0], [8.9, 168.0], [9.0, 169.0], [9.1, 169.0], [9.2, 169.0], [9.3, 169.0], [9.4, 169.0], [9.5, 169.0], [9.6, 170.0], [9.7, 170.0], [9.8, 170.0], [9.9, 170.0], [10.0, 171.0], [10.1, 171.0], [10.2, 171.0], [10.3, 171.0], [10.4, 171.0], [10.5, 171.0], [10.6, 171.0], [10.7, 171.0], [10.8, 172.0], [10.9, 172.0], [11.0, 172.0], [11.1, 172.0], [11.2, 172.0], [11.3, 173.0], [11.4, 173.0], [11.5, 173.0], [11.6, 173.0], [11.7, 173.0], [11.8, 173.0], [11.9, 173.0], [12.0, 174.0], [12.1, 174.0], [12.2, 174.0], [12.3, 174.0], [12.4, 174.0], [12.5, 174.0], [12.6, 174.0], [12.7, 175.0], [12.8, 175.0], [12.9, 175.0], [13.0, 175.0], [13.1, 175.0], [13.2, 175.0], [13.3, 175.0], [13.4, 176.0], [13.5, 176.0], [13.6, 176.0], [13.7, 176.0], [13.8, 176.0], [13.9, 176.0], [14.0, 176.0], [14.1, 177.0], [14.2, 177.0], [14.3, 177.0], [14.4, 177.0], [14.5, 177.0], [14.6, 177.0], [14.7, 177.0], [14.8, 178.0], [14.9, 178.0], [15.0, 178.0], [15.1, 178.0], [15.2, 178.0], [15.3, 178.0], [15.4, 178.0], [15.5, 179.0], [15.6, 179.0], [15.7, 179.0], [15.8, 179.0], [15.9, 179.0], [16.0, 179.0], [16.1, 179.0], [16.2, 180.0], [16.3, 180.0], [16.4, 180.0], [16.5, 180.0], [16.6, 180.0], [16.7, 180.0], [16.8, 180.0], [16.9, 180.0], [17.0, 180.0], [17.1, 181.0], [17.2, 181.0], [17.3, 181.0], [17.4, 181.0], [17.5, 181.0], [17.6, 181.0], [17.7, 182.0], [17.8, 182.0], [17.9, 182.0], [18.0, 182.0], [18.1, 182.0], [18.2, 182.0], [18.3, 182.0], [18.4, 182.0], [18.5, 182.0], [18.6, 183.0], [18.7, 183.0], [18.8, 183.0], [18.9, 183.0], [19.0, 183.0], [19.1, 183.0], [19.2, 183.0], [19.3, 184.0], [19.4, 184.0], [19.5, 184.0], [19.6, 184.0], [19.7, 184.0], [19.8, 184.0], [19.9, 184.0], [20.0, 184.0], [20.1, 184.0], [20.2, 184.0], [20.3, 185.0], [20.4, 185.0], [20.5, 185.0], [20.6, 185.0], [20.7, 185.0], [20.8, 185.0], [20.9, 185.0], [21.0, 186.0], [21.1, 186.0], [21.2, 186.0], [21.3, 186.0], [21.4, 186.0], [21.5, 186.0], [21.6, 187.0], [21.7, 187.0], [21.8, 187.0], [21.9, 187.0], [22.0, 187.0], [22.1, 187.0], [22.2, 188.0], [22.3, 188.0], [22.4, 189.0], [22.5, 189.0], [22.6, 189.0], [22.7, 189.0], [22.8, 190.0], [22.9, 190.0], [23.0, 190.0], [23.1, 191.0], [23.2, 191.0], [23.3, 191.0], [23.4, 191.0], [23.5, 191.0], [23.6, 192.0], [23.7, 192.0], [23.8, 192.0], [23.9, 193.0], [24.0, 193.0], [24.1, 194.0], [24.2, 194.0], [24.3, 194.0], [24.4, 194.0], [24.5, 195.0], [24.6, 196.0], [24.7, 196.0], [24.8, 196.0], [24.9, 197.0], [25.0, 197.0], [25.1, 199.0], [25.2, 200.0], [25.3, 200.0], [25.4, 201.0], [25.5, 202.0], [25.6, 204.0], [25.7, 206.0], [25.8, 214.0], [25.9, 221.0], [26.0, 238.0], [26.1, 239.0], [26.2, 240.0], [26.3, 241.0], [26.4, 241.0], [26.5, 243.0], [26.6, 243.0], [26.7, 244.0], [26.8, 246.0], [26.9, 251.0], [27.0, 253.0], [27.1, 268.0], [27.2, 271.0], [27.3, 271.0], [27.4, 272.0], [27.5, 272.0], [27.6, 272.0], [27.7, 274.0], [27.8, 275.0], [27.9, 277.0], [28.0, 284.0], [28.1, 295.0], [28.2, 348.0], [28.3, 359.0], [28.4, 360.0], [28.5, 362.0], [28.6, 366.0], [28.7, 375.0], [28.8, 383.0], [28.9, 387.0], [29.0, 387.0], [29.1, 389.0], [29.2, 390.0], [29.3, 391.0], [29.4, 391.0], [29.5, 392.0], [29.6, 392.0], [29.7, 392.0], [29.8, 395.0], [29.9, 395.0], [30.0, 397.0], [30.1, 400.0], [30.2, 404.0], [30.3, 407.0], [30.4, 408.0], [30.5, 408.0], [30.6, 409.0], [30.7, 410.0], [30.8, 410.0], [30.9, 412.0], [31.0, 413.0], [31.1, 416.0], [31.2, 421.0], [31.3, 425.0], [31.4, 433.0], [31.5, 461.0], [31.6, 466.0], [31.7, 490.0], [31.8, 532.0], [31.9, 547.0], [32.0, 551.0], [32.1, 554.0], [32.2, 558.0], [32.3, 560.0], [32.4, 562.0], [32.5, 567.0], [32.6, 569.0], [32.7, 571.0], [32.8, 571.0], [32.9, 572.0], [33.0, 574.0], [33.1, 577.0], [33.2, 577.0], [33.3, 578.0], [33.4, 584.0], [33.5, 588.0], [33.6, 591.0], [33.7, 593.0], [33.8, 595.0], [33.9, 600.0], [34.0, 601.0], [34.1, 602.0], [34.2, 603.0], [34.3, 605.0], [34.4, 607.0], [34.5, 610.0], [34.6, 611.0], [34.7, 612.0], [34.8, 616.0], [34.9, 618.0], [35.0, 621.0], [35.1, 624.0], [35.2, 626.0], [35.3, 629.0], [35.4, 630.0], [35.5, 631.0], [35.6, 632.0], [35.7, 634.0], [35.8, 638.0], [35.9, 644.0], [36.0, 646.0], [36.1, 646.0], [36.2, 647.0], [36.3, 649.0], [36.4, 649.0], [36.5, 650.0], [36.6, 651.0], [36.7, 652.0], [36.8, 653.0], [36.9, 654.0], [37.0, 654.0], [37.1, 656.0], [37.2, 656.0], [37.3, 659.0], [37.4, 660.0], [37.5, 664.0], [37.6, 667.0], [37.7, 669.0], [37.8, 697.0], [37.9, 708.0], [38.0, 741.0], [38.1, 745.0], [38.2, 748.0], [38.3, 748.0], [38.4, 749.0], [38.5, 749.0], [38.6, 749.0], [38.7, 751.0], [38.8, 751.0], [38.9, 752.0], [39.0, 753.0], [39.1, 762.0], [39.2, 764.0], [39.3, 782.0], [39.4, 782.0], [39.5, 784.0], [39.6, 788.0], [39.7, 791.0], [39.8, 792.0], [39.9, 794.0], [40.0, 798.0], [40.1, 800.0], [40.2, 801.0], [40.3, 811.0], [40.4, 817.0], [40.5, 821.0], [40.6, 827.0], [40.7, 829.0], [40.8, 854.0], [40.9, 865.0], [41.0, 868.0], [41.1, 869.0], [41.2, 871.0], [41.3, 872.0], [41.4, 875.0], [41.5, 876.0], [41.6, 881.0], [41.7, 882.0], [41.8, 893.0], [41.9, 893.0], [42.0, 894.0], [42.1, 896.0], [42.2, 897.0], [42.3, 911.0], [42.4, 917.0], [42.5, 922.0], [42.6, 933.0], [42.7, 934.0], [42.8, 935.0], [42.9, 937.0], [43.0, 938.0], [43.1, 942.0], [43.2, 945.0], [43.3, 948.0], [43.4, 949.0], [43.5, 952.0], [43.6, 953.0], [43.7, 955.0], [43.8, 956.0], [43.9, 957.0], [44.0, 959.0], [44.1, 961.0], [44.2, 962.0], [44.3, 963.0], [44.4, 966.0], [44.5, 988.0], [44.6, 1011.0], [44.7, 1022.0], [44.8, 1026.0], [44.9, 1028.0], [45.0, 1028.0], [45.1, 1037.0], [45.2, 1039.0], [45.3, 1042.0], [45.4, 1050.0], [45.5, 1056.0], [45.6, 1070.0], [45.7, 1075.0], [45.8, 1081.0], [45.9, 1086.0], [46.0, 1098.0], [46.1, 1117.0], [46.2, 1135.0], [46.3, 1142.0], [46.4, 1145.0], [46.5, 1179.0], [46.6, 1186.0], [46.7, 1191.0], [46.8, 1194.0], [46.9, 1195.0], [47.0, 1213.0], [47.1, 1219.0], [47.2, 1228.0], [47.3, 1229.0], [47.4, 1232.0], [47.5, 1239.0], [47.6, 1243.0], [47.7, 1248.0], [47.8, 1259.0], [47.9, 1267.0], [48.0, 1268.0], [48.1, 1272.0], [48.2, 1275.0], [48.3, 1277.0], [48.4, 1279.0], [48.5, 1285.0], [48.6, 1290.0], [48.7, 1294.0], [48.8, 1317.0], [48.9, 1317.0], [49.0, 1320.0], [49.1, 1325.0], [49.2, 1334.0], [49.3, 1360.0], [49.4, 1366.0], [49.5, 1374.0], [49.6, 1395.0], [49.7, 1406.0], [49.8, 1416.0], [49.9, 1430.0], [50.0, 1437.0], [50.1, 1442.0], [50.2, 1445.0], [50.3, 1454.0], [50.4, 1477.0], [50.5, 1480.0], [50.6, 1483.0], [50.7, 1490.0], [50.8, 1518.0], [50.9, 1522.0], [51.0, 1524.0], [51.1, 1529.0], [51.2, 1535.0], [51.3, 1543.0], [51.4, 1555.0], [51.5, 1557.0], [51.6, 1571.0], [51.7, 1582.0], [51.8, 1584.0], [51.9, 1588.0], [52.0, 1596.0], [52.1, 1599.0], [52.2, 1604.0], [52.3, 1615.0], [52.4, 1621.0], [52.5, 1636.0], [52.6, 1638.0], [52.7, 1638.0], [52.8, 1649.0], [52.9, 1656.0], [53.0, 1662.0], [53.1, 1669.0], [53.2, 1680.0], [53.3, 1691.0], [53.4, 1700.0], [53.5, 1705.0], [53.6, 1719.0], [53.7, 1728.0], [53.8, 1729.0], [53.9, 1738.0], [54.0, 1755.0], [54.1, 1762.0], [54.2, 1769.0], [54.3, 1785.0], [54.4, 1791.0], [54.5, 1793.0], [54.6, 1802.0], [54.7, 1805.0], [54.8, 1817.0], [54.9, 1822.0], [55.0, 1832.0], [55.1, 1842.0], [55.2, 1853.0], [55.3, 1854.0], [55.4, 1865.0], [55.5, 1869.0], [55.6, 1881.0], [55.7, 1886.0], [55.8, 1892.0], [55.9, 1902.0], [56.0, 1919.0], [56.1, 1926.0], [56.2, 1935.0], [56.3, 1941.0], [56.4, 1949.0], [56.5, 1961.0], [56.6, 1965.0], [56.7, 1976.0], [56.8, 1982.0], [56.9, 1989.0], [57.0, 2008.0], [57.1, 2011.0], [57.2, 2019.0], [57.3, 2026.0], [57.4, 2031.0], [57.5, 2038.0], [57.6, 2046.0], [57.7, 2063.0], [57.8, 2082.0], [57.9, 2086.0], [58.0, 2098.0], [58.1, 2102.0], [58.2, 2103.0], [58.3, 2111.0], [58.4, 2115.0], [58.5, 2116.0], [58.6, 2117.0], [58.7, 2120.0], [58.8, 2121.0], [58.9, 2122.0], [59.0, 2132.0], [59.1, 2135.0], [59.2, 2137.0], [59.3, 2147.0], [59.4, 2153.0], [59.5, 2166.0], [59.6, 2175.0], [59.7, 2180.0], [59.8, 2183.0], [59.9, 2195.0], [60.0, 2202.0], [60.1, 2215.0], [60.2, 2222.0], [60.3, 2242.0], [60.4, 2245.0], [60.5, 2254.0], [60.6, 2273.0], [60.7, 2291.0], [60.8, 2293.0], [60.9, 2303.0], [61.0, 2321.0], [61.1, 2325.0], [61.2, 2347.0], [61.3, 2371.0], [61.4, 2374.0], [61.5, 2391.0], [61.6, 2395.0], [61.7, 2401.0], [61.8, 2405.0], [61.9, 2418.0], [62.0, 2423.0], [62.1, 2429.0], [62.2, 2435.0], [62.3, 2458.0], [62.4, 2464.0], [62.5, 2480.0], [62.6, 2496.0], [62.7, 2518.0], [62.8, 2522.0], [62.9, 2532.0], [63.0, 2535.0], [63.1, 2539.0], [63.2, 2544.0], [63.3, 2564.0], [63.4, 2580.0], [63.5, 2590.0], [63.6, 2604.0], [63.7, 2615.0], [63.8, 2629.0], [63.9, 2636.0], [64.0, 2659.0], [64.1, 2667.0], [64.2, 2695.0], [64.3, 2703.0], [64.4, 2718.0], [64.5, 2726.0], [64.6, 2734.0], [64.7, 2749.0], [64.8, 2762.0], [64.9, 2770.0], [65.0, 2776.0], [65.1, 2794.0], [65.2, 2809.0], [65.3, 2824.0], [65.4, 2839.0], [65.5, 2847.0], [65.6, 2859.0], [65.7, 2868.0], [65.8, 2877.0], [65.9, 2883.0], [66.0, 2901.0], [66.1, 2903.0], [66.2, 2905.0], [66.3, 2921.0], [66.4, 2924.0], [66.5, 2932.0], [66.6, 2937.0], [66.7, 2940.0], [66.8, 2946.0], [66.9, 2954.0], [67.0, 2962.0], [67.1, 2991.0], [67.2, 2997.0], [67.3, 3002.0], [67.4, 3002.0], [67.5, 3003.0], [67.6, 3015.0], [67.7, 3021.0], [67.8, 3036.0], [67.9, 3050.0], [68.0, 3070.0], [68.1, 3078.0], [68.2, 3082.0], [68.3, 3089.0], [68.4, 3097.0], [68.5, 3116.0], [68.6, 3121.0], [68.7, 3131.0], [68.8, 3138.0], [68.9, 3164.0], [69.0, 3169.0], [69.1, 3176.0], [69.2, 3189.0], [69.3, 3199.0], [69.4, 3204.0], [69.5, 3214.0], [69.6, 3216.0], [69.7, 3222.0], [69.8, 3229.0], [69.9, 3242.0], [70.0, 3256.0], [70.1, 3264.0], [70.2, 3279.0], [70.3, 3280.0], [70.4, 3296.0], [70.5, 3306.0], [70.6, 3320.0], [70.7, 3339.0], [70.8, 3356.0], [70.9, 3370.0], [71.0, 3381.0], [71.1, 3396.0], [71.2, 3424.0], [71.3, 3430.0], [71.4, 3432.0], [71.5, 3436.0], [71.6, 3449.0], [71.7, 3464.0], [71.8, 3478.0], [71.9, 3482.0], [72.0, 3490.0], [72.1, 3499.0], [72.2, 3508.0], [72.3, 3512.0], [72.4, 3517.0], [72.5, 3519.0], [72.6, 3520.0], [72.7, 3527.0], [72.8, 3535.0], [72.9, 3537.0], [73.0, 3543.0], [73.1, 3560.0], [73.2, 3568.0], [73.3, 3589.0], [73.4, 3609.0], [73.5, 3613.0], [73.6, 3621.0], [73.7, 3628.0], [73.8, 3635.0], [73.9, 3638.0], [74.0, 3642.0], [74.1, 3651.0], [74.2, 3654.0], [74.3, 3660.0], [74.4, 3667.0], [74.5, 3688.0], [74.6, 3707.0], [74.7, 3719.0], [74.8, 3737.0], [74.9, 3752.0], [75.0, 3762.0], [75.1, 3769.0], [75.2, 3785.0], [75.3, 3798.0], [75.4, 3809.0], [75.5, 3819.0], [75.6, 3832.0], [75.7, 3856.0], [75.8, 3871.0], [75.9, 3874.0], [76.0, 3876.0], [76.1, 3887.0], [76.2, 3900.0], [76.3, 3904.0], [76.4, 3906.0], [76.5, 3918.0], [76.6, 3928.0], [76.7, 3936.0], [76.8, 3956.0], [76.9, 3973.0], [77.0, 3986.0], [77.1, 3996.0], [77.2, 4005.0], [77.3, 4017.0], [77.4, 4020.0], [77.5, 4039.0], [77.6, 4052.0], [77.7, 4057.0], [77.8, 4064.0], [77.9, 4067.0], [78.0, 4071.0], [78.1, 4074.0], [78.2, 4084.0], [78.3, 4087.0], [78.4, 4091.0], [78.5, 4108.0], [78.6, 4119.0], [78.7, 4125.0], [78.8, 4156.0], [78.9, 4172.0], [79.0, 4173.0], [79.1, 4182.0], [79.2, 4183.0], [79.3, 4184.0], [79.4, 4199.0], [79.5, 4209.0], [79.6, 4213.0], [79.7, 4216.0], [79.8, 4234.0], [79.9, 4235.0], [80.0, 4244.0], [80.1, 4256.0], [80.2, 4266.0], [80.3, 4278.0], [80.4, 4298.0], [80.5, 4319.0], [80.6, 4329.0], [80.7, 4346.0], [80.8, 4352.0], [80.9, 4377.0], [81.0, 4415.0], [81.1, 4437.0], [81.2, 4455.0], [81.3, 4477.0], [81.4, 4515.0], [81.5, 4527.0], [81.6, 4549.0], [81.7, 4605.0], [81.8, 4640.0], [81.9, 4652.0], [82.0, 4680.0], [82.1, 4739.0], [82.2, 4765.0], [82.3, 4776.0], [82.4, 4816.0], [82.5, 4857.0], [82.6, 4888.0], [82.7, 4918.0], [82.8, 4962.0], [82.9, 4985.0], [83.0, 5022.0], [83.1, 5057.0], [83.2, 5091.0], [83.3, 5106.0], [83.4, 5111.0], [83.5, 5117.0], [83.6, 5119.0], [83.7, 5123.0], [83.8, 5148.0], [83.9, 5173.0], [84.0, 5200.0], [84.1, 5211.0], [84.2, 5258.0], [84.3, 5259.0], [84.4, 5261.0], [84.5, 5272.0], [84.6, 5275.0], [84.7, 5295.0], [84.8, 5307.0], [84.9, 5321.0], [85.0, 5357.0], [85.1, 5398.0], [85.2, 5425.0], [85.3, 5476.0], [85.4, 5533.0], [85.5, 5573.0], [85.6, 5609.0], [85.7, 5686.0], [85.8, 5719.0], [85.9, 5763.0], [86.0, 5776.0], [86.1, 5793.0], [86.2, 5806.0], [86.3, 5823.0], [86.4, 5830.0], [86.5, 5834.0], [86.6, 5846.0], [86.7, 5851.0], [86.8, 5855.0], [86.9, 5862.0], [87.0, 5902.0], [87.1, 5931.0], [87.2, 5933.0], [87.3, 5954.0], [87.4, 5965.0], [87.5, 6033.0], [87.6, 6056.0], [87.7, 6084.0], [87.8, 6113.0], [87.9, 6129.0], [88.0, 6158.0], [88.1, 6183.0], [88.2, 6232.0], [88.3, 6253.0], [88.4, 6283.0], [88.5, 6333.0], [88.6, 6365.0], [88.7, 6388.0], [88.8, 6421.0], [88.9, 6436.0], [89.0, 6467.0], [89.1, 6509.0], [89.2, 6542.0], [89.3, 6565.0], [89.4, 6575.0], [89.5, 6586.0], [89.6, 6600.0], [89.7, 6604.0], [89.8, 6611.0], [89.9, 6615.0], [90.0, 6623.0], [90.1, 6629.0], [90.2, 6672.0], [90.3, 6705.0], [90.4, 6735.0], [90.5, 6799.0], [90.6, 6839.0], [90.7, 6860.0], [90.8, 6883.0], [90.9, 6906.0], [91.0, 6921.0], [91.1, 6936.0], [91.2, 6965.0], [91.3, 6980.0], [91.4, 7038.0], [91.5, 7043.0], [91.6, 7069.0], [91.7, 7088.0], [91.8, 7133.0], [91.9, 7160.0], [92.0, 7179.0], [92.1, 7200.0], [92.2, 7247.0], [92.3, 7256.0], [92.4, 7269.0], [92.5, 7302.0], [92.6, 7318.0], [92.7, 7320.0], [92.8, 7330.0], [92.9, 7347.0], [93.0, 7353.0], [93.1, 7364.0], [93.2, 7366.0], [93.3, 7379.0], [93.4, 7392.0], [93.5, 7406.0], [93.6, 7449.0], [93.7, 7476.0], [93.8, 7477.0], [93.9, 7488.0], [94.0, 7493.0], [94.1, 7496.0], [94.2, 7519.0], [94.3, 7536.0], [94.4, 7592.0], [94.5, 7597.0], [94.6, 7597.0], [94.7, 7601.0], [94.8, 7617.0], [94.9, 7659.0], [95.0, 7696.0], [95.1, 7732.0], [95.2, 7752.0], [95.3, 7825.0], [95.4, 7860.0], [95.5, 7897.0], [95.6, 7947.0], [95.7, 7987.0], [95.8, 8019.0], [95.9, 8051.0], [96.0, 8104.0], [96.1, 8163.0], [96.2, 8173.0], [96.3, 8193.0], [96.4, 8214.0], [96.5, 8239.0], [96.6, 8243.0], [96.7, 8273.0], [96.8, 8315.0], [96.9, 8340.0], [97.0, 8368.0], [97.1, 8373.0], [97.2, 8376.0], [97.3, 8381.0], [97.4, 8421.0], [97.5, 8505.0], [97.6, 8631.0], [97.7, 8640.0], [97.8, 8722.0], [97.9, 8763.0], [98.0, 8843.0], [98.1, 8955.0], [98.2, 9057.0], [98.3, 9087.0], [98.4, 9192.0], [98.5, 9264.0], [98.6, 9312.0], [98.7, 9592.0], [98.8, 10113.0], [98.9, 10191.0], [99.0, 10237.0], [99.1, 10269.0], [99.2, 10319.0], [99.3, 10340.0], [99.4, 10352.0], [99.5, 10390.0], [99.6, 12037.0], [99.7, 12046.0], [99.8, 12062.0], [99.9, 12528.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 749.0, "series": [{"data": [[0.0, 5.0], [100.0, 749.0], [200.0, 89.0], [300.0, 58.0], [400.0, 50.0], [500.0, 65.0], [600.0, 118.0], [700.0, 68.0], [800.0, 66.0], [900.0, 67.0], [1000.0, 45.0], [1100.0, 28.0], [1200.0, 54.0], [1300.0, 28.0], [1400.0, 32.0], [1500.0, 42.0], [1600.0, 38.0], [1700.0, 36.0], [1800.0, 38.0], [1900.0, 34.0], [2000.0, 31.0], [2100.0, 58.0], [2200.0, 27.0], [2300.0, 24.0], [2400.0, 29.0], [2500.0, 28.0], [2600.0, 20.0], [2700.0, 28.0], [2800.0, 25.0], [2900.0, 37.0], [3000.0, 37.0], [3100.0, 26.0], [3300.0, 20.0], [3200.0, 34.0], [3400.0, 30.0], [3500.0, 37.0], [3600.0, 35.0], [3700.0, 24.0], [3800.0, 26.0], [3900.0, 28.0], [4000.0, 39.0], [4100.0, 30.0], [4200.0, 31.0], [4300.0, 14.0], [4400.0, 13.0], [4500.0, 10.0], [4600.0, 10.0], [4700.0, 11.0], [4800.0, 8.0], [4900.0, 8.0], [5000.0, 11.0], [5100.0, 21.0], [5200.0, 22.0], [5300.0, 12.0], [5400.0, 8.0], [5500.0, 5.0], [5600.0, 5.0], [5700.0, 12.0], [5800.0, 26.0], [5900.0, 14.0], [6000.0, 9.0], [6100.0, 13.0], [6200.0, 8.0], [6300.0, 9.0], [6400.0, 10.0], [6500.0, 14.0], [6600.0, 21.0], [6900.0, 15.0], [6800.0, 10.0], [6700.0, 8.0], [7000.0, 12.0], [7100.0, 10.0], [7200.0, 12.0], [7300.0, 30.0], [7400.0, 20.0], [7500.0, 15.0], [7600.0, 11.0], [7700.0, 6.0], [7800.0, 9.0], [7900.0, 7.0], [8000.0, 6.0], [8100.0, 11.0], [8300.0, 17.0], [8700.0, 4.0], [8200.0, 13.0], [8400.0, 5.0], [8500.0, 3.0], [8600.0, 6.0], [8800.0, 5.0], [8900.0, 3.0], [9000.0, 4.0], [9100.0, 3.0], [9200.0, 4.0], [9500.0, 2.0], [9300.0, 3.0], [10000.0, 2.0], [10100.0, 5.0], [10200.0, 6.0], [10300.0, 11.0], [12000.0, 9.0], [11900.0, 1.0], [12400.0, 1.0], [12500.0, 2.0], [14400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 14400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1478.0, "series": [{"data": [[0.0, 946.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 571.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1478.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 5.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 15.962264150943392, "minX": 1.68729444E12, "maxY": 100.0, "series": [{"data": [[1.68729456E12, 15.962264150943392], [1.68729444E12, 100.0], [1.6872945E12, 95.6549463647199]], "isOverall": false, "label": "RestApi", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68729456E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 156.0, "minX": 1.0, "maxY": 10361.190476190479, "series": [{"data": [[2.0, 1032.6666666666667], [3.0, 176.0], [4.0, 184.0], [5.0, 156.0], [6.0, 1590.0], [7.0, 189.0], [9.0, 183.5], [10.0, 186.0], [11.0, 3041.25], [12.0, 5044.285714285715], [13.0, 1844.0], [14.0, 163.0], [16.0, 178.5], [17.0, 187.0], [18.0, 184.0], [19.0, 175.0], [20.0, 177.0], [21.0, 177.0], [22.0, 173.0], [23.0, 172.0], [25.0, 183.5], [26.0, 6842.1875], [27.0, 196.0], [28.0, 174.0], [29.0, 184.0], [30.0, 163.0], [31.0, 182.0], [33.0, 193.0], [32.0, 193.0], [35.0, 176.0], [34.0, 189.0], [37.0, 7533.0], [36.0, 184.0], [38.0, 214.0], [41.0, 183.0], [40.0, 189.0], [43.0, 182.0], [45.0, 177.0], [44.0, 191.0], [47.0, 7194.555555555556], [46.0, 168.0], [49.0, 197.0], [48.0, 187.0], [51.0, 174.0], [53.0, 174.0], [52.0, 159.0], [54.0, 202.0], [57.0, 199.5], [61.0, 183.0], [60.0, 195.66666666666666], [67.0, 183.0], [66.0, 10361.190476190479], [65.0, 207.0], [64.0, 184.0], [70.0, 184.75], [75.0, 6287.27777777778], [74.0, 198.66666666666666], [72.0, 199.5], [79.0, 4263.0], [78.0, 4345.0], [77.0, 4417.75], [76.0, 4520.0], [83.0, 5210.0], [82.0, 4117.25], [81.0, 238.0], [80.0, 4174.5], [87.0, 3575.75], [86.0, 3692.5], [85.0, 3766.0], [84.0, 3871.5], [91.0, 4465.0], [90.0, 4529.0], [89.0, 4642.285714285715], [88.0, 3435.8333333333335], [95.0, 3900.0], [94.0, 4058.166666666667], [93.0, 4186.0], [92.0, 4344.333333333333], [99.0, 3569.0], [98.0, 3650.5], [97.0, 3716.0], [96.0, 3792.25], [100.0, 2199.432212781676], [1.0, 179.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[96.08500000000002, 2417.8719999999994]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 144.26666666666668, "minX": 1.68729444E12, "maxY": 1941210.45, "series": [{"data": [[1.68729456E12, 119058.55], [1.68729444E12, 467760.9], [1.6872945E12, 1941210.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68729456E12, 144.26666666666668], [1.68729444E12, 5786.25], [1.6872945E12, 7158.966666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68729456E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1192.9275019700542, "minX": 1.68729444E12, "maxY": 3321.2026221692477, "series": [{"data": [[1.68729456E12, 3147.4150943396226], [1.68729444E12, 1192.9275019700542], [1.6872945E12, 3321.2026221692477]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68729456E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1127.075650118203, "minX": 1.68729444E12, "maxY": 3143.280691299167, "series": [{"data": [[1.68729456E12, 2610.075471698113], [1.68729444E12, 1127.075650118203], [1.6872945E12, 3143.280691299167]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68729456E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 19.753873659117964, "minX": 1.68729444E12, "maxY": 27.06304176516946, "series": [{"data": [[1.68729456E12, 20.924528301886788], [1.68729444E12, 27.06304176516946], [1.6872945E12, 19.753873659117964]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68729456E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 115.0, "minX": 1.68729444E12, "maxY": 14418.0, "series": [{"data": [[1.68729456E12, 9320.0], [1.68729444E12, 4437.0], [1.6872945E12, 14418.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68729456E12, 140.0], [1.68729444E12, 115.0], [1.6872945E12, 156.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68729456E12, 9258.0], [1.68729444E12, 2929.5], [1.6872945E12, 7498.000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68729456E12, 9320.0], [1.68729444E12, 4176.15], [1.6872945E12, 10368.42]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68729456E12, 896.0], [1.68729444E12, 873.5], [1.6872945E12, 2999.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68729456E12, 9309.9], [1.68729444E12, 3554.25], [1.6872945E12, 8343.15]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68729456E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 29.0, "minX": 1.0, "maxY": 7477.5, "series": [{"data": [[2.0, 3099.5], [5.0, 4177.0], [7.0, 2762.0], [8.0, 7477.5], [9.0, 5398.5], [12.0, 5836.5], [13.0, 185.5], [14.0, 962.5], [15.0, 190.0], [16.0, 3653.5], [17.0, 7315.0], [18.0, 198.0], [19.0, 2855.0], [20.0, 1858.5], [22.0, 191.0], [23.0, 218.5], [25.0, 5206.0], [28.0, 2877.0], [29.0, 3543.0], [30.0, 2035.5], [31.0, 3252.0], [33.0, 3270.5], [35.0, 1219.0], [37.0, 749.0], [36.0, 2533.5], [39.0, 3173.0], [38.0, 2405.0], [41.0, 1607.5], [40.0, 3899.5], [43.0, 3193.0], [42.0, 2837.5], [45.0, 4066.5], [46.0, 2120.0], [47.0, 3718.0], [48.0, 2246.5], [50.0, 1964.0], [51.0, 3426.0], [55.0, 2496.0], [57.0, 1360.0], [59.0, 1518.0], [65.0, 3638.0], [70.0, 1762.0], [75.0, 751.0], [73.0, 1791.0], [89.0, 802.5], [91.0, 1535.0], [98.0, 1077.5], [129.0, 893.0], [192.0, 619.5], [1.0, 167.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[70.0, 31.0], [41.0, 29.0], [50.0, 36.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 192.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 7299.0, "series": [{"data": [[2.0, 3035.5], [5.0, 4064.0], [7.0, 2762.0], [8.0, 7299.0], [9.0, 5300.5], [12.0, 5836.5], [13.0, 185.5], [14.0, 962.5], [15.0, 190.0], [16.0, 3575.0], [17.0, 7155.0], [18.0, 198.0], [19.0, 2855.0], [20.0, 1858.5], [22.0, 191.0], [23.0, 218.5], [25.0, 4254.0], [28.0, 2877.0], [29.0, 3415.0], [30.0, 1969.5], [31.0, 3252.0], [33.0, 3270.5], [35.0, 1219.0], [37.0, 749.0], [36.0, 2533.5], [39.0, 3173.0], [38.0, 2405.0], [41.0, 1607.5], [40.0, 3644.0], [43.0, 3193.0], [42.0, 2837.5], [45.0, 4066.5], [46.0, 2025.0], [47.0, 3718.0], [48.0, 2246.5], [50.0, 1964.0], [51.0, 3426.0], [55.0, 2496.0], [57.0, 1360.0], [59.0, 1518.0], [65.0, 3638.0], [70.0, 1762.0], [75.0, 751.0], [73.0, 1791.0], [89.0, 655.5], [91.0, 1535.0], [98.0, 1028.5], [129.0, 867.0], [192.0, 619.5], [1.0, 167.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[70.0, 0.0], [41.0, 0.0], [50.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 192.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.68729444E12, "maxY": 26.733333333333334, "series": [{"data": [[1.68729456E12, 0.45], [1.68729444E12, 22.816666666666666], [1.6872945E12, 26.733333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68729456E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.68729444E12, "maxY": 19.183333333333334, "series": [{"data": [[1.68729456E12, 0.8666666666666667], [1.68729444E12, 13.2], [1.6872945E12, 19.183333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68729456E12, 0.016666666666666666], [1.68729444E12, 7.866666666666666], [1.6872945E12, 8.783333333333333]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.68729444E12, 0.08333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68729456E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.68729444E12, "maxY": 27.966666666666665, "series": [{"data": [[1.68729456E12, 0.8833333333333333], [1.68729444E12, 21.066666666666666], [1.6872945E12, 27.966666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.68729444E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68729456E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.68729444E12, "maxY": 27.966666666666665, "series": [{"data": [[1.68729456E12, 0.8833333333333333], [1.68729444E12, 21.066666666666666], [1.6872945E12, 27.966666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68729444E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68729456E12, "title": "Total Transactions Per Second"}},
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

