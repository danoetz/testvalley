import axios, { AxiosError } from 'axios';

import { handleAxiosError } from './errorHandler';
import { BANNER_URL } from '../commons/configs';
import { BannerProps } from '../commons/types/banner';

export const getBannerList = async (): Promise<{
  status: number;
  data: BannerProps[];
}> => {
  try {
    const response = await axios.get(BANNER_URL);
    console.log(response.data);
    return { status: response?.status, data: response.data as BannerProps[] };
  } catch (error) {
    return handleAxiosError(error as AxiosError<any>);
  }
};
