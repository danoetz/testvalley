import axios, { AxiosError } from 'axios';

import { handleAxiosError } from './errorHandler';
import { MAIN_SHORTCUT_URL } from '../commons/configs';
import { ShortcutProps } from '../commons/types/shortcuts';

export const getMainShortcuts = async (): Promise<{
  status: number;
  data: ShortcutProps[];
}> => {
  try {
    const response = await axios.get(MAIN_SHORTCUT_URL);
    console.log(response.data);
    return { status: response?.status, data: response.data as ShortcutProps[] };
  } catch (error) {
    return handleAxiosError(error as AxiosError<any>);
  }
};
