import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Flex, AppShell, Burger, Button, Paper, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import TextComp from './comp/Texts.tsx';
import ButtonComp from './comp/Buttons.tsx';
import { IconBell } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import './index.css';


const MainApp: React.FC = () => {
    const [currentComponent, setCurrentComponent] = React.useState<string>('pers1');

    return (
        <AppShell
      header={{ height: 130 }} navbar={{ width: 645, breakpoint: 'sm'}}
      padding="md" style={{ backgroundColor: '#161519' }}>
      <AppShell.Header style={{ backgroundColor: '#B280FE' }}>
        <Flex justify="space-between" align="center" style={{padding: '10px 20px'}}>  
        <Burger hiddenFrom='sm' size='sm'/>
        <div className="logoText">InStories</div> 
        <Button className="logoButton" variant="transparent" color="#FFF" size="md">main</Button>
        <Button className="logoButton" variant="transparent" color="#FFF" size="md">back to book</Button>
        <Button className="logoButton" variant="transparent" color="#FFF" size="md"><IconBell stroke={1} width="48" height="48" color="white"/></Button>
        </Flex>      
      </AppShell.Header>
      <AppShell.Navbar p="md" style={{gap: "50px", backgroundColor: '#161519', marginTop: '50px'}}>
        <Button className="PersOpenButton">Name of the character {'>'} </Button>
        <Button className="PersOpenButton">Name of the character {'>'} </Button>
      </AppShell.Navbar>
      <AppShell.Main style={{ marginTop: '50px' }}>
        {currentComponent === "pers1" ? <Button className="PersOpenButton">Name of the character 11</Button> : <Button className="PersOpenButton">Name of the character 22</Button>}
      </AppShell.Main>
    </AppShell>
    );
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <MantineProvider>
        <React.StrictMode>
            <MainApp />
        </React.StrictMode>
    </MantineProvider>
);
