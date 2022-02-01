import React from "react";

const TransactionForm = () => {
  return (
    <>
      <select name="transType" id="">
        <option value="incomes">Доходы</option>
        <option value="costs">Расходы</option>
      </select>
      <form action="">
        <label>
          День
          <input type="date" />
        </label>
        <label>
          Время
          <input type="time" />
        </label>
        <label>
          Категория
          <input value="еда" type="button" />
        </label>
        <label>
          Сумма
          <input type="text" placeholder="введите сумму" />
        </label>
        <label>
          Валюта
          <input value="UAH" type="button" />
        </label>
        <label>
          <input type="text" placeholder="коментарий" />
        </label>
      </form>
    </>
  );
};

export default TransactionForm;
