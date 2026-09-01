$(document).ready(function() {
    
    $('#loginForm').on('submit', function(e) {
        e.preventDefault(); 
        let email = $('#email').val();
        let password = $('#password').val();

        if (email !== "" && password !== "") {
            window.location.href = "menu.html";
        } else {
            alert("Por favor, completa todos los campos.");
        }
    });

    $('#btnDepositar').on('click', function() {
        let monto = $('#montoDeposito').val();

        if (monto > 0) {
            $('#mensajeDeposito')
                .hide()
                .html(`<div class="alert alert-success">¡Depósito de $${monto} realizado con éxito!</div>`)
                .fadeIn();
            
            $('#montoDeposito').val('');
        } else {
            $('#mensajeDeposito')
                .hide()
                .html(`<div class="alert alert-danger">Ingresa un monto válido.</div>`)
                .fadeIn();
        }
    });

    // 3. Simular transferencia
    $('#transferForm .btn-primary').on('click', function() {
        let contacto = $('#buscarContacto').val();
        let monto = $('#montoTransferencia').val();

        if (contacto !== "" && monto > 0) {
            alert(`Transferencia de $${monto} a ${contacto} simulada correctamente.`);
            $('#buscarContacto').val('');
            $('#montoTransferencia').val('');
        } else {
            alert("Completa el contacto y un monto mayor a 0.");
        }
    });
    const contactosGuardados = ["mi hermano", "Camila", "Mamá", "Arriendo"];
    
    $('#buscarContacto').on('keyup', function() {
        let valor = $(this).val().toLowerCase();
        console.log("Buscando: " + valor); 
    });

});