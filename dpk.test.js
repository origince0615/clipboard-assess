const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  // it("Returns the literal '0' when given no input", () => {
  //   const trivialKey = deterministicPartitionKey();
  //   expect(trivialKey).toBe("0");
  // });
  it("should return the expected value for a valid event", () => {
    const event = {
      partitionKey: "testKey",
    };
    const result = deterministicPartitionKey(event);
    expect(result).toBe("testKey");
  });

  it("should return the expected vallue for an invalid event", () => {
    const event = {
      invalidKey: "testValue",
    };
    const result = deterministicPartitionKey(event);
    expect(result.length).toBe(128);
  });

  it("should return the expected value for no event", () => {
    const result = deterministicPartitionKey();
    expect(result).toBe("0");
  });
});
