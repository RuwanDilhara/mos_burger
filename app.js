function login() {
    let username = document.getElementById("txtusername").value;
    let password = document.getElementById("txtpassword").value;

    if (username === 'admin@123' && password === '1234') {
        window.location.href = 'Admin/admin.html'
    }
    
    else if (username === 'cashier@123' && password === '1234') {
        window.location.href = 'Cashier/cashier.html'
    }
}