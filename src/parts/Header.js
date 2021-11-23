import React from 'react';
import BrandIcon from 'parts/iconText';
import Button from 'element/Button';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? 'active' : '';
  };

  return (
    <header className="spasing-sm">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <BrandIcon />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${getNavLinkClass('/')}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/browse-by')}`}>
                <Button className="nav-link" type="link" href="/browse-by">
                  Browse By
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('/storie')}`}>
                <Button className="nav-link" type="link" href="/storie">
                  Stories
                </Button>
              </li>
              <li className={`nav-item ${getNavLinkClass('agents')}`}>
                <Button className="nav-link" type="link" href="agents">
                  Agents
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
