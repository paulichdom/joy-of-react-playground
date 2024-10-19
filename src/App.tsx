import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from './components/Layout';
import ToonieClicker from './components/ToonieClicker';

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Layout>
        <ToonieClicker />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
