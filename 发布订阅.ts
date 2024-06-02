type Topic = string;
type Message = string;
type Subscriber = (message: Message) => void;

class Observer {
  // 更改，会有很多订阅者 private caches :Map<Topic,subscriber>
  // 优化，有大量订阅者时Map比Array更高效 private caches :Map<Topic,Subscriber[]>
  private caches: Map<Topic, Map<Subscriber, boolean>>;
  constructor() {
    this.caches = new Map();
  }
  // 订阅
  subscribe(topic: Topic, subscriber: Subscriber) {
    // // 优化 let subscribers=this.caches.get(topic)
    // const subscribers=this.caches.get(topic)
    // if(!subscribers){
    //     this.caches.set(topic,[subscriber])
    // }else{
    //     subscribers.push(subscriber)
    // }
    const subscribers=this.caches.get(topic)
    if(!subscribers){
        this.caches.set(topic,new Map([[subscriber,true]]))
    }else{
        if(!subscribers.has(subscriber))subscribers.set(subscriber,true)
    }
  }

  // 取消订阅
  unsubscribe(topic: Topic, subscriber: Subscriber) {
    // 如果subscribers数组仅包含一个元素且是要移除的元素时，移除后数组变为[]，这种情况在后续的逻辑中没有特别处理。
    const subscribers = this.caches.get(topic);
    if (subscribers && subscribers.has(subscriber)) {
        subscribers.delete(subscriber);
    }
  }

  // 发布消息
  publish(topic: Topic, message: Message) {
    const subscribers = this.caches.get(topic);
    if (subscribers) {
      // subscribers.forEach(item=>(item));
      subscribers.forEach((_,subscriber) => subscriber(message));
    }
  }
}

// 使用示例
const pubSub = new Observer();

// 定义一个订阅者
const subscriber1 = (message: Message) => {
  console.log("Subscriber 1 received message:", message);
};

// 订阅主题 "news"
pubSub.subscribe("news", subscriber1);

// 定义另一个订阅者
const subscriber2 = (message: Message) => {
  console.log("Subscriber 2 received message:", message);
};

// 订阅相同的主题 "news"
pubSub.subscribe("news", subscriber2);

// 发布消息到 "news" 主题
pubSub.publish("news", "Hello, subscribers!");

// 取消订阅
pubSub.unsubscribe("news", subscriber1);

// 再次发布消息，这次只有 subscriber2 会收到
pubSub.publish("news", "Hello again, remaining subscribers!");
