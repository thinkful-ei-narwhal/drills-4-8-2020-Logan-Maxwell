import React, { Component } from 'react'
import './Accordion.css'

class Accordion extends React.Component {
  static defaultProps = {
    sections: [{
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Section 2',
      content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
    },
    {
      title: 'Section 3',
      content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
    },
    ]
  };

  state = {
    activeIndex: null,
  }

  handleActiveSection = (sectionIndex) => {
    this.setState({ activeIndex: sectionIndex })
  }
  renderSegment(section, index, activeIndex) {
    return (
      <li className='AccordionSection' key={index}>
        <button type="button" onClick={() => this.handleActiveSection(index)}>
          {section.title}
        </button>
        {(activeIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { activeIndex } = this.state
    const { sections } = this.props
    return (
      <div>

        <ul className='Accordion'>
          {sections.map((section, index) =>
            this.renderSegment(section, index, activeIndex)
          )}
        </ul>
      </div>
    )
  }
}
export default Accordion;