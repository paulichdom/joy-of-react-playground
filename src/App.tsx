import AsteriskDemo from './components/Asterisk/AsteriskDemo';
import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from './components/Layout';

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Layout>
        <AsteriskDemo />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
