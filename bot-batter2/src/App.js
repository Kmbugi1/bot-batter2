import BotCollections from './components/BotCollections';
import YourBotArmy from './components/YourBotArmy';

function App() {
  return (
    <div>
      <div id="wartime">
        <h1 id="header">WAR-TIME</h1>
      </div>
      <YourBotArmy bots={[]}/>
      <BotCollections />
      {/* <Routes>
        <Route path="/bots" element={<BotCollection/>} />
      </Routes> */}
    </div>

  );
}

export default App;
