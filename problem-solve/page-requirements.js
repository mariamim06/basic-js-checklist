// 3. calculation



function pageRequirements (book1Quantity, book2Quantity, book3Quantity) {
    const perBook1Pages = 100;
    const perBook2Pages = 200;
    const perBook3Pages = 300;

    const totalBook1Pages = book1Quantity * perBook1Pages;
    const totalBook2Pages = book2Quantity * perBook2Pages;
    const totalBook3Pages = book3Quantity * perBook3Pages;

    const totalPages = totalBook1Pages + totalBook2Pages + totalBook3Pages; 

    return totalPages;
}

const option1 = pageRequirements(3, 4, 5);
console.log(option1);