import axios, { AxiosError } from 'axios';

import { handleAxiosError } from './errorHandler';
import { COLLECTIONS_URL } from '../commons/configs';
import { Currency } from '../commons/helpers';
import {
  Collections,
  ItemCollection,
  ItemCollectionData,
} from '../commons/types/collections';

export const getCollections = async (): Promise<{
  status: number;
  data: Collections;
  hotDeals?: ItemCollectionData;
  collections?: ItemCollectionData[];
}> => {
  try {
    const response = await axios.get(COLLECTIONS_URL);
    console.log(response.data);
    const cols = response.data as Collections;

    // HOT DEAL
    const hot = cols.items.find((x) => x.title == 'HOT DEAL');
    const hotDeal = hot?.items.map(
      (item) =>
        new ItemCollection({
          imageUrl: item?.publication.media[0].uri,
          title: item.publication.title,
          tagsOnImage: item.publication.tagsOnImage,
          tagsOnDesc: item.publication.tagsOnDesc,
          finalPrice: Currency(
            item.publication.priceInfo.couponDiscountPrice ??
              item.publication.priceInfo.discountPrice ??
              item.publication.priceInfo.price,
          ),
          discountRate:
            item.publication.priceInfo.couponDiscountRate ??
            item.publication.priceInfo.discountRate ??
            0,
          symbol: '원',
          rating: item.publication.rating,
          preface: item.publication.preface,
          prefaceIconUrl: item.publication.prefaceIconUrl,
        }),
    );

    const hotDealData = new ItemCollectionData({
      title: hot?.title,
      subtitle: hot?.subtitle,
      list: hotDeal,
    });

    // FILTER BY Type:'SINGLE' & ViewType:'TILE'
    const filtered = cols.items.filter(
      (x) =>
        x.type == 'SINGLE' && x.viewType == 'TILE' && x.title != 'HOT DEAL',
    );

    const collectionList: ItemCollectionData[] = [];

    filtered.forEach((e) => {
      const data = e.items.map(
        (item) =>
          new ItemCollection({
            imageUrl: item?.publication.media[0].uri,
            title: item.publication.title,
            tagsOnImage: item.publication.tagsOnImage,
            tagsOnDesc: item.publication.tagsOnDesc,
            finalPrice: Currency(
              item.publication.priceInfo.couponDiscountPrice ??
                item.publication.priceInfo.discountPrice ??
                item.publication.priceInfo.price,
            ),
            discountRate:
              item.publication.priceInfo.couponDiscountRate ??
              item.publication.priceInfo.discountRate ??
              0,
            symbol: '원',
            rating: item.publication.rating,
            preface: item.publication.preface,
            prefaceIconUrl: item.publication.prefaceIconUrl,
          }),
      );
      const dataCollection = new ItemCollectionData({
        title: e.title,
        subtitle: e.subtitle,
        list: data,
      });
      collectionList.push(dataCollection);
    });

    return {
      status: response?.status,
      data: response.data as Collections,
      hotDeals: hotDealData,
      collections: collectionList,
    };
  } catch (error) {
    return handleAxiosError(error as AxiosError<any>);
  }
};
