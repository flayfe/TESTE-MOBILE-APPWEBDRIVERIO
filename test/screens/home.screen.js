import Screens from './screens'

class HomeScreen extends Screens{
    get #acessPageForm(){
        return $('~Forms')
    }
    async goToForm(){
        this.#acessPageForm.click()
    }
}

export default new HomeScreen()