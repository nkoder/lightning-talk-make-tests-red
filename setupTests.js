import Enzyme from 'enzyme';
import EnzymeReact16Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeReact16Adapter() });

