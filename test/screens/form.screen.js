class FormScreen {
    get #acessPageForm(){
        return $('~Forms')
    }
    async goToForm(){
        this.#acessPageForm.click()
    }
}

module.exports = new FormScreen()