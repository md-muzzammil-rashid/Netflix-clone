class ApiError extends Error{
    constructor(
        statusCode,
        message="something went wrong",
        error = [],
        stack = ''
    ){
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.error = error
        if(stack){
            this.stack = stack
        }
    }
}

export default ApiError