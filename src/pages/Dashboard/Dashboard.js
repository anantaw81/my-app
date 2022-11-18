import React from 'react'
import Breadcrumb from './Breadcrumb'
import Sidebar from './Sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div>  
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Title</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-text"> Admin Panels </span>
        </div>
      </div>
    </nav>
    <div className="container-fluid">
      <div className="row flex-nowrap">
        
    <Sidebar/>
        <div className="col py-3">
    <Breadcrumb/>
      
         
          <div className="container-fluid">
            <section>
              <h2 className="my-4">Today Statistic</h2>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body border-start border-primary border-5">
                      <h5 className="card-title">Ruangan yang Dipinjam</h5>
                      <p className="h1 text-primary">7</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body border-start border-success border-5">
                      <h5 className="card-title">Menunggu approval</h5>
                      <p className="h1 text-success">4</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body border-start border-warning border-5">
                      <h5 className="card-title">Ruangan yang Tersedia</h5>
                      <p className="h1 text-warning">40</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="my-4">Past Statistic</h2>
              <div className="row">
                <div className="col-4">
                  <div className="card h-100">
                    <div className="card-body border-start border-dark border-5">
                      <h5 className="card-title">Ruangan yang Dipinjam</h5>
                      <h5 className="card-title">Per Minggu</h5>
                      <p className="h1 text-dark">120</p>
                    </div>
                  </div>
                </div>
                <div className="col-8">
                  <div className="card h-100">
                    <div className="card-body border-start border-dark border-5">
                      <div className="row">
                        <div className="col">
                          <h5 className="card-title">
                            Statistik Peminjaman Ruangan
                          </h5>
                          <h5 className="card-title">Per Minggu</h5>
                        </div>
                        <div className="col">
                          <div
                            className="chart-container"
                            style={{position: "relative"}}
                          >
                            <canvas
                              id="myChart"
                              width="400"
                              height="300"
                            ></canvas>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="my-4">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <div>Ruangan BD 1.2</div>
                        <div><i className="bi bi-info-circle"></i></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: "25%"}}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex mb-5 mt-1">
                        <span className="me-2">41</span>
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <p className="card-text align-self-end">50 book / week</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <div>Lab Programming 1</div>
                        <div><i className="bi bi-info-circle"></i></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: "25%"}}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex mb-5 mt-1">
                        <span className="me-2">20</span>
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <p className="card-text align-self-end">32 book / week</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-header">
                      <div className="d-flex justify-content-between">
                        <div>Ruangan BC 2.4</div>
                        <div><i className="bi bi-info-circle"></i></div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{width: "25%"}}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="d-flex mb-5 mt-1">
                        <span className="me-2">25</span>
                        <i className="bi bi-people-fill"></i>
                      </div>
                      <p className="card-text align-self-end">20 book / week</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default Dashboard