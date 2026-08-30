const store = (function() {
    let products = [
        { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
        { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
        { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
        { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
    ];
    let nextId = 5;

    // Helper functions
    const trimString = (str) => typeof str === 'string' ? str.trim() : str;
    const inStock = (list) => list.filter(p => p.quantity > 0);
    const withAfterAction = (fn, callback) => (...args) => {
        const result = fn(...args);
        callback("Done");
        return result;
    };

    return {
        createProduct: (name, price, category, quantity) => {
            name = trimString(name);
            category = trimString(category);
            price = parseFloat(price);
            quantity = parseInt(quantity, 10);

            if (!name || isNaN(price) || price <= 0 || isNaN(quantity) || quantity < 0) {
                return { error: "Invalid product data. Price must be > 0 and quantity >= 0." };
            }
            if (products.some(p => p.name.toLowerCase() === name.toLowerCase())) {
                return { error: "Product name already exists." };
            }

            const newProduct = { id: nextId++, name, price, category, quantity };
            products.push(newProduct);
            return newProduct;
        },

        getAllProducts: () => [...products],

        getProductById: (id) => products.find(p => p.id === id) || null,

        updateProduct: (id, name, price, category, quantity) => {
            const index = products.findIndex(p => p.id === id);
            if (index === -1) return { error: "Product not found." };

            name = trimString(name);
            category = trimString(category);
            price = parseFloat(price);
            quantity = parseInt(quantity, 10);

            if (!name || isNaN(price) || price <= 0 || isNaN(quantity) || quantity < 0) {
                return { error: "Invalid product data." };
            }
            
            // Check for duplicate name excluding the current product
            if (products.some(p => p.id !== id && p.name.toLowerCase() === name.toLowerCase())) {
                return { error: "Product name already exists." };
            }

            products[index] = { ...products[index], name, price, category, quantity };
            return products[index];
        },

        deleteProduct: (id) => {
            const index = products.findIndex(p => p.id === id);
            if (index !== -1) {
                return products.splice(index, 1)[0];
            }
            return null;
        },

        filterProducts: (keyword) => {
            keyword = trimString(keyword).toLowerCase();
            return products.filter(p => 
                p.name.toLowerCase().includes(keyword) || 
                p.category.toLowerCase().includes(keyword)
            );
        },

        sortByPrice: (order = "asc") => {
            const copy = [...products];
            return copy.sort((a, b) => {
                if (order === "asc") return a.price - b.price;
                return b.price - a.price;
            });
        },

        getStoreStats: () => {
            return products.reduce((acc, p) => {
                acc.totalProducts += 1;
                acc.totalValue += (p.price * p.quantity);
                if (p.quantity === 0) acc.outOfStock += 1;
                return acc;
            }, { totalProducts: 0, totalValue: 0, outOfStock: 0 });
        },

        groupByCategory: () => {
            return products.reduce((acc, p) => {
                if (!acc[p.category]) acc[p.category] = [];
                acc[p.category].push(p);
                return acc;
            }, {});
        },

        filterByPriceRange: (min, max) => {
            return products.filter(p => {
                const isAboveMin = min !== null && !isNaN(min) ? p.price >= min : true;
                const isBelowMax = max !== null && !isNaN(max) ? p.price <= max : true;
                return isAboveMin && isBelowMax;
            });
        }
    };
})();

// DOM Elements
const elements = {
    form: document.getElementById('productForm'),
    formTitle: document.getElementById('formTitle'),
    id: document.getElementById('productId'),
    name: document.getElementById('name'),
    price: document.getElementById('price'),
    category: document.getElementById('category'),
    quantity: document.getElementById('quantity'),
    submitBtn: document.getElementById('submitBtn'),
    cancelBtn: document.getElementById('cancelBtn'),
    productsBody: document.getElementById('productsBody'),
    statsDisplay: document.getElementById('statsDisplay'),
    categoriesDisplay: document.getElementById('categoriesDisplay'),
    searchInput: document.getElementById('searchInput'),
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    filterPriceBtn: document.getElementById('filterPriceBtn'),
    sortSelect: document.getElementById('sortSelect')
};

// Render logic
function renderApp(list = store.getAllProducts()) {
    renderTable(list);
    renderStats();
    renderCategories();
}

function renderTable(list) {
    elements.productsBody.innerHTML = '';
    list.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.price.toFixed(2)}</td>
            <td>${p.category}</td>
            <td>${p.quantity}</td>
            <td>
                <button onclick="editProduct(${p.id})">Edit</button>
                <button onclick="deleteProduct(${p.id})" style="background-color: #e74c3c;">Delete</button>
            </td>
        `;
        elements.productsBody.appendChild(tr);
    });
}

function renderStats() {
    const stats = store.getStoreStats();
    const avg = stats.totalProducts > 0 ? (stats.totalValue / stats.totalProducts) : 0;
    elements.statsDisplay.innerHTML = `
        <p><strong>Total Products:</strong> ${stats.totalProducts}</p>
        <p><strong>Total Inventory Value:</strong> $${stats.totalValue.toFixed(2)}</p>
        <p><strong>Average Price:</strong> $${avg.toFixed(2)}</p>
        <p><strong>Out of Stock Items:</strong> ${stats.outOfStock}</p>
    `;
}

function renderCategories() {
    const grouped = store.groupByCategory();
    elements.categoriesDisplay.innerHTML = '';
    for (const cat in grouped) {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        
        const h4 = document.createElement('h4');
        h4.textContent = cat;
        groupDiv.appendChild(h4);

        const ul = document.createElement('ul');
        grouped[cat].forEach(p => {
            const li = document.createElement('li');
            li.textContent = `${p.name} - ${p.quantity} in stock`;
            ul.appendChild(li);
        });
        groupDiv.appendChild(ul);

        elements.categoriesDisplay.appendChild(groupDiv);
    }
}

// Event Listeners
elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = elements.id.value;
    const name = elements.name.value;
    const price = elements.price.value;
    const category = elements.category.value;
    const quantity = elements.quantity.value;

    let result;
    if (id) {
        result = store.updateProduct(parseInt(id), name, price, category, quantity);
    } else {
        result = store.createProduct(name, price, category, quantity);
    }

    if (result && result.error) {
        alert(result.error);
    } else {
        resetForm();
        renderApp();
    }
});

elements.cancelBtn.addEventListener('click', resetForm);

elements.searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value;
    const filtered = store.filterProducts(keyword);
    renderTable(filtered);
});

elements.filterPriceBtn.addEventListener('click', () => {
    const min = parseFloat(elements.minPrice.value);
    const max = parseFloat(elements.maxPrice.value);
    const filtered = store.filterByPriceRange(
        isNaN(min) ? null : min, 
        isNaN(max) ? null : max
    );
    renderTable(filtered);
});

elements.sortSelect.addEventListener('change', (e) => {
    const order = e.target.value;
    if (order) {
        renderTable(store.sortByPrice(order));
    } else {
        renderApp(); // reset to default order
    }
});

// Actions
window.editProduct = (id) => {
    const product = store.getProductById(id);
    if (product) {
        elements.formTitle.textContent = "Edit Product";
        elements.id.value = product.id;
        elements.name.value = product.name;
        elements.price.value = product.price;
        elements.category.value = product.category;
        elements.quantity.value = product.quantity;
        elements.submitBtn.textContent = "Update Product";
        elements.cancelBtn.style.display = "inline-block";
    }
};

window.deleteProduct = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
        store.deleteProduct(id);
        renderApp();
    }
};

function resetForm() {
    elements.form.reset();
    elements.id.value = "";
    elements.formTitle.textContent = "Add Product";
    elements.submitBtn.textContent = "Add Product";
    elements.cancelBtn.style.display = "none";
}

// Initial render
renderApp();
