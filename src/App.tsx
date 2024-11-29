import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from './components/Layout';
import ComposeTweet from "./components/ComposeTweet";

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Layout>
        <ComposeTweet maxChars={100} handleSubmit={(message) => {
          alert('You submitted: ' + message);
        }} />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
