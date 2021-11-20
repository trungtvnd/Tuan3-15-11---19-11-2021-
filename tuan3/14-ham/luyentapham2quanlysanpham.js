let array = ['Sonny']
let editIndex
function display(){
    let table = "<table>"
    table += "<tr>" + "<td colspan='3'>" + "<b>" + "Product name" + "</b>" + "</td>" + "<td id='id2'>" + array.length + " " +"product" + "</td>" +"</tr>"
    for (let i = 0; i < array.length; i++) {
        table += "<tr>"
        table += "<td>" + (i +1) + "</td>"
        table += "<td id='name'>" + array[i] + "</td>" + "<td>" +"<button id='edit' value='edit' onclick='edit("+i+")'>" + "edit " + "</button>" + "</td>"
        + "<td>" + "<button id='delete' value='delete' onclick='deleteProduct("+i+")'>" + "delete" + "</button>" + "</td>" + "<td>" + "<button id='view' onclick='view("+i+")'>" + "View" + "</button>" + "</td>"
        table+= "</tr>"
    }
    table += "</table>"

    document.getElementById('product').innerHTML = table
}

function add(){
    let item = document.getElementById('add').value
    array.push(item)
    document.getElementById('add').value = ""
    display()
}

function edit(index){
    // edit = prompt('Input product')
    // array[index]  =  edit
    document.getElementById('edit').value = array[index]
    editIndex = index
    display()
}
function editProduct(index){
    array[editIndex] = document.getElementById('edit').value
    display()
}

function deleteProduct(index){
    array.splice(index, 1)
    display()

}
