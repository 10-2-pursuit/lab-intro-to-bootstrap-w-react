import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid align-items-end">
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="">
              Contact me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              About the author
            </a>
          </li>
          <li className="nav-item">
            Copyright <span className="fw-bold">MyTravelBlog</span>{" "}
            {new Date().getFullYear()}
          </li>
        </ul>
      </nav>
    </div>
  );
};

{
  /* <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul> */
}

export default Footer;
