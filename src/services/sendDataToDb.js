export const sendDataToDb = async (data) => {
  try {
    alert(
      'Сохранено! Откройте консоль, чтобы посмотреть данные, '
      + 'отправленные на сервер'
    );
    console.log(data);
  } catch (error) {
    // Некоторая логика обработки ошибок
  } finally {
    // Добавил бы здесь остановку спиннера, но не нашёл его в Фигме
  }
};