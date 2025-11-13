// ====================================
// SCRIPT.JS - Interatividade do Portfólio
// ====================================

// ====== MODO ESCURO (com salvamento global) ======
const botaoModo = document.createElement("button");
botaoModo.id = "modo-btn";
document.body.appendChild(botaoModo);

// Aplica o modo salvo anteriormente
if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark-mode");
    botaoModo.textContent = "☀️ Modo Claro";
} else {
    botaoModo.textContent = "🌙 Modo Escuro";
}

// Alterna entre os modos
botaoModo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const modoAtivo = document.body.classList.contains("dark-mode");

    // Atualiza o texto do botão
    botaoModo.textContent = modoAtivo ? "☀️ Modo Claro" : "🌙 Modo Escuro";

    // Salva a preferência
    localStorage.setItem("tema", modoAtivo ? "escuro" : "claro");
});

// ====== VALIDAÇÃO DO FORMULÁRIO ======
const form = document.querySelector("#form-contato");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // bloqueia envio padrão

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();

        // remove mensagem anterior, se existir
        const antiga = form.querySelector(".mensagem");
        if (antiga) antiga.remove();

        const msg = document.createElement("p");
        msg.className = "mensagem";
        form.appendChild(msg);

        // Validação simples
        if (nome === "" || !email.includes("@")) {
            msg.textContent = "⚠️ Verifique seus dados e tente novamente.";
            msg.style.color = "red";
        } else {
            msg.textContent = "✅ Mensagem enviada com sucesso!";
            msg.style.color = "green";
            form.reset();
        }
    });
}

// Atualizar automaticamente o ano no footer
const anoSpan = document.querySelector("#ano");
if (anoSpan) {
    anoSpan.textContent = new Date().getFullYear();
}
