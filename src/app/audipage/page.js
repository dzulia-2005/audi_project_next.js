
"use client"
import  "./main.css"

export default function page (){
    return <div className="container">
        <header>
            <div class="header-nav">
            <div className="menunav">
          <div className="closebtn" onClick={()=>{document.querySelector(".menunav").style.display = "none" }}></div>
            <div className="listss">
              <div className="list2">RS-eTron</div>
              <div className="list2">Models</div>
              <div className="list2">Discover</div>
              <div className="list2">myAudi login</div>
            </div>
        </div>
            <div className="logo-container">
                <img className="audi-logo" src="/audi-logo.png"></img>
            </div>
            <div className="list-container">
                <div className="list1">RS-eTron</div>
                <div className="list1">Models</div>
                <div className="list1">Discover</div>
                <div className="list1">myAudi login</div>
            </div>
            <div className="menu_logo" onClick={()=>{document.querySelector(".menunav").style.display="block"}}></div>
            </div>
        </header>
        <div>
            <div className="body">
                <div className="etron2023">2023 Audi RS e-tron® GT</div>
                <div className="notice">Notice</div>
            </div>
            <div className="txtandimg">
                <div className="container_small">
                    <div className="body_txt">Due to ongoing parts shortage issues impacting global production, the availability of some 
                            equipment, options or features may be limited. Please contact your local Audi Dealer for more
                            information, and be sure to verify the vehicle you purchase includes all expected features 
                            and equipment. Thank you for your patience as we work to navigate these limitations.
                    </div>
                    <div className="small-div">
                        <div className="gtquatrodiv">
                            <div>Base</div>
                            <div className="starting143">Starting at $ 143,900</div>
                        </div>
                        <div className="gtquatroprice">
                            <div><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5556 18.3333L20.3472 8.54167L18.4028 6.59722L10.5556 14.4444L6.59722 10.4861L4.65278 12.4306L10.5556 18.3333ZM2.77778 25C2.01389 25 1.35972 24.7282 0.815278 24.1847C0.271759 23.6403 0 22.9861 0 22.2222V2.77778C0 2.01389 0.271759 1.35972 0.815278 0.815278C1.35972 0.271759 2.01389 0 2.77778 0H22.2222C22.9861 0 23.6403 0.271759 24.1847 0.815278C24.7282 1.35972 25 2.01389 25 2.77778V22.2222C25 22.9861 24.7282 23.6403 24.1847 24.1847C23.6403 24.7282 22.9861 25 22.2222 25H2.77778ZM2.77778 22.2222H22.2222V2.77778H2.77778V22.2222Z" fill="black"/>
                                </svg>
                            </div>
                            <div>RS e-tron GT quattro</div>
                            <div> $ 143,900</div>
                        </div>
                    </div>
                    
                    
                </div>


                 <div className="audibackimg"></div>
            </div>
            
        </div>
        <div className="extdiv">
            <div className="ext">Exterior</div>
            <div className="audiextimg"></div>
            <div className="extcolors">Exterior colors</div>
            <div className="colors">
                <div className="t1"></div>
                <br></br>
                <div className="t2"></div>
                <br></br>
                <div className="t4"></div>
                <br></br>
                <div className="t5"></div>
                <br></br>
                <div className="t6"></div>
                <br></br>
                <div className="t7"></div>
                <br></br>
                <div className="t8"></div>
                <br></br>
                <div className="t9"></div>
            </div>
            <div className="inter"></div>
            <div className="intercontainer">
                <div>Seats: Black, Dashboard: Black,
                     Carpet: Black, Headliner: Black
                </div>
                <div className="int">
                    <div className="c1"></div>
                    <div className="c2"></div>
                    <div className="c3"></div>
                    <div className="c4"></div>
                    <div className="c5"></div>
                </div>
            </div>
        </div>
        <div className="penultimate">
            <div className="penultimate_txt">
                <div>RS e-tron GT quattro</div>
                <div className="penultimate_price">$ 143,900</div>
            </div>
            <div className="summary_btn">summary</div>
        </div>
        <div className="lastdiv" >
          <div className="audi-lg"></div>
          <div className="text">Audi of America takes efforts to ensure the accuracy of information on the general
             vehicle information pages. Models are shown for illustration purposes
              only and may include features that are not available on the US model.
               As errors may occur or availability
             may change, please see dealer for complete details
              and current model specifications.</div>
          <div className="divs">
            <div>Explore</div>
            <div className="size">Models</div>
            <div>Audi Sport</div>
          </div>
          <div className="divs">
            <div>Support</div>
            <div className="size">Contact us</div>
            <div>Help</div>
          </div>
          <div className="sociallogodiv">
            <div className="FU">Follow Us</div>
            <div className="sociallogo">
              <span><svg width="11" height="23" viewBox="0 0 11 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.99713 4.06769H10.9239V0.491626C10.5915 0.442895 9.44827 0.333252 8.11685 0.333252C5.33881 0.333252 3.43578 2.19532 3.43578 5.61769V8.76736H0.370178V12.7651H3.43578V22.8242H7.19435V12.7661H10.136L10.6029 8.7683H7.19347V6.01409C7.19435 4.85862 7.48632 4.06769 8.99713 4.06769Z" fill="#1E2833"/>
                </svg>
              </span>
              <span><svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.9974 2.998C25.0306 3.44992 24.0005 3.74946 22.9264 3.89491C24.0313 3.19193 24.8746 2.08724 25.2711 0.755733C24.2409 1.41023 23.1035 1.87254 21.8914 2.13053C20.9133 1.02065 19.5192 0.333252 17.9983 0.333252C15.0476 0.333252 12.6721 2.88546 12.6721 6.01424C12.6721 6.46443 12.7078 6.8973 12.7956 7.30939C8.36466 7.0791 4.44393 4.81606 1.81007 1.36868C1.35024 2.21884 1.08052 3.19193 1.08052 4.23947C1.08052 6.20644 2.03105 7.95004 3.4479 8.95949C2.59161 8.94218 1.75157 8.67726 1.0399 8.25997C1.0399 8.27729 1.0399 8.2998 1.0399 8.32231C1.0399 11.0823 2.88733 13.3748 5.30997 13.9029C4.87613 14.0293 4.40331 14.0899 3.91261 14.0899C3.57139 14.0899 3.22693 14.0691 2.90358 13.9929C3.59414 16.2421 5.55369 17.8957 7.88371 17.9493C6.07039 19.4609 3.768 20.3717 1.2755 20.3717C0.838416 20.3717 0.419208 20.3509 0 20.2938C2.36089 21.9162 5.15886 22.8425 8.17618 22.8425C17.9837 22.8425 23.3457 14.1851 23.3457 6.68086C23.3457 6.4298 23.3375 6.18739 23.3262 5.94671C24.3839 5.14677 25.2727 4.14771 25.9974 2.998Z" fill="#1E2833"/>
                </svg>
              </span>
              <span><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.875 0.333252H15.125C18.9214 0.333252 22 3.41188 22 7.20825V15.4583C22 19.2546 18.9214 22.3333 15.125 22.3333H6.875C3.07863 22.3333 0 19.2546 0 15.4583V7.20825C0 3.41188 3.07863 0.333252 6.875 0.333252ZM15.125 20.2708C17.7787 20.2708 19.9375 18.112 19.9375 15.4583V7.20825C19.9375 4.5545 17.7787 2.39575 15.125 2.39575H6.875C4.22125 2.39575 2.0625 4.5545 2.0625 7.20825V15.4583C2.0625 18.112 4.22125 20.2708 6.875 20.2708H15.125Z" fill="#1E2833"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11.3333C5.5 8.29588 7.96262 5.83325 11 5.83325C14.0374 5.83325 16.5 8.29588 16.5 11.3333C16.5 14.3706 14.0374 16.8333 11 16.8333C7.96262 16.8333 5.5 14.3706 5.5 11.3333ZM7.5625 11.3333C7.5625 13.2281 9.10525 14.7708 11 14.7708C12.8948 14.7708 14.4375 13.2281 14.4375 11.3333C14.4375 9.43721 12.8948 7.89583 11 7.89583C9.10525 7.89583 7.5625 9.43721 7.5625 11.3333Z" fill="#1E2833"/>
                <circle cx="16.9125" cy="5.42086" r="0.732875" fill="#1E2833"/>
                </svg>
              </span>
            </div>
          </div>
      </div>
      <div className="footer">
        <div className="aoa">© 2023 Audi of America. All rights reserved.</div>
        <div className="subscribe">subscribe to my social networks</div>
        <div className="socialweblogo">
          <div className="instalogo"></div>
          <div className="gmaillogo"></div>
          <div className="youtubelogo"></div>
          <div className="plogo"></div>
        </div>
      </div>
      
        
    </div>
}