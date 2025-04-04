
    function validarNome() {
        var nome = document.getElementById('nomeCompleto').value;
        var erroNome = document.getElementById('erroNome');
        if (nome.trim().split(' ').length < 2) {
            erroNome.textContent = 'Nome completo deve conter pelo menos dois nomes.';
            document.getElementById('nomeCompleto').classList.add('erro');
            document.getElementById('nomeCompleto').classList.remove('sucesso');
        } else {
            erroNome.textContent = '';
            document.getElementById('nomeCompleto').classList.add('sucesso');
            document.getElementById('nomeCompleto').classList.remove('erro');
        }
    }

    function validarDataNascimento() {
        var dataNascimento = document.getElementById('dataNascimento').value;
        var erroDataNascimento = document.getElementById('erroDataNascimento');
        var regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        if (!regex.test(dataNascimento)) {
            erroDataNascimento.textContent = 'Data inválida. Use o formato DD/MM/AAAA.';
            document.getElementById('dataNascimento').classList.add('erro');
            document.getElementById('dataNascimento').classList.remove('sucesso');
        } else {
            erroDataNascimento.textContent = '';
            document.getElementById('dataNascimento').classList.add('sucesso');
            document.getElementById('dataNascimento').classList.remove('erro');
            validarIdade(dataNascimento);
        }
    }

    function validarIdade(dataNascimento) {
        var idade = calcularIdade(dataNascimento);
        if (idade < 18) {
            document.getElementById('informacoesComplementares').style.display = 'block';
            document.getElementById('nomePai').setAttribute('required', true);
            document.getElementById('nomeMae').setAttribute('required', true);
        } else {
            document.getElementById('informacoesComplementares').style.display = 'none';
            document.getElementById('nomePai').removeAttribute('required');
            document.getElementById('nomeMae').removeAttribute('required');
        }
    }

    function calcularIdade(dataNascimento) {
        var data = new Date(dataNascimento.split("/").reverse().join("-"));
        var hoje = new Date();
        var idade = hoje.getFullYear() - data.getFullYear();
        var m = hoje.getMonth() - data.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < data.getDate())) {
            idade--;
        }
        return idade;
    }

    function validarCPF() {
        var cpf = document.getElementById('cpf').value;
        var erroCPF = document.getElementById('erroCPF');
        var regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!regex.test(cpf)) {
            erroCPF.textContent = 'CPF inválido. Use o formato XXX.XXX.XXX-XX.';
            document.getElementById('cpf').classList.add('erro');
            document.getElementById('cpf').classList.remove('sucesso');
        } else {
            erroCPF.textContent = '';
            document.getElementById('cpf').classList.add('sucesso');
            document.getElementById('cpf').classList.remove('erro');
        }
    }

    function validarTelefoneFixo() {
        var telefoneFixo = document.getElementById('telefoneFixo').value;
        var erroTelefoneFixo = document.getElementById('erroTelefoneFixo');
        var regex = /^\(\d{2}\)\d{4}-\d{4}$/;
        if (!regex.test(telefoneFixo)) {
            erroTelefoneFixo.textContent = 'Telefone fixo inválido. Exemplo: (XX) XXXX-XXXX';
            document.getElementById('telefoneFixo').classList.add('erro');
            document.getElementById('telefoneFixo').classList.remove('sucesso');
        } else {
            erroTelefoneFixo.textContent = '';
            document.getElementById('telefoneFixo').classList.add('sucesso');
            document.getElementById('telefoneFixo').classList.remove('erro');
        }
    }

    function validarCelular() {
        var celular = document.getElementById('celular').value;
        var erroCelular = document.getElementById('erroCelular');
        var regex = /^\(\d{2}\)\d{5}-\d{4}$/;
        if (!regex.test(celular)) {
            erroCelular.textContent = 'Celular inválido. Exemplo: (XX) XXXXX-XXXX';
            document.getElementById('celular').classList.add('erro');
            document.getElementById('celular').classList.remove('sucesso');
        } else {
            erroCelular.textContent = '';
            document.getElementById('celular').classList.add('sucesso');
            document.getElementById('celular').classList.remove('erro');
        }
    }

    function validarCEP() {
        var cep = document.getElementById('cep').value;
        var erroCEP = document.getElementById('erroCEP');
        var regex = /^\d{5}-\d{3}$/;
        if (!regex.test(cep)) {
            erroCEP.textContent = 'CEP inválido. Exemplo: XXXXX-XXX';
            document.getElementById('cep').classList.add('erro');
            document.getElementById('cep').classList.remove('sucesso');
        } else {
            erroCEP.textContent = '';
            document.getElementById('cep').classList.add('sucesso');
            document.getElementById('cep').classList.remove('erro');
        }
    }

    function validarEmail() {
        var email = document.getElementById('email').value;
        var erroEmail = document.getElementById('erroEmail');
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!regex.test(email)) {
            erroEmail.textContent = 'Email inválido.';
            document.getElementById('email').classList.add('erro');
            document.getElementById('email').classList.remove('sucesso');
        } else {
            erroEmail.textContent = '';
            document.getElementById('email').classList.add('sucesso');
            document.getElementById('email').classList.remove('erro');
        }
    }

    function validarSenha() {
        var senha = document.getElementById('senha').value;
        var erroSenha = document.getElementById('erroSenha');
        if (senha.length < 8) {
            erroSenha.textContent = 'A senha deve ter no mínimo 8 caracteres.';
            document.getElementById('senha').classList.add('erro');
            document.getElementById('senha').classList.remove('sucesso');
        } else {
            erroSenha.textContent = '';
            document.getElementById('senha').classList.add('sucesso');
            document.getElementById('senha').classList.remove('erro');
        }
    }

    function validarConfirmarSenha() {
        var senha = document.getElementById('senha').value;
        var confirmarSenha = document.getElementById('confirmarSenha').value;
        var erroConfirmarSenha = document.getElementById('erroConfirmarSenha');
        if (confirmarSenha !== senha) {
            erroConfirmarSenha.textContent = 'As senhas não coincidem.';
            document.getElementById('confirmarSenha').classList.add('erro');
            document.getElementById('confirmarSenha').classList.remove('sucesso');
        } else {
            erroConfirmarSenha.textContent = '';
            document.getElementById('confirmarSenha').classList.add('sucesso');
            document.getElementById('confirmarSenha').classList.remove('erro');
        }
    }

    function validarNomePai() {
        var nomePai = document.getElementById('nomePai').value;
        var erroNomePai = document.getElementById('erroNomePai');
        if (nomePai.trim() === "") {
            erroNomePai.textContent = 'Nome do Pai é obrigatório.';
            document.getElementById('nomePai').classList.add('erro');
        } else {
            erroNomePai.textContent = '';
            document.getElementById('nomePai').classList.add('sucesso');
        }
    }

    function validarNomeMae() {
        var nomeMae = document.getElementById('nomeMae').value;
        var erroNomeMae = document.getElementById('erroNomeMae');
        if (nomeMae.trim() === "") {
            erroNomeMae.textContent = 'Nome da Mãe é obrigatório.';
            document.getElementById('nomeMae').classList.add('erro');
        } else {
            erroNomeMae.textContent = '';
            document.getElementById('nomeMae').classList.add('sucesso');
        }
    }


    function validarFormulario() {
        validarNome();
        validarDataNascimento();
        validarCPF();
        validarTelefoneFixo();
        validarCelular();
        validarCEP();
        validarEmail();
        validarSenha();
        validarConfirmarSenha();

        var erros = document.getElementsByClassName('erro');
        if (erros.length > 0) {
            alert('Corrija os erros antes de enviar o formulário.');
            return false;
        }

        alert('Formulário enviado com sucesso!');
        return true;
    }