// Hàm fetchProducts là hàm bất đồng bộ khai báo với từ async dùng await
async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/products?limit=4&skip=0");
    // Hàm fetch gửi 1 HTTP GET Request  
    const data = await res.json();
    console.log(data);
}

fetchProducts();
/*
* READ - GET: one/all/search...
* CREATE - POST
* UPDATE - PUT/PATCH: cap nhat
* DELETE - DELETE: xoa
* C R U D
* Request:
- headers:
- body: dữ liệu phức tạp, bảo mật 
-params: thường là các tham số động (dynamic) - để lấy thông tin chi
tiết của 1 bản ghi VD: ao-polp-4001858
- query: các tùy chọn để lấy đúng dữ liệu: pa
*/