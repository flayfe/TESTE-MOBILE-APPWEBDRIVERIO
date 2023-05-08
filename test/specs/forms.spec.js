/*const homeScreen = require("../screens/home.screen");*/

describe('Funcionalidade Cadastro - Forms', () => {
    it('Deve preencher formulário Forms', async () => {
        /*await homeScreen.goToForm()*/
        await $('~Forms').click() //ir para page FORMS

        await $('~text-input').setValue('Este é um Teste')
        expect(await $('~input-text-result')).toBeDisplayed('Este é um Teste')
        await $('~switch').click()
        expect(await $('~switch-text')).toBeDisplayed('Click to turn tje switch OFF')

        const selector = 'new UiSelector().text("Select an item...").className("android.widget.EditText")'
        const dropdown = await $(`android=${selector}`)
        await dropdown.click()

        const selector2 = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        const listview = await $(`android=${selector2}`)
        await listview.click()
        expect(await dropdown).toBeDisplayed('This app is awesome')

        await $('~button-Active').click()
        expect(await $('id:android:id/message')).toBeDisplayed('This button is active')
        await $('id:android:id/button1').click()

    });
});