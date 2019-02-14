const greet = async (event, context) => {

    let body =event.body;
    let greeting = `${body.salutation} ${body.name}`;
    let headers = {};
    headers['Content-Type'] = 'application/json'

    return {
        'statusCode': 200,
        'headers': headers,
        'body': {greeting:greeting}
    };
}

module.exports = {
    greet
};