import { useMemo } from 'react';
import { useBudget } from '../hooks/useBudget';
import { ExpenseDetail } from './ExpenseDetail';

export const ExpenseList = () => {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter((elem) => elem.category === state.currentCategory)
    : state.expenses;

  const isEmpty = useMemo(() => state.expenses.length === 0, [state]);
  return (
    <div className='mt-10'>
      {isEmpty ? (
        <p className='text-gray-600 text-2xl font-bold'>No hay Gastos</p>
      ) : (
        <>
          <p className='text-gray-600 text-2xl font-bold my-5'>
            Listado de Gastos
          </p>
          {filteredExpenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense}></ExpenseDetail>
          ))}
        </>
      )}
    </div>
  );
};
