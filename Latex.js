import React from 'react'
import Katex from 'katex'

export default React.createClass({
	render() {
  	return (
			<div dangerouslySetInnerHTML={{__html: Katex.renderToString(this.props.tex) }} />
		)
  }
})
