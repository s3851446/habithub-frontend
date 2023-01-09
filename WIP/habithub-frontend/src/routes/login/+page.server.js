

// method for sending login form data
// based on answer here: https://stackoverflow.com/questions/68389117/using-fetch-api-to-create-a-login-form

// TODO: update url, change body content to email/password, stop form default behaviour, check response ok
async function loginUser() {
    const response = await fetch('url', {
        Method: 'POST',
        Headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        Body: body,
        Cache: 'default'
    })

    const data = await response.json();
}