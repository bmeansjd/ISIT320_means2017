import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from './ElfDebugEnzyme';
import './temp-poly-fills';{


describe('jest test', function() {

    class App extends Component
        constructor() {
            super();
            this.state = {
                nine: '0'
            }
        }

    }

//configure({ adapter: new Adapter() });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
    });

    describe('rest basic tests', function () {

        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App/>, div);
        });

        it('renders initial value of paragraph with state.nine', () => {
            const wrapper = shallow(<App/>);
            const nineSign = <p className="App-intro">file: unknown</p>;
            ElfDebugEnzyme.getLast(wrapper, 'p', true);
            expect(wrapper.contains(nineSign)).toEqual(true);
        });
    });

    describe('rest basic tests', function () {
        it('renders and reads H1 text', () => {
            const wrapper = shallow(<App/>);
            const welcome = <h2>Welcome to React</h2>;
            expect(wrapper.contains(welcome)).toEqual(true);
        });
    });

    it('renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const nineSign = <p className="App-intro">file: url-file.js</p>;
        wrapper.find('#getNine').simulate('click');
        expect(wrapper.contains(nineSign)).toEqual(true);

        }):


}