import { SwapWidget } from "@uniswap/widgets";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export const Widget = () => {
  const [provider, setProvider] = useState();
  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum));
  }, []);

  return (
    <div className="Uniswap">
      <SwapWidget provider={provider} />
    </div>
  );
};

export default Widget;
