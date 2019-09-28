import decode from "./index";
import { assert } from "chai";

describe("decode", () => {
  it("should decode single character correctly", () => {
    const result = decode("\u200c\u200c\u200b\u200c\u200b\u200c\u200b");

    assert.equal(result, "j");
  });

  it("should decode several characters correctly", () => {
    const result = decode(
      "\u200c\u200c\u200b\u200c\u200b\u200c\u200b\u200d\u200c\u200c\u200b\u200b\u200b\u200c\u200b\u200d\u200c\u200c\u200c\u200c\u200b\u200b\u200b"
    );

    assert.equal(result, "jbx");
  });

  it("should decode undefined into undefined", () => {
    const result = decode(undefined);

    assert.equal(result, undefined);
  });

  it("should decode null into null", () => {
    const result = decode(null);

    assert.equal(result, null);
  });

  it("should decode false into false", () => {
    const result = decode(false);

    assert.equal(result, false);
  });

  it("should decode array into array", () => {
    const array = [];

    const result = decode(array);

    assert.equal(result, array);
  });

  it("should decode object into object", () => {
    const object = {};

    const result = decode(object);

    assert.equal(result, object);
  });

  it("should decode function into function", () => {
    const func = () => {};

    const result = decode(func);

    assert.equal(result, func);
  });

  it("should decode class into class", () => {
    const clazz = class {};

    const result = decode(clazz);

    assert.equal(result, clazz);
  });

  it("should decode -1 into -1", () => {
    const result = decode(-1);

    assert.equal(result, -1);
  });

  it("should decode 0 into 0", () => {
    const result = decode(0);

    assert.equal(result, 0);
  });

  it("should decode 1 into 1", () => {
    const result = decode(1);

    assert.equal(result, 1);
  });

  it("should decode empty string into empty string", () => {
    const result = decode("");

    assert.equal(result, "");
  });
});
