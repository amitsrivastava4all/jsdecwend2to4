// app.factory("myfactory", logic);

// function logic() {
//     console.log("Factory Loaded...");
//     var object = {
//         initcap(name) {
//             return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
//         }
//     }
//     return object;
// }

app.factory("myfactory",()=>{
    var object = {
                initcap(name) {
                    return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
                }
            }
            return object;
});