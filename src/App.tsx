import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from './components/Layout';
import Wordle from "./project-wordle/components/Wordle";

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Layout>
        <Wordle />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
