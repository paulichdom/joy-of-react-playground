import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from './components/Layout';
import PlanSelectionContainer from './components/PlanSelectionContainer';

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Layout>
        <PlanSelectionContainer />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
