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
        data: {"result": {"minY": 0.0, "minX": 0.0, "maxY": 12247.0, "series": [{"data": [[0.0, 0.0], [0.1, 1.0], [0.2, 31.0], [0.3, 114.0], [0.4, 116.0], [0.5, 119.0], [0.6, 121.0], [0.7, 121.0], [0.8, 122.0], [0.9, 123.0], [1.0, 125.0], [1.1, 125.0], [1.2, 126.0], [1.3, 127.0], [1.4, 127.0], [1.5, 129.0], [1.6, 129.0], [1.7, 129.0], [1.8, 130.0], [1.9, 131.0], [2.0, 131.0], [2.1, 133.0], [2.2, 134.0], [2.3, 135.0], [2.4, 137.0], [2.5, 138.0], [2.6, 138.0], [2.7, 141.0], [2.8, 141.0], [2.9, 142.0], [3.0, 143.0], [3.1, 143.0], [3.2, 144.0], [3.3, 145.0], [3.4, 145.0], [3.5, 146.0], [3.6, 146.0], [3.7, 147.0], [3.8, 148.0], [3.9, 149.0], [4.0, 150.0], [4.1, 150.0], [4.2, 151.0], [4.3, 152.0], [4.4, 152.0], [4.5, 153.0], [4.6, 153.0], [4.7, 153.0], [4.8, 154.0], [4.9, 154.0], [5.0, 154.0], [5.1, 155.0], [5.2, 155.0], [5.3, 155.0], [5.4, 155.0], [5.5, 155.0], [5.6, 156.0], [5.7, 156.0], [5.8, 157.0], [5.9, 157.0], [6.0, 157.0], [6.1, 158.0], [6.2, 158.0], [6.3, 158.0], [6.4, 159.0], [6.5, 159.0], [6.6, 159.0], [6.7, 160.0], [6.8, 160.0], [6.9, 160.0], [7.0, 160.0], [7.1, 160.0], [7.2, 161.0], [7.3, 161.0], [7.4, 162.0], [7.5, 162.0], [7.6, 162.0], [7.7, 162.0], [7.8, 162.0], [7.9, 163.0], [8.0, 163.0], [8.1, 163.0], [8.2, 163.0], [8.3, 164.0], [8.4, 164.0], [8.5, 164.0], [8.6, 164.0], [8.7, 164.0], [8.8, 164.0], [8.9, 164.0], [9.0, 165.0], [9.1, 165.0], [9.2, 165.0], [9.3, 165.0], [9.4, 165.0], [9.5, 166.0], [9.6, 166.0], [9.7, 166.0], [9.8, 167.0], [9.9, 167.0], [10.0, 167.0], [10.1, 167.0], [10.2, 168.0], [10.3, 168.0], [10.4, 168.0], [10.5, 168.0], [10.6, 168.0], [10.7, 169.0], [10.8, 169.0], [10.9, 170.0], [11.0, 170.0], [11.1, 170.0], [11.2, 171.0], [11.3, 171.0], [11.4, 171.0], [11.5, 171.0], [11.6, 171.0], [11.7, 172.0], [11.8, 172.0], [11.9, 173.0], [12.0, 173.0], [12.1, 173.0], [12.2, 173.0], [12.3, 174.0], [12.4, 174.0], [12.5, 174.0], [12.6, 175.0], [12.7, 175.0], [12.8, 176.0], [12.9, 177.0], [13.0, 178.0], [13.1, 178.0], [13.2, 179.0], [13.3, 179.0], [13.4, 179.0], [13.5, 180.0], [13.6, 181.0], [13.7, 182.0], [13.8, 182.0], [13.9, 183.0], [14.0, 185.0], [14.1, 185.0], [14.2, 185.0], [14.3, 186.0], [14.4, 187.0], [14.5, 188.0], [14.6, 189.0], [14.7, 190.0], [14.8, 190.0], [14.9, 191.0], [15.0, 192.0], [15.1, 192.0], [15.2, 193.0], [15.3, 193.0], [15.4, 193.0], [15.5, 194.0], [15.6, 194.0], [15.7, 194.0], [15.8, 195.0], [15.9, 195.0], [16.0, 195.0], [16.1, 195.0], [16.2, 195.0], [16.3, 196.0], [16.4, 196.0], [16.5, 196.0], [16.6, 196.0], [16.7, 196.0], [16.8, 196.0], [16.9, 197.0], [17.0, 197.0], [17.1, 197.0], [17.2, 197.0], [17.3, 197.0], [17.4, 197.0], [17.5, 198.0], [17.6, 198.0], [17.7, 198.0], [17.8, 198.0], [17.9, 198.0], [18.0, 198.0], [18.1, 199.0], [18.2, 199.0], [18.3, 199.0], [18.4, 199.0], [18.5, 199.0], [18.6, 199.0], [18.7, 199.0], [18.8, 199.0], [18.9, 199.0], [19.0, 200.0], [19.1, 200.0], [19.2, 200.0], [19.3, 200.0], [19.4, 200.0], [19.5, 201.0], [19.6, 201.0], [19.7, 201.0], [19.8, 201.0], [19.9, 201.0], [20.0, 201.0], [20.1, 201.0], [20.2, 202.0], [20.3, 202.0], [20.4, 202.0], [20.5, 202.0], [20.6, 202.0], [20.7, 202.0], [20.8, 203.0], [20.9, 203.0], [21.0, 203.0], [21.1, 203.0], [21.2, 203.0], [21.3, 203.0], [21.4, 203.0], [21.5, 203.0], [21.6, 204.0], [21.7, 204.0], [21.8, 204.0], [21.9, 204.0], [22.0, 204.0], [22.1, 204.0], [22.2, 204.0], [22.3, 205.0], [22.4, 205.0], [22.5, 205.0], [22.6, 205.0], [22.7, 206.0], [22.8, 206.0], [22.9, 206.0], [23.0, 206.0], [23.1, 206.0], [23.2, 206.0], [23.3, 206.0], [23.4, 206.0], [23.5, 206.0], [23.6, 207.0], [23.7, 207.0], [23.8, 207.0], [23.9, 207.0], [24.0, 207.0], [24.1, 207.0], [24.2, 207.0], [24.3, 208.0], [24.4, 208.0], [24.5, 208.0], [24.6, 208.0], [24.7, 208.0], [24.8, 209.0], [24.9, 209.0], [25.0, 209.0], [25.1, 209.0], [25.2, 210.0], [25.3, 210.0], [25.4, 210.0], [25.5, 211.0], [25.6, 211.0], [25.7, 211.0], [25.8, 211.0], [25.9, 212.0], [26.0, 212.0], [26.1, 212.0], [26.2, 213.0], [26.3, 213.0], [26.4, 213.0], [26.5, 213.0], [26.6, 213.0], [26.7, 214.0], [26.8, 214.0], [26.9, 214.0], [27.0, 214.0], [27.1, 215.0], [27.2, 215.0], [27.3, 215.0], [27.4, 216.0], [27.5, 216.0], [27.6, 216.0], [27.7, 216.0], [27.8, 216.0], [27.9, 217.0], [28.0, 217.0], [28.1, 217.0], [28.2, 218.0], [28.3, 218.0], [28.4, 219.0], [28.5, 219.0], [28.6, 219.0], [28.7, 219.0], [28.8, 220.0], [28.9, 220.0], [29.0, 221.0], [29.1, 221.0], [29.2, 222.0], [29.3, 223.0], [29.4, 223.0], [29.5, 224.0], [29.6, 224.0], [29.7, 225.0], [29.8, 226.0], [29.9, 226.0], [30.0, 228.0], [30.1, 229.0], [30.2, 230.0], [30.3, 231.0], [30.4, 233.0], [30.5, 234.0], [30.6, 236.0], [30.7, 237.0], [30.8, 238.0], [30.9, 243.0], [31.0, 244.0], [31.1, 247.0], [31.2, 248.0], [31.3, 250.0], [31.4, 251.0], [31.5, 262.0], [31.6, 266.0], [31.7, 270.0], [31.8, 274.0], [31.9, 282.0], [32.0, 302.0], [32.1, 317.0], [32.2, 332.0], [32.3, 339.0], [32.4, 353.0], [32.5, 358.0], [32.6, 364.0], [32.7, 367.0], [32.8, 382.0], [32.9, 393.0], [33.0, 397.0], [33.1, 405.0], [33.2, 408.0], [33.3, 409.0], [33.4, 409.0], [33.5, 410.0], [33.6, 419.0], [33.7, 422.0], [33.8, 424.0], [33.9, 424.0], [34.0, 424.0], [34.1, 431.0], [34.2, 445.0], [34.3, 454.0], [34.4, 461.0], [34.5, 464.0], [34.6, 466.0], [34.7, 469.0], [34.8, 478.0], [34.9, 490.0], [35.0, 498.0], [35.1, 500.0], [35.2, 506.0], [35.3, 516.0], [35.4, 520.0], [35.5, 523.0], [35.6, 529.0], [35.7, 532.0], [35.8, 537.0], [35.9, 544.0], [36.0, 555.0], [36.1, 559.0], [36.2, 565.0], [36.3, 568.0], [36.4, 571.0], [36.5, 574.0], [36.6, 577.0], [36.7, 584.0], [36.8, 594.0], [36.9, 600.0], [37.0, 609.0], [37.1, 614.0], [37.2, 624.0], [37.3, 634.0], [37.4, 636.0], [37.5, 642.0], [37.6, 648.0], [37.7, 649.0], [37.8, 652.0], [37.9, 658.0], [38.0, 667.0], [38.1, 677.0], [38.2, 687.0], [38.3, 700.0], [38.4, 704.0], [38.5, 706.0], [38.6, 712.0], [38.7, 714.0], [38.8, 729.0], [38.9, 737.0], [39.0, 742.0], [39.1, 747.0], [39.2, 755.0], [39.3, 761.0], [39.4, 770.0], [39.5, 777.0], [39.6, 779.0], [39.7, 783.0], [39.8, 791.0], [39.9, 801.0], [40.0, 805.0], [40.1, 813.0], [40.2, 816.0], [40.3, 830.0], [40.4, 832.0], [40.5, 832.0], [40.6, 833.0], [40.7, 833.0], [40.8, 833.0], [40.9, 833.0], [41.0, 834.0], [41.1, 834.0], [41.2, 834.0], [41.3, 835.0], [41.4, 843.0], [41.5, 851.0], [41.6, 857.0], [41.7, 872.0], [41.8, 879.0], [41.9, 889.0], [42.0, 897.0], [42.1, 910.0], [42.2, 924.0], [42.3, 933.0], [42.4, 943.0], [42.5, 947.0], [42.6, 951.0], [42.7, 958.0], [42.8, 980.0], [42.9, 986.0], [43.0, 991.0], [43.1, 995.0], [43.2, 1010.0], [43.3, 1029.0], [43.4, 1032.0], [43.5, 1042.0], [43.6, 1054.0], [43.7, 1067.0], [43.8, 1079.0], [43.9, 1079.0], [44.0, 1083.0], [44.1, 1093.0], [44.2, 1117.0], [44.3, 1129.0], [44.4, 1134.0], [44.5, 1139.0], [44.6, 1146.0], [44.7, 1162.0], [44.8, 1168.0], [44.9, 1207.0], [45.0, 1240.0], [45.1, 1249.0], [45.2, 1268.0], [45.3, 1271.0], [45.4, 1278.0], [45.5, 1282.0], [45.6, 1285.0], [45.7, 1287.0], [45.8, 1303.0], [45.9, 1316.0], [46.0, 1324.0], [46.1, 1329.0], [46.2, 1331.0], [46.3, 1335.0], [46.4, 1342.0], [46.5, 1344.0], [46.6, 1350.0], [46.7, 1382.0], [46.8, 1391.0], [46.9, 1392.0], [47.0, 1402.0], [47.1, 1413.0], [47.2, 1437.0], [47.3, 1455.0], [47.4, 1467.0], [47.5, 1472.0], [47.6, 1475.0], [47.7, 1500.0], [47.8, 1515.0], [47.9, 1529.0], [48.0, 1544.0], [48.1, 1559.0], [48.2, 1570.0], [48.3, 1573.0], [48.4, 1582.0], [48.5, 1591.0], [48.6, 1598.0], [48.7, 1618.0], [48.8, 1636.0], [48.9, 1651.0], [49.0, 1658.0], [49.1, 1666.0], [49.2, 1685.0], [49.3, 1688.0], [49.4, 1690.0], [49.5, 1701.0], [49.6, 1715.0], [49.7, 1722.0], [49.8, 1736.0], [49.9, 1747.0], [50.0, 1749.0], [50.1, 1758.0], [50.2, 1768.0], [50.3, 1778.0], [50.4, 1781.0], [50.5, 1788.0], [50.6, 1795.0], [50.7, 1798.0], [50.8, 1803.0], [50.9, 1820.0], [51.0, 1828.0], [51.1, 1836.0], [51.2, 1848.0], [51.3, 1851.0], [51.4, 1858.0], [51.5, 1863.0], [51.6, 1863.0], [51.7, 1868.0], [51.8, 1870.0], [51.9, 1871.0], [52.0, 1873.0], [52.1, 1876.0], [52.2, 1878.0], [52.3, 1878.0], [52.4, 1878.0], [52.5, 1879.0], [52.6, 1879.0], [52.7, 1879.0], [52.8, 1885.0], [52.9, 1897.0], [53.0, 1902.0], [53.1, 1912.0], [53.2, 1917.0], [53.3, 1930.0], [53.4, 1940.0], [53.5, 1946.0], [53.6, 1952.0], [53.7, 1956.0], [53.8, 1966.0], [53.9, 1973.0], [54.0, 1979.0], [54.1, 1984.0], [54.2, 1991.0], [54.3, 1997.0], [54.4, 2018.0], [54.5, 2020.0], [54.6, 2035.0], [54.7, 2039.0], [54.8, 2042.0], [54.9, 2054.0], [55.0, 2071.0], [55.1, 2072.0], [55.2, 2079.0], [55.3, 2090.0], [55.4, 2092.0], [55.5, 2097.0], [55.6, 2104.0], [55.7, 2119.0], [55.8, 2123.0], [55.9, 2127.0], [56.0, 2132.0], [56.1, 2139.0], [56.2, 2140.0], [56.3, 2141.0], [56.4, 2146.0], [56.5, 2154.0], [56.6, 2155.0], [56.7, 2157.0], [56.8, 2162.0], [56.9, 2168.0], [57.0, 2170.0], [57.1, 2180.0], [57.2, 2187.0], [57.3, 2190.0], [57.4, 2202.0], [57.5, 2208.0], [57.6, 2217.0], [57.7, 2224.0], [57.8, 2225.0], [57.9, 2239.0], [58.0, 2243.0], [58.1, 2248.0], [58.2, 2253.0], [58.3, 2260.0], [58.4, 2270.0], [58.5, 2274.0], [58.6, 2278.0], [58.7, 2286.0], [58.8, 2291.0], [58.9, 2292.0], [59.0, 2295.0], [59.1, 2302.0], [59.2, 2312.0], [59.3, 2328.0], [59.4, 2330.0], [59.5, 2333.0], [59.6, 2337.0], [59.7, 2347.0], [59.8, 2353.0], [59.9, 2360.0], [60.0, 2379.0], [60.1, 2385.0], [60.2, 2400.0], [60.3, 2404.0], [60.4, 2409.0], [60.5, 2414.0], [60.6, 2420.0], [60.7, 2425.0], [60.8, 2433.0], [60.9, 2438.0], [61.0, 2443.0], [61.1, 2452.0], [61.2, 2460.0], [61.3, 2468.0], [61.4, 2473.0], [61.5, 2489.0], [61.6, 2495.0], [61.7, 2504.0], [61.8, 2519.0], [61.9, 2527.0], [62.0, 2539.0], [62.1, 2545.0], [62.2, 2560.0], [62.3, 2568.0], [62.4, 2580.0], [62.5, 2585.0], [62.6, 2598.0], [62.7, 2601.0], [62.8, 2608.0], [62.9, 2618.0], [63.0, 2642.0], [63.1, 2651.0], [63.2, 2656.0], [63.3, 2674.0], [63.4, 2688.0], [63.5, 2696.0], [63.6, 2708.0], [63.7, 2712.0], [63.8, 2726.0], [63.9, 2738.0], [64.0, 2759.0], [64.1, 2764.0], [64.2, 2774.0], [64.3, 2779.0], [64.4, 2791.0], [64.5, 2798.0], [64.6, 2816.0], [64.7, 2827.0], [64.8, 2836.0], [64.9, 2842.0], [65.0, 2853.0], [65.1, 2854.0], [65.2, 2865.0], [65.3, 2870.0], [65.4, 2872.0], [65.5, 2875.0], [65.6, 2878.0], [65.7, 2881.0], [65.8, 2884.0], [65.9, 2891.0], [66.0, 2917.0], [66.1, 2926.0], [66.2, 2944.0], [66.3, 2955.0], [66.4, 2973.0], [66.5, 2974.0], [66.6, 2981.0], [66.7, 2991.0], [66.8, 3002.0], [66.9, 3006.0], [67.0, 3009.0], [67.1, 3019.0], [67.2, 3029.0], [67.3, 3031.0], [67.4, 3046.0], [67.5, 3058.0], [67.6, 3069.0], [67.7, 3075.0], [67.8, 3082.0], [67.9, 3088.0], [68.0, 3095.0], [68.1, 3097.0], [68.2, 3098.0], [68.3, 3107.0], [68.4, 3120.0], [68.5, 3139.0], [68.6, 3147.0], [68.7, 3161.0], [68.8, 3169.0], [68.9, 3177.0], [69.0, 3182.0], [69.1, 3186.0], [69.2, 3194.0], [69.3, 3199.0], [69.4, 3215.0], [69.5, 3222.0], [69.6, 3234.0], [69.7, 3253.0], [69.8, 3263.0], [69.9, 3270.0], [70.0, 3284.0], [70.1, 3289.0], [70.2, 3302.0], [70.3, 3319.0], [70.4, 3341.0], [70.5, 3355.0], [70.6, 3356.0], [70.7, 3364.0], [70.8, 3383.0], [70.9, 3396.0], [71.0, 3415.0], [71.1, 3425.0], [71.2, 3436.0], [71.3, 3440.0], [71.4, 3458.0], [71.5, 3464.0], [71.6, 3464.0], [71.7, 3465.0], [71.8, 3466.0], [71.9, 3469.0], [72.0, 3474.0], [72.1, 3478.0], [72.2, 3484.0], [72.3, 3485.0], [72.4, 3491.0], [72.5, 3493.0], [72.6, 3496.0], [72.7, 3503.0], [72.8, 3504.0], [72.9, 3504.0], [73.0, 3512.0], [73.1, 3527.0], [73.2, 3530.0], [73.3, 3542.0], [73.4, 3544.0], [73.5, 3552.0], [73.6, 3572.0], [73.7, 3580.0], [73.8, 3595.0], [73.9, 3603.0], [74.0, 3616.0], [74.1, 3635.0], [74.2, 3637.0], [74.3, 3652.0], [74.4, 3675.0], [74.5, 3695.0], [74.6, 3710.0], [74.7, 3721.0], [74.8, 3730.0], [74.9, 3741.0], [75.0, 3751.0], [75.1, 3765.0], [75.2, 3774.0], [75.3, 3798.0], [75.4, 3801.0], [75.5, 3805.0], [75.6, 3813.0], [75.7, 3817.0], [75.8, 3826.0], [75.9, 3829.0], [76.0, 3830.0], [76.1, 3834.0], [76.2, 3841.0], [76.3, 3844.0], [76.4, 3861.0], [76.5, 3863.0], [76.6, 3871.0], [76.7, 3886.0], [76.8, 3902.0], [76.9, 3914.0], [77.0, 3941.0], [77.1, 3951.0], [77.2, 3959.0], [77.3, 3964.0], [77.4, 3973.0], [77.5, 3977.0], [77.6, 3988.0], [77.7, 4000.0], [77.8, 4010.0], [77.9, 4016.0], [78.0, 4027.0], [78.1, 4035.0], [78.2, 4054.0], [78.3, 4070.0], [78.4, 4076.0], [78.5, 4083.0], [78.6, 4088.0], [78.7, 4101.0], [78.8, 4113.0], [78.9, 4140.0], [79.0, 4146.0], [79.1, 4178.0], [79.2, 4200.0], [79.3, 4202.0], [79.4, 4211.0], [79.5, 4219.0], [79.6, 4246.0], [79.7, 4253.0], [79.8, 4275.0], [79.9, 4284.0], [80.0, 4293.0], [80.1, 4295.0], [80.2, 4308.0], [80.3, 4327.0], [80.4, 4370.0], [80.5, 4390.0], [80.6, 4397.0], [80.7, 4402.0], [80.8, 4427.0], [80.9, 4470.0], [81.0, 4488.0], [81.1, 4509.0], [81.2, 4520.0], [81.3, 4533.0], [81.4, 4564.0], [81.5, 4574.0], [81.6, 4603.0], [81.7, 4623.0], [81.8, 4651.0], [81.9, 4662.0], [82.0, 4669.0], [82.1, 4675.0], [82.2, 4682.0], [82.3, 4693.0], [82.4, 4713.0], [82.5, 4747.0], [82.6, 4759.0], [82.7, 4801.0], [82.8, 4815.0], [82.9, 4839.0], [83.0, 4850.0], [83.1, 4855.0], [83.2, 4862.0], [83.3, 4892.0], [83.4, 4917.0], [83.5, 4928.0], [83.6, 4939.0], [83.7, 4973.0], [83.8, 5005.0], [83.9, 5018.0], [84.0, 5041.0], [84.1, 5058.0], [84.2, 5062.0], [84.3, 5081.0], [84.4, 5111.0], [84.5, 5125.0], [84.6, 5176.0], [84.7, 5205.0], [84.8, 5224.0], [84.9, 5237.0], [85.0, 5267.0], [85.1, 5274.0], [85.2, 5327.0], [85.3, 5345.0], [85.4, 5361.0], [85.5, 5367.0], [85.6, 5394.0], [85.7, 5400.0], [85.8, 5417.0], [85.9, 5429.0], [86.0, 5431.0], [86.1, 5439.0], [86.2, 5440.0], [86.3, 5471.0], [86.4, 5490.0], [86.5, 5505.0], [86.6, 5518.0], [86.7, 5529.0], [86.8, 5555.0], [86.9, 5617.0], [87.0, 5666.0], [87.1, 5683.0], [87.2, 5692.0], [87.3, 5710.0], [87.4, 5744.0], [87.5, 5767.0], [87.6, 5784.0], [87.7, 5789.0], [87.8, 5790.0], [87.9, 5812.0], [88.0, 5825.0], [88.1, 5840.0], [88.2, 5864.0], [88.3, 5881.0], [88.4, 5895.0], [88.5, 5919.0], [88.6, 5934.0], [88.7, 5942.0], [88.8, 6001.0], [88.9, 6029.0], [89.0, 6086.0], [89.1, 6115.0], [89.2, 6139.0], [89.3, 6148.0], [89.4, 6196.0], [89.5, 6215.0], [89.6, 6240.0], [89.7, 6259.0], [89.8, 6261.0], [89.9, 6295.0], [90.0, 6325.0], [90.1, 6401.0], [90.2, 6434.0], [90.3, 6486.0], [90.4, 6500.0], [90.5, 6534.0], [90.6, 6560.0], [90.7, 6616.0], [90.8, 6641.0], [90.9, 6664.0], [91.0, 6708.0], [91.1, 6741.0], [91.2, 6754.0], [91.3, 6811.0], [91.4, 6819.0], [91.5, 6829.0], [91.6, 6848.0], [91.7, 6856.0], [91.8, 6905.0], [91.9, 6913.0], [92.0, 6961.0], [92.1, 6979.0], [92.2, 6989.0], [92.3, 7010.0], [92.4, 7021.0], [92.5, 7052.0], [92.6, 7081.0], [92.7, 7101.0], [92.8, 7120.0], [92.9, 7180.0], [93.0, 7190.0], [93.1, 7206.0], [93.2, 7219.0], [93.3, 7229.0], [93.4, 7254.0], [93.5, 7275.0], [93.6, 7280.0], [93.7, 7289.0], [93.8, 7325.0], [93.9, 7334.0], [94.0, 7365.0], [94.1, 7369.0], [94.2, 7385.0], [94.3, 7414.0], [94.4, 7446.0], [94.5, 7472.0], [94.6, 7485.0], [94.7, 7526.0], [94.8, 7555.0], [94.9, 7578.0], [95.0, 7624.0], [95.1, 7668.0], [95.2, 7719.0], [95.3, 7723.0], [95.4, 7759.0], [95.5, 7813.0], [95.6, 7852.0], [95.7, 7869.0], [95.8, 7869.0], [95.9, 7891.0], [96.0, 7906.0], [96.1, 7991.0], [96.2, 8010.0], [96.3, 8028.0], [96.4, 8031.0], [96.5, 8038.0], [96.6, 8039.0], [96.7, 8051.0], [96.8, 8053.0], [96.9, 8122.0], [97.0, 8160.0], [97.1, 8171.0], [97.2, 8203.0], [97.3, 8244.0], [97.4, 8269.0], [97.5, 8294.0], [97.6, 8360.0], [97.7, 8369.0], [97.8, 8422.0], [97.9, 8506.0], [98.0, 8596.0], [98.1, 8661.0], [98.2, 8675.0], [98.3, 8690.0], [98.4, 8714.0], [98.5, 8742.0], [98.6, 8813.0], [98.7, 8848.0], [98.8, 8911.0], [98.9, 9024.0], [99.0, 9085.0], [99.1, 9153.0], [99.2, 9255.0], [99.3, 9323.0], [99.4, 9456.0], [99.5, 9647.0], [99.6, 9730.0], [99.7, 9792.0], [99.8, 10770.0], [99.9, 10796.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 560.0, "series": [{"data": [[0.0, 8.0], [100.0, 560.0], [200.0, 391.0], [300.0, 33.0], [400.0, 59.0], [500.0, 56.0], [600.0, 42.0], [700.0, 47.0], [800.0, 65.0], [900.0, 34.0], [1000.0, 29.0], [1100.0, 22.0], [1200.0, 28.0], [1300.0, 36.0], [1400.0, 21.0], [1500.0, 28.0], [1600.0, 24.0], [1700.0, 40.0], [1800.0, 66.0], [1900.0, 41.0], [2000.0, 36.0], [2100.0, 55.0], [2200.0, 52.0], [2300.0, 33.0], [2400.0, 44.0], [2500.0, 29.0], [2600.0, 28.0], [2700.0, 29.0], [2800.0, 43.0], [2900.0, 25.0], [3000.0, 43.0], [3100.0, 33.0], [3300.0, 23.0], [3200.0, 25.0], [3400.0, 52.0], [3500.0, 35.0], [3700.0, 23.0], [3600.0, 22.0], [3800.0, 44.0], [3900.0, 27.0], [4000.0, 30.0], [4200.0, 30.0], [4100.0, 15.0], [4300.0, 14.0], [4400.0, 12.0], [4500.0, 16.0], [4600.0, 22.0], [4700.0, 11.0], [4800.0, 20.0], [4900.0, 11.0], [5000.0, 20.0], [5100.0, 9.0], [5200.0, 15.0], [5300.0, 15.0], [5400.0, 22.0], [5500.0, 13.0], [5600.0, 12.0], [5700.0, 17.0], [5800.0, 19.0], [6000.0, 8.0], [6100.0, 11.0], [5900.0, 10.0], [6200.0, 15.0], [6300.0, 5.0], [6400.0, 9.0], [6600.0, 9.0], [6500.0, 7.0], [6800.0, 15.0], [6700.0, 11.0], [6900.0, 14.0], [7000.0, 13.0], [7100.0, 12.0], [7200.0, 19.0], [7300.0, 15.0], [7400.0, 12.0], [7600.0, 6.0], [7500.0, 10.0], [7800.0, 14.0], [7700.0, 10.0], [7900.0, 5.0], [8000.0, 22.0], [8100.0, 9.0], [8600.0, 9.0], [8200.0, 11.0], [8700.0, 8.0], [8300.0, 6.0], [8400.0, 5.0], [8500.0, 4.0], [9000.0, 4.0], [9200.0, 3.0], [9100.0, 5.0], [8800.0, 6.0], [8900.0, 3.0], [9500.0, 2.0], [9300.0, 2.0], [9400.0, 2.0], [9600.0, 3.0], [9700.0, 4.0], [9800.0, 1.0], [10700.0, 5.0], [10800.0, 1.0], [12200.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 12200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1568.0, "series": [{"data": [[0.0, 1047.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 377.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1568.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 8.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 72.80515297906601, "minX": 1.68691038E12, "maxY": 100.0, "series": [{"data": [[1.68691044E12, 72.80515297906601], [1.68691038E12, 100.0]], "isOverall": false, "label": "RestApi", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691044E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 127.0, "minX": 1.0, "maxY": 5862.999999999999, "series": [{"data": [[2.0, 127.0], [3.0, 148.0], [4.0, 196.0], [5.0, 1644.2], [6.0, 182.0], [7.0, 1317.0], [8.0, 176.0], [9.0, 1275.0], [10.0, 1520.3333333333335], [11.0, 1368.3333333333335], [12.0, 198.0], [13.0, 204.0], [14.0, 1528.5], [15.0, 173.0], [16.0, 173.0], [17.0, 2284.75], [18.0, 3795.25], [19.0, 595.5], [20.0, 2801.25], [21.0, 2806.333333333333], [22.0, 197.0], [23.0, 200.0], [24.0, 222.0], [25.0, 1489.0], [26.0, 2327.25], [27.0, 234.0], [28.0, 219.0], [30.0, 2162.6666666666665], [31.0, 199.0], [33.0, 4688.666666666666], [32.0, 193.0], [35.0, 2122.0], [34.0, 186.0], [39.0, 169.6], [43.0, 1174.4], [45.0, 211.0], [44.0, 5015.586206896552], [47.0, 212.5], [46.0, 3607.0], [51.0, 199.0], [50.0, 200.8], [53.0, 4253.391304347825], [55.0, 186.0], [54.0, 202.66666666666666], [56.0, 158.0], [59.0, 365.0], [58.0, 5862.999999999999], [61.0, 207.0], [60.0, 425.0], [63.0, 5219.642857142856], [62.0, 182.0], [67.0, 4121.0], [66.0, 4290.0], [65.0, 4526.125], [64.0, 4672.5], [71.0, 4806.4], [70.0, 4808.90625], [69.0, 3994.5], [68.0, 4014.0], [75.0, 3852.875], [74.0, 3708.0], [73.0, 191.0], [72.0, 3832.8333333333335], [79.0, 2918.0], [78.0, 4342.333333333333], [77.0, 4462.0], [76.0, 4568.5], [83.0, 3791.375], [82.0, 5223.333333333334], [81.0, 4166.5], [80.0, 4238.0], [87.0, 3446.0], [86.0, 3495.0], [85.0, 3541.5], [84.0, 3641.0], [91.0, 5809.5], [90.0, 3543.142857142857], [89.0, 3047.769230769231], [88.0, 3258.3000000000006], [95.0, 3800.170212765957], [94.0, 3587.0], [93.0, 3687.5], [92.0, 3011.2857142857147], [99.0, 3839.5624999999995], [98.0, 4104.5], [97.0, 3858.5641025641025], [96.0, 4269.8], [100.0, 2128.9655862344916], [1.0, 945.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[94.37066666666658, 2392.6456666666622]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2454.1, "minX": 1.68691038E12, "maxY": 1602988.2166666666, "series": [{"data": [[1.68691044E12, 1005902.8], [1.68691038E12, 1602988.2166666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68691044E12, 2454.1], [1.68691038E12, 10644.166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691044E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2054.562841530053, "minX": 1.68691038E12, "maxY": 3687.813204508856, "series": [{"data": [[1.68691044E12, 3687.813204508856], [1.68691038E12, 2054.562841530053]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691044E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 1952.0575872215245, "minX": 1.68691038E12, "maxY": 3475.951690821253, "series": [{"data": [[1.68691044E12, 3475.951690821253], [1.68691038E12, 1952.0575872215245]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691044E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 23.522068095838545, "minX": 1.68691038E12, "maxY": 25.431561996779358, "series": [{"data": [[1.68691044E12, 25.431561996779358], [1.68691038E12, 23.522068095838545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691044E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 112.0, "minX": 1.68691038E12, "maxY": 12247.0, "series": [{"data": [[1.68691044E12, 12247.0], [1.68691038E12, 9871.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68691044E12, 123.0], [1.68691038E12, 112.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68691044E12, 8227.000000000002], [1.68691038E12, 5215.000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68691044E12, 10755.259999999998], [1.68691038E12, 8055.520000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68691044E12, 3362.0], [1.68691038E12, 1493.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68691044E12, 8866.9], [1.68691038E12, 6495.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691044E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 7157.0, "series": [{"data": [[2.0, 168.0], [7.0, 221.0], [8.0, 191.5], [10.0, 3483.0], [11.0, 1333.0], [12.0, 2956.5], [13.0, 510.0], [14.0, 7157.0], [15.0, 3582.5], [16.0, 4241.0], [17.0, 1950.5], [18.0, 3474.5], [19.0, 544.0], [21.0, 4215.5], [22.0, 3791.0], [23.0, 2278.0], [24.0, 409.5], [27.0, 3635.0], [28.0, 2759.0], [29.0, 4284.0], [30.0, 2562.0], [31.0, 4502.0], [32.0, 3144.0], [33.0, 2599.5], [35.0, 257.5], [34.0, 2241.0], [36.0, 2178.5], [39.0, 3535.0], [40.0, 1572.0], [41.0, 1409.0], [43.0, 3418.0], [42.0, 3125.5], [45.0, 776.0], [47.0, 2355.0], [48.0, 1839.0], [49.0, 2097.0], [51.0, 3152.0], [53.0, 2270.0], [55.0, 1924.0], [57.0, 4230.0], [56.0, 3058.5], [59.0, 2870.0], [58.0, 1800.0], [62.0, 2397.0], [66.0, 1079.0], [73.0, 991.0], [76.0, 1332.0], [86.0, 801.5], [92.0, 1803.0], [98.0, 721.0], [101.0, 973.0], [135.0, 465.0], [136.0, 750.5], [1.0, 3215.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[76.0, 21.0], [92.0, 0.0], [28.0, 1.0], [62.0, 31.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 136.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 6954.0, "series": [{"data": [[2.0, 168.0], [7.0, 221.0], [8.0, 191.5], [10.0, 3367.5], [11.0, 1333.0], [12.0, 2883.5], [13.0, 510.0], [14.0, 6954.0], [15.0, 3460.0], [16.0, 3881.5], [17.0, 1634.5], [18.0, 3474.5], [19.0, 544.0], [21.0, 4074.5], [22.0, 3638.0], [23.0, 2278.0], [24.0, 409.5], [27.0, 3635.0], [28.0, 2485.0], [29.0, 4284.0], [30.0, 2562.0], [31.0, 4502.0], [32.0, 3144.0], [33.0, 2599.5], [35.0, 257.5], [34.0, 2241.0], [36.0, 2178.5], [39.0, 3516.0], [40.0, 1572.0], [41.0, 1409.0], [43.0, 3418.0], [42.0, 3125.5], [45.0, 776.0], [47.0, 2355.0], [48.0, 1839.0], [49.0, 2097.0], [51.0, 3152.0], [53.0, 2270.0], [55.0, 1924.0], [57.0, 4230.0], [56.0, 3058.5], [59.0, 2870.0], [58.0, 1800.0], [62.0, 2397.0], [66.0, 1079.0], [73.0, 991.0], [76.0, 1332.0], [86.0, 744.5], [92.0, 1803.0], [98.0, 721.0], [101.0, 973.0], [135.0, 398.0], [136.0, 701.5], [1.0, 3215.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[76.0, 0.0], [92.0, 0.0], [28.0, 0.0], [62.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 136.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.683333333333334, "minX": 1.68691038E12, "maxY": 41.31666666666667, "series": [{"data": [[1.68691044E12, 8.683333333333334], [1.68691038E12, 41.31666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691044E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.68691038E12, "maxY": 25.466666666666665, "series": [{"data": [[1.68691044E12, 7.733333333333333], [1.68691038E12, 25.466666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68691044E12, 2.6166666666666667], [1.68691038E12, 14.05]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.68691038E12, 0.13333333333333333]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.NoHttpResponseException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691044E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.68691038E12, "maxY": 39.516666666666666, "series": [{"data": [[1.68691044E12, 10.35], [1.68691038E12, 39.516666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.68691038E12, 0.13333333333333333]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691044E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.13333333333333333, "minX": 1.68691038E12, "maxY": 39.516666666666666, "series": [{"data": [[1.68691044E12, 10.35], [1.68691038E12, 39.516666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68691038E12, 0.13333333333333333]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691044E12, "title": "Total Transactions Per Second"}},
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

