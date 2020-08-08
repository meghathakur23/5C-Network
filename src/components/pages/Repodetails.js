import React from 'react';

import Repository from '../repository/index';

const CURRENT_ITEM = 'current_item'

function Repo(props) {
  const [data, setData] = React.useState(null)

  const { repo } = props.location

  React.useEffect(() => {
    const sessionData = sessionStorage.getItem(CURRENT_ITEM)

    if (repo) {
      setData(repo)
      sessionStorage.setItem(CURRENT_ITEM, JSON.stringify(repo))
    } else if(sessionData) {
      setData(JSON.parse(sessionData))
    } else  {
      props.history.push('/') 
    }
  },[])

  if (!data) {
    return (
      <div />
    )
  }

  return (
      <div className="container">
        <Repository repo={data} />
      </div>
  );
}

export default Repo
