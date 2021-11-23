import React from 'react';

import Button from 'element/Button';

export default function Mostpicked(props) {
  return (
    <section className="mostPicked">
      <div className="container py-5" ref={props.refMostPicked}>
        <h4 className="mb-4">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((item, index) => {
            return (
              <div key={`mostpicked-${index}`} className={`item column-4${index === 0 ? ' row-2' : ' row-1'}`}>
                <div className="card">
                  <img src={item.imageUrl} className="card-img" alt={item.name} />
                  <div className="card-img-overlay">
                    <div className="tag px-5 py-2 text-white">
                      <span className="fw-bold">
                        {' '}
                        ${item.price} <span className="fw-light">per {item.unit}</span>
                      </span>
                    </div>
                    <div className="meta-wrapper ps-4 pb-3">
                      <Button type="link" className="d-block" href={`/properties/${item.id}`}>
                        <h5 className="m-0">{item.name}</h5>
                      </Button>
                      <span className="fw-lighter">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
