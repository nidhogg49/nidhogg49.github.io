import * as React from 'react';
import Section from './components/section/Section';
import Layout from './components/Layout/Layout'

const App = () => {
    return (
        <div>
            <Layout>
                <Section title="Главная" />
                <Section title="Обо мне" />
                <Section title="Роад мап" />
                <Section title="Контакты" />
            </Layout>
        </div>
    )
}


export default App;