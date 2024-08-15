const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav id="sidebar" className="col-md-2 d-md-block bg-primary sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  <i className="bi bi-house-door"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-people"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bar-chart-line"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-gear"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Welcome back, Ally!</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="bi bi-bell"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="bi bi-person"></i></a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container-fluid mt-3">
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">$143,432</h5>
                    <p className="card-text">Your bank balance</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">7</h5>
                    <p className="card-text">Employees working today</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">$3,286.00</h5>
                    <p className="card-text">This weeks card spending</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-body">
                    <canvas id="myChart"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Your To-Do list</h5>
                    <ul className="list-group">
                      <li className="list-group-item">Run payroll</li>
                      <li className="list-group-item">Review time off request</li>
                      <li className="list-group-item">Finish onboarding Tony</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
