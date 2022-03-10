function checkPassword(str) {
    var res = {}
    res.lengthCheck = false
    res.spaceCheck = false
    res.complicatedCheck = false

    if(!str || (str && str.length === 0)) {
        return res
    }
    var count = 0;
    
    if(/[0-9]/.test(str)) {
        count ++ 
    }

    if(/[a-zA-Z]/.test(str)) {
        count ++ 
    }

    if(/~!@#$%^&*/.test(str)) {
        count ++ 
    } 
    res.lengthCheck = str.length >= 8
    res.spaceCheck = !/\s/.test(str)
    res.complicatedCheck = count >= 2 
    return res
}

var arr = ['','123','12 3','12345678','1234567a','124567a#']

arr.map((item) => {
    console.log(item, ",result:", checkPassword(item))
})
