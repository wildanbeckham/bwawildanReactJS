import React from 'react';

import imageHero from 'assets/img/hero/banner.png';
import iconCities from 'assets/img/icons/ic_cities.svg';
import iconTraveler from 'assets/img/icons/ic_traveler.svg';
import iconTreasure from 'assets/img/icons/ic_treasure.svg';

import Button from 'element/Button';

import formatNumber from 'utlilts/formatNumber';
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      // behavior: 'smooth',
    });
  }

  return (
    <section className="hero">
      <div className="container py-5">
        <div className="row align-item-center">
          <div className="col-lg-6">
            <h1 className="fw-bolder lh-base">
              Forget Busy Work, <br /> Start Next Vacation
            </h1>
            <p className="fw-light text-secondary py-3 w-50 lh-base">We provide what you need to enjoy your holiday with family. Time to make another memorable moments.</p>
            <Button className="btn px-5 shadow mb-5" isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>

            <div className="row py-4">
              <div className="col-auto me-4">
                <img width="36" height="36" src={iconTraveler} alt={`${props.data.travelers} Travelers`} />
                <h6 className="pt-2">
                  {formatNumber(props.data.travelers)}
                  <span className="text-secondary fw-light">travelers</span>
                </h6>
              </div>
              <div className="col-auto me-4">
                <img width="36" height="36" src={iconTreasure} alt={`${props.data.treasures} Travelers`} />
                <h6 className="pt-2">
                  {formatNumber(props.data.treasures)}
                  <span className="text-secondary fw-light">treasure</span>
                </h6>
              </div>
              <div className="col-auto">
                <img width="36" height="36" src={iconCities} alt={`${props.data.cities} Cities`} />
                <h6 className="pt-2">
                  {formatNumber(props.data.cities)}
                  <span className="text-secondary fw-light">cities</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img src={imageHero} alt="Room with couches" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
