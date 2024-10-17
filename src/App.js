import "./App.css";
import Header from "./components/Header";
import Features from "./components/sideBar";
import { AnalyticsBrowser } from '@segment/analytics-next'

export const analytics = AnalyticsBrowser.load({ writeKey: 'G3eACTGRiWKVSH1TXnYKOJFAvU5nkWf8' })

function App() {
  return (
    <div>
      <Header />
      <Features />
    </div>
  );
}

export default App;
