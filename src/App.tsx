import * as Tooltip from '@radix-ui/react-tooltip';
import Layout from './components/Layout';

import ComposeTweet from "./components/ComposeTweet";

function App() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Layout>
        <ComposeTweet
          handleSubmit={(message) => {
            alert('You submitted: ' + message);
          }}
          maxChars={100}
        />
      </Layout>
    </Tooltip.Provider>
  );
}

export default App;
