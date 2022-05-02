import React from 'react'
import { Main } from './components/main/Main'
import { Sidebar } from './components/Sidebar/Sidebar'
import { useWindowSize } from './hooks/useWindowSize'

export const JournalScreen = () => {

    const { width } = useWindowSize()

    const a = true

    return (
        <main className='main__container' >
            {/*
                width <= 767 && !a
                    ?
                    <aside className="aside__container">
                        <Sidebar />
                    </aside>
                    :
                    <>
                        <aside className="aside__container">
                            <Sidebar />
                        </aside>
                        <section className="section__container">
                            <Main />
                        </section>
                    </>
    */}
            <aside className="aside__container">
                <Sidebar />
            </aside>
            <section className="section__container">
                <Main />
            </section>
        </main>
    )
}
