import { globalFonts, globalStyles } from '@triprint/ui';

interface AppProps {}

const App = ({}: AppProps) => {
  globalFonts();
  globalStyles();

  return <div>Admin</div>;
};

export default App;
