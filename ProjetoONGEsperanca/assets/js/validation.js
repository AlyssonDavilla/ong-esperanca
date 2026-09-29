// Validação de Formulários e Configuração de Máscaras (IMask)

export function initMasks() {
  const cpfElement = document.getElementById('cpf');
  const telElement = document.getElementById('tel');
  const cepElement = document.getElementById('cep');

  if (cpfElement && window.IMask) IMask(cpfElement, { mask: '000.000.000-00' });
  if (telElement && window.IMask) IMask(telElement, { mask: '(00) 00000-0000' });
  if (cepElement && window.IMask) IMask(cepElement, { mask: '00000-000' });
}

export function validarFormulario(form) {
  let isValid = true;
  const inputs = form.querySelectorAll('input[required]');

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      input.classList.remove('is-valid');
      isValid = false;
    } else {
      input.classList.add('is-valid');
      input.classList.remove('is-invalid');
    }
  });

  return isValid;
}