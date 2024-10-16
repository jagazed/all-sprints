export class View {
    #rootElement
    //#controller
    #onIncrementHandler

    constructor(elementId) {
        this.#rootElement = document.getElementById(elementId)
    }

    // set  controller(value) {
    //     this.#controller = value
    // }

    render(viewModelDTO) {
        this.#rootElement.innerHTML = ''
        this.#rootElement.append(viewModelDTO.value)

        const buttonElement = document.createElement('button')
        buttonElement.append('increment')

        // observer наблюдатель
        buttonElement.addEventListener('click', async () =>{
            await this.#onIncrementHandler()
        })

        // тоже что сверху
        //buttonElement.onclick = async () => {}


        this.#rootElement.append(buttonElement)
    }

    set onIncrement(callback) {
        this.#onIncrementHandler = callback
    }
}