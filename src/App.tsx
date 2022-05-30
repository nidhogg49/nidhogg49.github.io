import * as React from 'react';
import Section from './components/Section/Section';
import Layout from './components/Layout/Layout';
import StarSpace from './components/StarSpace/StarSpace';

const App = () => {
    return (
        <Layout>
            <Section title="Главная">
                <StarSpace></StarSpace>
            </Section>
            <Section title="Обо мне" />
            <Section title="Роад мап" />
            <Section title="Контакты" />
        </Layout>
    )
}


export default App;