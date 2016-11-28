import React 		from 'react'
import TeX from './Latex.js'

export default React.createClass({
	render() {
  	return (
			<div>
				<p>This is some container component.</p>
				<TeX tex={ require("raw!./sample.tex") } />
			</div>
    )
  }
})
