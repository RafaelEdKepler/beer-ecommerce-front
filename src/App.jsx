import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyles } from './styles/global'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nextProvider } from 'react-i18next'
import i18n from '../i18n/18n'

function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Router />
            <GlobalStyles />
          </BrowserRouter>
        </I18nextProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
