import React, { useState } from 'react';

function Home() {
    const [page, setPage] = useState(0);

    const Nav = () =>
        <div id='sidenav'>
            <button onClick={() => setPage(0)}>Home</button>
            <button onClick={() => setPage(1)}>Play</button>
            <button onClick={() => setPage(2)}>Collection</button>
            <button onClick={() => setPage(3)}>Rewards</button>
            <button onClick={() => setPage(4)}>Store</button>
        </div>

    const HomePage = () =>
        <div>Home</div>

    const PlayPage = () =>
        <div>Play</div>

    const CollectionPage = () =>
        <div>Collection</div>

    const RewardsPage = () =>
        <div>Rewards</div>

    const StorePage = () =>
        <div>Store</div>

    return (
        <div id="home">
            <Nav />
            {
                page === 1 ? <PlayPage /> :
                page === 2 ? <CollectionPage /> :
                page === 3 ? <RewardsPage /> :
                page === 4 ? <StorePage /> :
                <HomePage />
            }
        </div>
    );
}

export default Home;