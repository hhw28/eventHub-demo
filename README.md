**设计模式原则**：开放封闭原则

* 对扩展开放
* 对修改封闭
  
经典设计模式有23个，以下为前端常用设计模式

## 工厂模式

* 用一个工厂函数创建实例，隐藏new
* 如jQuery $/React createElementh

```
class Foo{}

function factory(a,b,c){
    // if else
    return new Foo()
}

const f = factory(1,2,3)
```

## 单例模式

* 全局唯一的实例（无法生成第二个）
* js是单线程的，创建单例很简单；但多线程的语言创建单例要考虑线程锁死情况，多个线程同时创建单例会重复（多线程共享进程内存）
* 如Vuex Redux的store/全局唯一的dialog/modal

```
class SingleTon{
    private constructor()
    private static instance: SingleTon | null = null
    public static getInstance(): SingleTon{
        if(this.instance == null){
            this.instance = new SingleTon()
        }
        return this.instance
    }
    fn1(){}
    fn2(){}
}

const s = SingleTon.getInstance()
s.fn1()
s.fn2()

const s1 = SingleTon.getInstance()

s === s1 //true
```

## 代理模式

* 使用者不能直接访问对象，而是访问一个代理层
* 在代理层可以监听get/set做很多事情
* 如es6 `Proxy`实现vue3响应式

## 装饰器模式

* 原功能不变，增加一些新功能（AOP面向切面编程）
* ES 和 ts 的 Decorator 语法
* 类装饰器 / 方法装饰器
* 参考next.js中的应用

## 观察者模式

* 一个主题，一个观察者，主题变化之后触发观察者执行
* subject 和 observer直接绑定，没有中间媒介
* 如addEventListener绑定事件

```
btn.addEventListener('click', () => {})
```

## 发布订阅模式

* 绑定的事件要记得解除，防止内存泄漏
* publish 和 observer互不相识，需要中间媒介event channel
* 如eventBus自定义事件

```
//绑定
event.on('event-key',() => {//事件1})
event.on('event-key',() => {//事件2})

//触发执行
event.emit('event-key')

//解除
event.off('event-key', fn)
```

**观察者模式和发布订阅模式的区别**
