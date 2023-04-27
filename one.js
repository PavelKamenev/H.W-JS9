window.onload = () => {

/* 1)Створити кнопку при натисканні на яку створюється дів з порядковим номером всередині, якщо створено більше 5 дівів.
 Покажіть на сторінці кнопку, видалити всі створені елементи. При натисканні на кнопку всі створенні div елементи видаляються */
 
    function deleteDivsAndHideButton() {
        let elements = document.querySelectorAll('.taskOneChild');
        elements.forEach(e => {
            e.remove();
        });

        let deleteButton = document.querySelector("#taskOneDeleteButtuon");
        deleteButton.remove();
    }

    function addDiv() {
        let taskOne = document.querySelector(".taskOne");

        let taskOneChildren = document.querySelectorAll(".taskOneChild");

        let div = document.createElement('div');
        div.className = 'taskOneChild';
        div.innerHTML = taskOneChildren.length + 1;

        taskOne.appendChild(div);

        let deleteButton = document.querySelector("#taskOneDeleteButtuon");

        let buttonsDiv = document.querySelector('.buttons');

        if (deleteButton == null && taskOneChildren.length >= 4) {
            let deleteButtonElement = document.createElement('button');
            deleteButtonElement.innerHTML = 'Delete divs';
            deleteButtonElement.setAttribute('id', 'taskOneDeleteButtuon');
            deleteButtonElement.addEventListener('click', deleteDivsAndHideButton)
            buttonsDiv.appendChild(deleteButtonElement);
        }
    }

    let btn = document.querySelector("#taskOneButton");

    btn.addEventListener('click', addDiv);
/*     2) в html створіть 2 інпута і кнопку.  в js створіть class  по створенню обєкту товару. При вводі данних і натисканні на кнопку додати товар, 
у вас обєкт товару додається в массив 
    3) Створіть кнопку яка відображається на сторінці коли більше 3 товарів в масиві і при dblclick відмальовує список товарів на сторінці */
    let products = [];

    class ProductClass {
        constructor(nameProduct, amount) {
            this.nameProduct = nameProduct;
            this.amount = amount;
        }

    }

    let button = document.querySelector(".add");

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function showProducts() {
        let productsDiv = document.querySelector('#products');
        removeAllChildNodes(productsDiv);

        products.forEach(p => {
            let pEl = document.createElement('p');
            pEl.innerHTML = `${p.nameProduct} ${p.amount}`
            productsDiv.appendChild(pEl);
        });
    }

    function inputList() {
        let nameProduct = document.querySelector(".productChoose");
        let amount = document.querySelector(".amountChoose");

        if (amount == null || amount == '' || nameProduct == null || nameProduct == '') {
            alert('Name and amount cannot be empty');
            return;
        }

        let productValue = new ProductClass(nameProduct.value, amount.value);

        products.push(productValue);

        let taskTwoAndThree = document.querySelector(".taskTwoAndThree");

        let productsButton = document.querySelector('#productsButton');
        if (productsButton == null && products.length > 3) {
            let productsButtonElement = document.createElement('button');
            productsButtonElement.innerHTML = 'Show products';
            productsButtonElement.setAttribute('id', 'productsButton');
            productsButtonElement.addEventListener('dblclick', showProducts)
            taskTwoAndThree.appendChild(productsButtonElement);
        }
        nameProduct.value = '';
        amount.value = '';
        alert('Product added!');
    }
    button.addEventListener("click", inputList)
/*     Створіть інпут і кнопку, вводячи дані і натискаючи кнопку ви стоврюєте новий елемент списку покупок. В елементі списка покупок, повиненно 
    бути:  інформація з інпуту, час створення, а також кнопка при натисканні на яку елемент стає сірим ( або позначається як куплений) */

    let shoppingItems = [];

    class ShoppingItem {
        constructor(name, createdAt) {
            this.name = name;
            this.createdAt = createdAt;
        }

    }

    function disableAndChangeBackground(id) {
        let shopItemDiv = document.querySelector(`#shop-item-${id}`);
        shopItemDiv.setAttribute('style', 'background-color: rgb(130, 60, 60);');

    }

    function addToBasket() {
        let shoppingList = document.querySelector("#shoppingList");
        let shoppingItemInput = document.querySelector(".shoppingItem");



        let shopItem = new ShoppingItem(shoppingItemInput.value, new Date())
        shoppingItems.push(shopItem);
        let currentIndex = shoppingItems.length;
        let shopItemDiv = document.createElement('div');
        shopItemDiv.setAttribute('id', `shop-item-${currentIndex}`);
        let pEl = document.createElement('p');
        pEl.innerHTML = `${shopItem.name} ${shopItem.createdAt}`;
        pEl.className = "ps-3 pt-2 fw-medium";
        let buttonEl = document.createElement('button');
        buttonEl.innerHTML = 'BUY';
        buttonEl.className = "btn btn-info w-30 ms-3 mb-2";
        buttonEl.setAttribute('id', `shop-item-button-${currentIndex}`);
        buttonEl.addEventListener('click', function () { disableAndChangeBackground(currentIndex) });
        shopItemDiv.append(pEl, buttonEl);
        shopItemDiv.className = "card border-secondary w-50 mt-3 shadow rounded";
        shoppingList.appendChild(shopItemDiv);
    }

    let basketButton = document.querySelector("#addBasketButton");
    basketButton.addEventListener('click', addToBasket);
    basketButton.className = "btn btn-primary";

    let taskFour = document.querySelector(".taskFour");
    taskFour.className = "p-3";

    let shoppingItem = document.querySelector('.shoppingItem');
    shoppingItem.classList.add('pb-2', 'pt-1', 'bg-info', 'bg-opacity-10', 'border', 'border-info', 'border-start', 'rounded-end', 'rounded-start');

}
