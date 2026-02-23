import { useEffect } from "react";
import { increment, decrement, reset, setValue } from "../../redux/slices/counterSlice";
import { CounterUi } from "../../ui/antd.components";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store.ts";
import { toggleSwitch } from "../../redux/slices/counterSlice";
import "./Counter.css";

const Counter: React.FC = () => {
  const { Text } = CounterUi.Typography;

  const { count, previousValue } = useSelector(
    (state: RootState) => state.counter
  );

  const isDisable = useSelector(
    (state: RootState) => state.counter.switch
  );

  const dispatch = useDispatch<AppDispatch>();

  const [api, contextHolder] = CounterUi.notification.useNotification();

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      api.open({
        title: "Boom.... Count is Multiple of 10 !",
        showProgress: true,
      });
    }
  }, [count, api]);

  return (
    <>
      <div className="task1" style={{ textAlign: "center" }}>
        <Text mark className="title">Counter App</Text>
        <br />

        <Text mark className="subtitle" style={{ fontSize: "20px" }}>
          create a complex counter with increment,
          decrement, reset and set value functionality with history
          <br />
          & show a pop-up whenever the count hits a multiple of 10.
          <br />
          Use Redux for state management.
        </Text>
      </div>

      <div className="counter-container">
        {contextHolder}

        <div className="result">
          <CounterUi.Typography.Title level={2}>
            {count}
          </CounterUi.Typography.Title>
        </div>

        <div className="controls">
          <CounterUi.Button
            type="primary"
            disabled={isDisable}
            className="btn"
            onClick={() => dispatch(increment())}
          >
            +
          </CounterUi.Button>

          <CounterUi.Button
            type="primary"
            disabled={isDisable}
            danger
            className="btn"
            onClick={() => dispatch(decrement())}
          >
            -
          </CounterUi.Button>

          <CounterUi.Button
            className="btn reset"
            onClick={() => dispatch(reset())}
          >
            Reset
          </CounterUi.Button>

          <CounterUi.Button 
            className="btn toggle"
            onClick={() => dispatch(toggleSwitch())}
          >
            Lock
          </CounterUi.Button>
        </div>

        <div className="input-wrapper">
          <span>Set Value:</span>
          <CounterUi.InputNumber
            min={0}
            max={100}
            defaultValue={0}
            onChange={(value: number | null) => {
              if (value !== null) {
                dispatch(setValue(value));
              }
            }}
          />
        </div>

        <div className="history">
          {previousValue !== null && (
            <>
              <h3>History</h3>
              <p>Previous Value: {previousValue}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Counter;