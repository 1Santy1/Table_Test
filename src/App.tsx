import './App.scss';
import React from 'react';
import Header from './components/Header/Header.tsx';
import Name from './components/Name_project/name_project.tsx';
import List from './components/List/list.tsx';
import Table from './components/Table/table.tsx';

function App() {
  return (
    <div className="App">
        <Header/>
        <Name/>
        <List/>
        <Table/>
    </div>
  );
}

export default App;
