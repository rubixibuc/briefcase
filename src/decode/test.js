import decode from './index'
import { assert } from 'chai'

describe("encode", () => {
  it("should decode single character correctly", () => {
    const result = decode("\u0012\u0013\u0013\u0013");

    assert.equal(result, "j");
  });

  it("should decode several characters correctly", () => {
    const result = decode(
      "\u0012\u0013\u0013\u0013\u0016\u0012\u0013\u0011\u0013\u0016\u0012\u0014\u0013\u0011"
    );

    assert.equal(result, "jbx");
  });
});
