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
});
