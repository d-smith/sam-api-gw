const greet = async (event, context) => {

    console.log('invoked');
    let body =event.body;
    let greeting = `${body.salutation} ${body.name}`;

    console.log(`greeting is ${greeting}`);

    if(greeting == 'hello world') {
        throw new Error('TiredGreeting');
    }

    return {
        statusCode: 200,
        body: {greeting:greeting},
        isBase64Encoded: false
    };
}

module.exports = {
    greet
};