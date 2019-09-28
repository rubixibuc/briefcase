import encode from "./index";
import { assert } from "chai";

describe("encode", () => {
  it("should encode single character correctly", () => {
    const result = encode("j");

    assert.equal(result, "\u200c\u200c\u200b\u200c\u200b\u200c\u200b");
  });

  it("should encode several characters correctly", () => {
    const result = encode("jbx");

    assert.equal(
      result,
      "\u200c\u200c\u200b\u200c\u200b\u200c\u200b\u200d\u200c\u200c\u200b\u200b\u200b\u200c\u200b\u200d\u200c\u200c\u200c\u200c\u200b\u200b\u200b"
    );
  });

  it("should encode undefined into undefined", () => {
    const result = encode(undefined);

    assert.equal(result, undefined);
  });

  it("should encode null into null", () => {
    const result = encode(null);

    assert.equal(result, null);
  });

  it("should encode false into false", () => {
    const result = encode(false);

    assert.equal(result, false);
  });

  it("should encode array into array", () => {
    const array = [];

    const result = encode(array);

    assert.equal(result, array);
  });

  it("should encode object into object", () => {
    const object = {};

    const result = encode(object);

    assert.equal(result, object);
  });

  it("should encode function into function", () => {
    const func = () => {};

    const result = encode(func);

    assert.equal(result, func);
  });

  it("should encode class into class", () => {
    const clazz = class {};

    const result = encode(clazz);

    assert.equal(result, clazz);
  });

  it("should encode -1 into -1", () => {
    const result = encode(-1);

    assert.equal(result, -1);
  });

  it("should encode 0 into 0", () => {
    const result = encode(0);

    assert.equal(result, 0);
  });

  it("should encode 1 into 1", () => {
    const result = encode(1);

    assert.equal(result, 1);
  });

  it("should encode empty string into empty string", () => {
    const result = encode("");

    assert.equal(result, "");
  });
});
