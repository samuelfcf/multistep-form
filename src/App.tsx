import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { FormProvider } from './contexts/FormContext';
import { FormStep1 } from './pages/FormStep1';
import { FormStep2 } from './pages/FormStep2';
import { FormStep3 } from './pages/FormStep3';
import Reset from "./styles/GlobalStyle"

function App() {
  return (
    <>
      <Reset />
      <FormProvider>
        <BrowserRouter>
          <Route exact path="/" component={FormStep1} />
          <Route exact path="/step2" component={FormStep2} />
          <Route exact path="/step3" component={FormStep3} />
        </BrowserRouter>
      </FormProvider>
    </>
  );
}

export default App;
