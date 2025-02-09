import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Flex, AppShell, Burger, Button, Paper, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import TextComp from './comp/Texts.tsx';
import ButtonComp from './comp/Buttons.tsx';
import { IconBell } from '@tabler/icons-react';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

<MantineProvider>
  <React.StrictMode>
    <div className="App">
	 <AppShell
      header={{ height: 130 }}
      navbar={{ width: 300, breakpoint: 'sm'}}
      padding="md"
      style={{ backgroundColor: '#161519' }}>
      <AppShell.Header style={{ backgroundColor: '#B280FE' }}>
        <Flex justify="space-between" align="center" style={{padding: '10px 20px'}}>  
        <div className="logoText">InStories</div> 
        <Button className="logoButton" variant="transparent" color="#FFF" size="md">main</Button>
        <Button className="logoButton" variant="transparent" color="#FFF" size="md"><IconBell stroke={1} width="48" height="48" color="white"/></Button>
        </Flex>      
      </AppShell.Header>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
    </div>
  </React.StrictMode>
</MantineProvider>
);
