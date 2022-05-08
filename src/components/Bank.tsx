import React, { useReducer, useState } from "react";

const initialState = {
  savings: 10000
};

type State = {
  savings: number;
};

type Action =
  | { type: "DEPOSIT"; payload: number }
  | { type: "WITHDRAW"; payload: number };

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "DEPOSIT":
      return {
        ...state,
        savings: state.savings + action.payload
      };
    case "WITHDRAW":
      return {
        ...state,
        savings: state.savings + action.payload
      };
    default:
      return state;
  }
};

export const Bank: React.VFC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [amount, setAmount] = useState<number>(0);

  const onDeposit = (amount: number) => {
    dispatch({ type: "DEPOSIT", payload: amount });
  };

  const onWithdraw = (amount: number) => {
    dispatch({ type: "WITHDRAW", payload: amount });
  };

  return (
    <div>
      <h4>{state.savings}円</h4>
      <input
        type="number"
        value={amount}
        onChange={(e) => {
          setAmount(Number(e.target.value));
        }}
      />
      <div>
        <button onClick={() => onDeposit(amount)}>預け入れ</button>
        <button onClick={() => onWithdraw(amount)}>引き出し</button>
      </div>
    </div>
  );
};
