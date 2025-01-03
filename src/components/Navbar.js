const Navbar = () => {
    return `
       <nav class="navbar navbar-expand-lg navbar-light custom-bg sticky-top">
          <div class="container-fluid">
              <a class="navbar-brand" href="../../index.html">Umusaruro Hub</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse mainbar" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="../../index.html">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Market</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="../../About.html">About</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Contact</a>
                      </li>
                  </ul>
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                          <a class="nav-link" href="#">Login</a>
                      </li>
                  </ul>
              </div>
          </div>
       </nav>
    `;
};

export { Navbar };
