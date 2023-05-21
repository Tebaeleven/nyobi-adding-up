'use strict';
const fs = require('node:fs'); //FileSystemモジュール呼び出し
const readline = require('node:readline'); //ファイルを一行ずつ読み込むためのモジュール
const rs = fs.createReadStream('./popu-pref.csv');  //popu-pref.csvファイルから、ファイルを読み込む Streamを生成
const rl = readline.createInterface({ input: rs }); //readlineオブジェクトのinputとして設定,rlオブジェクトを作成
rl.on('line', lineString => {
    console.log(lineString);
});