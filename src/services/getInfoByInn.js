import { DADATA_ENDPOINT } from '../constants/endpoints';
import { DADATA_TOKEN } from '../.env.js';

/**
 * Данная функция запрашивает данные с сервиса DaData:
 * https://dadata.ru/api/find-party/
 * Чтобы данные запросились, нужно зарегистрироваться в DaData
 * и получить там токен, затем создать модуль /src/.env.js
 * и ввести в нём этот токен как переменную DADATA_TOKEN.
 * После регистрации в DaData узнать свой токен можно по ссылке:
 * https://dadata.ru/profile/#info
 */

export const getInfoByInn = async (inn, setData) => {
  try {
    const response = await fetch(DADATA_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + DADATA_TOKEN
      },
      body: JSON.stringify({
        query: inn,
      }),
    });

    if (!response.ok) {
      throw new Error(
        'При запросе данных по ИНН что-то пошло не так. ' +
        'Скорее всего, в модуле getInfoByTin не был введён токен DaData'
      );
    }

    const result = await response.json();
    const data = result?.suggestions[0]?.data;
    const filteredData = {
      fullName: data?.name?.full_with_opf || 'Н/Д',
      shortName: data?.name?.short_with_opf || 'Н/Д',
      registrationDate: data?.state?.registration_date || 'Н/Д',
      ogrn: data?.ogrn || 'Н/Д',
    };
    
    setData(filteredData);
  } catch(error) {
    alert(error);
  } finally {
    // Добавил бы здесь остановку спиннера, но не нашёл его в Фигме
  }
};