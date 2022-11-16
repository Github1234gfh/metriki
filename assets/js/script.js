
// Работа с классами
function AppToClass() {
    // 1
    document.querySelector('.text__1').classList.add('www')

    // 2
    document.querySelector('.text__1').classList.remove('www')

    // 3
    var IsIn = document.querySelector('.text__1').classList.contains('www')
    console.log(IsIn)

    // 4
    if (!IsIn) {
        document.querySelector('.text__1').classList.add('www')
    }

    // 5
    let Classes = document.querySelector('.text__1').className
    Classes = Classes.split(' ')
    console.log(Classes.length)

    // 6
    // for (i in Classes) {
    //     alert(Classes[i])
    // }
}
AppToClass()


// Работа с CSS
function Css() {
    // 1
    document.querySelector('.text__2').style.cssText = 
    'color: red;' +
    'font-size: 30px;' +
    'border: solid 1px black;';
};
Css()

// Свойство tagName
document.querySelector('.TEXT__3').onclick = function() {
    // 1
    alert(this.className)

    // 2
    alert(this.className.toLowerCase())
}

// 3
function elemto() {
    var elem = document.querySelector('.wwws')
    var arr = elem.getElementsByClassName('www')
    for (i in arr) {
        arr[i].innerHTML = arr[i].innerHTML + arr[i].className
    }
}
elemto()

// Вставка элементов через appendChild

// 1
function LiInEnd() {
    var elem = document.querySelector('.ol__4')
    var li = document.createElement('li')
    elem.appendChild(li)
    elem.getElementsByTagName('li')[0].innerHTML = 'пункт'
}
LiInEnd()

// 2
function LiInUl() {
    var elem = document.querySelector('.ul__4')
    var elems = ['па', 'ввы', 'пт', 'им', 'gf']
    for (i in elems) {
        var li = document.createElement('li')
        elem.appendChild(li)
        elem.getElementsByTagName('li')[i].innerHTML = elems[i]
    }
}
LiInUl()

// Вставка элементов через insertAdjacentHTML
function AddSpan() {
    // 1
    document.querySelector('.text__5').insertAdjacentHTML('beforebegin', '<span >!!!</span>')

    // 2
    document.querySelector('.text__5').insertAdjacentHTML('afterbegin', '<span >!!!</span>')

    // 3
    document.querySelector('.text__5').insertAdjacentHTML('beforeend', '<span >!!!</span>')

    // 4
    document.querySelector('.text__5').insertAdjacentHTML('afterend', '<span >!!!</span>')
}
AddSpan()

// Удаление и клонирование

// 1
document.querySelector('.btn__6').onclick = function() {
    var elem = document.querySelector('.parent__6')
    var child = document.querySelector('.child__6')
    elem.removeChild(child)
    this.innerHTML = 'Child removed'
}

// 2
document.querySelector('.btn__6__2').onclick = function() {
    var elem = document.querySelector('.ol__6')
    elem.removeChild(elem.lastElementChild)
    this.innerHTML = 'Child removed'
}

// 3
document.querySelector('.text__6__1').onclick = function() {
    this.remove()
}

// 4
function gfdfghfd() {
    var elem = document.querySelector('.ol__6__2')
    var elems = elem.getElementsByTagName('li')
    for (let i = 0; i < elems.length; i++) {
        elems[i].onclick = function() {
            this.remove()
        }
    }
}
gfdfghfd()

// 5 
document.querySelector('.btn__6__3').onclick = function() {
    var elem = document.querySelector('.clone')
    var input = elem.getElementsByTagName('input')[0]
    var cloneIpnut = input.cloneNode(false)
    elem.appendChild(cloneIpnut)
}

// Потомки
function jhgi() {
    var elem = document.querySelector('.rod__7')
    // 1
    var ChildFirst = elem.firstElementChild
    var ChildLast = elem.lastElementChild
    ChildFirst.style.cssText = 
    'color: red;';

    // 2
    ChildLast.style.cssText = 
    'color: red;';

    // 3
    for (i in elem.children) {
        elem.children[i].innerHTML = elem.children[i].innerHTML + "!"
    };
    
    // Соседи 
    
    // 4
    ChildLast.previousElementSibling.innerHTML = ChildLast.previousElementSibling.innerHTML + '!'

    // 5
    ChildFirst.nextElementSibling.innerHTML = ChildFirst.nextElementSibling.innerHTML + '!'

    // 6
    ChildFirst.nextElementSibling.nextElementSibling.innerHTML = ChildFirst.nextElementSibling.nextElementSibling.innerHTML + '!'

    // Родители
    // 7
    ChildFirst.parentElement.style.cssText = 
    'color: red;';

    // 8
    var text = document.querySelector('.text__7')
    text.parentElement.parentElement.style.cssText = 
    'color: green;';
};
jhgi()


// На величину границы
document.querySelector('.btn__8').onclick = function() {

    // 1
    alert(document.querySelector('.div__8').clientTop)

    // 2
    alert(document.querySelector('.div__8').clientLeft)

    // На полный размер элеиента

    // 1
    alert(document.querySelector('.div__8').offsetWidth)

    // 2
    alert(document.querySelector('.div__8').offsetHeight)

    // На размер элемента без границ, но с padding

    // 1
    alert(document.querySelector('.div__8').clientWidth)

    // 2
    alert(document.querySelector('.div__8').clientHeight)

    // Работа с getComputedStyle

    // 1
    var elem = document.querySelector('.div__8')
    alert(window.getComputedStyle(elem,null).getPropertyValue("height"))
    alert(window.getComputedStyle(elem,null).getPropertyValue("width"))
}

//Прокрутка элемента
document.querySelector('.btn__9').onclick = function() {
    var elem = document.querySelector('.div__9')
    
    // 1
    alert(elem.scrollTop)

    // 2
    alert(elem.scrollLeft)

    // 3
    elem.scrollTop = 100;

    // 4
    elem.scrollTop = elem.scrollTop + 100

    // Прокрутка элемента

    // 1
    alert(elem.scrollWidth)
    
    // 2
    alert(elem.scrollHeight)

    // 3
    elem.scrollTop = elem.scrollHeight - 100
}

// Прокрутка страницы
document.querySelector('.btn__10').onclick = function() {
    // 1
    alert(pageXOffset)

    // 2
    alert(pageYOffset)

    // 1
    scrollTo(300, 500)
    console.log(pageYOffset)
    scrollTo(pageXOffset, pageYOffset +300)
    console.log(pageYOffset)
}

// Практика
document.querySelector('.btn__11').onclick = function() {
    // 1
    scrollTo(0, document.body.scrollHeight)
    var maxOfset = pageYOffset
    // 2 
    scrollTo(0, pageYOffset+400)

    // 3
    if (maxOfset == pageYOffset) {
        console.log(pageYOffset, maxOfset)
        scrollTo(0, 100)
    }
}

document.querySelector('.div__11').onclick = function() {
    this.style.cssText = 
    `width: ${this.offsetWidth*2}px;`+
    'height: '+this.offsetHeight*2+'px;'
}