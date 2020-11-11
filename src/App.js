import React, { Component } from "react";
import FeaturesPage from "./component/About/about";

import MinimalisticIntro from "./component/intro/intro"
import ContactPage from "./component/ContactInfo/contact"
import ProjectsPage from "./component/Projects/projects"

class App extends Component {
  render() {
    return (
      <div>
<MinimalisticIntro/>
<FeaturesPage/>
<ProjectsPage/>
<ContactPage/>
      </div>  
      
    );
  }
}

export default App;
