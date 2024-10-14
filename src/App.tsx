import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from './components/Layout';
import ModalContainer from './components/Modal/ModalContainer';

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Layout>
        <ModalContainer />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
