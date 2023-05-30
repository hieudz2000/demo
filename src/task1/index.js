import React, {  useState } from "react";
import { AlertError, AlertSuccess } from "../library/Alert";
import {Layout, Menu, Input, Collapse, Steps, Empty} from "antd";


import { PageHeader } from '@ant-design/pro-layout';




import * as PropTypes from "prop-types";
import { TwoColumn } from "../library/TwoColumn";
import icons from "../library/icons";
import  Link  from "../library/Link";
import { SBButton } from "../library/ssButon";
import colors from "../library/colors";
import  { useNavigate }  from "react-router-dom";

import '../library/app-v1.css';
import '../library/task2.css';



function Task2() {
    const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var uu =" AM";
    var today1 = new Date(),
    gio = today1.getHours()
    if(gio > 12){
        uu = " PM";
    }
    var today = new Date(),
     date = today.getHours()+"."+today.getMinutes()+uu+" | " +month[today.getMonth()]+' ' + today.getDate()+', '+today.getUTCFullYear() ;
    // const [time, setTime] = useState(date);
    const [load, setLoad] = useState(false);
    const [tren, setTren] = useState(true);
    const [duoi,setDuoi] = useState(true);
    const [back, setBack] = useState(false);
    const [button_save, setButton_save] = useState(false);
    const handeClick = ()=>{
        window.task2Scan = "block";
        window.none = "none";
        setLoad(true);
        setTimeout(()=>{
            window.baoPhu="block";
            window.scanContent = "block"
            window.Broken = 1;
            setTren(false);
            setButton_save(true);
            setLoad(false);
            setDuoi(false);
            setBack(true);
        }, 3000);
        setTimeout(()=>{
            setButton_save(false);
        }, 6000);
       
        // window.diem += 20; 
    }
    const openChat =()=>{
       
        $crisp.push(
            [
                "do",
                "chat:open"
            ]
        );
    }
    const xuli = ()=>{
        var c = document.getElementById('container-sb-1');
        if(c){
            var d = c.style.display="none";
        }
        
    }
    const history = useNavigate();
    const redirect = () =>{
        // history('/demo');
    }
    
    return(
        
        <PageHeader className="site-page-header T3-header">
            {
                xuli()
            }
            <div className="container-fluid header-desktop">
                  <div className='row test'>
                      <div className="logo-responsive col-2 task2 d-flex grap" onClick={()=>{
                            window.location = "https://searchpie.io/"
                        }}>
                          <Link  className="the_a" style={{width:'20%'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="47" height="47" viewBox="0 0 47 47" fill="none">
                            <rect width="47" height="47" fill="url(#pattern0)"/>
                            <defs>
                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_5552_2167" transform="scale(0.00333333)"/>
                            </pattern>
                            <image id="image0_5552_2167" width="300" height="300" xlinkHref="data:image/png;base64,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"/>
                            </defs>
                        </svg>
                            
                            </Link>
                            

                            <div
                               
                                onClick={redirect}
                                className="the_a2 mt-1"
                            >
                              <Link  style={{
                                    fontSize: 25,
                                    fontWeight: "bold",
                                    fontFamily: "Poppins",
                                    color: "#38383A",
                                }}>SearchPie</Link>  
                            </div>

                      </div>

                      <div className="col-3 seo-booster" style={{marginTop:"4px"}}>
                         <span style={{ marginTop:"4px" , fontSize: '14px', fontWeight: '500'}}>
                         <span style={{color:"gray",marginLeft:"3px", fontSize: '14px', fontWeight: '500'}}>{">"}</span> Broken links </span>
                      </div>
                      <div className="col-7">
                          <div className="thu">
                          <div className="dong1">
                              <p>Howdy, Demo </p>
                              <img src="https://thumbs.dreamstime.com/b/user-icon-vector-people-profile-person-illustration-business-users-group-symbol-male-195161330.jpg" className="avarta"/>
                        </div>
                          <div className="dong2">
                              <p className="need">Need help?</p>
                              <Link onClick={openChat} className="concac">Contact us!</Link>
                          </div>
                          </div>
                     </div>
                  </div>
              </div>
              <div className="container-fluid demo-mobile-header d-none">
                        <div className="row ">
                            <div className="logo-responsive col-6 task3 d-flex grap">
                                <Link to="/demo" className="the_a">
                                <svg xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink" width="47" height="47" viewBox="0 0 47 47" fill="none">
                            <rect width="47" height="47" fill="url(#pattern4)"/>
                            <defs>
                            <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_5552_2167" transform="scale(0.00333333)"/>
                            </pattern>
                            <image id="image0_5552_2167" width="300" height="300" xlinkHref="data:image/png;base64,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"/>
                            </defs>
                        </svg>

                                </Link>
                                <div
                                    
                                    onClick={(e) => {
                                        console.log("dd");
                                        // this.props.history.push("/demo");
                                    }}
                                    className="the_a2 name-app mt-1"
                                >
                                    <Link  style={{
                                        fontSize: 25,
                                        fontWeight: "bold",
                                        fontFamily: "Poppins",
                                        color: "#38383A",
                                    }} >SearchPie</Link> 
                                </div>
                              
                            </div>
                            <div className="col-9 mobile-header-today-seo" style={{textAlign:'end', marginTop:'4px'}}>
                                <span style={{ fontWeight: "bold" }}>
                            {"> "}  Broken links{" "}
                                </span>
                                <br></br>
                                <Link to="/demo" style={{textDecoration: "revert"}}><span style={{color:"#3490dc"}}>{"<"}</span>back</Link>
                            </div>
                            <hr></hr>
                        </div>
                      
                </div>
                <div className="center">
                    {/* { (tren || window.Broken == 1) ? ( */}
                    { (window.Broken == 0) ? (

                        <TwoColumn 
                            columnLeft={
                            icons.gears
                            }
                            columnRight={
                                <div>
                                    <div>
                                    <span style={{fontWeight: "bold"}}>Scan broken links on your site</span>
                                    </div>
                                   
                                    <div  className="errr">
                                    <AlertError  className="task2-error"
                                    message={"3 broken links have been detected"}
                                    />
                                    </div>
                                    <div className="content-broken-mobile">
                                        <p>http://demo.myshopify.com/products/error-1</p>
                                        <hr className="hr-top"/>
                                        <p>http://demo.myshopify.com/products/error-2</p>
                                        <hr className="hr-top"/>

                                        <p>http://demo.myshopify.com/products/error-3</p>
                                        <hr className="hr-top"/>
                                    </div>
                                    <div className="button-fix-it-now-broken">
                                        {/* className="fix_task2 save cololl" */}
                                      
                                            {/* <Button 
                                            className="fix_task2 save cololl"
                                            loading = {load}
                                            onClick={handeClick}
                                            > FIX IT NOW 
                                            </Button> */}
                                              {/* <SBButton
                                             
                                                color={
                                                    colors._color_green
                                                }
                                                loading = {load}
                                                onClick={handeClick}
                                            >
                                            </SBButton> */}
                                            <SBButton
                                                color ={colors._color_green}  
                                                loading = {load}  
                                                onClick = {handeClick}
                                            >
                                                FIX IT NOW
                                            </SBButton>
                                       
                                   
                                    </div>
                                </div>
                                

                            }
                        />
                
                    ):(
                        <TwoColumn 
                        className="hieudzzz"
                        columnLeft={
                        icons.gears
                        }
                        columnRight={
                            <div>
                                <span style={{fontWeight: "bold"}}>Scan broken links on your site</span>
                                <div className ="succ">
                                    <AlertSuccess message={"Great!There are no broken link on your site"}/>
                                </div>
                            </div>
                            

                        }
                    />
                       
                    )}
                </div>
            <div className=" re-direct"> 
                Report 
            </div>
           
                <div className="center dong2">
                    {(window.Broken == 0) ? (<Empty></Empty>):(
                        <div className="cotainer hieu2">
                           
                            <div className="row desktop-re-direct ">

                                <div className="col-4">
                                    <h1>Updated time</h1>
                                
                                    <p className="task2_content">{date}</p>
                                    <hr></hr>
                                    <p>{date}</p>
                                    <hr></hr>
                                    <p>{date}</p>
                                </div>
                                <div className="col-4">
                                    <h1>Link detected</h1>
                                

                                    <p className="task2_content">http://demo.myshopify.com/products/error-1</p>
                                    <hr></hr>
                                    <p>http://demo.myshopify.com/products/error-2</p>
                                    <hr></hr>
                                    <p>http://demo.myshopify.com/products/error-3</p>

                                </div>
                                <div className="col-4">
                                    <h1>Redirect to</h1>
                                
                                    <p className="task2_content">http://demo.myshopify.com</p>
                                    <hr></hr>
                                    <p>http://demo.myshopify.com</p>
                                    <hr></hr>
                                    <p>http://demo.myshopify.com</p>
                                </div>
                            </div>
                            <div className="row mobile-re-direct">
                                
                                <div className="col-4 mt-3">
                                    <h1>Updated time</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-6 mt-3">
                                    <p >{date}</p>
                               
                                </div>
                                <div className="col-4 mt-3">
                                    <h1>Link detected</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-12 content-brokenlink mt-3" >
                                    <p >http://demo.myshopify.com/products/error-1</p>
                                 
                                </div>
                                <div className="col-4 mt-3">
                                    <h1>Redirect to</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-12 content-brokenlink mt-3" >
                                <p >http://demo.myshopify.com</p>
                                
                                </div>
                                <hr></hr>
                            </div>
                         
                            <div className="row mobile-re-direct">
                                <div className="col-4 mt-3">
                                    <h1>Updated time</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-7 mt-3">
                                    <p >{date}</p>
                                
                                </div>
                                <div className="col-4 mt-3">
                                    <h1>Link detected</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-12 content-brokenlink mt-3" >
                                <p>http://demo.myshopify.com/products/error-2</p>
                      
                               
                                </div>
                                <div className="col-4 mt-3">
                                    <h1>Redirect to</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-12 content-brokenlink mt-3" >
                                <p >http://demo.myshopify.com</p>
                 
                                </div>
                                <hr></hr>
                            </div>
                        
                            <div className="row mobile-re-direct">
                                <div className="col-4 mt-3">
                                    <h1>Updated time</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-7 mt-3">
                                    <p >{date}</p>
                                  
                                </div>
                                <div className="col-4 mt-3">
                                    <h1>Link detected</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-12 content-brokenlink mt-3" >
                                <p>http://demo.myshopify.com/products/error-3</p>
                                 
                                </div>
                                <div className="col-4 mt-3">
                                    <h1>Redirect to</h1>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-12 content-brokenlink mt-3" >
                                <p >http://demo.myshopify.com</p>
                              
                                </div>
                            </div>
                        </div>
                        
                    
                    )}
                </div>
                {(window.Broken == 1) && 
                (
                    <div className="container-fluid button_back">
                       <div className="row back-desktop">
                           <div className="col-9">
                                
                           </div>
                           <div className="col-3">
                               <Link to="/demo">
                                <button className="back_task2" onClick={()=>{window.scanContent = "block"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.724" height="8.686" viewBox="1280.618 706.156 7.724 8.686" className="icon_back_task2">
                                        <g data-name="fi-rr-angle-double-left"><path d="m1284.105 714.736-2.957-2.958a1.801 1.801 0 0 1-.495-.923 1.808 1.808 0 0 1 .408-1.542 1.836 1.836 0 0 1 .087-.093l2.957-2.958a.362.362 0 0 1 .493-.017.367.367 0 0 1 .019.017c.135.136.14.351.017.493a.367.367 0 0 1-.017.02l-2.957 2.956a1.086 1.086 0 0 0-.053 1.48 1.102 1.102 0 0 0 .053.056l2.957 2.957a.362.362 0 0 1 .106.256l-.001.021a.361.361 0 0 1-.027.117.362.362 0 0 1-.334.224.362.362 0 0 1-.256-.106Z" fill-rule="evenodd" data-name="Path 12186"/><path d="m1287.724 714.736-3.47-3.47a1.08 1.08 0 0 1-.296-.553c-.064-.32.017-.664.244-.925a1.102 1.102 0 0 1 .053-.057l3.469-3.469a.36.36 0 0 1 .184-.099.362.362 0 0 1 .309.082.367.367 0 0 1 .019.017.36.36 0 0 1 .099.185.362.362 0 0 1-.082.308.367.367 0 0 1-.017.02l-3.47 3.468a.36.36 0 0 0-.098.185.362.362 0 0 0 .081.308.367.367 0 0 0 .017.019l3.47 3.469a.362.362 0 0 1 .106.256.361.361 0 0 1-.362.362.362.362 0 0 1-.256-.106Z" fill-rule="evenodd" data-name="Path 12187"/></g>
                                    </svg>
                                        BACK
                                    </button>
                               </Link>
                               
                           </div>
                       </div>
                       <div className="row back-mobile d-none">
                          
                           <div className="col-12 text-center">
                               <Link to="/demo">
                                <button className="back_task2" onClick={()=>{window.scanContent = "block"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="7.724" height="8.686" viewBox="1280.618 706.156 7.724 8.686" className="icon_back_task2">
                                        <g data-name="fi-rr-angle-double-left"><path d="m1284.105 714.736-2.957-2.958a1.801 1.801 0 0 1-.495-.923 1.808 1.808 0 0 1 .408-1.542 1.836 1.836 0 0 1 .087-.093l2.957-2.958a.362.362 0 0 1 .493-.017.367.367 0 0 1 .019.017c.135.136.14.351.017.493a.367.367 0 0 1-.017.02l-2.957 2.956a1.086 1.086 0 0 0-.053 1.48 1.102 1.102 0 0 0 .053.056l2.957 2.957a.362.362 0 0 1 .106.256l-.001.021a.361.361 0 0 1-.027.117.362.362 0 0 1-.334.224.362.362 0 0 1-.256-.106Z" fill-rule="evenodd" data-name="Path 12186"/><path d="m1287.724 714.736-3.47-3.47a1.08 1.08 0 0 1-.296-.553c-.064-.32.017-.664.244-.925a1.102 1.102 0 0 1 .053-.057l3.469-3.469a.36.36 0 0 1 .184-.099.362.362 0 0 1 .309.082.367.367 0 0 1 .019.017.36.36 0 0 1 .099.185.362.362 0 0 1-.082.308.367.367 0 0 1-.017.02l-3.47 3.468a.36.36 0 0 0-.098.185.362.362 0 0 0 .081.308.367.367 0 0 0 .017.019l3.47 3.469a.362.362 0 0 1 .106.256.361.361 0 0 1-.362.362.362.362 0 0 1-.256-.106Z" fill-rule="evenodd" data-name="Path 12187"/></g>
                                    </svg>
                                        BACK
                                    </button>
                               </Link>
                               
                           </div>
                       </div>
                         
                        
                    </div>
                )}
                
                {button_save && 
               
                (
                    <div className="save_x"> 
                    <button className="bt_save" >SAVED 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.586" height="12.586" className="sv_sgv">
                        <path d="M10.879.293 6.293 4.879 1.707.293a.995.995 0 0 0-.51-.274 1 1 0 0 0-.904.274.995.995 0 0 0-.274.51 1 1 0 0 0 .274.904l4.586 4.586-4.586 4.586a1 1 0 0 0-.048 1.362 1.015 1.015 0 0 0 .048.052.995.995 0 0 0 .51.273 1 1 0 0 0 .904-.273l4.586-4.586 4.586 4.586a1 1 0 0 0 1.362.048 1.015 1.015 0 0 0 .052-.048 1 1 0 0 0 0-1.414L7.707 6.293l4.586-4.586A1 1 0 0 0 10.93.245a1.015 1.015 0 0 0-.051.048Z" fill="#c9c9c9" fill-rule="evenodd" data-name="fi-sr-cross-small"/>
                    </svg>
                    </button>
                    </div>
                )
               }
       
        </PageHeader>
     
    )
    
}
Task2.propsType = {
    fetchData: PropTypes.func.isRequired,
    postData: PropTypes.func.isRequired
};
export default (Task2);