import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import './rt.css';

const RatioClub = () => (
  <>
    <Head>
      <title>Ratio Club</title>
    </Head>
    <div>
      <img src='/static/ratioclub/RT-banner-web.png' style={{ marginTop: '2em' }} />
      <h1>Welcome to Ratio Club!</h1>
      <p>
        Ratio Club was a free ten-week workshop program exploring computation as creative practice. Participants took part in a series
        of sessions blending practical tutorials with critical discussions.
    </p>
      <p>
        The workshops were structured to introduce novice coders to basic programming concepts, algorithmic approaches to digital
        design and modelling, and strategies for employing these in artistic practice.
    </p>
      <p>
        The sessions were targeted towards creative practitioners who have limited prior coding experience, but who may have a broad
        array of other technical skills and experience.
    </p>
      <h3>
        RATIO CLUB SYLLABUS
    </h3>
      <p>
        <table>
          <tr>
            <td>
              <Link href='/ratioclub/workshops/week_0'>
                Week 0: HTML & JavaScript
            </Link>
            </td>
            <td>
              <b>
                Nov 1st
            </b>
            </td>
            <td>
              Elements, Tags & Variables
          </td>
          </tr>
          <tr>
            <td>
              <Link href='/ratioclub/workshops/week_1'>
                Week 1: [ Shapes, Colours, Properties, Functions ]
            </Link>
            </td>
            <td>
              <b>
                Nov 8th
            </b>
            </td>
            <td>
              Functions, P5.js & Objects
          </td>
          </tr>
          <tr>
            <td>
              <Link href='/ratioclub/workshops/week_2'>
                Week 2: Animation & Repetition, Interaction & Repetition
            </Link>
            </td>
            <td>
              <b>
                Nov 15th
            </b>
            </td>
            <td>
              Basics of Animation, If Statements & For Loops, Basics of Interaction
          </td>
          </tr>
          <tr>
            <td>
              <Link href='/ratioclub/workshops/week_3'>
                Week 3: Hark! Event Listeners
            </Link>
            </td>
            <td>
              <b>
                Nov 22nd
            </b>
            </td>
            <td>
              Events, Callback Functions & Event Targets
          </td>
          </tr>
          <tr>
            <td>
              <Link href='/ratioclub/workshops/week_4'>
                Week 4: Experiments in Structure
            </Link>
            </td>
            <td>
              <b>
                Nov 29th
            </b>
            </td>
            <td>
              DOM manipulation, Asynchronicity & Local Servers
          </td>
          </tr>
          <tr>
            <td>
              <Link href='/ratioclub/workshops/week_5'>
                Week 5: Small Parts & Modular Designs
            </Link>
            </td>
            <td>
              <b>
                Dec 6th
            </b>
            </td>
            <td>
              Node.js, Generative Art & Algorithms
          </td>
          </tr>
          <tr>
            <td>
              <Link href='/ratioclub/workshops/week_6'>
                Week 6: 3D
            </Link>
            </td>
            <td>
              <b>
                Dec 13th
            </b>
            </td>
            <td>
              Three.js & 3D modelling
          </td>
          </tr>
          <tr>
            <td>
              Week 7: Github & Project Ideas
          </td>
            <td>
              <b>
                Dec 20th
            </b>
            </td>
            <td>
              Discussing what we want to make.
          </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <b>
                Christmas Break
            </b>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              Week 8: Project sharing & troubleshooting
          </td>
            <td>
              <b>
                Jan 10th
            </b>
            </td>
            <td>
              Showing our work so far.
          </td>
          </tr>
          <tr>
            <td>
              <Link href='/ratioclub/showcase'>
                Week 9: Final Showcase
            </Link>
            </td>
            <td>
              <b>
                Jan 19th
            </b>
            </td>
            <td>
              Showing our creations to the world.
          </td>
          </tr>
        </table>
      </p>
      <p>
        For all enquiries, please contact Alisa Blakeney at alisa@freewifi.fyi
    </p>
      <footer>
        <h6 class='serif'>
          This project has been assisted by the Australian Government through the Australia Council for the Arts, its arts funding
          and advisory body.
        <br />
          <br /> Ratio Club is a partnership between Free Wifi and the always awesome Maker + Co.
      </h6>
        <img src='/static/ratioclub/maker-logo.png' class='maker' />
      </footer>
    </div>
  </>
);

export default RatioClub;
