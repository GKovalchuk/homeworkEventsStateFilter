import React, { Component } from 'react';

export class ProjectList extends Component {

      render() {
            const { projects } = this.props;
            return (
                  <img className='projectsImg' src={projects} alt='' />
            )
      }
}
export default ProjectList;
