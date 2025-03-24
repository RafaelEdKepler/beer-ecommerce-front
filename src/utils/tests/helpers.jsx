import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { defaultTheme } from "../../styles/theme/default";
import i18n from "../../../i18n/18n";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

export const renderWithProviders = (children) => render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={defaultTheme}>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  </QueryClientProvider>
)