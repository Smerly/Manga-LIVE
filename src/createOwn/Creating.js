import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import CreatingForm from '../CreatingForm';
const store = createStore(reducers);

function Creating() {
	<Provider store={store}>
		<CreatingForm />
	</Provider>;
}
export default Creating;
