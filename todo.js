function outer() {
    let arr = []
    let idx = 0

    function add(todo){
        todo.idx = idx++
        arr.push(todo)
    }
    function removeTodo() {
        console.log("remove Todo...")
    }
    function getTodo() {
        console.log('get Todo')
    }
    function getAll() {
        return arr
    }
    function changeAll() {
        for (let i = 0; i < arr.length; i++) {
            arr[i].complet = !arr[i].complete
        }
    }
    const obj = {add , removeTodo , getTodo , getAll , changeAll}
    return obj

}

// function 안에 funtion 을 바로 사용하는것은 불가 하고 객체에서 변수로 받아서 사용해야한다.
const todoService = outer()



