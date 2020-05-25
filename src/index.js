import appWatchInstaller from './construction/app'
import pageWatchInstaller from './construction/page'
import componentWatchInstaller from './construction/component'

const wxWatch = {
  install() {
    if (this.installed) {
      return
    }
    this.installed = true
    appWatchInstaller.install()
    pageWatchInstaller.install()
    componentWatchInstaller.install()
  },
  verson: '1.0.5'
}

wxWatch.install()

export default wxWatch
