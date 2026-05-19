const btn = document.getElementById("portalBtn");

btn.addEventListener("click", () => {

    document.body.classList.add("horror");

    btn.disabled = true;
    btn.innerText = "…";

    // 2.7 секунды нагнетания
    setTimeout(() => {
        window.location.href = "https://t.me/cemaxa";
    }, 2700);
});
