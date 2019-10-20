import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import runThreeScene from '../../../components/scene';

import './showcase.css';

const Showcase = () => {
  const threeRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => (threeRef && menuRef) && runThreeScene(threeRef, menuRef));

  return (
    <>
      <Head>
        <title>Ratio Club Showcase</title>
        <meta charset="UTF-8" />
        <meta name="description" content="Ratio Club was a free ten-week workshop program exploring computation as creative practice." />
        <meta name="author" content="HPM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="three" ref={threeRef} />
      <div id="menu" ref={menuRef}>
        <h2 />
        <h3 />
        <p />
        <a />
      </div>
    </>
  );
}

export default Showcase;
