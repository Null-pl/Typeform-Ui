import React from 'react';

import GlobalStyles from './styles/global'

import { Main, Section, Sticky } from './styles/Index'

import FirstAndSecond from './Components/FistandSecond'

import Header from './Components/Header';

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyles />
      <Main style={{ height: '1910vh' }}>
      <Header />

        <Section style={{ height: '72.7%' }}>
         <FirstAndSecond />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third " />
        </Section>

        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>

      </Main>

    </>
  );
}
export default App
