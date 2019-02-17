import React from 'react';

function Aboutme() {
  return (
    <div class="about">
      <div class="col-md-6">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h2 class="panel-title" id="panel-title1">About Me</h2>
          </div>

          <p>My name is <strong id="blue">Glen Sale</strong> born and raised from the <strong id="blue">Philippines</strong>. I move here October 9, 2005 as English is my second language.</p>
          <p>Over the years I have learned <strong id="blue"><em>English through ESL and Ell</em></strong> and was able to graduate from it</p>
          <p>I have join <strong id="blue"><u>robotics clubs</u> and <u>culinary classes</u></strong> but computer was my main interest</p>
          <p>Currently a student epicodus to persue long term career</p>

          <div class="panel-body">
          </div>
          <div class="panel-heading">
            <h2 class="panel-title" id="panel-title2">Work:</h2>
          </div>
          <div class="panel-body">
            <ul>
              <li>Family Fun Center</li>
              <li>Green Planet</li>
              <li>Red Ribbon Tukwilla</li>
              <li>Swissport</li>
            </ul>

          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h2 class="panel-title" id="panel-title3">Interest</h2>
          </div>
          <div class="panel-body">
            <ul>
              <li>Mechanical Engineering</li>
              <li>Frameworks</li>
              <li>Softwares.</li>
              <li>Coding/Programming</li>
            </ul>
          </div>

          <div class="panel-heading">
            <h2 class="panel-title" id="panel-title4">Experience</h2>
          </div>
          <div class="panel-body">
            <ul>
              <li>Negotiator</li>
              <li>Customer Service</li>
              <li>HTML</li>
              <li>CSS STYLYING</li>
              <li>SOLIDWORK</li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Aboutme;