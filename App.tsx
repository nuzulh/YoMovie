import Toast from 'react-native-toast-message';
import { Routes } from './src';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <Toast position='bottom' />
    </QueryClientProvider>
  );
}
