import { BehaviorSubject } from "rxjs";

const subscriber = new BehaviorSubject({
  title: "javascript",
  url: "/r/javascript/",
});

const messageService = {
  send: function (msg) {
    subscriber.next(msg);
  },
};

export { messageService, subscriber };
