const greet = async (event, context) => {

    console.log('invoked');
    let body =event.body;
    let greeting = `${body.salutation} ${body.name}`;
    let headers = {};
    headers['Content-Type'] = 'application/json'

    console.log(`greeting is ${greeting}`);

    return {
        statusCode: 200,
//        headers: headers,
        body: {greeting:greeting},
        isBase64Encoded: false
    };
}

module.exports = {
    greet
};