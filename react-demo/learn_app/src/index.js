import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App,{Add,Sub,OyDiv,Add2} from './App';
import MyDiv,{Subs} from './newcomp';
import Display,{DiplayAll,KeyValue} from './variable.js';
import ApiFetch,{Covid19,NewFunc} from './api.js';
import ParentComponent from "./ParentComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import GroupExample from "./Cards";
import Pincode from "./pincode"
import Demo from "./assignment2";


ReactDOM.render(
<React.StrictMode>
{/* <App/>
<Add/>
<Sub/>
<MyDiv/>
<OyDiv/>
<Add2/>
<Subs/>
<Display/>
<DiplayAll/>
<KeyValue/>
<NewFunc/>
<ApiFetch/>
<Covid19/>
<ParentComponent/> */}
{/* <GroupExample/> */}
{/* <Pincode/> */}
<Demo/>
</React.StrictMode>, document.getElementById('root'));