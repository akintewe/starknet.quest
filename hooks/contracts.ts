import { Abi } from "starknet";
import quests_nft_abi from "@abi/quests_nft_abi.json";
import { useContract } from "@starknet-react/core";
import { getCurrentNetwork } from "@utils/network";
import { type Address } from "@starknet-react/core"; 

export function useQuestsNFTContract() {
  const network = getCurrentNetwork();

  const address =
    network === "TESTNET"
      ? process.env.NEXT_PUBLIC_QUESTS_CONTRACT_TESTNET as Address
      : process.env.NEXT_PUBLIC_QUESTS_CONTRACT_MAINNET as Address;

  return useContract({
    abi: quests_nft_abi as Abi,
    address,
  });
}
