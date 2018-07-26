import React from 'react';
import Loadable from 'react-loadable';
import Helmet from 'react-helmet';
const Loadin = () => {
    return <div>Loading.OOOOOOOOOOOO</div>;
}
const HeaderLoadable = Loadable({
    loader: () => import('../../components/Header1/Heaser1'),
    loading: Loadin,
  });
  

const home = () => {
    return(
        <div>
        <h1>My home component sdfsd dsf dsf sdf sdf sd</h1>
            <button onClick={()=> {console.log('button clicked!!')}}>Click me</button>
            <HeaderLoadable />
        </div>
    );
}

export default {component: home};