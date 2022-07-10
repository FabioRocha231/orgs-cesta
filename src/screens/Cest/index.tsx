import { FarmCest, FarmCestProps } from "../../components/FarmCest";
import { TopComponent } from "../../components/TopComponent";

export const Cesta = ({ data }: FarmCestProps) => {
  return (
    <>
      <TopComponent data={data} />
      <FarmCest data={data} />
    </>
  );
};
