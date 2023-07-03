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
        data: {"result": {"minY": 55.0, "minX": 0.0, "maxY": 2173.0, "series": [{"data": [[0.0, 55.0], [0.1, 58.0], [0.2, 59.0], [0.3, 62.0], [0.4, 63.0], [0.5, 65.0], [0.6, 66.0], [0.7, 68.0], [0.8, 70.0], [0.9, 70.0], [1.0, 71.0], [1.1, 72.0], [1.2, 73.0], [1.3, 73.0], [1.4, 74.0], [1.5, 75.0], [1.6, 76.0], [1.7, 77.0], [1.8, 78.0], [1.9, 78.0], [2.0, 79.0], [2.1, 80.0], [2.2, 81.0], [2.3, 81.0], [2.4, 82.0], [2.5, 82.0], [2.6, 83.0], [2.7, 84.0], [2.8, 85.0], [2.9, 85.0], [3.0, 86.0], [3.1, 87.0], [3.2, 87.0], [3.3, 88.0], [3.4, 88.0], [3.5, 89.0], [3.6, 90.0], [3.7, 90.0], [3.8, 91.0], [3.9, 91.0], [4.0, 92.0], [4.1, 92.0], [4.2, 93.0], [4.3, 94.0], [4.4, 95.0], [4.5, 95.0], [4.6, 96.0], [4.7, 96.0], [4.8, 96.0], [4.9, 97.0], [5.0, 97.0], [5.1, 98.0], [5.2, 99.0], [5.3, 99.0], [5.4, 99.0], [5.5, 100.0], [5.6, 100.0], [5.7, 101.0], [5.8, 101.0], [5.9, 101.0], [6.0, 102.0], [6.1, 102.0], [6.2, 103.0], [6.3, 103.0], [6.4, 103.0], [6.5, 103.0], [6.6, 104.0], [6.7, 104.0], [6.8, 104.0], [6.9, 105.0], [7.0, 105.0], [7.1, 106.0], [7.2, 106.0], [7.3, 106.0], [7.4, 107.0], [7.5, 107.0], [7.6, 108.0], [7.7, 109.0], [7.8, 109.0], [7.9, 110.0], [8.0, 110.0], [8.1, 111.0], [8.2, 111.0], [8.3, 111.0], [8.4, 112.0], [8.5, 112.0], [8.6, 113.0], [8.7, 113.0], [8.8, 113.0], [8.9, 113.0], [9.0, 113.0], [9.1, 114.0], [9.2, 114.0], [9.3, 115.0], [9.4, 116.0], [9.5, 116.0], [9.6, 116.0], [9.7, 116.0], [9.8, 116.0], [9.9, 117.0], [10.0, 118.0], [10.1, 118.0], [10.2, 119.0], [10.3, 119.0], [10.4, 119.0], [10.5, 119.0], [10.6, 119.0], [10.7, 120.0], [10.8, 120.0], [10.9, 120.0], [11.0, 120.0], [11.1, 121.0], [11.2, 121.0], [11.3, 121.0], [11.4, 122.0], [11.5, 122.0], [11.6, 122.0], [11.7, 123.0], [11.8, 124.0], [11.9, 124.0], [12.0, 124.0], [12.1, 124.0], [12.2, 125.0], [12.3, 125.0], [12.4, 126.0], [12.5, 126.0], [12.6, 126.0], [12.7, 127.0], [12.8, 127.0], [12.9, 127.0], [13.0, 128.0], [13.1, 128.0], [13.2, 128.0], [13.3, 128.0], [13.4, 129.0], [13.5, 129.0], [13.6, 129.0], [13.7, 130.0], [13.8, 130.0], [13.9, 130.0], [14.0, 131.0], [14.1, 131.0], [14.2, 132.0], [14.3, 132.0], [14.4, 133.0], [14.5, 133.0], [14.6, 133.0], [14.7, 133.0], [14.8, 134.0], [14.9, 134.0], [15.0, 134.0], [15.1, 135.0], [15.2, 135.0], [15.3, 136.0], [15.4, 136.0], [15.5, 136.0], [15.6, 136.0], [15.7, 137.0], [15.8, 137.0], [15.9, 137.0], [16.0, 138.0], [16.1, 138.0], [16.2, 138.0], [16.3, 138.0], [16.4, 138.0], [16.5, 139.0], [16.6, 140.0], [16.7, 140.0], [16.8, 140.0], [16.9, 141.0], [17.0, 141.0], [17.1, 141.0], [17.2, 141.0], [17.3, 141.0], [17.4, 142.0], [17.5, 142.0], [17.6, 143.0], [17.7, 144.0], [17.8, 144.0], [17.9, 144.0], [18.0, 145.0], [18.1, 146.0], [18.2, 146.0], [18.3, 146.0], [18.4, 147.0], [18.5, 147.0], [18.6, 147.0], [18.7, 148.0], [18.8, 148.0], [18.9, 148.0], [19.0, 148.0], [19.1, 149.0], [19.2, 149.0], [19.3, 149.0], [19.4, 149.0], [19.5, 149.0], [19.6, 150.0], [19.7, 150.0], [19.8, 150.0], [19.9, 151.0], [20.0, 151.0], [20.1, 151.0], [20.2, 152.0], [20.3, 152.0], [20.4, 152.0], [20.5, 153.0], [20.6, 153.0], [20.7, 153.0], [20.8, 153.0], [20.9, 153.0], [21.0, 153.0], [21.1, 154.0], [21.2, 154.0], [21.3, 154.0], [21.4, 154.0], [21.5, 154.0], [21.6, 154.0], [21.7, 155.0], [21.8, 155.0], [21.9, 155.0], [22.0, 155.0], [22.1, 156.0], [22.2, 156.0], [22.3, 156.0], [22.4, 156.0], [22.5, 157.0], [22.6, 157.0], [22.7, 158.0], [22.8, 158.0], [22.9, 159.0], [23.0, 159.0], [23.1, 160.0], [23.2, 160.0], [23.3, 161.0], [23.4, 161.0], [23.5, 161.0], [23.6, 162.0], [23.7, 162.0], [23.8, 162.0], [23.9, 163.0], [24.0, 163.0], [24.1, 163.0], [24.2, 163.0], [24.3, 163.0], [24.4, 164.0], [24.5, 164.0], [24.6, 164.0], [24.7, 165.0], [24.8, 165.0], [24.9, 165.0], [25.0, 166.0], [25.1, 166.0], [25.2, 166.0], [25.3, 166.0], [25.4, 167.0], [25.5, 167.0], [25.6, 167.0], [25.7, 167.0], [25.8, 168.0], [25.9, 168.0], [26.0, 168.0], [26.1, 169.0], [26.2, 169.0], [26.3, 169.0], [26.4, 170.0], [26.5, 170.0], [26.6, 170.0], [26.7, 170.0], [26.8, 171.0], [26.9, 171.0], [27.0, 171.0], [27.1, 172.0], [27.2, 172.0], [27.3, 172.0], [27.4, 172.0], [27.5, 172.0], [27.6, 173.0], [27.7, 173.0], [27.8, 173.0], [27.9, 174.0], [28.0, 174.0], [28.1, 174.0], [28.2, 174.0], [28.3, 175.0], [28.4, 175.0], [28.5, 175.0], [28.6, 175.0], [28.7, 175.0], [28.8, 175.0], [28.9, 176.0], [29.0, 176.0], [29.1, 176.0], [29.2, 176.0], [29.3, 177.0], [29.4, 177.0], [29.5, 177.0], [29.6, 177.0], [29.7, 177.0], [29.8, 178.0], [29.9, 178.0], [30.0, 178.0], [30.1, 178.0], [30.2, 179.0], [30.3, 179.0], [30.4, 179.0], [30.5, 179.0], [30.6, 180.0], [30.7, 180.0], [30.8, 181.0], [30.9, 181.0], [31.0, 181.0], [31.1, 182.0], [31.2, 182.0], [31.3, 182.0], [31.4, 182.0], [31.5, 182.0], [31.6, 182.0], [31.7, 183.0], [31.8, 183.0], [31.9, 183.0], [32.0, 184.0], [32.1, 184.0], [32.2, 184.0], [32.3, 184.0], [32.4, 184.0], [32.5, 184.0], [32.6, 185.0], [32.7, 185.0], [32.8, 185.0], [32.9, 185.0], [33.0, 186.0], [33.1, 186.0], [33.2, 186.0], [33.3, 186.0], [33.4, 187.0], [33.5, 187.0], [33.6, 187.0], [33.7, 187.0], [33.8, 187.0], [33.9, 188.0], [34.0, 188.0], [34.1, 188.0], [34.2, 189.0], [34.3, 189.0], [34.4, 189.0], [34.5, 190.0], [34.6, 190.0], [34.7, 190.0], [34.8, 191.0], [34.9, 191.0], [35.0, 191.0], [35.1, 192.0], [35.2, 192.0], [35.3, 192.0], [35.4, 192.0], [35.5, 193.0], [35.6, 193.0], [35.7, 193.0], [35.8, 194.0], [35.9, 194.0], [36.0, 194.0], [36.1, 195.0], [36.2, 195.0], [36.3, 196.0], [36.4, 196.0], [36.5, 196.0], [36.6, 196.0], [36.7, 197.0], [36.8, 197.0], [36.9, 197.0], [37.0, 197.0], [37.1, 198.0], [37.2, 198.0], [37.3, 198.0], [37.4, 198.0], [37.5, 198.0], [37.6, 199.0], [37.7, 199.0], [37.8, 199.0], [37.9, 200.0], [38.0, 200.0], [38.1, 200.0], [38.2, 201.0], [38.3, 201.0], [38.4, 202.0], [38.5, 202.0], [38.6, 203.0], [38.7, 203.0], [38.8, 203.0], [38.9, 204.0], [39.0, 204.0], [39.1, 204.0], [39.2, 204.0], [39.3, 205.0], [39.4, 205.0], [39.5, 205.0], [39.6, 205.0], [39.7, 205.0], [39.8, 205.0], [39.9, 206.0], [40.0, 207.0], [40.1, 207.0], [40.2, 208.0], [40.3, 208.0], [40.4, 209.0], [40.5, 209.0], [40.6, 209.0], [40.7, 210.0], [40.8, 210.0], [40.9, 210.0], [41.0, 211.0], [41.1, 211.0], [41.2, 211.0], [41.3, 212.0], [41.4, 212.0], [41.5, 212.0], [41.6, 213.0], [41.7, 213.0], [41.8, 213.0], [41.9, 213.0], [42.0, 213.0], [42.1, 214.0], [42.2, 214.0], [42.3, 215.0], [42.4, 215.0], [42.5, 216.0], [42.6, 217.0], [42.7, 217.0], [42.8, 217.0], [42.9, 217.0], [43.0, 218.0], [43.1, 218.0], [43.2, 218.0], [43.3, 219.0], [43.4, 219.0], [43.5, 219.0], [43.6, 220.0], [43.7, 221.0], [43.8, 221.0], [43.9, 221.0], [44.0, 222.0], [44.1, 223.0], [44.2, 223.0], [44.3, 223.0], [44.4, 224.0], [44.5, 224.0], [44.6, 225.0], [44.7, 226.0], [44.8, 226.0], [44.9, 227.0], [45.0, 227.0], [45.1, 228.0], [45.2, 228.0], [45.3, 229.0], [45.4, 229.0], [45.5, 229.0], [45.6, 230.0], [45.7, 231.0], [45.8, 232.0], [45.9, 233.0], [46.0, 233.0], [46.1, 233.0], [46.2, 233.0], [46.3, 234.0], [46.4, 234.0], [46.5, 235.0], [46.6, 235.0], [46.7, 236.0], [46.8, 236.0], [46.9, 237.0], [47.0, 237.0], [47.1, 238.0], [47.2, 238.0], [47.3, 238.0], [47.4, 239.0], [47.5, 239.0], [47.6, 240.0], [47.7, 240.0], [47.8, 241.0], [47.9, 241.0], [48.0, 242.0], [48.1, 242.0], [48.2, 243.0], [48.3, 243.0], [48.4, 243.0], [48.5, 243.0], [48.6, 244.0], [48.7, 245.0], [48.8, 245.0], [48.9, 246.0], [49.0, 246.0], [49.1, 247.0], [49.2, 247.0], [49.3, 248.0], [49.4, 248.0], [49.5, 248.0], [49.6, 250.0], [49.7, 250.0], [49.8, 250.0], [49.9, 251.0], [50.0, 251.0], [50.1, 252.0], [50.2, 252.0], [50.3, 252.0], [50.4, 253.0], [50.5, 253.0], [50.6, 253.0], [50.7, 254.0], [50.8, 254.0], [50.9, 255.0], [51.0, 255.0], [51.1, 256.0], [51.2, 256.0], [51.3, 257.0], [51.4, 257.0], [51.5, 257.0], [51.6, 258.0], [51.7, 259.0], [51.8, 260.0], [51.9, 260.0], [52.0, 261.0], [52.1, 262.0], [52.2, 263.0], [52.3, 263.0], [52.4, 263.0], [52.5, 264.0], [52.6, 264.0], [52.7, 265.0], [52.8, 265.0], [52.9, 266.0], [53.0, 267.0], [53.1, 267.0], [53.2, 267.0], [53.3, 268.0], [53.4, 268.0], [53.5, 268.0], [53.6, 269.0], [53.7, 270.0], [53.8, 270.0], [53.9, 270.0], [54.0, 271.0], [54.1, 271.0], [54.2, 271.0], [54.3, 271.0], [54.4, 272.0], [54.5, 272.0], [54.6, 273.0], [54.7, 273.0], [54.8, 274.0], [54.9, 274.0], [55.0, 275.0], [55.1, 275.0], [55.2, 275.0], [55.3, 276.0], [55.4, 277.0], [55.5, 278.0], [55.6, 279.0], [55.7, 279.0], [55.8, 280.0], [55.9, 280.0], [56.0, 281.0], [56.1, 281.0], [56.2, 282.0], [56.3, 282.0], [56.4, 283.0], [56.5, 284.0], [56.6, 284.0], [56.7, 284.0], [56.8, 285.0], [56.9, 285.0], [57.0, 285.0], [57.1, 286.0], [57.2, 286.0], [57.3, 287.0], [57.4, 287.0], [57.5, 288.0], [57.6, 289.0], [57.7, 290.0], [57.8, 290.0], [57.9, 290.0], [58.0, 291.0], [58.1, 291.0], [58.2, 292.0], [58.3, 292.0], [58.4, 293.0], [58.5, 294.0], [58.6, 295.0], [58.7, 296.0], [58.8, 297.0], [58.9, 298.0], [59.0, 298.0], [59.1, 299.0], [59.2, 300.0], [59.3, 301.0], [59.4, 302.0], [59.5, 302.0], [59.6, 303.0], [59.7, 304.0], [59.8, 304.0], [59.9, 305.0], [60.0, 305.0], [60.1, 306.0], [60.2, 307.0], [60.3, 307.0], [60.4, 308.0], [60.5, 308.0], [60.6, 309.0], [60.7, 310.0], [60.8, 310.0], [60.9, 311.0], [61.0, 311.0], [61.1, 311.0], [61.2, 312.0], [61.3, 312.0], [61.4, 312.0], [61.5, 313.0], [61.6, 313.0], [61.7, 313.0], [61.8, 313.0], [61.9, 314.0], [62.0, 314.0], [62.1, 315.0], [62.2, 316.0], [62.3, 316.0], [62.4, 316.0], [62.5, 317.0], [62.6, 318.0], [62.7, 319.0], [62.8, 319.0], [62.9, 320.0], [63.0, 321.0], [63.1, 322.0], [63.2, 322.0], [63.3, 322.0], [63.4, 323.0], [63.5, 323.0], [63.6, 323.0], [63.7, 324.0], [63.8, 324.0], [63.9, 325.0], [64.0, 326.0], [64.1, 327.0], [64.2, 328.0], [64.3, 329.0], [64.4, 331.0], [64.5, 331.0], [64.6, 332.0], [64.7, 332.0], [64.8, 333.0], [64.9, 334.0], [65.0, 335.0], [65.1, 335.0], [65.2, 336.0], [65.3, 336.0], [65.4, 337.0], [65.5, 337.0], [65.6, 339.0], [65.7, 339.0], [65.8, 341.0], [65.9, 343.0], [66.0, 344.0], [66.1, 344.0], [66.2, 346.0], [66.3, 347.0], [66.4, 348.0], [66.5, 349.0], [66.6, 350.0], [66.7, 352.0], [66.8, 352.0], [66.9, 355.0], [67.0, 356.0], [67.1, 356.0], [67.2, 358.0], [67.3, 360.0], [67.4, 361.0], [67.5, 362.0], [67.6, 365.0], [67.7, 366.0], [67.8, 366.0], [67.9, 367.0], [68.0, 368.0], [68.1, 368.0], [68.2, 369.0], [68.3, 370.0], [68.4, 371.0], [68.5, 372.0], [68.6, 373.0], [68.7, 375.0], [68.8, 376.0], [68.9, 378.0], [69.0, 379.0], [69.1, 380.0], [69.2, 380.0], [69.3, 381.0], [69.4, 381.0], [69.5, 381.0], [69.6, 383.0], [69.7, 384.0], [69.8, 385.0], [69.9, 385.0], [70.0, 387.0], [70.1, 388.0], [70.2, 389.0], [70.3, 390.0], [70.4, 391.0], [70.5, 391.0], [70.6, 393.0], [70.7, 395.0], [70.8, 396.0], [70.9, 399.0], [71.0, 399.0], [71.1, 401.0], [71.2, 402.0], [71.3, 403.0], [71.4, 404.0], [71.5, 406.0], [71.6, 406.0], [71.7, 410.0], [71.8, 410.0], [71.9, 410.0], [72.0, 412.0], [72.1, 413.0], [72.2, 414.0], [72.3, 415.0], [72.4, 417.0], [72.5, 418.0], [72.6, 419.0], [72.7, 419.0], [72.8, 422.0], [72.9, 424.0], [73.0, 425.0], [73.1, 426.0], [73.2, 426.0], [73.3, 427.0], [73.4, 428.0], [73.5, 429.0], [73.6, 431.0], [73.7, 432.0], [73.8, 432.0], [73.9, 434.0], [74.0, 437.0], [74.1, 438.0], [74.2, 440.0], [74.3, 442.0], [74.4, 444.0], [74.5, 445.0], [74.6, 446.0], [74.7, 447.0], [74.8, 449.0], [74.9, 452.0], [75.0, 452.0], [75.1, 453.0], [75.2, 456.0], [75.3, 457.0], [75.4, 458.0], [75.5, 459.0], [75.6, 462.0], [75.7, 464.0], [75.8, 465.0], [75.9, 466.0], [76.0, 467.0], [76.1, 468.0], [76.2, 469.0], [76.3, 470.0], [76.4, 473.0], [76.5, 475.0], [76.6, 477.0], [76.7, 480.0], [76.8, 482.0], [76.9, 482.0], [77.0, 485.0], [77.1, 486.0], [77.2, 487.0], [77.3, 491.0], [77.4, 493.0], [77.5, 494.0], [77.6, 495.0], [77.7, 497.0], [77.8, 498.0], [77.9, 500.0], [78.0, 505.0], [78.1, 506.0], [78.2, 508.0], [78.3, 510.0], [78.4, 512.0], [78.5, 514.0], [78.6, 516.0], [78.7, 518.0], [78.8, 519.0], [78.9, 521.0], [79.0, 523.0], [79.1, 524.0], [79.2, 525.0], [79.3, 525.0], [79.4, 527.0], [79.5, 528.0], [79.6, 529.0], [79.7, 532.0], [79.8, 533.0], [79.9, 534.0], [80.0, 537.0], [80.1, 541.0], [80.2, 542.0], [80.3, 544.0], [80.4, 549.0], [80.5, 550.0], [80.6, 551.0], [80.7, 552.0], [80.8, 553.0], [80.9, 554.0], [81.0, 555.0], [81.1, 556.0], [81.2, 560.0], [81.3, 562.0], [81.4, 569.0], [81.5, 572.0], [81.6, 575.0], [81.7, 578.0], [81.8, 581.0], [81.9, 582.0], [82.0, 584.0], [82.1, 588.0], [82.2, 589.0], [82.3, 593.0], [82.4, 597.0], [82.5, 601.0], [82.6, 603.0], [82.7, 604.0], [82.8, 605.0], [82.9, 609.0], [83.0, 612.0], [83.1, 614.0], [83.2, 621.0], [83.3, 622.0], [83.4, 626.0], [83.5, 630.0], [83.6, 636.0], [83.7, 639.0], [83.8, 642.0], [83.9, 647.0], [84.0, 649.0], [84.1, 656.0], [84.2, 662.0], [84.3, 663.0], [84.4, 668.0], [84.5, 670.0], [84.6, 672.0], [84.7, 673.0], [84.8, 674.0], [84.9, 675.0], [85.0, 680.0], [85.1, 685.0], [85.2, 690.0], [85.3, 691.0], [85.4, 697.0], [85.5, 701.0], [85.6, 704.0], [85.7, 708.0], [85.8, 710.0], [85.9, 713.0], [86.0, 714.0], [86.1, 718.0], [86.2, 721.0], [86.3, 731.0], [86.4, 739.0], [86.5, 742.0], [86.6, 748.0], [86.7, 749.0], [86.8, 750.0], [86.9, 754.0], [87.0, 763.0], [87.1, 767.0], [87.2, 767.0], [87.3, 769.0], [87.4, 773.0], [87.5, 776.0], [87.6, 783.0], [87.7, 791.0], [87.8, 794.0], [87.9, 799.0], [88.0, 799.0], [88.1, 803.0], [88.2, 807.0], [88.3, 816.0], [88.4, 818.0], [88.5, 820.0], [88.6, 824.0], [88.7, 824.0], [88.8, 827.0], [88.9, 835.0], [89.0, 839.0], [89.1, 844.0], [89.2, 847.0], [89.3, 851.0], [89.4, 853.0], [89.5, 862.0], [89.6, 867.0], [89.7, 872.0], [89.8, 878.0], [89.9, 883.0], [90.0, 888.0], [90.1, 893.0], [90.2, 898.0], [90.3, 900.0], [90.4, 903.0], [90.5, 906.0], [90.6, 911.0], [90.7, 912.0], [90.8, 914.0], [90.9, 918.0], [91.0, 938.0], [91.1, 941.0], [91.2, 945.0], [91.3, 947.0], [91.4, 954.0], [91.5, 957.0], [91.6, 959.0], [91.7, 960.0], [91.8, 964.0], [91.9, 968.0], [92.0, 974.0], [92.1, 977.0], [92.2, 986.0], [92.3, 990.0], [92.4, 995.0], [92.5, 998.0], [92.6, 1009.0], [92.7, 1019.0], [92.8, 1024.0], [92.9, 1030.0], [93.0, 1034.0], [93.1, 1040.0], [93.2, 1055.0], [93.3, 1066.0], [93.4, 1069.0], [93.5, 1077.0], [93.6, 1083.0], [93.7, 1087.0], [93.8, 1089.0], [93.9, 1101.0], [94.0, 1110.0], [94.1, 1114.0], [94.2, 1120.0], [94.3, 1124.0], [94.4, 1126.0], [94.5, 1130.0], [94.6, 1140.0], [94.7, 1143.0], [94.8, 1145.0], [94.9, 1151.0], [95.0, 1155.0], [95.1, 1161.0], [95.2, 1164.0], [95.3, 1165.0], [95.4, 1168.0], [95.5, 1183.0], [95.6, 1189.0], [95.7, 1200.0], [95.8, 1204.0], [95.9, 1220.0], [96.0, 1237.0], [96.1, 1255.0], [96.2, 1285.0], [96.3, 1352.0], [96.4, 1441.0], [96.5, 1445.0], [96.6, 1446.0], [96.7, 1446.0], [96.8, 1447.0], [96.9, 1448.0], [97.0, 1449.0], [97.1, 1449.0], [97.2, 1450.0], [97.3, 1450.0], [97.4, 1451.0], [97.5, 1451.0], [97.6, 1452.0], [97.7, 1453.0], [97.8, 1453.0], [97.9, 1454.0], [98.0, 1454.0], [98.1, 1456.0], [98.2, 1456.0], [98.3, 1458.0], [98.4, 1459.0], [98.5, 1459.0], [98.6, 1462.0], [98.7, 1464.0], [98.8, 1464.0], [98.9, 1465.0], [99.0, 1466.0], [99.1, 1466.0], [99.2, 1467.0], [99.3, 1468.0], [99.4, 1469.0], [99.5, 1470.0], [99.6, 1474.0], [99.7, 1477.0], [99.8, 1573.0], [99.9, 1847.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 972.0, "series": [{"data": [[0.0, 164.0], [2100.0, 2.0], [600.0, 91.0], [700.0, 77.0], [800.0, 66.0], [200.0, 637.0], [900.0, 68.0], [1000.0, 41.0], [1100.0, 54.0], [300.0, 358.0], [1200.0, 16.0], [1300.0, 5.0], [1400.0, 100.0], [1500.0, 4.0], [100.0, 972.0], [400.0, 206.0], [1700.0, 1.0], [1800.0, 1.0], [500.0, 137.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2339.0, "series": [{"data": [[0.0, 2339.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 653.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 8.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 92.94366666666693, "minX": 1.68691284E12, "maxY": 92.94366666666693, "series": [{"data": [[1.68691284E12, 92.94366666666693]], "isOverall": false, "label": "RestApi", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691284E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 58.0, "minX": 1.0, "maxY": 620.3333333333334, "series": [{"data": [[2.0, 236.33333333333334], [3.0, 351.75], [4.0, 219.28571428571428], [5.0, 447.66666666666663], [6.0, 97.0], [7.0, 502.0], [8.0, 58.0], [9.0, 345.5], [10.0, 245.33333333333331], [11.0, 161.7142857142857], [12.0, 111.0], [13.0, 368.0], [14.0, 133.5], [15.0, 249.4], [16.0, 113.0], [17.0, 233.8181818181818], [19.0, 94.66666666666667], [20.0, 128.0], [21.0, 232.75], [22.0, 507.83333333333337], [23.0, 163.33333333333334], [25.0, 264.6666666666667], [27.0, 58.5], [28.0, 251.42857142857142], [29.0, 75.0], [32.0, 89.0], [35.0, 97.5], [34.0, 248.20000000000002], [37.0, 122.0], [39.0, 128.0909090909091], [38.0, 110.0], [41.0, 137.0], [40.0, 501.7692307692307], [43.0, 113.2], [45.0, 402.4615384615385], [44.0, 119.33333333333333], [47.0, 99.66666666666667], [46.0, 371.7142857142857], [49.0, 620.3333333333334], [48.0, 109.89999999999999], [51.0, 384.75], [50.0, 322.0], [52.0, 163.0], [55.0, 136.37499999999997], [57.0, 215.5], [59.0, 485.91666666666674], [58.0, 195.5], [61.0, 598.4545454545454], [60.0, 235.0], [63.0, 404.14285714285717], [65.0, 134.0], [71.0, 129.33333333333334], [68.0, 316.8888888888889], [75.0, 348.0], [74.0, 353.0], [73.0, 186.11111111111111], [72.0, 103.8], [79.0, 177.9], [78.0, 235.76470588235293], [77.0, 151.5], [83.0, 279.6], [82.0, 195.48275862068962], [80.0, 255.23076923076925], [87.0, 179.14285714285714], [86.0, 154.66666666666666], [85.0, 156.33333333333334], [84.0, 282.28571428571433], [90.0, 259.80952380952385], [89.0, 203.19999999999996], [88.0, 295.2916666666667], [95.0, 277.3953488372092], [94.0, 338.66666666666663], [93.0, 230.71428571428572], [92.0, 360.945945945946], [99.0, 235.5222222222222], [98.0, 262.7142857142857], [97.0, 325.70114942528727], [96.0, 230.6], [100.0, 410.6458885941647], [1.0, 306.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[92.94366666666693, 378.5976666666662]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 13069.066666666668, "minX": 1.68691284E12, "maxY": 2368038.1666666665, "series": [{"data": [[1.68691284E12, 2368038.1666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68691284E12, 13069.066666666668]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691284E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 378.5976666666662, "minX": 1.68691284E12, "maxY": 378.5976666666662, "series": [{"data": [[1.68691284E12, 378.5976666666662]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691284E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 305.8629999999996, "minX": 1.68691284E12, "maxY": 305.8629999999996, "series": [{"data": [[1.68691284E12, 305.8629999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691284E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 7.571000000000014, "minX": 1.68691284E12, "maxY": 7.571000000000014, "series": [{"data": [[1.68691284E12, 7.571000000000014]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691284E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 55.0, "minX": 1.68691284E12, "maxY": 2173.0, "series": [{"data": [[1.68691284E12, 2173.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68691284E12, 55.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68691284E12, 887.8000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68691284E12, 1465.9899999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68691284E12, 251.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68691284E12, 1154.8499999999995]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691284E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 109.0, "minX": 7.0, "maxY": 1455.0, "series": [{"data": [[164.0, 480.0], [59.0, 918.0], [238.0, 182.0], [254.0, 431.5], [271.0, 312.0], [284.0, 249.5], [21.0, 109.0], [361.0, 263.0], [363.0, 220.0], [379.0, 213.0], [99.0, 1455.0], [387.0, 223.0], [113.0, 126.0], [7.0, 130.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 387.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 71.0, "minX": 7.0, "maxY": 1455.0, "series": [{"data": [[164.0, 471.0], [59.0, 828.0], [238.0, 116.0], [254.0, 412.5], [271.0, 292.0], [284.0, 245.5], [21.0, 71.0], [361.0, 194.0], [363.0, 156.0], [379.0, 177.0], [99.0, 1455.0], [387.0, 167.0], [113.0, 83.0], [7.0, 92.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 387.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.68691284E12, "maxY": 50.0, "series": [{"data": [[1.68691284E12, 50.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691284E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.68691284E12, "maxY": 50.0, "series": [{"data": [[1.68691284E12, 50.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68691284E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.68691284E12, "maxY": 50.0, "series": [{"data": [[1.68691284E12, 50.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691284E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.68691284E12, "maxY": 50.0, "series": [{"data": [[1.68691284E12, 50.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68691284E12, "title": "Total Transactions Per Second"}},
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

