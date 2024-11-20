import { sortConnectors } from "../../utils/connectors";
class MockConnector {
  constructor(id, name, isAvailable) {
    this.id = id;
    this.name = name;
    this.isAvailable = isAvailable;
  }
  available() {
    return this.isAvailable;
  }
}

describe("sortConnectors function", () => {
  it("should place available connectors first, followed by unavailable ones", () => {
    const connectors = [
      new MockConnector("okxwallet", "Okx Wallet", false),
      new MockConnector("braavos", "Braavos", true),
      new MockConnector("bitkeep", "Bitget Wallet", false),
      new MockConnector("argentX", "Argent X", true),
    ];

    const sortedConnectors = sortConnectors(connectors);

    expect(sortedConnectors[0].name).toBe("Braavos");
    expect(sortedConnectors[1].name).toBe("Argent X");
    expect(sortedConnectors[2].name).toBe("Okx Wallet");
    expect(sortedConnectors[3].name).toBe("Bitget Wallet");
  });

  it("should return an empty array if no connectors are provided", () => {
    const sortedConnectors = sortConnectors([]);
    expect(sortedConnectors).toEqual([]);
  });

  it("should handle the case when all connectors are available", () => {
    const connectors = [
      new MockConnector("braavos", "Braavos", true),
      new MockConnector("argentX", "Argent X", true),
    ];

    const sortedConnectors = sortConnectors(connectors);

    expect(sortedConnectors[0].name).toBe("Braavos");
    expect(sortedConnectors[1].name).toBe("Argent X");
  });

  it("should handle the case when all connectors are unavailable", () => {
    const connectors = [
      new MockConnector("okxwallet", "Okx Wallet", false),
      new MockConnector("bitkeep", "Bitget Wallet", false),
    ];

    const sortedConnectors = sortConnectors(connectors);

    expect(sortedConnectors[0].name).toBe("Okx Wallet");
    expect(sortedConnectors[1].name).toBe("Bitget Wallet");
  });
});
