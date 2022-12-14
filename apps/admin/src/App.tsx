import { preflight, pretendard } from '@triprint-ui/core';
import { Button } from '@triprint-ui/components';

interface AppProps {}

const App = ({}: AppProps) => {
  preflight();
  pretendard();

  return (
    <div>
      Admin
      <Button as="button" css={{}} colorScheme="primaryContainer">
        버튼
      </Button>
    </div>
  );
};

export default App;
