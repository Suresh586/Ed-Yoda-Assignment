import ResponsiveAppBar from './components/Appbar';
import Main from './components/Main';
import "./App.css"

function App() {
  return (
    <div sx={{width: "1920px", padding:0}}>
    <ResponsiveAppBar/>
    <Main/>
    </div>
  );
}

export default App;
