import decode from "./index";
import { assert } from "chai";

describe("encode", () => {
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
});
