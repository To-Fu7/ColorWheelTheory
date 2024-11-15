const colorHex = {
    "c1":"#ff0000"
}
let hex1 = document.getElementById("hex1")
let hex2 = document.getElementById("hex2")

// function hide3Arrow() {
//     const hide = document.getElementById('trimodes')
//     const arrow = document.getElementById("svg3Arrow")

//     arrow.style.display = hide.checked ? "none" : "block"
// }
function hide3Arrow() {
    document.getElementById("svg3Arrow").style.visibility = "hidden"
    document.getElementById("svg2Arrow").style.visibility = "visible"
    document.getElementById("hexInfo").style.visibility = "visible"
}
function hide2Arrow() {
    document.getElementById("svg3Arrow").style.visibility = "visible"
    document.getElementById("svg2Arrow").style.visibility = "hidden"
    document.getElementById("hexInfo").style.visibility = "visible"
}

function toggle(isChecked) {
    const check = document.querySelectorAll('.uncheck')
    const c1 = document.getElementById("c1")
    const c2 = document.getElementById("c2")
    const c3 = document.getElementById("c3")
    const c4 = document.getElementById("c4")
    const c5 = document.getElementById("c5")
    const c6 = document.getElementById("c6")
    const c7 = document.getElementById("c7")
    const c8 = document.getElementById("c8")
    const c9 = document.getElementById("c9")
    const c10 = document.getElementById("c10")
    const c11 = document.getElementById("c11")
    const c12 = document.getElementById("c12")
    const c13 = document.getElementById("c13")
    const c14 = document.getElementById("c14")
    const c15 = document.getElementById("c15")
    const c16 = document.getElementById("c16")
    const c17 = document.getElementById("c17")
    const c18 = document.getElementById("c18")
    const c19 = document.getElementById("c19")
    const c20 = document.getElementById("c20")
    const c21 = document.getElementById("c21")
    const c22 = document.getElementById("c22")
    const c23 = document.getElementById("c23")
    const c24 = document.getElementById("c24")


    check.forEach(checkbox => {
        if(checkbox !== isChecked){
            checkbox.checked = false
        }if(c1 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(0deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(0deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#FF0000'
            hex1.style.boxShadow = '0px 0px 25px #ff0000'
            hex1.textContent = "#FF0000"
            hex2.style.backgroundColor = '#2fc5fd'
            hex2.style.boxShadow = '0px 0px 25px #2fc5fd'
            hex2.textContent = "#2fc5fd"
        }if(c2 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(15deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(15deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#fc670e'
            hex1.style.boxShadow = '0px 0px 25px #fc670e'
            hex1.textContent = "#fc670e"
            hex2.style.backgroundColor = '#028dd8'
            hex2.style.boxShadow = '0px 0px 25px #028dd8'
            hex2.textContent = "#028dd8"
        }if(c3 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(30deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(30deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#ff9102'
            hex1.style.boxShadow = '0px 0px 25px #ff9102'
            hex1.textContent = "#ff9102"
            hex2.style.backgroundColor = '#0271c5'
            hex2.style.boxShadow = '0px 0px 25px #0271c5'
            hex2.textContent = "#0271c5"
        }if(c4 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(45deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(45deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#fcc209'
            hex1.style.boxShadow = '0px 0px 25px #fcc209'
            hex1.textContent = "#fcc209"
            hex2.style.backgroundColor = '#026cc6'
            hex2.style.boxShadow = '0px 0px 25px #026cc6'
            hex2.textContent = "#026cc6"
        }if(c5 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(60deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(60deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#fff304'
            hex1.style.boxShadow = '0px 0px 25px #fff304'
            hex1.textContent = "#fff304"
            hex2.style.backgroundColor = '#0253ae'
            hex2.style.boxShadow = '0px 0px 25px #0253ae'
            hex2.textContent = "#0253ae"
        }if(c6 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(75deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(75deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#ccdb08'
            hex1.style.boxShadow = '0px 0px 25px #ccdb08'
            hex1.textContent = "#ccdb08"
            hex2.style.backgroundColor = '#2e2e97'
            hex2.style.boxShadow = '0px 0px 25px #2e2e97'
            hex2.textContent = "#2e2e97"
        }if(c7 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(90deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(90deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#8bcb33'
            hex1.style.boxShadow = '0px 0px 25px #8bcb33'
            hex1.textContent = "#8bcb33"
            hex2.style.backgroundColor = '#662891'
            hex2.style.boxShadow = '0px 0px 25px #662891'
            hex2.textContent = "#662891"
        }if(c8 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(105deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(105deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#2bbd41'
            hex1.style.boxShadow = '0px 0px 25px #2bbd41'
            hex1.textContent = "#2bbd41"
            hex2.style.backgroundColor = '#922194'
            hex2.style.boxShadow = '0px 0px 25px #922194'
            hex2.textContent = "#922194"
        }if(c9 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(120deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(120deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#03a94e'
            hex1.style.boxShadow = '0px 0px 25px #03a94e'
            hex1.textContent = "#03a94e"
            hex2.style.backgroundColor = '#b60d91'
            hex2.style.boxShadow = '0px 0px 25px #b60d91'
            hex2.textContent = "#b60d91"
        }if(c10 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(135deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(135deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#04a779'
            hex1.style.boxShadow = '0px 0px 25px #04a779'
            hex1.textContent = "#04a779"
            hex2.style.backgroundColor = '#c20d9d'
            hex2.style.boxShadow = '0px 0px 25px #c20d9d'
            hex2.textContent = "#c20d9d"
        }if(c11 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(150deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(150deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#02a99c'
            hex1.style.boxShadow = '0px 0px 25px #02a99c'
            hex1.textContent = "#02a99c"
            hex2.style.backgroundColor = '#f0008d'
            hex2.style.boxShadow = '0px 0px 25px #f0008d'
            hex2.textContent = "#f0008d"
        }if(c12 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(165deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(165deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex1.style.backgroundColor = '#0aa7be'
            hex1.style.boxShadow = '0px 0px 25px #0aa7be'
            hex1.textContent = "#0aa7be"
            hex2.style.backgroundColor = '#f6045d'
            hex2.style.boxShadow = '0px 0px 25px #f6045d'
            hex2.textContent = "#f6045d"
        }
        
        if(c13 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(180deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(180deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#FF0000'
            hex2.style.boxShadow = '0px 0px 25px #ff0000'
            hex2.textContent = "#FF0000"
            hex1.style.backgroundColor = '#2fc5fd'
            hex1.style.boxShadow = '0px 0px 25px #2fc5fd'
            hex1.textContent = "#2fc5fd"
        }if(c14 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(195deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(195deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#fc670e'
            hex2.style.boxShadow = '0px 0px 25px #fc670e'
            hex2.textContent = "#fc670e"
            hex1.style.backgroundColor = '#028dd8'
            hex1.style.boxShadow = '0px 0px 25px #028dd8'
            hex1.textContent = "#028dd8"
        }if(c15 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(210deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(210deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#ff9102'
            hex2.style.boxShadow = '0px 0px 25px #ff9102'
            hex2.textContent = "#ff9102"
            hex1.style.backgroundColor = '#0271c5'
            hex1.style.boxShadow = '0px 0px 25px #0271c5'
            hex1.textContent = "#0271c5"
        }if(c16 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(225deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(225deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#fcc209'
            hex2.style.boxShadow = '0px 0px 25px #fcc209'
            hex2.textContent = "#fcc209"
            hex1.style.backgroundColor = '#026cc6'
            hex1.style.boxShadow = '0px 0px 25px ##026cc6'
            hex1.textContent = "#026cc6"
        }if(c17 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(240deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(240deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#fff304'
            hex2.style.boxShadow = '0px 0px 25px #fff304'
            hex2.textContent = "#fff304"
            hex1.style.backgroundColor = '#0253ae'
            hex1.style.boxShadow = '0px 0px 25px #0253ae'
            hex1.textContent = "#0253ae"
        }if(c18 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(255deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(255deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#ccdb08'
            hex2.style.boxShadow = '0px 0px 25px #ccdb08'
            hex2.textContent = "#ccdb08"
            hex1.style.backgroundColor = '#2e2e97'
            hex1.style.boxShadow = '0px 0px 25px #2e2e97'
            hex1.textContent = "#2e2e97"
        }if(c19 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(270deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(270deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#8bcb33'
            hex2.style.boxShadow = '0px 0px 25px #8bcb33'
            hex2.textContent = "#8bcb33"
            hex1.style.backgroundColor = '#662891'
            hex1.style.boxShadow = '0px 0px 25px #662891'
            hex1.textContent = "#662891"
        }if(c20 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(285deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(285deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#2bbd41'
            hex2.style.boxShadow = '0px 0px 25px #2bbd41'
            hex2.textContent = "#2bbd41"
            hex1.style.backgroundColor = '#922194'
            hex1.style.boxShadow = '0px 0px 25px #922194'
            hex1.textContent = "#922194"
        }if(c21 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(300deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(300deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#03a94e'
            hex2.style.boxShadow = '0px 0px 25px #03a94e'
            hex2.textContent = "#03a94e"
            hex1.style.backgroundColor = '#b60d91'
            hex1.style.boxShadow = '0px 0px 25px #b60d91'
            hex1.textContent = "#b60d91"
        }if(c22 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(315deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(315deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#04a779'
            hex2.style.boxShadow = '0px 0px 25px #04a779'
            hex2.textContent = "#04a779"
            hex1.style.backgroundColor = '#c20d9d'
            hex1.style.boxShadow = '0px 0px 25px #c20d9d'
            hex1.textContent = "#c20d9d"
        }if(c23 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(330deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(330deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#02a99c'
            hex2.style.boxShadow = '0px 0px 25px #02a99c'
            hex2.textContent = "#02a99c"
            hex1.style.backgroundColor = '#f0008d'
            hex1.style.boxShadow = '0px 0px 25px #f0008d'
            hex1.textContent = "#f0008d"
        }if(c24 == isChecked){
            document.getElementById('svg3Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg2Arrow').style.transition = 'transform 0.3s'
            document.getElementById('svg3Arrow').style.transform = 'rotate(345deg)'
            document.getElementById('svg2Arrow').style.transform = 'rotate(345deg)'
            document.getElementById('svg3Arrow').style.transitionTimingFunction = "ease-in-out"
            document.getElementById('svg2Arrow').style.transitionTimingFunction = "ease-in-out"
            hex2.style.backgroundColor = '#0aa7be'
            hex2.style.boxShadow = '0px 0px 25px #0aa7be'
            hex2.textContent = "#0aa7be"
            hex1.style.backgroundColor = '#f6045d'
            hex1.style.boxShadow = '0px 0px 25px #f6045d'
            hex1.textContent = "#f6045d"
        }
    })
}