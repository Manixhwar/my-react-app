import React from 'react';
import '../styles/navbar.css';

const CountrySelectionLayer = () => {
  return (
    <div className="c-country-selection-layer" data-cookie="country" data-cookie-value="in" data-cookie-validity="365" data-cookie-path="/" style={{ display: 'block', height: '85px' }}>
      <div className="c-country-selection-layer--container">
        <div className="l-grid">
          <div className="l-grid">
            <div className="c-country-selection-layer--flag">
              <span className="flag-icon flag-icon-in"></span>
            </div>
            <div className="c-country-selection-layer--copy-container">
              <span className="c-country-selection-layer--copy">You are in</span>
              <span className="c-country-selection-layer--copy">
                <strong>&nbsp;India</strong>
              </span>
            </div>
          </div>
          <div className="l-grid l-grid--w-100pc-m-s l-grid--w-100pc-s-l l-grid--w-100pc-s-m l-grid--w-100pc-s l-grid--w-reset-m">
            <div className="c-country-buttons">
              <div className="base-button js--country-selection-layer-close c--country-selection-layer-close js--cookie-set" tabIndex="0" data-tracking="{&quot;component&quot;:&quot;dhl/components/global/country-selection-layer&quot;,&quot;name&quot;:&quot;Stay on this site&quot;,&quot;topic&quot;:&quot;country selection layer&quot;}">
                <span>Stay on this site</span>
              </div>
              <span className="c-country-selection-layer--base-copy l-grid l-grid--w-100pc-s l-grid--center-s l-grid--middle-s l-grid--w-reset-m l-grid--left-m">or</span>
              <a href="/in-en/home/location-selector.html" className="base-button base-button--white" data-tracking="{&quot;component&quot;:&quot;dhl/components/global/country-selection-layer&quot;,&quot;name&quot;:&quot;Select a different country&quot;,&quot;topic&quot;:&quot;country selection layer&quot;}">
                <span>Select a different country</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySelectionLayer;

