import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App,{Add,Sub,OyDiv,Add2} from './App';
import MyDiv,{Subs} from './newcomp';


ReactDOM.render(
<React.StrictMode>
<App/>
<Add/>
<Sub/>
<MyDiv/>
<OyDiv/>
<Add2/>
<Subs/>
</React.StrictMode>, document.getElementById('root'));