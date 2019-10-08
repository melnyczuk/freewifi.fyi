import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Projects = () => (
  <>
    <Head>
      <title>Free Wifi Projects</title>
      <link href='/static/styles/freewifi.css' rel='stylesheet' />
    </Head>
    <Link href='/projects'>
      <h2>Projects</h2>
    </Link>
    <Link href='/journal'>
      <h3>Free Wifi Journal</h3>
    </Link>
    <Link href='/ratioclub'>
      <h3>Ratio Club</h3>
    </Link>
    <Link href='/atree'>
      <h3>A Tree Grew Through My Window</h3>
    </Link>
  </>
);

export default Projects;