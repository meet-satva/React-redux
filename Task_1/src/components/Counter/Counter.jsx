import { increment, decrement, reset, setValue } from '../../redux/slices/counterSlice';
import { CounterUi } from '../../ui/antd.components';
import { useDispatch, useSelector } from 'react-redux';
import "./Counter.css";

function Counter() {
    const {Text} = CounterUi.Typography;
    const { count, previousValue } = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    const [api, contextHolder] = CounterUi.notification.useNotification();
    const openNotification = () => {
        api.open({
            title: 'Boom.... Count is Multiple of 10 !',
            showProgress: true,
        });
    };


    return (
        <>
            <div className="task1" style={{ textAlign: 'center' }}>
                <Text mark className="title">Counter App</Text><br />

                <Text mark className="subtitle" style={{ fontSize: '20px' }}>
                    create a complex counter with increment,
                    decrement, reset and set value functionality with history <br /> & show a pop-up whenever the count hits a multiple of 10. <br /> Use Redux for state management.
                </Text>
            </div>
            <div className="counter-container">
                {contextHolder}
                {count % 10 === 0 && <h1>{openNotification(true)}</h1>}

                <div className="result">
                    <CounterUi.Typography.Title level={2}>{count}</CounterUi.Typography.Title>
                </div>

                <div className="controls">
                    <CounterUi.Button type="primary" className="btn" onClick={() => dispatch(increment())}>+</CounterUi.Button>
                    <CounterUi.Button type="primary" danger className="btn" onClick={() => dispatch(decrement())}>-</CounterUi.Button>
                    <CounterUi.Button className="btn reset" onClick={() => dispatch(reset())}>Reset</CounterUi.Button>
                </div>

                <div className="input-wrapper">
                    <span>Set Value:</span>
                    <CounterUi.InputNumber min={0} max={100} defaultValue={0} onChange={(value) => dispatch(setValue(value))} />
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
}

export default Counter;