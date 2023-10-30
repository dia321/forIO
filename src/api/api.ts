import { API } from './instance';

export const getRandomDogAPI = () =>
  API.request({
    method: 'get',
    url: '/api/breeds/image/random'
  });

const totalPage = 100;
export const getDogWithPageAPI = async (page: number) => {
  const sto = new Promise((resolve) => {
    setTimeout(async () => {
      API.request({ method: 'get', url: '/api/breeds/image/random' }).then((res) => {
        resolve({ data: res.data, page: page, totalPage: totalPage });
      });
    }, 100);
  });
  return sto;
};
