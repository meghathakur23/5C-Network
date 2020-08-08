import React from 'react';
import { Fragment } from 'react';


import "./index.css"
export default function Repositories({repo}) {
  localStorage.setItem("repo",JSON.stringify(repo))
  return (
    <Fragment>
      <br/>
      <br/>
        <div className="row">
            <div className="col-sm-5">
                <div className="d-flex justify-content-center">
                     <img  src={repo.owner.avatar_url} alt="logo" className="repoicon rounded-circle"/>
                </div>
                <div className="d-flex justify-content-start">
                        <img alt="Officialtick" className="officailtick mr-2" src="./images/Officialtick.jpeg" />
                        <span>verified by github</span>
                </div>
                <p className="text-secondary">{repo.owner.description}<a href="http://kjdk"> requirments for verifications.</a></p>
                <br/>
                <h4 className="text-black-50">Categories</h4>
                  <button className="tb pl-2 pr-2 m-1">Code review</button>
                  <button className="tb pl-2 pr-2  m-1">IDEs</button>
                  <button className="outline pl-3 pr-3 m-1">Free</button>
                  <button className="outline pl-3 pr-3 m-1">Paid</button>
                  <p></p>
            </div>

            <div className="col-sm-7"> 
              <p className="text-secondary">Application</p>
              <h2>{repo.name} </h2>
              <button className="btn green pl-4 pr-4 mb-3">Set up a plan</button><br/>
              <strong className="mb-3"><a href={repo.html_url} >{repo.name}</a> is the online IDE for GitHub</strong>
              <p className="mb-3">It launches a complete dev env</p>
              <p className="mb-3">Install this app and get your project prebuild, so you don't</p>
              <p className="mb-3">{repo.name} <strong> the first IDE that builds your project before</strong></p>
            </div>
            
        </div>
    </Fragment>
       
  );
}
