const encode = require("./index");
const assert = require("chai").assert;

describe("encode", () => {
  it("should encode single character correctly", () => {
    const result = encode("j");

    assert.equal(result, "\u0012\u0013\u0013\u0013");
  });

  it("should encode several characters correctly", () => {
    const result = encode("jbx");

    assert.equal(
      result,
      "\u0012\u0013\u0013\u0013\u0016\u0012\u0013\u0011\u0013\u0016\u0012\u0014\u0013\u0011"
    );
  });
});
