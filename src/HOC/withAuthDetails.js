import React from 'react'

// function withAuth(CustomComponent) {
//   const user = JSON.parse(localStorage.user);
//   const token = localStorage.getItem('token');
//   return () => <CustomComponent user={user} token={token} signOut={() => { }} />
// }

function withAuth(CustomComponent, isHomePage) {
  return class HOC extends React.Component {
    render() {
      const user = JSON.parse(localStorage.user);
      const token = localStorage.getItem('token');

      return (
        <CustomComponent
          user={user}
          token={token}
          hide={isHomePage}
          signOut={() => { }}
        />
      )
    }
  }
}

export default withAuth;