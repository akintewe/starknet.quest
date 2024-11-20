import { Connector } from "starknetkit";

export const sortConnectors = (connectors: Connector[]): Connector[] => {
  const available: Connector[] = [];
  const notAvailable: Connector[] = [];

  // Sort connectors 
  connectors.forEach((connector) => {
    if (connector.available()) {
      available.push(connector);
    } else {
      notAvailable.push(connector);
    }
  });

  return [
    ...available,
    // Reorganized not available connectors
    ...notAvailable.sort((a, b) => {
      const order = ["okxwallet", "bitkeep"]; // desired order
      return order.indexOf(a.id) - order.indexOf(b.id);
    }),
  ];
};