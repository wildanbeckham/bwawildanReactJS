import React from 'react';

import Button from 'element/Button';

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="category" key={`category-${index1}`}>
        <div className="container">
          <h4 className="mb-3 fw-medium">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">There is no property at this category</div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <div className="item column-3 row-1 pb-5" key={`category-${index1}-item-${index2}`}>
                    <div className="card">
                      <img src={item.imageUrl} className="card-img" alt={item.name} />
                      {item.isPopular && (
                        <div className="card-img-overlay">
                          <div className="tag px-4 py-2 text-white small fw-normal">
                            Popular <span className="fw-lighter">Choice</span>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="meta-wrapper pt-3">
                      <Button type="link" className="d-block text-dark" href={`/properties/${item._id}`}>
                        <h6 className="m-0">{item.name}</h6>
                      </Button>
                      <span className="fw-lighter text-secondary small">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    );
  });
}
