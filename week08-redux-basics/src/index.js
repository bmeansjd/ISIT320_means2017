import spokesman from './spokesman';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import FakeRedux from './FakeRedux';

let store = createStore(spokesman);
ReactDOM.render(
    <div>
        <Provider store={store}>
            <div>
                <App />
                <FakeRedux/>
            </div>
        </Provider>
    </div>
    , document.getElementById('root'));

/*ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/
