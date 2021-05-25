$('#signUpForm').on('submit', function validatePassword(e) {
    if ($('#password').val() !== $('#passwordConfirmation').val()) {
        e.preventDefault();
        $('#passwordConfirmation').addClass('animate__animated animate__shakeX animate__fast is-invalid');
        setTimeout(() => {
            $('#passwordConfirmation').removeClass('animate__shakeX');
        }, 850);
    }
});