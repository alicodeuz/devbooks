import React, { memo } from 'react'
import AuthorDetails from './AuthorDetails-class'

// export default memo(function Authors(props) {
//   console.log('changing', props)
//   return (
//     <div>
//       <h2>Authors</h2>
//       <AuthorDetails />
//     </div>
//   )
// })
export default class Authors extends React.PureComponent {
  render() {
    console.log('changing', this.props)
    return (
      <div>
        <h2>Authors</h2>
        <AuthorDetails />
      </div>
    )
  }
}
