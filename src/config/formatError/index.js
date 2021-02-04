
const NoPermissionError = require('../../errors/NoPermissionError');
const TaskNotFoundError = require('../../errors/TaskNotFoundError');

module.exports =  (erros) => {
    if(erros.originalError instanceof NoPermissionError){
        return new Error(erros.message);
    }
    if(erros.originalError instanceof TaskNotFoundError){
        return new Error(erros.message);
    }
    return erros;
};