import { useEffect } from 'react';
//withRouter helps you to access the React Router props, such as history, location, and match, in your components.
import { useLocation } from 'react-router-dom';
//The history prop is from withRouter and updates when browsing history changes. 
//The children prop is the component that we want to wrap with the scroll-to-top behavior.
//THIS IS CALLED A HIGHER ORDER COMPONENT(HOC)
function ScrollToTop({children }) {
    const location=useLocation()
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);//when history changes(moving to another component), run the useffect

  return children;
}

export default ScrollToTop; //export scrollTop, wrapped with withRouter,to have access to its history prop 
/*
We're defining a ScrollToTop component that takes a children
 prop, which is the component that we want to wrap 
with the scroll-to-top behavior.

Inside the useEffect hook, we're registering a callback 
function that listens for changes in the location
 object from the useLocation hook. Whenever the location changes, we're calling window.scrollTo(0, 0) to trigger 
 the scroll-to-top behavior. */