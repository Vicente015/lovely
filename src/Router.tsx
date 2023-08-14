import { Route } from 'wouter'
import App from './App'
import Page from './Page'

const Router = () => (
  <div>
    <Route path='/' component={App}></Route>
    <Route path='/:peerId'>
      {params => <Page peerId={params.peerId}></Page>}
    </Route>
  </div>
)

export default Router
