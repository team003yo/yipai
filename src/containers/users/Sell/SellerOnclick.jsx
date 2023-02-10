
function SellerFrontPage(params) {
  const SellerFrontPage = document.getElementById("SellerFrontPage");
  SellerFrontPage.style.display='block';
  const SellerPage = document.getElementById("SellerPage");
  SellerPage.style.display='none';
  const SellerUpload = document.getElementById("SellerUpload");
  SellerUpload.style.display='none';
  const SellerProduct = document.getElementById("SellerProduct");
  SellerProduct.style.display='none';
  const SellerOrder = document.getElementById("SellerOrder");
  SellerOrder.style.display='none';
}
function SellerPage(params) {
  const SellerFrontPage = document.getElementById("SellerFrontPage");
  SellerFrontPage.style.display='none';
  const SellerPage = document.getElementById("SellerPage");
  SellerPage.style.display='block';
  const SellerUpload = document.getElementById("SellerUpload");
  SellerUpload.style.display='none';
  const SellerProduct = document.getElementById("SellerProduct");
  SellerProduct.style.display='none';
  const SellerOrder = document.getElementById("SellerOrder");
  SellerOrder.style.display='none';
}
function SellerUpload(params) {
  const SellerFrontPage = document.getElementById("SellerFrontPage");
  SellerFrontPage.style.display='none';
  const SellerPage = document.getElementById("SellerPage");
  SellerPage.style.display='none';
  const SellerUpload = document.getElementById("SellerUpload");
  SellerUpload.style.display='block';
  const SellerProduct = document.getElementById("SellerProduct");
  SellerProduct.style.display='none';
  const SellerOrder = document.getElementById("SellerOrder");
  SellerOrder.style.display='none';
}
function SellerProduct(params) {
  const SellerFrontPage = document.getElementById("SellerFrontPage");
  SellerFrontPage.style.display='none';
  const SellerPage = document.getElementById("SellerPage");
  SellerPage.style.display='none';
  const SellerUpload = document.getElementById("SellerUpload");
  SellerUpload.style.display='none';
  const SellerProduct = document.getElementById("SellerProduct");
  SellerProduct.style.display='block';
  const SellerOrder = document.getElementById("SellerOrder");
  SellerOrder.style.display='none';
}
function SellerOrder(params) {
  const SellerFrontPage = document.getElementById("SellerFrontPage");
  SellerFrontPage.style.display='none';
  const SellerPage = document.getElementById("SellerPage");
  SellerPage.style.display='none';
  const SellerUpload = document.getElementById("SellerUpload");
  SellerUpload.style.display='none';
  const SellerProduct = document.getElementById("SellerProduct");
  SellerProduct.style.display='none';
  const SellerOrder = document.getElementById("SellerOrder");
  SellerOrder.style.display='block';
}

export { SellerFrontPage, SellerPage, SellerUpload, SellerProduct, SellerOrder};