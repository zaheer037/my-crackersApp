import React from 'react'
import './safetyTips.css'
const SafetyTips = () => {
    
  return (
    <div>
        <div class="safetytipsbg">
            <div class="container pad">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12 py-5">
                        <h1 class="gilroy text-center text-white headfnt h3-text">Safety Tips</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="dos container pad">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12 pb-lg-5 pb-3">
                    <h3 class="gilroy clr-or heading2">My Sivakasi Crackers</h3>
                    <p class="roboto clr2 smallfnt">There are certain Do's &amp; Don’ts to follow while purchasing, bursting and storing crackers. Thus, it is very important to 
                        follow the precautions while bursting crackers. A little negligence, ignorance and carelessness can cause a fatal injury.</p>
                </div>
                <div className="dos-donts-container">
                <div className="dos-column">
                    <h2>Do's</h2>
                    <ul>
                    <li>
                        <span className="check-icon"><i class="fa fa-check icnclr1"></i></span>
                        <div>
                        <h3>Instructions</h3>
                        <p>Display fireworks as per the instructions mentioned on the pack.</p>
                        </div>
                    </li>
                    <li>
                        <span className="check-icon"><i class="fa fa-check icnclr1"></i></span>
                        <div>
                        <h3>Outdoor</h3>
                        <p>Use fireworks only outdoors.</p>
                        </div>
                    </li>
                    <li>
                        <span className="check-icon"><i class="fa fa-check icnclr1"></i></span>
                        <div>
                        <h3>Branded Fireworks</h3>
                        <p>Buy fireworks from authorized / reputed manufacturers only.</p>
                        </div>
                    </li>
                    <li>
                        <span className="check-icon"><i class="fa fa-check icnclr1"></i></span>
                        <div>
                        <h3>Distance</h3>
                        <p>Light only one firework at a time. Others should watch from a safe distance.</p>
                        </div>
                    </li>
                    <li>
                        <span className="check-icon"><i class="fa fa-check icnclr1"></i></span>
                        <div>
                        <h3>Water</h3>
                        <p>Keep two buckets of water handy in case of fire or any mishap.</p>
                        </div>
                    </li>
                    </ul>
                </div>
                
                <div className="donts-column">
                    <h2>Don'ts</h2>
                    <ul>
                    <li>
                        <span className="cross-icon"><i class="fa fa-times icnclr2"></i></span>
                        <div>
                        <h3>Don't make tricks</h3>
                        <p>Never make your own fireworks.</p>
                        </div>
                    </li>
                    <li>
                        <span className="cross-icon"><i class="fa fa-times icnclr2"></i></span>
                        <div>
                        <h3>Don't relight</h3>
                        <p>Never try to re-light or pick up fireworks that have not ignited fully.</p>
                        </div>
                    </li>
                    <li>
                        <span className="cross-icon"><i class="fa fa-times icnclr2"></i></span>
                        <div>
                        <h3>Don't carry it</h3>
                        <p>Never carry fireworks in your pockets.</p>
                        </div>
                    </li>
                    <li>
                        <span className="cross-icon"><i class="fa fa-times icnclr2"></i></span>
                        <div>
                        <h3>Don't touch it</h3>
                        <p>After a fireworks display, never pick up fireworks that may still be active.</p>
                        </div>
                    </li>
                    <li>
                        <span className="cross-icon"><i class="fa fa-times icnclr2"></i></span>
                        <div>
                        <h3>Don't wear loose clothes</h3>
                        <p>Do not wear loose clothing while using fireworks.</p>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SafetyTips