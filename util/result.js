class Result {
    constructor(success = true,data = null,message="") {
        this.success = success;
        this.data = data;
        this.message = message;
    }
    setData(data) {
        this.data = data;
    }
    setMessage(message) {
        this.message = message;
    }
    setSuccess(success) {
        this.success = success

    }
}
module.exports = Result;