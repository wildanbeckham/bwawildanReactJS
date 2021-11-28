import React from 'react';
import Button from 'element/Button';
import IconText from 'parts/iconText';

export default function Footer() {
  return (
    <footer className="border-top">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-3 me-5">
            <IconText />
            <p className="text-secondary pt-4">We kaboom your beauty holiday instantly and memorable.</p>
          </div>
          <div className="col-lg">
            <h6 className="fw-normal">For Beginners</h6>
            <ul className="list-group list-group-flush pt-3">
              <li className="list-group-item border-0 px-0 py-1">
                <Button className="text-decoration-none" type="link" href="/regist">
                  New Account
                </Button>
              </li>
              <li className="list-group-item border-0 px-0 py-1">
                <Button className="text-decoration-none" type="link" href="/booking">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item border-0 px-0 py-1">
                <Button className="text-decoration-none" type="link" href="/payment">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <h6 className="fw-normal">Explore Us</h6>
            <ul className="list-group list-group-flush pt-3">
              <li className="list-group-item border-0 px-0 py-1">
                <Button className="text-decoration-none" type="link" href="/career">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item border-0 px-0 py-1">
                <Button className="text-decoration-none" type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item border-0 px-0 py-1">
                <Button className="text-decoration-none" type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-lg">
            <h6 className="fw-normal">Connect Us</h6>
            <ul className="list-group list-group-flush pt-3">
              <li className="list-group-item border-0 px-0 py-1">
                <Button isExternal className="text-decoration-none" type="link" href="mailto:support@staycation.id">
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item border-0 px-0 py-1">
                <Button isExternal className="text-decoration-none" type="link" href="tel:+622122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item border-0 px-0 py-1">
                <span className="text-secondary">Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row py-5 pb-4">
          <div className="col text-center">
            <p className="text-secondary">Copyright 2019 • All rights reserved • Staycation</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
