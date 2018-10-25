// 布尔
let isDone:boolean = false;

// 字符串
let name: string = 'demo';
name = "smith";

// 数组
let list:number[] = [1,2,3];
let list:Array<number> = [1,2,3];

// 元组
let x:[string,number];
let a:['hello',10] //ok
console.log(x[0].substr(1));

// 枚举
enum Color (Red,Green,Blue);
let c:Color = Color.Green;

// Any 不确定类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;



514+3.5+18.1+58.7+7.8+117+362.3+500+423.65+24+7.8+205+39.36+105+3161+2200+200+70+1000


for (var i = 0; i < 10; i++) {
  setTimeout(function() { 
  	console.log(i); 
  }, 100 * i);
}

let a:[10,'hello'] //error

// 模板
let name: string = `Gene`;
let age: number = 28;
// let sentence: string = 	`Hello, my name is ${name}. I'll be ${age +1} years old next moonth.`;




observables 可观察对象
和function都是惰性运算，需要调用，不然不会起作用
与函数的不同是，可以返回多个值
function foo() {
  console.log('Hello');
  return 42;
  return 100; // 死代码，永远不会执行
}

var foo = Rx.Observable.create(function (observer) {
  console.log('Hello');
  observer.next(42);
  observer.next(100); // “返回”另外一个值
  observer.next(200); // 还可以再“返回”值
});

console.log('before');
foo.subscribe(function (x) {
  console.log(x);
});
console.log('after');

observable
concat 创建一个输出obervable，该observable顺序的发出每个输入observable的所有值

/*、、
	操作符作用：
*/
var source = Rx.Observable.interval(1000);
source 对应的 marble 图：
-----0-----1-----2-----3--...
当 observable 同步发送值时，如使用 of 操作符创建如下 Observable 对象：
var source = Rx.Observable.of(1,2,3,4);
source 对应的 marble 图：
(1234)|
/*------------------------------------------*/ 
map 操作符作用：
对 Observable 对象发出的每个值，使用指定的 project 函数，进行映射处理。
map 操作符示例：
var source = Rx.Observable.interval(1000);
var newest = source.map(x => x + 2); 
newest.subscribe(console.log);
示例 marble 图：
source: -----0-----1-----2-----3--...
            map(x => x + 2)
newest: -----2-----3-----4-----5--...
/*------------------------------------------*/ 
mapTo 操作符作用：
对 Observable 对象发出的每个值，映射成固定的值。
mapTo 操作符示例：
var source = Rx.Observable.interval(1000);
var newest = source.mapTo(2); 
newest.subscribe(console.log);
示例 marble 图：
source: -----0-----1-----2-----3--...
                mapTo(2)
newest: -----2-----2-----2-----2--...

/*------------------------------------------*/ 
scan
scan 操作符签名：
public scan(accumulator: function(acc: R, value: T, index: number): R,
    seed: T | R): Observable<R>
scan 操作符作用：
对 Observable 发出值，执行 accumulator 指定的运算，可以简单地认为是 Observable 版本的 Array.prototype.reduce 。
scan 操作符示例：
var source = Rx.Observable.from('hello')
             .zip(Rx.Observable.interval(600), (x, y) => x);
var example = source.scan((origin, next) => origin + next, '');
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
示例 marble 图：
source : ----h----e----l----l----o|
    scan((origin, next) => origin + next, '')
example: ----h----(he)----(hel)----(hell)----(hello)|
以上代码运行后，控制台的输出结果：
h
he
hel
hell
hello
complete
(备注：scan 与 reduce 最大的差别就是 scan 最终返回的一定是一个 Observable 对象，而 reduce 的返回类型不是固定的)

/*------------------------------------------*/ 
concatMap
concatMap 操作符签名：
public concatMap(project: function(value: T, ?index: number): ObservableInput, 
    resultSelector: function(outerValue: T, innerValue: I, outerIndex: number, 
    innerIndex: number): any): Observable
concatMap 操作符作用：
对每个 Observable 对象发出的值，进行映射处理，并进行合并。该操作符也会先处理前一个 Observable 对象，在处理下一个 Observable 对象。
concatMap 操作符示例：
var source = Rx.Observable.fromEvent(document.body, 'click');
var example = source.concatMap(
                e => Rx.Observable.interval(100).take(3));
                
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
示例 marble 图：
source : -----------c--c------------------...
        concatMap(c => Rx.Observable.interval(100).take(3))
example: -------------0-1-2-0-1-2---------...
以上代码运行后，控制台的输出结果：
0
1
2
0
1
2
concatMap 其实就是 map 加上 concatAll 的简化写法。
/*------------------------------------------*/ 
switchMap
switchMap 操作符签名：
public switchMap(project: function(value: T, ?index: number): ObservableInput, 
  resultSelector: function(outerValue: T, innerValue: I, outerIndex: number, 
  innerIndex: number): any): Observable
switchMap 操作符作用：
对源 Observable 对象发出的值，做映射处理。若有新的 Observable 对象出现，会在新的 Observable 对象发出新值后，退订前一个未处理完的 Observable 对象。
switchMap 操作符示例：

var source = Rx.Observable.fromEvent(document.body, 'click');
var example = source.switchMap(
                    e => Rx.Observable.interval(100).take(3));
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
示例 marble 图：

source : -----------c--c-----------------...
        concatMap(c => Rx.Observable.interval(100).take(3))
example: -------------0--0-1-2-----------...
以上代码运行后，控制台的输出结果：
0
0
1
2
/*------------------------------------------*/ 
concat 操作符作用：
把多个 Observable 对象合并为一个 Observable 对象，Observable 对象会依次执行，即需等前一个 Observable 对象完成后，才会继续订阅下一个。
var source = Rx.Observable.interval(1000).take(3);
var source2 = Rx.Observable.of(3)
var source3 = Rx.Observable.of(4,5,6)
var example = source.concat(source2, source3);
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
示例 marble 图：
source : ----0----1----2|
source2: (3)|
source3: (456)|
            concat()
example: ----0----1----2(3456)|

/*------------------------------------------*/ 
concatAll 操作符签名：
public concatAll(): Observable
concatAll 操作符作用：
合并多个 Observable 对象，并在上一个 Observable 对象完成后订阅下一个 Observable 对象。
concatAll 操作符示例：
var obs1 = Rx.Observable.interval(1000).take(5);
var obs2 = Rx.Observable.interval(500).take(2);
var obs3 = Rx.Observable.interval(2000).take(1);
var source = Rx.Observable.of(obs1, obs2, obs3);
var example = source.concatAll();
example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});
示例 marble 图：
source : (o1                 o2      o3)|
           \                  \       \
            --0--1--2--3--4|   -0-1|   ----0|
                
                concatAll()        

example: --0--1--2--3--4-0-1----0|