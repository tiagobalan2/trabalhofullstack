document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const Nome = document.getElementById('Nome').value;
    const CPF = document.getElementById('CPF').value;
    const Telefone = document.getElementById('Telefone').value;

    const pessoaData = {
        Nome,
        CPF,
        Telefone,
    };

    try {
        const response = await fetch(`http://localhost:3000/api/pessoas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pessoaData)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Pessoa cadastrada com sucesso!';
            document.getElementById('formPessoa').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});