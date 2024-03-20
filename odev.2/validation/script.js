$(function() {
    var $registerForm = $("#register");



    $registerForm.validate({
        rules: {
            name: {
                required: true,
                lattersonly: true
            },
			surname: {
				required: true,
				lattersonly: true
			},
            email: {
                required: true,
                email: true
            },
            phno: {
                required: true,
                numericonly: true,
                minlength: 10,
                maxlength: 12
            },
            password: {
                required: true,
                all: true
            },
            cpassword: {
                required: true,
                equalTo: '#password'
            }

        },
        messages: {
            name: {
                required: 'İsim alanı boş olamaz',
                lattersonly: 'geçersiz isim'
            },
			surname: {
				required: 'Soyisim alanı boş olamaz',
                lattersonly: 'geçersiz soyisim'
			},
            email: {
                required: 'email alanı boş olamaz',
                email: 'email geçersiz'
            },
            phno: {
                required: 'numara alanı boş olamaz',
                numericonly: 'Numara geçersiz',
                minlength: 'min 10 sayı girilebilir',
                maxlength: 'max 12 sayı girilebilirr'
            },
            password: {
                required: 'şifre alanı boş olamaz',
                all: 'boşluk geçerli bir karakter değil'
            },
            cpassword: {
                required: 'şifre onaylama alanı boş olamaz',
                equalTo: 'şifre uyuşmuyor'
            }
        },
    })

    jQuery.validator.addMethod('lattersonly', function(value, element) {
        return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
    });

    jQuery.validator.addMethod('numericonly', function(value, element) {
        return /^[0-9]+$/.test(value);
    });

    jQuery.validator.addMethod('all', function(value, element) {
        return /^[^-\s][a-zA-Z0-9_\s-]+$/.test(value);
    });
})