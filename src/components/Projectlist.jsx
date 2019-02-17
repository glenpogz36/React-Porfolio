import React from 'react';
import Proj from './Proj';

var masterProjList = [
  {
    names: <a href="https://github.com/glenpogz36/Angular-NBA">NBA Website Remake</a>,
    details: 'Multiple components that allows users to use multiple database and API calls to return a routing path. A user is able to select a url and input any information or select information regarding NBA players. Also users are able to select a player and able to match up their skill sets'
  },
  {
    names: <a href="https://github.com/LeilaniL/chat-app">ChatApp (Angular)</a>,
    details: 'A chat room application where users can send and view messages.'
  },
  {
    names: <a href="https://github.com/LeilaniL/chat-app">ChatApp (Angular)</a>,
    details: 'A chat room application where users can send and view messages.'
  },
  {
    names: <a href="https://github.com/glenpogz36/JS-Doctor">Doctor App (JS API)</a>,
    details: 'A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query. A user should be able to to enter a name to receive a list of doctors in the Portland area that fit the search query.If the query response dont include any doctors. (For instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)'
  },
  {
    names: <a href="https://github.com/gulzatk/ChildDevelopment">Child Development (C# MVC)</a>,
    details: 'Child Development Timeline website geared toward parents to learn their children development timeline from birth to 5 years old.The user needs to create an account to login and fill the form statistic information about their child.The result shows in line chart and parent can compare the result with other kids result by choosing specific parts of the form.Also parent can modify children information.'
  },
  {
    names: <a href="https://github.com/maxdhs/no-way-out">No Way Out (JS )</a>,
    details: 'Text based horror adventure where while at home, your peaceful night turns into a nightmare when an unknown creature stalks you in your very own home. Choose wisely and find a way out.'
  },
];

function ProjList() {
  return (
    <div>
      <hr />
      {masterProjList.map((proj, index) =>
        <Proj names={proj.names}
          details={proj.details}
          key={index} />
      )}
    </div>
  );
}

export default ProjList;