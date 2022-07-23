import { FarmCest, FarmCestProps } from "../../components/FarmCest";
import { TopComponent } from "../../components/TopComponent";
import Item from "../../components/CestItems";
import { FlatList } from "react-native";
import { TextStyled } from "../../components/TextStyled";
import { FarmCestStyles } from "../../components/FarmCest/styles";

export const Cesta = ({ data }: FarmCestProps) => {
  return (
    <>
      <FlatList
        data={data.itens.list}
        renderItem={Item}
        keyExtractor={(item: any) => item.name}
        ListHeaderComponent={() => {
          return (
            <>
              <TopComponent data={data} />
              <FarmCest data={data} />
              <TextStyled 
                isBold={true}
                textContent={data.itens.title}
                customStyle={FarmCestStyles.title}
              />
            </>
          );
        }}
      />
    </>
  );
};
