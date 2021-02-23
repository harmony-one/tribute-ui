import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

import {CenterLogo} from '../../components/logo';
import {NavLinks} from '../../components/Nav';
import FadeIn from '../../components/common/FadeIn';
import Wrap from '../../components/common/Wrap';

const MolochV3Cube = React.memo(() => {
  return (
    <div
      className="cube"
      data-testid="cube"
      data-aos="fade-up"
      data-aos-delay="150">
      <div className="cube__segment--top"></div>
      <div className="cube__segment--left"></div>
      <div className="cube__segment--right"></div>
    </div>
  );
});

export default function GetStarted() {
  /**
   * Their hooks
   */

  const history = useHistory();

  /**
   * Effects
   */

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 40,
      delay: 120,
      mirror: false,
      once: true,
    });
  }, []);

  return (
    <Wrap className="section-wrapper">
      <FadeIn>
        <header className="header">
          <CenterLogo />
        </header>

        <div className="landing">
          <div className="landing__subtitle">
            <p>For the ongoing development of Moloch v3</p>
          </div>

          <div className="landing__img">
            <MolochV3Cube />
          </div>

          <div className="landing__button">
            {/* @todo Display Join button only if user is not a member */}
            <button
              className="button"
              onClick={() => {
                history.push('/join');
              }}>
              Join
            </button>
          </div>

          <div className="landing__navlinks">
            <NavLinks />
          </div>
        </div>
      </FadeIn>
    </Wrap>
  );
}
