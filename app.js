function toBinary(num) {
    return num.toString(2).padStart(8, '0');
}

function visualize() {
    let A = parseInt(document.getElementById("numA").value);
    let B = parseInt(document.getElementById("numB").value);
    let op = document.getElementById("operation").value;

    let output = document.getElementById("output");
    output.innerHTML = "";

    if (isNaN(A)) {
        output.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color:red;"></i> Please enter Number A';
        return;
    }

    if (["AND", "OR", "XOR", "LSHIFT", "RSHIFT"].includes(op) && isNaN(B)) {
       output.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color:red;"></i> Please enter Number B';
    }

    let result;
    let binaryA = toBinary(A);
    let binaryB = B !== undefined ? toBinary(B) : "";

    if (op === "AND") result = A & B;
    if (op === "OR") result = A | B;
    if (op === "XOR") result = A ^ B;
    if (op === "NOT") result = ~A;
    if (op === "LSHIFT") result = A << B;
    if (op === "RSHIFT") result = A >> B;

    let binaryResult = toBinary(result);

    let html = `<h3><i class="fa-solid fa-magnifying-glass"></i> Operation: ${op}</h3>`;


    html += `<div class="binary-box">A = ${A} → ${binaryA}</div>`;

    if (op !== "NOT")
        html += `<div class="binary-box">B = ${B} → ${binaryB}</div>`;

    html += `<div class="binary-box">Result = ${result} → ${binaryResult}</div>`;

    output.innerHTML = html;
}
