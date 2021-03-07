import React, {Fragment} from 'react';
import Row from '../../components/mentor/utils/Row'
import StatRow from '../../components/mentor/utils/StatRow';


class DashMentor extends React.Component {
    
    render() {

        return (
            <Fragment>
                <div id="app">
                    <div className="main-wrapper">
                        <div className="navbar-bg"></div>
                        <div className="main-content">
                            <section className="section">
                                <div className="section-header">
                                    <h1>Dashboard</h1>
                                </div>

                                <div className="section-body">
                                    <div className="row">
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4>Séances en cours / Prochaines</h4>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                        <table className="table table-striped table-md">
                                                            <tr>
                                                                <th>mentoré</th>
                                                                <th>service</th>
                                                                <th>type service</th>
                                                                <th>prix</th>
                                                                <th>date</th>
                                                            </tr>
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2021-05-04"}} />
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2023-05-04"}} />
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2021-03-04"}} />
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2021-03-08"}} />

                                                        
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-right">
                                                    <nav className="d-inline-block">
                                                        <ul className="pagination mb-0">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#" tabindex="-1">
                                                                    <i className="fas fa-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active">
                                                                <a className="page-link" href="#">1
                                                                    <span className="sr-only">(current)</span>
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">2</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">3</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h4>Séances passées</h4>
                                                </div>
                                                <div className="card-body p-0">
                                                    <div className="table-responsive">
                                                    <table className="table table-striped table-md">
                                                            <tr>
                                                                <th>mentoré</th>
                                                                <th>service</th>
                                                                <th>type service</th>
                                                                <th>prix</th>
                                                                <th>date</th>
                                                            </tr>
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2014-02-03"}} />
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2023-05-04"}} />
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2020-02-04"}} />
                                                           <Row data = {{mentee:"ali",service:"serv",typeService:"type",price :"34",date:"2020-03-04"}} />

                                                        
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="card-footer text-right">
                                                    <nav className="d-inline-block">
                                                        <ul className="pagination mb-0">
                                                            <li className="page-item disabled">
                                                                <a className="page-link" href="#" tabindex="-1">
                                                                    <i className="fas fa-chevron-left"></i>
                                                                </a>
                                                            </li>
                                                            <li className="page-item active">
                                                                <a className="page-link" href="#">1
                                                                    <span className="sr-only">(current)</span>
                                                                </a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">2</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">3</a>
                                                            </li>
                                                            <li className="page-item">
                                                                <a className="page-link" href="#">
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews ">
                                        <div className="card mt-4 ">
                                            <div className="card-header">
                                                <h4>Statisque</h4>
                                            </div>
                                            <div className="card-body">
                                                <ul
                                                    className="list-unstyled user-details list-unstyled-border list-unstyled-noborder">
                                                   <StatRow data = {{service:"serv jkalkj adkfak",typeService : "tp",nbrSeance:3, earning : +2000,rating:4,nbrRating:344}}/>
                                                   <StatRow data = {{service:"serv",typeService : "tp",nbrSeance:3, earning : +2000,rating:4,nbrRating:344}}/>
                                                   <StatRow data = {{service:"serv",typeService : "tp",nbrSeance:3, earning : +2000,rating:4,nbrRating:344}}/>
                                                   <StatRow data = {{service:"serv",typeService : "tp",nbrSeance:3, earning : +2000,rating:4,nbrRating:344}}/>

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                       
                    </div>
                </div>

            </Fragment>
        )
    }
}

export default DashMentor;
