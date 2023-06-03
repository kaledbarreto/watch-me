import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import { MainRoutes } from "./routes";

export function App() {
  const SECOND_IN_MS = 1_000;
  const MINUTE_IN_MS = 60 * SECOND_IN_MS;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 30 * MINUTE_IN_MS,
        staleTime: 10 * MINUTE_IN_MS,
        retry: false,
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      {/* <AppProvider></AppProvider> */}
      <MainRoutes/>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
      <Toaster/>
    </QueryClientProvider>
  );
}