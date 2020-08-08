import React, { Fragment } from 'react';

import Navbar from "../Appbar/index.js";
import Repositories from '../Allrepo';

const KEY_LIST = Object.freeze({
  ID: 'id',
  NAME: 'name',
  HTML_URL: 'html_url',
  DESCRIPTION: 'description',
  CREATED_AT: 'created_at',
  OPEN_ISSUES: 'open_issues',
  WATCHERS: 'watchers',
  OWNER: 'owner'
})

const OWNER_KEY_LIST = Object.freeze({
  ID: 'id',
  AVATAR_URL: 'avatar_url',
  HTML_URL: 'html_url',
  TYPE: 'type',
  SITE_ADMIN: 'site_admin'
})

export default function Home() {
  const [gitData, setGitData] = React.useState();

  React.useEffect(() => {
    fetch('https://api.github.com/users/mralexgray/repos')
      .then(results => results.json())
      .then(data => {
        const filteredData = []
        data.forEach(element => {
          const obj = {}
          Object.keys(KEY_LIST).forEach(item => {
            obj[KEY_LIST[item]] = element[KEY_LIST[item]]
            if (KEY_LIST[item] === KEY_LIST.OWNER) {
              const childObj = {}
              Object.keys(OWNER_KEY_LIST).forEach(child => {
                childObj[OWNER_KEY_LIST[child]] = element[KEY_LIST[item]][OWNER_KEY_LIST[child]]
              })
              obj[KEY_LIST[item]] = childObj
            }
          })
          filteredData.push(obj)
        });
        setGitData(filteredData)
      });
  }, []);

  return (
    <Fragment>
          <Navbar />
          <Repositories gitRepos={gitData} />
    </Fragment>
  );
}
