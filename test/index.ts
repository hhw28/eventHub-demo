import * as chai from "chai";
import EventHub from "../src/index";

const assert = chai.assert;

describe("chai的使用", () => {
  it("eventHub是个对象", () => {
    const eventHub = new EventHub();
    assert(eventHub instanceof Object === true);
  });
  it("on订阅之后, emit发布后会触发on的回调函数", () => {
    const eventHub = new EventHub();
    let called = false;
    eventHub.on("xxx", () => {
      called = true;
    });
    eventHub.emit("xxx");
    setTimeout(() => {
      assert(called === true);
    });
  });
  it("emit发布后可以传输data", () => {
    const eventHub = new EventHub();
    let called: any;
    eventHub.on("xxx", data => {
      called = data;
    });
    eventHub.emit("xxx", "yyy");
    assert(called === "yyy");
  });
  it("emit发布后可以传输data，data可以为数组", () => {
    const eventHub = new EventHub();
    let called: any;
    eventHub.on("xxx", data => {
      called = data;
    });
    eventHub.emit("xxx", ["yyy", "zzz"]);
    setTimeout(() => {
      assert(called[0] === "yyy");
      assert(called[1] === "zzz");
    });
  });
  it("off有用", () => {
    const eventHub = new EventHub();
    let called = false;
    const fn = () => {
      called = true;
    };
    eventHub.on("xxx", fn);
    eventHub.off("xxx", fn);
    eventHub.emit("xxx", "yyy");
    setTimeout(() => {
      assert(called === false);
    });
  });
});
