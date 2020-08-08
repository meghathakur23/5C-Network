import React from 'react';
import { Fragment } from 'react';
import { withRouter } from 'react-router-dom'

import "./index.css"
function Repositories(props) {
  const { gitRepos, history } = props

  return (
    <Fragment>
      <br/>
      <br/>
        <div className="container">
        <div className="row">
          {
            gitRepos?.map((repo,index)=>{
              return(
                <div className="col-sm-6 mb-4" key={index} onClick={() => {
                  history.push({pathname: '/repository', repo})
                }}>
                  <div className="d-flex justify-content-start hover p-2">
                    <div className="mr-2">
                      <img  src={repo.owner.avatar_url} alt="avatar" className="avatar rounded-circle"/>
                    </div>
                    <div>
                      <div className="d-flex justify-content-start">
                        <a className="repotitle">{repo.name}</a>
                        <img alt="Officialtick" className="officailtick" src="./images/Officialtick.jpeg" />
                      </div>
                      <span className="describe">{repo.description == null ? "There is no description": repo.description}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>
    </Fragment>
       
  );
}

export default withRouter(Repositories)
