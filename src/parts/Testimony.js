import React from 'react';

import Star from 'element/Star';
import Button from 'element/Button';

export default function Testimony({ data }) {
  return (
    <section className="testimony my-5">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-4 align-item-center">
            <img src={data.imageUrl} alt="Testimonial Image" className="img-fluid" />
          </div>
          <div className="col-lg-6 ps-5 my-auto">
            <h4 className="pb-4">{data.name}</h4>
            <Star value={data.rate} width={35} height={35} spacing={4}></Star>
            <h3 className="fw-light lh-base pt-1">{data.content}</h3>
            <span className="text-secondary fw-light">
              {data.familyName} {data.familyOccupation}
            </span>
            <div>
              <Button className="btn px-5 shadow mt-3" isPrimary type="link" href={`/testimonial/${data._id}`}>
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
