const userOperations = {
  isAuthenticate(userObject){
    return userObject.userid==userObject.pwd;
  }
}
module.exports= userOperations;
