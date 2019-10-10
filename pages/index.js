import React from 'react';
import Head from 'next/head';

import Projects from './projects';

const Home = () => (
  <>
    <Head>
      <title>Free Wifi</title>
      <link rel='icon' href='/favicon.ico' />
      <link href='/static/styles/freewifi.css' rel='stylesheet' />
    </Head>

    <main>
      <h1 className='title'>Free Wifi</h1>
      <p className='desc'>
        Free Wifi is a collaborative practice seeking to explore the intersection between physical and digital arts.
      </p>
      <p>
        We seek to create intelligent dialogues about digital technologies and explore new forms of practice through curation and publishing, all with a continued focus on collaboration.
      </p>
      <Projects />
    </main>
  </>
);

export default Home;
