let ar1 = [3093,749,3469,142,2049,3537,1596,3035,2424,3982,3290,125,249,131,118,3138];
let ar2 = [141,677,2705,2404,2887,2860,1123,2714,117,1157,2607,1800,153,130,1794,3272];
let ar3 = [182,93,2180,114,103,1017,95,580,2179,2470,2487,2806,1574,1325,1898,1706];
let ar4 = [3753,233,3961,3747,3479,3597,1303,2612,4043,1815,3318,737,197,3943,239,254];
let ar5 = [113,147,961,157,3514,3045,1270,3528,1369,3377,492,156,1410,3251,1839,1249];
let ar6 = [3948,3651,888,3631,253,220,4266,1284,3595,237,2138,3799,2319,254,267,1182];
let ar7 = [399,446,795,653,154,762,140,487,750,457,730,150,175,841,323,492];
let ar8 = [999,979,103,99,1544,1404,100,1615,840,92,1552,1665,1686,76,113,1700];
let ar9 = [4049,182,3583,1712,200,3326,3944,715,213,1855,2990,3621,2560,842,249,2082];
let ar10 = [2610,4749,2723,2915,2189,3911,124,164,1895,3095,3992,134,127,4229,3453,4428];
let ar11 = [105,692,101,150,193,755,84,185,622,851,706,251,86,408,774,831];
let ar12 = [238,217,224,1409,1850,2604,363,265,596,2933,2641,2277,803,2557,1399,237];
let ar13 = [304,247,192,4369,997,5750,85,1248,4718,3888,5228,5116,5880,5348,6052,245];
let ar14 = [238,373,228,395,86,59,289,87,437,384,233,79,470,403,441,352];
let ar15 = [151,3473,1435,87,1517,1480,140,2353,1293,118,163,3321,2537,3061,1532,3402];
let ar16 = [127,375,330,257,220,295,145,335,304,165,151,141,289,256,195,272];

function extremes(arr){
    let len = arr.length;
    let pair =[];

    if(arr[0]<= arr[1]){
        pair[0] = arr[0];
        pair[1] = arr[1];
    }
    else{
        pair[0] = arr[1];
        pair[1] = arr[0];
    }

    for(let a=2;a<len;a++){
        if(arr[a]<pair[0]){
            pair[0]=arr[a];
        }
        else if(arr[a]>pair[1]){
            pair[1]=arr[a];
        }
    }
    return pair;
}

let list = [ar1,ar2,ar3,ar4,ar5,ar6,ar7,ar8,ar9,ar10,ar11,ar12,ar13,ar14,ar15,ar16];

function diff(arr){
    if(arr.length ==2){
        return arr[1] - arr[0];
    }
}

function sort(arr){

    for(let a=0;a<arr.length-1;a++){
        let temp;
        for(let b=a+1;b<arr.length;b++){
            if(arr[b]<arr[a]){
                temp = arr[a];
                arr[a] = arr[b];
                arr[b] = temp;
            }
        }
    }
    return arr;
}

let checksum = 0;
for(let a=0;a<list.length;a++){
    checksum += diff(extremes(list[a]));
}
console.log("Your check sum is: "+checksum);


let sorted = [];
for(let a=0;a<list.length;a++){
    let temp = list[a];
    sorted.push(sort(temp));
}

function modularity(arr){
    //assumes the array is presorted
    for(let n=arr.length-1;n>=0;n--){
        for(let d=0;d<n;d++){
            if(arr[n] % arr[d] == 0){
                return arr[n] / arr[d];
            }
        }
    }
}
checksum = 0;
for(let s=0;s<sorted.length;s++){
    checksum += modularity(sorted[s]);
}
console.log("The second check sum is = "+checksum);
