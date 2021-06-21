let validate = () => {
    let email = document.getElementById('email')
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let dob = document.getElementById('dob')
    let agreement = document.getElementById('agreement')
    let errorMsg = []

    validateEmail(email, errorMsg)
    validateUsername(username, errorMsg)
    validatePassword(password, errorMsg)
    validateDate(dob, errorMsg)
    validateAgreement(agreement, errorMsg)

    if (errorMsg.length === 0) {
        alert('Pre-Registration Success')
    } else {
        alert(errorMsg.join('\n'))
    }
}

let validateEmail = (email, errorMsg) => {
    if (email.value === "") {
        errorMsg.push('Email required')
    } else if (email.value.startsWith('.') || email.value.startsWith('@')) {
        errorMsg.push('Email cannot start with . or @')
    } else if (email.value.indexOf('.') === (email.value.indexOf('@') + 1)) {
        errorMsg.push('Email cannot contain . after @')
    } else if (!email.value.endsWith('@gmail.com') &&  !email.value.endsWith('@yahoo.com')) {
        errorMsg.push('Email must ends with @gmail.com or @yahoo.com')
    }
}

let validateUsername = (username, errorMsg) => {
    if (username.value === "") {
        errorMsg.push('Username required')
    } else if (username.value.length < 5) {
        errorMsg.push('Username length must more than equal to 5')
    }
}

let validatePassword = (password, errorMsg) => {
    if (password.value === "") {
        errorMsg.push('Password required')
    } else if (password.value.length < 8) {
        errorMsg.push('Password length must more than equal to 8')
    }
}

let validateDate = (dob, errorMsg) => {
    if (dob.value === ""){
        errorMsg.push('Date of Birth required')
    }
}

let validateAgreement = (agreement, errorMsg) => {
    if (!agreement.checked) {
        errorMsg.push('You must agree to the terms and conditions and the privacy policy')
    }
}