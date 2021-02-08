
const NoPermissionError = require('../../errors/NoPermissionError');
const TaskNotFoundError = require('../../errors/TaskNotFoundError');
const UserNotFoundError = require('../../errors/UserNotFoundError');

module.exports =  (erros) => {
    if(erros.originalError instanceof NoPermissionError){
        return new Error(erros.message);
    }
    
    if(erros.originalError instanceof TaskNotFoundError){
        return new Error(erros.message);
    }

    if(erros.originalError instanceof UserNotFoundError){
        return new Error(erros.message);
    }
    return erros;
};