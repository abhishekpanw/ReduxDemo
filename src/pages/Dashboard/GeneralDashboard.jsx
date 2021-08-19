import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { getCMS } from '../../redux/cms/cms.action';

function GeneralDashboard() {

  const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(getCMS());
  

  
  }, [])

  return (
    <div className="main-content">
    <section className="section">
      <div className="section-header">
        <h1>Dashboard</h1>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-primary">
              <i className="far fa-user"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Total Admin</h4>
              </div>
              <div className="card-body">10</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-danger">
              <i className="far fa-newspaper"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>News</h4>
              </div>
              <div className="card-body">42</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-warning">
              <i className="far fa-file"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Reports</h4>
              </div>
              <div className="card-body">1,201</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
          <div className="card card-statistic-1">
            <div className="card-icon bg-success">
              <i className="fas fa-circle"></i>
            </div>
            <div className="card-wrap">
              <div className="card-header">
                <h4>Online Users</h4>
              </div>
              <div className="card-body">47</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
       
      
      </div>
      
     
   </section>
  </div>
  )
}



export default GeneralDashboard;
